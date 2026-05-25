/**
 * Meta Conversions API (CAPI) — server-side event pipeline.
 *
 * Fires conversion events from API routes (specifically /api/hcp/webhook),
 * deduped against client-side Pixel events via `event_id`. Sends hashed PII
 * for high Event Match Quality (EMQ ≥ 7.0 target).
 *
 * Docs: https://developers.facebook.com/docs/marketing-api/conversions-api
 *
 * EMQ booster fields (per source playbook 2026-04-22 audit):
 *   em, ph, fn, ln, ct, st, zp, country  — hashed SHA-256 lowercase
 *   external_id                          — hashed, our internal stable user/job id
 *   fbc, fbp                             — Facebook click ID, browser ID (UNHASHED)
 *   client_ip_address, client_user_agent — UNHASHED, from the original browser request
 */

import { createHash } from 'node:crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE; // optional, dev only
const GRAPH_API_VERSION = 'v21.0';

/** SHA-256 hex digest of a lowercased, trimmed string. Returns undefined for empty input. */
function hash(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  if (!normalized) return undefined;
  return createHash('sha256').update(normalized).digest('hex');
}

/** Normalize phone to digits only (E.164 minus the +) before hashing. Meta strips non-digits server-side anyway, but doing it here makes the hash deterministic. */
function hashPhone(value: string | null | undefined): string | undefined {
  if (!value) return undefined;
  const digits = value.replace(/\D/g, '');
  if (!digits) return undefined;
  return createHash('sha256').update(digits).digest('hex');
}

export interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  externalId?: string; // e.g. HCP job_id or customer_id
  fbc?: string; // Facebook click ID cookie
  fbp?: string; // Facebook browser ID cookie
  clientIp?: string;
  clientUserAgent?: string;
}

export interface CapiEvent {
  eventName: 'Schedule' | 'Lead' | 'Purchase' | 'PageView' | string;
  /**
   * Stable ID for dedup between Pixel + CAPI for the same conversion.
   * For HCP-sourced Schedule events, use the HCP job_id.
   */
  eventId: string;
  /** Unix seconds. Defaults to now if omitted. */
  eventTime?: number;
  /** The page URL where the conversion happened (or the most relevant URL). */
  eventSourceUrl?: string;
  /** Action source — 'website' for browser-originated, 'system_generated' for backend. */
  actionSource?: 'website' | 'system_generated' | 'physical_store' | 'email' | 'chat' | 'other';
  userData: UserData;
  customData?: {
    value?: number;
    currency?: string;
    contentName?: string;
    [key: string]: unknown;
  };
}

interface CapiPayload {
  data: Array<Record<string, unknown>>;
  test_event_code?: string;
}

/** Build the `user_data` object Meta CAPI expects, with all fields hashed where required. */
function buildUserData(u: UserData): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  const em = hash(u.email);
  const ph = hashPhone(u.phone);
  const fn = hash(u.firstName);
  const ln = hash(u.lastName);
  const ct = hash(u.city);
  const st = hash(u.state);
  const zp = hash(u.zip);
  const country = hash(u.country);
  const externalId = hash(u.externalId);

  if (em) out.em = [em];
  if (ph) out.ph = [ph];
  if (fn) out.fn = [fn];
  if (ln) out.ln = [ln];
  if (ct) out.ct = [ct];
  if (st) out.st = [st];
  if (zp) out.zp = [zp];
  if (country) out.country = [country];
  if (externalId) out.external_id = [externalId];

  // fbc/fbp/client_ip_address/client_user_agent are NOT hashed.
  if (u.fbc) out.fbc = u.fbc;
  if (u.fbp) out.fbp = u.fbp;
  if (u.clientIp) out.client_ip_address = u.clientIp;
  if (u.clientUserAgent) out.client_user_agent = u.clientUserAgent;

  return out;
}

export interface CapiResult {
  ok: boolean;
  status: number;
  body: unknown;
}

/**
 * Send a single CAPI event. Resolves with the API response; never throws —
 * caller decides how to react. Analytics failures must not break business flow.
 */
export async function sendCapiEvent(event: CapiEvent): Promise<CapiResult> {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return {
      ok: false,
      status: 0,
      body: { error: 'META_CAPI_ACCESS_TOKEN or NEXT_PUBLIC_META_PIXEL_ID not configured' },
    };
  }

  const payload: CapiPayload = {
    data: [
      {
        event_name: event.eventName,
        event_time: event.eventTime ?? Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        action_source: event.actionSource ?? 'website',
        event_source_url: event.eventSourceUrl,
        user_data: buildUserData(event.userData),
        custom_data: event.customData,
      },
    ],
  };
  if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // Don't let a slow Meta API hang the webhook handler.
      signal: AbortSignal.timeout(8000),
    });
    const body = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, body };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      body: { error: err instanceof Error ? err.message : String(err) },
    };
  }
}
