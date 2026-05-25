'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { captureAttribution, readAttributionFromUrl } from '@/lib/attribution';

/**
 * Mounted in src/app/layout.tsx so it runs on every client-side route.
 *
 * On each navigation (initial load + SPA transitions) it:
 *   1. Reconstructs the full URL with current path + query string
 *   2. Extracts utm_*, gclid, fbclid, landing_page, referrer
 *   3. Merges into the im_attr cookie per the first-touch/last-touch policy
 *      defined in src/lib/attribution.ts
 *
 * No UI. Returns null.
 *
 * Why on every navigation, not just initial load: if a user lands on /
 * organically and later clicks an ad pointing at /locations/santa-monica,
 * the second landing carries fresh gclid/fbclid that should overwrite (last-touch).
 *
 * Suspense-wrapped at the layout level because useSearchParams bails to
 * client-only rendering.
 */
export function AttributionCapture() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const search = searchParams?.toString() ?? '';
      const fullUrl = new URL(
        `${pathname ?? '/'}${search ? `?${search}` : ''}`,
        window.location.origin,
      );
      const incoming = readAttributionFromUrl(fullUrl, document.referrer || undefined);
      captureAttribution(incoming);
    } catch {
      // Attribution must never break the page. Swallow.
    }
  }, [pathname, searchParams]);

  return null;
}
