/**
 * GA4 Measurement Protocol — server-side event pipeline.
 *
 * Fires conversion events from API routes (e.g. HCP webhook → `purchase`)
 * independent of client-side gtag. Pairs with the client gtag.js install in
 * <AnalyticsScripts /> for full coverage.
 *
 * Docs: https://developers.google.com/analytics/devguides/collection/protocol/ga4
 */

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const API_SECRET = process.env.GA4_API_SECRET;

export interface Ga4Event {
  /** GA4 event name — `purchase`, `generate_lead`, etc. Must match GA4 reserved or custom event naming. */
  name: string;
  params?: Record<string, unknown>;
}

export interface Ga4SendOptions {
  /** Stable client identifier — for HCP-sourced events, use HCP customer_id or job_id. GA4 requires this; pick something stable per user. */
  clientId: string;
  /** Optional user identifier — same shape as GA4 `user_id`, used for cross-device join. */
  userId?: string;
  events: Ga4Event[];
}

export interface Ga4Result {
  ok: boolean;
  status: number;
}

/**
 * Send one or more events via the Measurement Protocol. Never throws —
 * caller decides how to react.
 */
export async function sendGa4Event(opts: Ga4SendOptions): Promise<Ga4Result> {
  if (!MEASUREMENT_ID || !API_SECRET) {
    return { ok: false, status: 0 };
  }

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${encodeURIComponent(MEASUREMENT_ID)}&api_secret=${encodeURIComponent(API_SECRET)}`;

  const body: Record<string, unknown> = {
    client_id: opts.clientId,
    events: opts.events,
  };
  if (opts.userId) body.user_id = opts.userId;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    });
    // GA4 MP returns 204 No Content on success and offers no response body.
    return { ok: res.ok, status: res.status };
  } catch {
    return { ok: false, status: 0 };
  }
}
