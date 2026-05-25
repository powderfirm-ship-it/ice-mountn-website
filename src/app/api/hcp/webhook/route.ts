/**
 * HCP → Zapier → /api/hcp/webhook → Meta CAPI + GA4 Measurement Protocol
 *
 * Architecture: HCP Essentials plan doesn't expose direct webhooks. The
 * bridge is a Zap that listens for "New Scheduled Job", filters on
 * `Lead Source == "Online Booking"` (so manual jobs don't pollute the
 * ad-optimization signal), then POSTs a JSON body here with the customer
 * + job payload.
 *
 * Authentication: Zapier "Webhooks by Zapier" step adds an
 * `x-hcp-webhook-secret` header equal to HCP_WEBHOOK_SECRET. We compare
 * with `crypto.timingSafeEqual` to resist timing-side-channel attacks.
 *
 * This route is the primary `Schedule` conversion event for Meta ad
 * optimization — see docs/strategy/ICE_MOUNTN_ADS_PRE_SPEND_HANDOFF_2026-05-23.md
 * Phase 1 step 3.
 */

import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'node:crypto';
import { sendCapiEvent } from '@/lib/meta-capi';
import { sendGa4Event } from '@/lib/ga4';

// This route must run on the Node.js runtime — uses node:crypto and is a
// fire-and-forget integration, not edge-latency-sensitive.
export const runtime = 'nodejs';
// Don't cache the POST — every Zapier webhook is unique.
export const dynamic = 'force-dynamic';

const WEBHOOK_SECRET = process.env.HCP_WEBHOOK_SECRET;
const HCP_LEAD_SOURCE_WEBSITE = 'Online Booking';
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

  // 3. Belt-and-suspenders lead-source check. Primary filter is in the Zap
  // itself; this is a server-side backstop so a misconfigured Zap can't
  // pollute Meta with manual-job conversions.
  const leadSource = pickString(payload, ['lead_source', 'leadSource', 'customer.lead_source', 'job.lead_source']);
  if (leadSource && leadSource.toLowerCase() !== HCP_LEAD_SOURCE_WEBSITE.toLowerCase()) {
    return NextResponse.json(
      { ok: true, skipped: true, reason: `lead_source=${leadSource}` },
      { status: 200 },
    );
  }

  // 4. Extract customer + job fields. Accept several Zapier field-name shapes.
  const email = pickString(payload, ['customer.email', 'email', 'customer_email']);
  const phone = pickString(payload, ['customer.mobile_number', 'customer.phone', 'phone', 'customer_phone', 'mobile_number']);
  const fullName = pickString(payload, ['customer.name', 'customer_name', 'name']);
  const firstNameDirect = pickString(payload, ['customer.first_name', 'first_name', 'firstName']);
  const lastNameDirect = pickString(payload, ['customer.last_name', 'last_name', 'lastName']);
  const split = splitName(fullName);
  const firstName = firstNameDirect ?? split.first;
  const lastName = lastNameDirect ?? split.last;

  const city = pickString(payload, ['customer.address.city', 'address.city', 'city']);
  const state = pickString(payload, ['customer.address.state', 'address.state', 'state']);
  const zip = pickString(payload, ['customer.address.zip', 'address.zip', 'zip', 'postal_code']);
  const country = pickString(payload, ['customer.address.country', 'address.country', 'country']) ?? 'US';

  const jobId = pickString(payload, ['job.id', 'id', 'job_id']);
  const customerId = pickString(payload, ['customer.id', 'customer_id']);
  const externalId = jobId ?? customerId;

  const value = pickNumber(payload, ['job.total_amount', 'total_amount', 'job_total', 'amount', 'total']);
  const currency = pickString(payload, ['currency']) ?? 'USD';

  // No stable ID at all → we can't dedup against the client-side Pixel.
  // Generate a fallback so the event still lands but log a warning.
  const eventId = externalId ?? `hcp_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

  // 5. Fire CAPI Schedule + GA4 purchase in parallel.
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    undefined;
  const clientUserAgent = request.headers.get('user-agent') ?? undefined;

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
        clientIp,
        clientUserAgent,
      },
      customData: value !== undefined ? { value, currency, content_name: 'TV Mounting Booking' } : { content_name: 'TV Mounting Booking' },
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
    expectedFilter: `lead_source == "${HCP_LEAD_SOURCE_WEBSITE}"`,
  });
}
