# Phase 5 — Pre-Launch Checklist + Day-N Review Framework

**Owner:** Malik Townsend
**Companion to:** [`ICE_MOUNTN_ADS_PRE_SPEND_HANDOFF_2026-05-23.md`](./ICE_MOUNTN_ADS_PRE_SPEND_HANDOFF_2026-05-23.md), [`/Users/meirakami/Documents/tack-tools/docs/strategy/ADS_OPTIMIZATION.md`](/Users/meirakami/Documents/tack-tools/docs/strategy/ADS_OPTIMIZATION.md)
**Status:** Ready to use the moment Gate 1 passes (HCP estimate/job routing fix)

The infrastructure is built. This doc is what the operator runs to make the budget productive instead of optimization-blind.

---

## Pre-launch checklist

Run **immediately** before flipping budget on. Every box must be checked.

### Tracking + attribution

- [ ] **Meta Pixel `PageView`** fires on every route — verify via Pixel Helper on homepage + at least one `/locations/*` and one `/services/*` page
- [ ] **Meta Pixel `Lead`** fires on every HCP booking-modal open — verify via Pixel Helper after clicking "Book Online"
- [ ] **Meta Pixel `Schedule`** fires on `/booking-complete` — verify via Pixel Helper after completing a real test booking
- [ ] **Meta CAPI `Schedule`** firing with **EMQ ≥ 7.0** — check Meta Events Manager → icemountn.com dataset → Test Events tab. Wait 24 hr after test bookings; EMQ stabilizes after ~5 events
- [ ] **Pixel ↔ CAPI dedup working** — confirm Events Manager shows ONE deduped `Schedule` per booking, not two. Look for "Server" + "Browser" combined in event detail
- [ ] **GA4 `purchase`** fires (Realtime tab → DebugView → confirm event with real `transaction_id`)
- [ ] **GA4 `generate_lead`** fires on HCP modal open
- [ ] **Microsoft Clarity** recording sessions (clarity.microsoft.com → icemountn.com project → confirm at least 5 session replays exist)
- [ ] **`im_attr` cookie** populated correctly on a test URL with UTM params — see `docs/ads/utm-convention.md` validation checklist
- [ ] **UTM convention doc** committed and shared with anyone who builds ad URLs

### Audience + creative setup (Meta Ads Manager)

- [ ] **2,357-customer audience CSV uploaded** to Meta Custom Audiences. Source file: `../ice-mountn-thumbtack-backfill/out/2026-05-23T1424/meta-audience.csv`. Wait for Meta's match-rate calculation (~30 min). Target match rate ≥ 60%.
- [ ] **Retargeting custom audience** created: site visitors last 30 days, URL contains `icemountn.com/`. Lets us run cheap retargeting against people who landed but didn't book.
- [ ] **1% Lookalike** of the 2,357-customer audience built (US, exclude existing customers). 2,357 is well above Meta's 300-row floor for 1% LAL — should generate ~3M-person audience.
- [ ] **Campaign objective** set to **Conversions → Schedule** (NOT Leads, NOT Traffic). Optimizing for the right event is non-negotiable.
- [ ] **Bid strategy** = **Cost Cap** (or **Highest Volume** with a manual bid cap). **Bid cap $150** for the first 14 days — Tack Tools uses the same starting ceiling and it's the right shape for a service-business CPA.
- [ ] **Geo targeting:** Los Angeles + 25mi radius. Don't waste impressions outside the service area.
- [ ] **First ad set:** broad cold audience OR LAL-of-2357. **DO NOT** mix interest targeting with the LAL — Meta's algorithm handles audience discovery better than manual interests at low budget.
- [ ] **Creative:** at least 3 ad variants per ad set (varies headline + image/video). Source playbook: rotate weekly based on Day-14 review.

### Infrastructure + safety

- [ ] **Vercel deploy is green** for the latest main commit (latest Phase 1 + Phase 2 code live)
- [ ] **Vercel env vars confirmed** via `vercel env ls`: NEXT_PUBLIC_META_PIXEL_ID, META_CAPI_ACCESS_TOKEN, HCP_WEBHOOK_SECRET, NEXT_PUBLIC_GA4_MEASUREMENT_ID, GA4_API_SECRET, NEXT_PUBLIC_CLARITY_PROJECT_ID
- [ ] **HCP redirect URL** is exactly `https://www.icemountn.com/booking-complete` (no debug params)
- [ ] **Zapier Zap** is published, toggled ON, last run successful — check Zap History
- [ ] **HCP estimate/job routing fix** confirmed by HCP support — every online booking lands as a Job (not Estimate)
- [ ] **Daily budget cap** set in Meta Ads Manager to a value you can afford to lose 7 days in a row (suggested: $50/day for the first 14 days = $700 max exposure)
- [ ] **Spending alert** enabled in Meta (top-right → Settings → Notifications → "Daily spending limit reached")

---

## Day-1 verification (the first 24 hours)

Don't sleep on the launch. The first day catches issues that didn't show up in test bookings:

- **Hour 1:** Refresh Meta Events Manager. Pixel PageViews should be incrementing rapidly. If they're flat, the campaign isn't actually serving — check ad set status.
- **Hour 6:** Meta should show first `Lead` events (modal opens). If `Lead` is 0 but `PageView` is hundreds, the funnel is broken at modal-open — likely a mobile-WebView issue (FB/IG in-app browser). Check Microsoft Clarity session replays for any mobile abandon-at-button pattern.
- **Hour 24:** Should see first `Schedule` event. If `Schedule` is still 0 after a full day of spend on broad audience, **pause ads**. Don't burn more before understanding why.

Tack Tools' Layer 2 mobile audit (`ADS_OPTIMIZATION.md` row 2.3) caught a WebView modal block in their 2026-05-19 review that was killing 82% of in-app-browser onboarding. Watch for the same pattern on the HCP modal load path.

---

## Day-14 review (the first real decision point)

Schedule a calendar event for exactly 14 days after first ad-budget spend.

### Data to pull

From Meta Ads Manager:
- **Spend** (total + per ad set)
- **Impressions, Reach, Frequency**
- **CPC** (cost per link click)
- **CPM** (cost per 1000 impressions)
- **`Schedule` events count** (the conversion)
- **Cost per Schedule** (= spend / Schedule events)
- **EMQ rating** on the `Schedule` event (Events Manager → Dataset → Overview)

From HCP:
- **Number of actual jobs booked** in the 14-day window
- **Total revenue from those jobs** (sum of `total_amount`)
- **Average ticket value** = revenue / jobs

From Microsoft Clarity:
- **Mobile vs desktop session count**
- **Rage clicks or dead clicks** on the homepage or `/locations/*` pages
- **Mobile WebView session abandonment rate** (FB/IG in-app browser specifically)

### Questions to evaluate

1. **Is the cost-per-Schedule profitable?**
   - Profit per booking = `avg_ticket - cost_of_service - overhead`
   - For TV mounting at $150 avg ticket and ~40% margin, profit per booking ≈ $60
   - Cost-per-Schedule must be **< $60** to break even, **< $30** to grow

2. **Is the Meta-reported Schedule count matching HCP's actual booking count?**
   - If Meta says 20 Schedules but HCP shows 12 actual jobs, dedup is broken or non-website jobs are leaking through
   - If HCP shows 20 jobs but Meta only counted 12 Schedules, the CAPI side is dropping events — check Vercel logs for failed webhook attempts

3. **Is mobile conversion rate ≥ 50% of desktop?**
   - Most ad traffic on Meta is mobile. If mobile CR is < 50% of desktop CR, there's a mobile-specific funnel friction (likely modal UX)
   - Clarity replays will show you exactly where they bail

4. **Is the LAL audience outperforming broad?**
   - If yes: shift budget toward LAL, scale 2x
   - If no: kill LAL, keep broad. The 2,357 might be too noisy for a clean LAL seed.

5. **Is the retargeting audience converting?**
   - Retargeting CPA should be **30-50% of cold CPA**. If it's higher, the issue isn't audience quality — it's creative or offer.

### Actions based on Day-14 results

| Condition | Action |
|---|---|
| Cost-per-Schedule < $30 AND Schedule count > 10 | **Scale 50%** — double daily budget gradually |
| Cost-per-Schedule $30–$60 AND Schedule count > 5 | **Hold steady, iterate creative** — rotate to next 3 ad variants |
| Cost-per-Schedule > $60 OR Schedule count < 5 | **Pause + diagnose** — see kill criteria below |
| Schedule count = 0 after $700 spend | **Hard pause** — full audit before relaunching, do not double down |
| Mobile CR < 30% of desktop CR | **Pause Meta entirely** — fix mobile funnel via Clarity findings before resuming any spend |

---

## Day-30 review

Adds Lookalike performance + Google Ads channel decision.

### Additional data to pull

- **Lookalike vs cold-broad performance delta** — if LAL is materially better, scale LAL and pause broad
- **Customer LTV from the 14 jobs** so far — any repeat customers? Cross-sells? (Phase 6+ retargeting opportunity)
- **Google Ads channel readiness** — if Phase 3 is wired and Meta is profitable, this is when you turn Google Search on at $30/day. Tack Tools waited until Day 30 of Meta to confirm Meta's CPA before adding a second channel.
- **Retargeting audience size** — after 30 days of paid traffic, you should have 200-500 site visitors in the retargeting custom audience. Below 200: cold reach is too low, scale cold budget. Above 1000: retargeting is its own ad set now, separate budget.

### Decisions to make at Day-30

1. **Continue, scale, or kill Meta** based on cost-per-Schedule trend (improving vs degrading vs flat)
2. **Turn on Google Search** if Meta is profitable AND Phase 3 (GA4 → Google Ads conversion import) is wired
3. **Add a third creative test angle** — by Day-30 you have enough data to know which CREATIVE THEME is winning (e.g. "same-day service" vs "Samsung Frame specialist" vs "price-led $99"). Build the next 3 ad variants around the winner.
4. **Update the 2,357-customer audience** if new customers booked in the 30-day window (refresh the seed). Re-upload as a new audience to avoid disrupting active LAL training.

---

## Kill criteria

The campaign **must pause** (not just slow down — pause) when any one of these is true:

- **Cost-per-Schedule > $80 after $1,000 spend.** That's higher than average ticket; you're losing money per conversion. No amount of waiting fixes a fundamentally wrong ad-product fit.
- **Zero Schedules after $500 spend.** Something is broken — tracking, audience, creative, or landing page. Pause, audit, fix one variable, retry.
- **Mobile WebView abandonment > 70%** per Clarity. The funnel is broken on the majority of inbound traffic. No new spend until fixed.
- **Negative reviews start citing the ad experience** (e.g. customer says "the ad said $99 but you charged $300"). Brand damage from misleading creative outpaces ROI fast.
- **HCP `Schedule` count ≠ actual paid jobs over 30 days.** Conversion tracking is broken. Pause until rebuilt.

When you pause: do not relaunch the same campaign. Build a new one with the one variable changed (creative, audience, landing page, or bid strategy). Track which change correlates with the outcome.

---

## Channel sequencing

Per the source playbook + the Ice Mount'n-specific ICP:

1. **Phase 5a (this doc):** Meta first. The 2,357-customer audience is a Meta seed. Spend $50/day for 14 days. Decision point Day-14.
2. **Phase 5b (Day-30+):** Add Google Search at $30/day, targeting "tv mounting los angeles" + 20 neighborhood-specific keywords. Requires Phase 3 (GA4 → Google Ads conversion import) wired first.
3. **Phase 5c (Day-60+):** If both channels are profitable, layer in retargeting on both. Cap retargeting at 30% of total spend (avoid frequency burnout).
4. **Phase 5d (Day-90+):** Evaluate adding Nextdoor, LinkedIn ads (B2B for office TV installs), or Yelp Ads as channel 4. Only after channels 1-3 are stable.

Do **NOT** launch multiple channels simultaneously. Attribution gets too muddy at low volume — you won't know what's working.

---

## Calendar reminders to set NOW

Before launch day, drop these into the operator's calendar:

- **Day 1, 6 hr post-launch:** Check Pixel + first `Lead` events
- **Day 1, 24 hr post-launch:** Check first `Schedule` event
- **Day 7:** Mid-flight check — anything obviously broken?
- **Day 14:** Full review using this doc
- **Day 30:** Full review + Google Ads decision
- **Day 60:** Retargeting layer-in evaluation
- **Day 90:** Channel 4 evaluation

---

## Source references

- Tack Tools playbook: `/Users/meirakami/Documents/tack-tools/docs/strategy/ADS_OPTIMIZATION.md` (see "Meta Ads — Campaign State" section)
- Ice Mount'n pre-ad-spend handoff: `docs/strategy/ICE_MOUNTN_ADS_PRE_SPEND_HANDOFF_2026-05-23.md`
- UTM convention: `docs/ads/utm-convention.md`
- HousecallPro integration notes: `2. Wiki/Platforms/HousecallPro.md` (Obsidian vault)
- Meta credentials: `2. Wiki/Platforms/Meta Business.md` (Obsidian vault)
