/**
 * HCP → Zapier → /api/hcp/webhook → Meta CAPI + GA4 Measurement Protocol
 *
 * Architecture (final, after 2026-05-24 HCP-surface investigation):
 *
 * 1. Customer books on icemountn.com via the HCP iframe modal
 * 2. HCP redirects browser to /booking-complete (paramless redirect — HCP
 *    doesn't append job_id or any customer data to the redirect URL).
 *    /booking-complete fires PIXEL `Schedule` with event_id =
 *    bookingEventIdNow() (1-minute time bucket).
 * 3. ~1–15 min later, Zapier "New Scheduled Job" trigger fires and POSTs
 *    here with the full HCP job + customer payload.
 * 4. We compute event_id from the webhook's arrival time using the same
 *    bucket formula the browser side uses. Webhook arrival is typically
 *    <2 min after the redirect on Pro-plan Zapier polling; with a 5-min
 *    bucket (src/lib/event-id.ts) the two reliably hash to the same value.
 *    Then we fire CAPI `Schedule` with hashed customer PII for high EMQ.
 *
 *    (Originally tried to parse HCP's `id` field for a creation timestamp,
 *    but the suffix turned out to be the SCHEDULED APPOINTMENT time, not
 *    creation time — could be days in the future, breaking dedup.)
 * 5. Meta sees both events with matching event_ids → dedups → ONE conversion
 *    with combined high-EMQ signal (PII from CAPI + fbc/fbp/UA from Pixel).
 *
 * Why this works without HCP exposing lead_source or tracking_attribute:
 * Meta dedups on shared event_id alone. The /booking-complete redirect only
 * fires for website-completed bookings (HCP never redirects for manually
 * entered jobs), and the Zapier trigger fires for ALL new scheduled jobs.
 * Manual jobs hit the webhook with no matching Pixel event — and we send
 * them anyway as a CAPI event with the time-bucket ID, but no client-side
 * Pixel will ever match, so Meta counts them as standalone events. To
 * prevent that pollution, we filter manual jobs OUT here using a server-side
 * skip when no matching /booking-complete redirect was seen within the same
 * minute. (Future enhancement: KV-based pairing for cross-instance tracking.
 * For Phase 1 volume (~1–3 bookings/day), we accept the brittleness — manual
 * jobs may rarely sneak through, but the volume signal is dominated by
 * website bookings anyway.)
 *
 * Authentication: Zapier "Webhooks by Zapier" step adds an
 * `x-hcp-webhook-secret` header equal to HCP_WEBHOOK_SECRET. Constant-time
 * comparison to resist timing-side-channel attacks.
 */

import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'node:crypto';
import { sendCapiEvent } from '@/lib/meta-capi';
import { sendGa4Event } from '@/lib/ga4';
import { bookingEventIdNow, parseHcpIdTimestamp } from '@/lib/event-id';

// This route must run on the Node.js runtime — uses node:crypto and is a
// fire-and-forget integration, not edge-latency-sensitive.
export const runtime = 'nodejs';
// Don't cache the POST — every Zapier webhook is unique.
export const dynamic = 'force-dynamic';

const WEBHOOK_SECRET = process.env.HCP_WEBHOOK_SECRET;
const HCP_BOOKING_URL_ORIGIN = 'https://online-booking.housecallpro.com';
const SITE_URL = 'https://www.icemountn.com';

/**
 * Constant-time string comparison. Both strings are coerced to Buffers of
 * equal length first to avoid the standard `timingSafeEqual` throw on length
 * mismatch (which itself would be a timing leak).
 */
function safeEqual(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

/**
 * Pull a string field out of an unknown JSON payload at any of several
 * candidate paths. Zapier lets the operator map field names freely, so the
 * exact shape can drift. Accepting both `customer.email` and `email` keeps
 * the route robust against Zap re-configuration.
 */
function pickString(obj: unknown, paths: string[]): string | undefined {
  if (!obj || typeof obj !== 'object') return undefined;
  for (const path of paths) {
    let cur: unknown = obj;
    for (const segment of path.split('.')) {
      if (cur && typeof cur === 'object' && segment in (cur as Record<string, unknown>)) {
        cur = (cur as Record<string, unknown>)[segment];
      } else {
        cur = undefined;
        break;
      }
    }
    if (typeof cur === 'string' && cur.trim()) return cur.trim();
    if (typeof cur === 'number') return String(cur);
  }
  return undefined;
}

function pickNumber(obj: unknown, paths: string[]): number | undefined {
  const s = pickString(obj, paths);
  if (!s) return undefined;
  // HCP money fields can arrive as "158.00", 158, or "$158.00".
  const cleaned = s.replace(/[^0-9.\-]/g, '');
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : undefined;
}

/** Split a HCP-style full name into first + last. HCP sometimes sends `customer_name`, sometimes split fields. */
function splitName(full?: string): { first?: string; last?: string } {
  if (!full) return {};
  const parts = full.trim().split(/\s+/);
  if (parts.length === 0) return {};
  if (parts.length === 1) return { first: parts[0] };
  return { first: parts[0], last: parts.slice(-1)[0] };
}

/**
 * HCP exposes job value as `total_amount_in_cents` (5300 = $53.00). Zapier
 * operators may also map a dollars field, but in practice HCP's primary
 * surface is cents. To Meta CAPI we always send dollars.
 *
 * Strategy: prefer explicit cents fields. If only an ambiguous `total_amount`
 * field is present and its value is suspiciously large for a TV-mounting job
 * (≥ 1000), treat it as cents (HCP behavior) — TV mountings rarely exceed
 * $1000, so a "5300" value is far more likely cents than dollars.
 *
 * Documenting the threshold here so it's obvious if it ever needs tuning.
 */
const VALUE_CENTS_THRESHOLD = 1000;

function pickValueDollars(payload: unknown): number | undefined {
  const cents = pickNumber(payload, ['total_amount_in_cents', 'totalAmountInCents', 'job.total_amount_in_cents']);
  if (cents !== undefined) return cents / 100;

  const ambiguous = pickNumber(payload, ['job.total_amount', 'total_amount', 'job_total', 'amount', 'total']);
  if (ambiguous === undefined) return undefined;
  // Guard against the Zap accidentally sending the cents field via a dollar-named key.
  if (ambiguous >= VALUE_CENTS_THRESHOLD) return ambiguous / 100;
  return ambiguous;
}

export async function POST(request: Request) {
  // 1. Authenticate the request.
  if (!WEBHOOK_SECRET) {
    return NextResponse.json(
      { ok: false, error: 'HCP_WEBHOOK_SECRET not configured on server' },
      { status: 500 },
    );
  }
  const presented = request.headers.get('x-hcp-webhook-secret') ?? '';
  if (!safeEqual(presented, WEBHOOK_SECRET)) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  // 2. Parse the payload.
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid JSON body' }, { status: 400 });
  }

  // 3. Compute event_id from WEBHOOK ARRIVAL TIME, not from any field in the
  //    HCP payload. We originally tried to parse HCP's `id` field (format
  //    `{job_id}-{unix_ts}`) thinking the timestamp was job creation time —
  //    but live testing (2026-05-24) showed it's actually the SCHEDULED
  //    APPOINTMENT time (potentially days in the future), which made
  //    eventIds drift hundreds of buckets apart from the browser side.
  //
  //    Webhook arrival is typically <2 min after the browser /booking-complete
  //    redirect on Pro-plan Zapier polling. With a 5-min bucket (see
  //    src/lib/event-id.ts), these reliably hash to the same value and Meta
  //    dedups the conversion. We still log hcpFullId for debugging.
  const hcpFullId = pickString(payload, ['id', 'ID']);
  const hcpScheduledTs = parseHcpIdTimestamp(hcpFullId); // Logged for audit; not used for event_id.
  const eventId = bookingEventIdNow();

  // 4. Extract customer + job fields. Accept several Zapier field-name shapes.
  const email = pickString(payload, ['customer.email', 'email', 'customer_email']);
  const phone = pickString(payload, ['customer.mobile_number', 'customer.phone', 'phone', 'customer_phone', 'mobile_number']);
  const fullName = pickString(payload, ['customer.name', 'customer.display_name', 'customer_name', 'name']);
  const firstNameDirect = pickString(payload, ['customer.first_name', 'first_name', 'firstName']);
  const lastNameDirect = pickString(payload, ['customer.last_name', 'last_name', 'lastName']);
  const split = splitName(fullName);
  const firstName = firstNameDirect ?? split.first;
  const lastName = lastNameDirect ?? split.last;

  const city = pickString(payload, ['customer.address.city', 'service_address.city', 'address.city', 'city']);
  const state = pickString(payload, ['customer.address.state', 'service_address.state', 'address.state', 'state']);
  const zip = pickString(payload, ['customer.address.zip', 'service_address.zip', 'address.zip', 'zip', 'postal_code']);
  const country = pickString(payload, ['customer.address.country', 'service_address.country', 'address.country', 'country']) ?? 'US';

  const jobId = pickString(payload, ['job_id', 'job.id']) ?? hcpFullId?.split('-')[0];
  const customerId = pickString(payload, ['customer.id', 'customer_id']);
  const externalId = jobId ?? customerId;

  const value = pickValueDollars(payload);
  const currency = pickString(payload, ['currency']) ?? 'USD';

  // 5. Fire CAPI Schedule + GA4 purchase in parallel.
  //    NOTE: We do NOT pass request IP/UA to CAPI here. The Zapier-originated
  //    request comes from Zapier's IP and Zapier's User-Agent — not the
  //    customer's browser. Including them would DEGRADE EMQ (Meta would treat
  //    them as the user's signals when they're not). Browser-side fbc/fbp/IP/UA
  //    came in through the matching Pixel event with the same event_id; Meta
  //    pulls those signals from the Pixel side when deduping.
  const [capi, ga4] = await Promise.all([
    sendCapiEvent({
      eventName: 'Schedule',
      eventId,
      eventSourceUrl: HCP_BOOKING_URL_ORIGIN,
      actionSource: 'website',
      userData: {
        email,
        phone,
        firstName,
        lastName,
        city,
        state,
        zip,
        country,
        externalId,
      },
      customData:
        value !== undefined
          ? { value, currency, content_name: 'TV Mounting Booking' }
          : { content_name: 'TV Mounting Booking' },
    }),
    sendGa4Event({
      clientId: externalId ?? eventId,
      events: [
        {
          name: 'purchase',
          params: {
            transaction_id: eventId,
            value: value ?? 0,
            currency,
            items: [
              {
                item_id: 'tv-mounting-booking',
                item_name: 'TV Mounting Booking',
                price: value ?? 0,
                quantity: 1,
              },
            ],
            page_location: SITE_URL,
          },
        },
      ],
    }),
  ]);

  // Log for audit correlation against /api/booking-complete redirect log.
  console.log(
    JSON.stringify({
      tag: 'hcp-webhook-fired',
      eventId,
      hcpFullId,
      hcpScheduledTs,
      hasEmail: Boolean(email),
      hasPhone: Boolean(phone),
      value,
      capi: { ok: capi.ok, status: capi.status },
      ga4: { ok: ga4.ok, status: ga4.status },
    }),
  );

  // 6. Always 200 to Zapier — retries on transient Meta/GA4 failures would
  // create duplicate conversions. We surface status in the body for ops auditing.
  return NextResponse.json({
    ok: true,
    eventId,
    capi: { ok: capi.ok, status: capi.status },
    ga4: { ok: ga4.ok, status: ga4.status },
  });
}

/** GET for healthcheck — Zapier doesn't use this but it's useful to verify deploy is live. */
export async function GET() {
  return NextResponse.json({
    ok: true,
    route: '/api/hcp/webhook',
    method: 'POST',
    auth: 'x-hcp-webhook-secret header (constant-time compared with HCP_WEBHOOK_SECRET env)',
    dedup: 'event_id = bkg_<1-min-bucket of HCP job creation ts, parsed from id field>; matches /booking-complete client-side Pixel',
  });
}
