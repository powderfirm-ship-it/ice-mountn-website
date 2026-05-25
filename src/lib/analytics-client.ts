/**
 * Client-side analytics helpers — typed wrappers around fbq + gtag.
 *
 * Server-side conversion events (Schedule, Purchase) fire from API routes
 * via src/lib/meta-capi.ts and src/lib/ga4.ts — NOT from here. This file is
 * only for browser-fired training-signal events like `Lead` (modal open).
 */

interface FbqOptions {
  /** Stable ID for Pixel ↔ CAPI dedup. Meta's docs use lowercase `eventID` (camel-case with capital ID). */
  eventID?: string;
}

type FbqFn = ((command: 'init', pixelId: string) => void) &
  ((command: 'track', eventName: string, params?: Record<string, unknown>, options?: FbqOptions) => void) &
  ((command: 'trackCustom', eventName: string, params?: Record<string, unknown>, options?: FbqOptions) => void) & {
    queue?: unknown[];
  };

type GtagFn = (
  command: 'event' | 'config' | 'set' | 'js',
  targetOrEvent: string | Date,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/** Fire Meta Pixel `Lead` (booking modal opened — training signal, NOT the primary conversion). */
export function trackLeadModalOpen(): void {
  if (typeof window === 'undefined') return;
  try {
    window.fbq?.('track', 'Lead', { content_name: 'hcp_booking_modal_open' });
    window.gtag?.('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: 'hcp_booking_modal_open',
    });
  } catch {
    // Analytics errors must never break the booking flow.
  }
}

/** Fire Meta Pixel `PageView` on Next.js route changes (initial PageView fires from the inline init snippet). */
export function trackPageView(url?: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.fbq?.('track', 'PageView');
    if (url) {
      window.gtag?.('event', 'page_view', { page_path: url });
    }
  } catch {
    // swallow
  }
}
