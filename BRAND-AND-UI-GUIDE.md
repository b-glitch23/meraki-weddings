# BRAND-AND-UI-GUIDE.md — Meraki Weddings

## Brand relationship

Meraki Weddings is **a focused wedding service from Meraki Audio** — not an unrelated standalone
company. Use this language pattern consistently:

- "Wedding audio by Meraki Audio"
- "A focused wedding service from Meraki Audio"
- "Professional ceremony sound from the team at Meraki Audio"

Never imply Meraki Weddings is a separate business. Never duplicate the full Meraki Audio
portfolio on this subdomain — link out to it instead (see `CROSS-SITE-SEO-PLAN.md`).

## Positioning (do not drift from this)

**Primary:** Simple, professional wedding ceremony audio for couples who do not need a DJ.

This is not a DJ company. This is not a large-scale wedding production company. Every page should
reinforce the boundary: ceremony microphones, speakers, and music playback — not reception
entertainment, emceeing, or dance-floor production.

## Tone

Warm, calm, intentional, refined, personal, technically trustworthy, straightforward,
approachable, reassuring, professional without feeling corporate.

Avoid: oversized/complicated-sounding language, concert-production framing, DJ positioning,
promises of entertainment/emceeing/lighting/reception hosting unless explicitly confirmed.

## Color palette

| Token (Tailwind) | Hex | Use |
|---|---|---|
| `cream` | `#FAF6F0` | Page background |
| `blush` | `#E8C4B8` | Section backgrounds, borders, soft accents |
| `rose` | `#C98A78` | Primary CTA color, links, active states |
| `charcoal` | `#3A2E2A` | Body text, headings, dark sections |
| `champagne` | `#C9A66B` | Secondary accent (step numbers, credibility-section CTA) |

High contrast is maintained by pairing `charcoal` text on `cream`/`blush`/white backgrounds, and
`cream` text on the one `charcoal`-background section (the Meraki Audio credibility block on the
homepage).

## Typography

- **Display / headings:** Playfair Display (serif) — `font-display` utility class
- **Body:** Jost (sans-serif) — default body font
- Loaded via Google Fonts `<link>` in `index.html` with `preconnect` and the family's default
  `font-display: swap` (verified, not re-engineered — see SEO-AUDIT.md M4)

Avoid highly ornate script fonts — Playfair Display is refined but still highly legible at every
weight used on the site.

## Imagery policy (for whoever adds final photography)

Do use: authentic wedding ceremony photography (microphones in use, speaker setup, officiant and
couple, outdoor ceremony settings), simple diagrams if useful, calm/candid moments.

Do not use: DJ booth/turntable imagery, dance-floor or nightclub lighting, oversized speaker-wall
imagery, stock photos implying services Meraki doesn't offer, excessive wedding clichés.

Every image added must ship with explicit `width`/`height` attributes (or an aspect-ratio
wrapper) to avoid layout shift, and descriptive `alt` text — never `alt=""` unless the image is
purely decorative.

## Accessibility

- All interactive elements (buttons, nav links, form radios) carry a visible `focus-visible`
  outline — see any component in `src/components/`.
- Skip-to-content link at the top of every page (`src/components/Layout.tsx`).
- No autoplay video, no parallax, no decorative animation beyond simple `transition-colors` on
  hover/focus — nothing that needs to be gated behind `prefers-reduced-motion` today, but keep
  that constraint in mind for any future additions.

## CTA language

**Use:** Check Your Wedding Date (primary, site-wide), See How It Works (secondary), Request
Ceremony Audio, Ask About Your Venue, Explore Wedding Audio Options.

**Never use:** Book Your DJ, Start the Party, Pack the Dance Floor, Choose Your Entertainment, or
any language implying reception entertainment/emceeing.

## Layout conventions

- Max content width: `max-w-6xl` for grid/card sections, `max-w-3xl` for reading-width prose
  (service pages, articles, FAQ).
- Section rhythm: alternating `bg-cream` (transparent) and `bg-blush/25` bands, `py-14`–`py-24`
  vertical rhythm, generous spacing over dense layouts.
- Sticky top navbar (not an absolute overlay) so every page — including tall-content pages like
  articles and FAQ — has a consistent, always-visible way back to Home/Contact.
