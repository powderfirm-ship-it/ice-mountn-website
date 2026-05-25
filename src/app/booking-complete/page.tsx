import type { Metadata } from 'next';
import { BookingCompleteClient } from './booking-complete-client';

/**
 * /booking-complete — HousecallPro booking-redirect landing page.
 *
 * Architecture: HCP's Online Booking → Booking Redirect feature is set to
 * https://www.icemountn.com/booking-complete. When a customer finishes a
 * booking in the HCP iframe modal, HCP redirects their browser here.
 *
 * The redirect URL carries NO HCP-side params (verified 2026-05-24 against
 * HCP's actual behavior — they don't append job_id, customer info, or
 * anything). What we DO have is fresh browser context: fbc/fbp cookies,
 * client IP, user agent — all high-signal EMQ fields for Meta CAPI.
 *
 * The redirect itself is the conversion signal. Manual jobs entered by
 * staff in HCP never trigger this redirect, so by definition every hit
 * here is a website-sourced booking. This is the inherent website-source
 * filter we couldn't get out of HCP's Zapier surface.
 *
 * SEO: this route is intentionally not in the sitemap and is robots-blocked.
 * It's a transactional endpoint, not content.
 */

export const metadata: Metadata = {
  title: "Booking Confirmed | Ice Mount'n",
  description: "Your TV mounting appointment is booked. We'll be in touch shortly.",
  robots: { index: false, follow: false },
  alternates: { canonical: undefined },
};

export default function BookingCompletePage() {
  return <BookingCompleteClient />;
}
