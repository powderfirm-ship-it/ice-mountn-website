/**
 * First-party attribution cookie — `im_attr`.
 *
 * Captures ad-click identifiers and UTM tags from URL params on every page
 * load and persists them for 90 days. The HCP modal opener reads from this
 * cookie at booking-time and stuffs the values into the HCP booking URL,
 * making the source visible in HCP's CRM and (eventually) flowing through
 * Zapier into Meta CAPI's custom_data for finer-grained audience modeling.
 *
 * Capture semantics (matches Tack Tools' tt_attr playbook):
 *   - utm_*       — FIRST-TOUCH. Set once; never overwritten. Preserves the
 *                   campaign that originally brought the user in.
 *   - gclid/fbclid — LAST-TOUCH. Always overwritten. Meta/Google use the
 *                    MOST RECENT click ID for attribution windows.
 *   - landing_page/referrer — FIRST-TOUCH. Useful for "which page first
 *                              brought them in" debugging.
 *
 * Why two policies: paid ad platforms attribute conversions to the LAST
 * paid click before conversion, but campaign-level audit ("which campaign
 * actually drove the lifetime customer") wants FIRST-TOUCH. Cookie holds
 * both flavors so downstream consumers pick the one they need.
 *
 * Storage: cookie only (no localStorage). Reads at booking-time stuff the
 * values into the HCP URL — no need to coordinate with a backend store
 * since the user's own browser carries the attribution into the booking flow.
 *
 * SSR-safety: every function checks for `document` before touching it.
 * Server-rendered pages should never call these; reads should happen in
 * a `useEffect` or client-only code path.
 */

export const ATTRIBUTION_COOKIE_NAME = 'im_attr';
export const ATTRIBUTION_TTL_DAYS = 90;

export interface AttributionData {
  /** First-touch utm_source (e.g. `meta`, `google`, `email`). */
  utm_source?: string;
  /** First-touch utm_medium (e.g. `cpc`, `retargeting`, `lookalike`). */
  utm_medium?: string;
  /** First-touch utm_campaign (e.g. `audience-2357-q2-2026`). */
  utm_campaign?: string;
  /** First-touch utm_term. */
  utm_term?: string;
  /** First-touch utm_content. */
  utm_content?: string;
  /** Last-touch Google Ads click ID. Overwritten on every new gclid landing. */
  gclid?: string;
  /** Last-touch Facebook click ID. Overwritten on every new fbclid landing. */
  fbclid?: string;
  /** First-touch landing page path (e.g. `/locations/santa-monica`). */
  landing_page?: string;
  /** First-touch document.referrer. */
  referrer?: string;
  /** ISO timestamp the cookie was first written. Useful for cookie-age debugging. */
  first_touch_at?: string;
}

/** Capture-policy split: which fields are first-touch (preserved) vs last-touch (overwritten). */
const FIRST_TOUCH_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'landing_page',
  'referrer',
  'first_touch_at',
] as const satisfies readonly (keyof AttributionData)[];

const LAST_TOUCH_KEYS = ['gclid', 'fbclid'] as const satisfies readonly (keyof AttributionData)[];

/** Read the im_attr cookie. Returns undefined SSR-side or when cookie missing/corrupt. */
export function readAttribution(): AttributionData | undefined {
  if (typeof document === 'undefined') return undefined;
  const raw = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${ATTRIBUTION_COOKIE_NAME}=`));
  if (!raw) return undefined;
  try {
    const value = raw.slice(ATTRIBUTION_COOKIE_NAME.length + 1);
    const decoded = decodeURIComponent(value);
    const parsed = JSON.parse(decoded) as unknown;
    if (!parsed || typeof parsed !== 'object') return undefined;
    return parsed as AttributionData;
  } catch {
    // Corrupt cookie — treat as missing. Next write will overwrite.
    return undefined;
  }
}

/** Internal cookie writer. Sets SameSite=Lax (allows HCP iframe top-nav) + 90-day expiry. */
function writeCookie(data: AttributionData): void {
  if (typeof document === 'undefined') return;
  const value = encodeURIComponent(JSON.stringify(data));
  const maxAge = ATTRIBUTION_TTL_DAYS * 24 * 60 * 60;
  // No `Secure` flag → still works on http:// localhost during dev. Prod is
  // HTTPS-only via Vercel so the browser will gate transmission appropriately.
  document.cookie = `${ATTRIBUTION_COOKIE_NAME}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

/**
 * Merge incoming URL-derived attribution into the cookie, applying the
 * first-touch / last-touch policies. Idempotent — safe to call on every
 * page load.
 *
 * Returns the merged result (or undefined if SSR / no document).
 */
export function captureAttribution(incoming: Partial<AttributionData>): AttributionData | undefined {
  if (typeof document === 'undefined') return undefined;
  const existing = readAttribution() ?? {};
  const merged: AttributionData = { ...existing };

  for (const key of FIRST_TOUCH_KEYS) {
    if (!merged[key] && incoming[key]) {
      merged[key] = incoming[key];
    }
  }
  for (const key of LAST_TOUCH_KEYS) {
    if (incoming[key]) {
      merged[key] = incoming[key];
    }
  }

  // Stamp first_touch_at the first time we ever write the cookie.
  if (!merged.first_touch_at) {
    merged.first_touch_at = new Date().toISOString();
  }

  // Only persist if we actually have at least one field — don't clutter the
  // cookie jar of organic visitors who never carry a tracking param.
  const hasAnyData = Object.values(merged).some((v) => v !== undefined && v !== '');
  if (!hasAnyData) return undefined;

  writeCookie(merged);
  return merged;
}

/**
 * Extract attribution fields from a URL's query params and document.referrer.
 * Pure function — caller decides whether to pass result to captureAttribution.
 */
export function readAttributionFromUrl(url: URL, referrer?: string): Partial<AttributionData> {
  const get = (key: string) => url.searchParams.get(key) ?? undefined;
  return {
    utm_source: get('utm_source'),
    utm_medium: get('utm_medium'),
    utm_campaign: get('utm_campaign'),
    utm_term: get('utm_term'),
    utm_content: get('utm_content'),
    gclid: get('gclid'),
    fbclid: get('fbclid'),
    landing_page: url.pathname,
    // Strip referrer query string — we don't want to leak inbound URLs into our cookie.
    referrer: referrer ? new URL(referrer).origin + new URL(referrer).pathname : undefined,
  };
}

/**
 * Build a flat URL-param-friendly object suitable for appending to the HCP
 * booking URL. Drops undefined keys so the URL stays clean.
 */
export function attributionToUrlParams(attr: AttributionData | undefined): Record<string, string> {
  if (!attr) return {};
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(attr)) {
    if (typeof v === 'string' && v) out[k] = v;
  }
  return out;
}
