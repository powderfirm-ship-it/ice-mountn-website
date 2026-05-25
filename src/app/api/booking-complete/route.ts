/**
 * /api/booking-complete — audit endpoint for HCP booking-redirect landings.
 *
 * Purpose: log the fact that a customer reached /booking-complete (i.e. completed
 * a booking via the website widget) so we can correlate with the Zapier-triggered
 * /api/hcp/webhook fire that arrives 1–15 min later.
 *
 * Does NOT fire CAPI itself — that's the webhook's job, with the full HCP payload
 * for high EMQ. This endpoint just records the redirect to Vercel logs.
 *
 * Why bother: when debugging "did Meta count this conversion?" later, the Vercel
 * log shows `eventId` from the browser side. The webhook log shows `eventId` from
 * the server side. If they match, dedup worked. If they don't, time-bucket drift
 * happened and we know to investigate.
 */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface BookingCompleteBody {
  eventId?: string;
}

export async function POST(request: Request) {
  let body: BookingCompleteBody = {};
  try {
    body = await request.json();
  } catch {
    // Empty body is fine — the browser ping is best-effort.
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';
  const ua = request.headers.get('user-agent') ?? 'unknown';

  // Vercel log line — searchable in the Runtime Logs tab as `booking-complete-redirect`.
  console.log(
    JSON.stringify({
      tag: 'booking-complete-redirect',
      eventId: body.eventId ?? null,
      ip,
      ua,
      ts: Date.now(),
    }),
  );

  return NextResponse.json({ ok: true, eventId: body.eventId ?? null });
}
