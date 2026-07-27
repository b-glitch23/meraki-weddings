# CONTENT-QUESTIONS.md — Resolved

B answered all 22 open questions on 2026-07-27. Answers are now live in the site copy (Home,
WeddingCeremonyAudio, OutdoorWeddingAudio, Packages, HowItWorks, FAQ, Contact, Footer,
QualifierGate, PrivacyPolicy, Terms) and in `src/lib/siteConfig.ts` (`BUSINESS_INFO`). Kept here
for reference.

## Service inclusions — resolved
1. Two wired microphones always included; more/wireless mics available for a fee.
2. Microphone type: handheld.
3. Two speakers with stands included in every booking.
4. Ceremony music playback included by default; template playlists available if the couple
   doesn't provide their own.
5. Cues run directly by an on-site operator — contingent on the couple providing a detailed
   order of events / cue sheet.
6. An operator is present for the full booking, and can extend to rehearsal and reception.
7. Rehearsal attendance available, billed at day-rate pricing.

## Scope & logistics — resolved
8. Max guest count: 300 direct; larger events routed through Meraki Audio.
9. Service radius: 30 miles of the Tri-Cities.
10. Indoor/outdoor pricing: no difference.
11. Power required — minimum two dedicated 120V outlets. No battery-powered option.
12. Weather/last-minute changes: best effort to still deliver; travel fee may apply if the venue
    moves outside the 30-mile service area.

## Adjacent services — resolved
13. Reception audio: included in the day rate (not a separate charge) as long as it's part of the
    provided order of events. Subwoofers for dance-floor bass are the one add-on charge.
14. Speeches/cocktail-hour audio: included under the same day-rate/order-of-events condition.

## Commercial terms — resolved
15. Pricing stays quote-only, not published.
16. Deposit: 20% to hold a date.
17. Cancellation: 45+ days notice refunds the deposit; inside 45 days, deposit is forfeited.
18. Response time: 2 business days.

## Cross-site / brand — resolved
19. Portfolio CTA confirmed correct at `merakiaud.com/portfolio`.
20. Phone (509) 778-6151 — same as Meraki Audio. Email: weddings@merakiaud.com (wedding-specific).

## Legal — resolved
22. Real Privacy Policy and Terms of Service copy written and published, reflecting the deposit,
    cancellation, service-area, and power-requirement answers above. Both pages still carry a
    plain-language note recommending attorney review before treating them as final/binding —
    that's a standard caution, not a placeholder gap.

21. **Analytics:** resolved 2026-07-27 — new GA4 property "Meraki Weddings" (separate from the
    merakiaud.com property) created under the existing Meraki Analytics account. Measurement ID
    G-VFZ04LZBTN is live in `index.html`'s gtag.js loader and referenced in `siteConfig.ts`. All
    `trackX()` helpers in `analytics.ts` now fire real events — no code changes needed for that.

## Still open
- None. All 22 items are resolved.

## Editorial note (unchanged)
- **Testimonials:** still intentionally left off the homepage — no real testimonials exist yet.
  Add once they do.
