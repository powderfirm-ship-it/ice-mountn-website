'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/lib/analytics-client';

/**
 * Fires `PageView` on every Next.js client-side navigation.
 *
 * The very first PageView is already fired by the inline `fbq('track', 'PageView')`
 * in <AnalyticsScripts />. This component handles subsequent SPA route changes
 * — without it, only the initial landing page would be counted in Meta Events Manager.
 *
 * Mounted as a child of <body> in src/app/layout.tsx so it lives inside the
 * Next.js routing context.
 */
export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const qs = searchParams?.toString();
    const url = qs ? `${pathname}?${qs}` : pathname;
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}
