'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { bookingEventIdNow } from '@/lib/event-id';
import { readAttribution } from '@/lib/attribution';

/**
 * Client component for /booking-complete. On mount:
 *   1. Computes event_id = bkg_<minute-bucket-now>
 *   2. Fires Pixel `Schedule` (client-side) with that event_id
 *   3. Fires GA4 `purchase` (client-side)
 *   4. Pings /api/booking-complete so the server side can record an audit log
 *      (and we have a server confirmation that the redirect actually happened
 *      — useful for debugging Pixel ↔ CAPI dedup later)
 *
 * The CAPI Schedule (with full PII for high EMQ) is fired by /api/hcp/webhook
 * when Zapier delivers the HCP job payload 1–15 min later. Both sides compute
 * event_id from the same minute-bucket formula, so Meta dedups them.
 */
export function BookingCompleteClient() {
  const [eventId, setEventId] = useState<string | null>(null);

  useEffect(() => {
    const id = bookingEventIdNow();
    setEventId(id);

    // Read attribution cookie BEFORE firing events so utm_*/gclid/fbclid
    // can be attached to both Pixel and GA4 events. Cookie is set on every
    // page load by <AttributionCapture/> in the root layout.
    const attr = readAttribution();

    // Fire client-side Pixel Schedule. Wrapped in try/catch — analytics
    // failures must never block the confirmation UI.
    try {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq(
          'track',
          'Schedule',
          {
            content_name: 'TV Mounting Booking',
            currency: 'USD',
            // Pass UTMs as custom_data so Meta can correlate to the right campaign
            // even when the click happened on a session/device where the gclid/fbclid
            // expired before the conversion fired. Undefined values are dropped by
            // Pixel's fbq serializer.
            utm_source: attr?.utm_source,
            utm_medium: attr?.utm_medium,
            utm_campaign: attr?.utm_campaign,
            utm_term: attr?.utm_term,
            utm_content: attr?.utm_content,
          },
          { eventID: id },
        );
      }
    } catch {
      // swallow
    }

    // Fire GA4 purchase. We don't know the actual value at redirect time
    // (HCP doesn't append it); the webhook fires a second GA4 event with
    // the real value 1–15 min later via Measurement Protocol.
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'purchase', {
          transaction_id: id,
          currency: 'USD',
          value: 0,
          // GA4 auto-captures gclid from the URL on landing — re-passing here
          // covers the case where the user arrived via fbclid + GA4 didn't pick
          // up a campaign source.
          source: attr?.utm_source,
          medium: attr?.utm_medium,
          campaign: attr?.utm_campaign,
        });
      }
    } catch {
      // swallow
    }

    // Server-side audit ping (fire-and-forget). Doesn't fire CAPI — that's
    // the webhook's job — but logs the redirect with attribution so we can
    // correlate later when reviewing why a conversion did/didn't dedup.
    fetch('/api/booking-complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: id, attribution: attr ?? null }),
      keepalive: true,
    }).catch(() => {
      // swallow — confirmation UI must render either way
    });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-24">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Booking confirmed!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Thanks for booking with Ice Mount&apos;n. We&apos;ve received your appointment
          request and will be in touch shortly to confirm the details.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Need to reach us sooner? Call{' '}
          <a href="tel:+13238638146" className="font-semibold text-blue-600 hover:underline">
            (323) 863-8146
          </a>
          .
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Return to home
          </Link>
        </div>
        {eventId && (
          <p className="mt-12 text-xs text-gray-400" aria-hidden="true">
            ref: {eventId}
          </p>
        )}
      </div>
    </main>
  );
}
