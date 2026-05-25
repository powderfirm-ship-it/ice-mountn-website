/**
 * Shared event_id formula for cross-channel Pixel ↔ CAPI dedup.
 *
 * Context: HCP's Zapier "New Scheduled Job" trigger doesn't expose lead_source
 * or tracking_attribute, AND HCP's Booking Redirect doesn't append job_id or
 * any params to the URL. Without a direct ID handoff between the redirect-side
 * (browser → /booking-complete fires Pixel) and the Zapier-side (HCP → /api/hcp/webhook
 * fires CAPI), we can't pass a deterministic shared event_id through the booking flow.
 *
 * Workaround: time-bucket pairing. Both sides compute event_id from a Unix
 * timestamp truncated to a fixed bucket (60 sec). The browser fires Pixel with
 * `bkg_<bucket of now>`. The webhook fires CAPI with `bkg_<bucket of HCP job
 * creation timestamp>`. Booking-completion-time and HCP-job-creation-time fall
 * in the same minute under normal conditions, so the two event_ids match and
 * Meta dedups to a single conversion.
 *
 * Collision risk: two bookings completed in the same 60-sec window collapse
 * into one conversion. Acceptable for Phase 1 volume (~1–3 bookings/day).
 * Switch to per-booking ID storage (Vercel KV / Upstash) if volume rises.
 *
 * HCP `id` field format: `{job_id}-{unix_ts_seconds}`. Example: `475691461-1779741000`.
 */

const BUCKET_SECONDS = 60;
const EVENT_ID_PREFIX = 'bkg_';

/** Compute the event_id for an event happening at the given Unix epoch seconds. */
export function bookingEventIdForUnixSeconds(unixSeconds: number): string {
  const bucket = Math.floor(unixSeconds / BUCKET_SECONDS);
  return `${EVENT_ID_PREFIX}${bucket}`;
}

/** Compute the event_id for the current moment (used client-side at /booking-complete). */
export function bookingEventIdNow(): string {
  return bookingEventIdForUnixSeconds(Math.floor(Date.now() / 1000));
}

/**
 * Parse HCP's `id` field format `{job_id}-{unix_ts_seconds}` and return the
 * embedded Unix timestamp. Returns null if the format doesn't match.
 *
 * Example: parseHcpIdTimestamp("475691461-1779741000") → 1779741000
 */
export function parseHcpIdTimestamp(hcpId: string | undefined | null): number | null {
  if (!hcpId || typeof hcpId !== 'string') return null;
  const parts = hcpId.split('-');
  if (parts.length !== 2) return null;
  const ts = Number(parts[1]);
  if (!Number.isFinite(ts) || ts < 1_000_000_000 || ts > 9_999_999_999) {
    // Reject obviously wrong values — must be a 10-digit Unix seconds timestamp
    // (covers 2001–2286). HCP may change their ID format; fail loudly here.
    return null;
  }
  return ts;
}
