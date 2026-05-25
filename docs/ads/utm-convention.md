# Ice Mount'n UTM Convention

**Authoritative reference for any URL pointing at icemountn.com from a marketing surface.**

Every paid click, organic post link, SMS blast, email, or QR code that lands on icemountn.com **MUST** carry the UTM tags below. The `im_attr` first-party cookie reads them on the first matching landing and persists them for 90 days, then stuffs the values into Meta Pixel + GA4 conversion events fired from `/booking-complete`. Without correct tags, the conversion lands as `(direct)` in attribution and the spending channel never gets credit.

---

## Required tags

- `utm_source` — **where the click came from** (the platform). Controlled vocab below.
- `utm_medium` — **what kind of placement it was**. Controlled vocab below.
- `utm_campaign` — **what we were promoting**. Pattern: `{angle-slug}-{quarter}`.

## Optional tags

- `utm_term` — paid-search keyword OR ad-set name. Use freely; consumed by analytics, not for filtering.
- `utm_content` — creative variant ID (which image/video/headline). Use freely.

---

## Controlled vocabulary

### `utm_source` — exactly one of:

| Value | Use for |
|---|---|
| `meta` | Facebook/Instagram ads via Meta Ads Manager |
| `google` | Google Ads (Search, Performance Max, Display) |
| `email` | Outbound email (transactional follow-ups, newsletters) |
| `phoneburner` | PhoneBurner dial-session SMS or follow-up links |
| `organic` | Unpaid social posts (FB page, IG bio, Reddit, etc.) |
| `referral` | Partner site link, Yelp review reply, etc. |
| `qr` | Physical QR code (truck wrap, business card, flyer) |
| `nextdoor` | Nextdoor neighborhood posts |
| `thumbtack` | Thumbtack messenger/follow-up links |

**Do not invent new sources without adding them here first.** Drift breaks dashboards.

### `utm_medium` — exactly one of:

| Value | Use for |
|---|---|
| `cpc` | Paid search (Google Ads Search) |
| `paid_social` | Paid social (Meta broad/lookalike) |
| `retargeting` | Site-visitor retargeting (Meta, Google Display) |
| `lookalike` | Lookalike audience campaigns (Meta LAL of 2,357-customer seed) |
| `email` | Email body link |
| `sms` | SMS body link |
| `organic_social` | Unpaid social post link |
| `display` | Display network banner |
| `print` | QR code / printed material |

### `utm_campaign` — pattern: `{angle-slug}-{quarter}`

- `{angle-slug}` is the campaign angle in kebab-case: `audience-2357`, `samsung-frame`, `same-day-promo`, `over-fireplace`, `super-bowl-special`
- `{quarter}` is the year-quarter the campaign launched: `q2-2026`, `q3-2026`

**Examples:**
- `audience-2357-q2-2026` — first Meta lookalike off the 2,357-customer Thumbtack-backfill seed
- `samsung-frame-q3-2026` — Q3 Samsung Frame TV creative push
- `same-day-promo-q4-2026` — Q4 holiday same-day-mounting offer

Do not reuse campaign names across quarters. New quarter → new campaign tag, even for the same creative concept.

---

## Worked examples

### Meta paid social — broad cold audience, Q2 2026 launch

```
https://www.icemountn.com/?utm_source=meta&utm_medium=paid_social&utm_campaign=cold-broad-q2-2026&utm_content=video-15s-fireplace
```

### Meta retargeting — 30-day site visitors who didn't book

```
https://www.icemountn.com/services/standard-tv-mount?utm_source=meta&utm_medium=retargeting&utm_campaign=site-visitors-30d-q2-2026
```

### Meta lookalike off the 2,357-customer seed (Phase 1 launch campaign)

```
https://www.icemountn.com/?utm_source=meta&utm_medium=lookalike&utm_campaign=audience-2357-q2-2026
```

### Google Search — "tv mounting los angeles"

```
https://www.icemountn.com/locations/los-angeles?utm_source=google&utm_medium=cpc&utm_campaign=local-search-q2-2026&utm_term=tv-mounting-los-angeles
```

### Email blast — past-customer follow-up for Samsung Frame promo

```
https://www.icemountn.com/services/samsung-frame?utm_source=email&utm_medium=email&utm_campaign=samsung-frame-q3-2026&utm_content=past-customer-list
```

### PhoneBurner SMS link

```
https://www.icemountn.com/contact?utm_source=phoneburner&utm_medium=sms&utm_campaign=warm-leads-q2-2026
```

### Truck-wrap QR code

```
https://www.icemountn.com/?utm_source=qr&utm_medium=print&utm_campaign=truck-wrap-q2-2026
```

---

## How the tags get used downstream

1. **First-touch capture** — `<AttributionCapture>` (mounted in `src/app/layout.tsx`) reads URL params on every page load and persists them into the `im_attr` cookie with a 90-day TTL. UTMs are first-touch (locked in once set); `gclid`/`fbclid` are last-touch (overwritten on every fresh ad click).
2. **Booking conversion** — On `/booking-complete` (the HCP redirect destination), the client reads the cookie and attaches `utm_source/medium/campaign/term/content` to both the Meta Pixel `Schedule` event and the GA4 `purchase` event.
3. **Server-side audit** — `/api/booking-complete` logs the full attribution payload to Vercel logs alongside the `booking-complete-redirect` line, so any conversion can be traced back to its UTM source for human audit.
4. **CAPI enrichment** — _Not yet wired._ The Zapier-triggered `/api/hcp/webhook` doesn't have access to the customer's browser cookie. Forwarding UTMs from /booking-complete into CAPI requires server-side pairing storage (Vercel KV / Upstash) — documented in `2. Wiki/Platforms/HousecallPro.md` "Known Issues" as future work.

---

## Validation checklist before a campaign goes live

- [ ] `utm_source` is in the controlled vocab above
- [ ] `utm_medium` is in the controlled vocab above
- [ ] `utm_campaign` follows `{angle-slug}-{quarter}` pattern and isn't reused from a prior quarter
- [ ] All lowercase, hyphenated (no spaces, no underscores in the values)
- [ ] URL has been clicked-through-tested: visit it, open browser devtools → Application → Cookies → confirm `im_attr` cookie populated with expected values
- [ ] If the campaign is on Meta with the 2,357-customer audience: also confirm the audience is uploaded and ready in Meta Ads Manager before flipping budget on

---

## Source playbook

This convention mirrors the Tack Tools UTM convention (`/Users/meirakami/Documents/tack-tools/docs/ads/utm-convention.md`), adapted for the home-services context. When in doubt about a value choice, default to the closest analog Tack Tools uses for consistency across Powder Firm portfolios.
