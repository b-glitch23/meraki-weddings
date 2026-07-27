# CROSS-SITE-SEO-PLAN.md — merakiaud.com ↔ weddings.merakiaud.com

## Entity modeling decision

Meraki Weddings is modeled as a **Service offered by the Meraki Audio Organization**, not as a
separate/unrelated business. Concretely (see `index.html`):

```json
{
  "@type": "Organization",
  "name": "Meraki Audio",
  "url": "https://merakiaud.com/",
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Meraki Weddings",
      "url": "https://weddings.merakiaud.com/"
    }
  }
}
```

This avoids the mistake of publishing two unrelated-looking `Organization`/`LocalBusiness`
entities for what is, functionally, one business with a focused service line and its own website.
No `LocalBusiness` schema with a physical address was added on either domain — no confirmed
public address, hours, or aggregate rating data exists to support it (see Phase 14 constraints).

## Canonical strategy

- **weddings.merakiaud.com pages self-canonicalize.** Every page's canonical points to its own
  URL under `weddings.merakiaud.com` (`src/components/SEO.tsx` + `src/lib/siteConfig.ts`).
  Nothing on the wedding subdomain canonicalizes to merakiaud.com.
- **No duplicate content exists between the two sites.** All wedding-site copy was written fresh
  for this positioning; nothing was copied from merakiaud.com verbatim.
- If a future page is intentionally a near-duplicate of an existing merakiaud.com page (unlikely
  given the current architecture), that page — and only that page — should canonicalize to the
  merakiaud.com original. No such page exists today.

## Sitemap strategy

- `weddings.merakiaud.com/sitemap.xml` lists all 16 indexable wedding-site URLs (see
  `public/sitemap.xml`).
- This sitemap is separate from merakiaud.com's own sitemap — each subdomain is treated as its own
  Search Console property (see below) with its own sitemap submission.

## Search Console property setup

1. Add `https://weddings.merakiaud.com` as its **own property** in Google Search Console
   (subdomains are generally best verified as their own property, separate from the root
   domain's Domain-property verification, unless the root domain property is already verified as
   a Domain-level property covering all subdomains — check whether merakiaud.com's existing GSC
   property is Domain-type or URL-prefix-type before assuming coverage).
2. Verify via DNS TXT record (fastest if you already manage DNS in HighLevel) or HTML file upload.
3. Submit `https://weddings.merakiaud.com/sitemap.xml` once verified.
4. Request indexing manually for `/` and `/wedding-ceremony-audio/` immediately after launch to
   speed up initial crawl.

## Recommended links: merakiaud.com → weddings.merakiaud.com

*(These are recommendations for the **main** site — not yet implemented there; that repo/site is
a separate codebase from this one.)*

- Add a line under the main site's **Events** section (already updated earlier this project —
  see the "PA rental for meetings, weddings, concerts" copy on `/live-sound`) that links the word
  "weddings" to `https://weddings.merakiaud.com/` with descriptive anchor text, e.g.:
  > "Planning a wedding? See our dedicated [wedding ceremony audio service](https://weddings.merakiaud.com/)."
- Consider a small nav or footer link on merakiaud.com: "Getting Married? → Meraki Weddings" —
  optional, but it's the single highest-value internal link merakiaud.com can offer this
  subdomain, since merakiaud.com currently has more established domain authority.

## Recommended links: weddings.merakiaud.com → merakiaud.com

Already implemented, with descriptive anchor text (never "click here"):

| Page | Anchor text | Destination |
|---|---|---|
| Home (credibility section) | "View the Meraki Audio Portfolio" | `merakiaud.com/portfolio` |
| Home, Footer, Service page, About page | "Meraki Audio" / "Explore Our Professional Audio Work" / "Learn More About Meraki Audio" | `merakiaud.com` |
| Contact qualifier gate (DJ redirect message) | "explore Meraki Audio" | `merakiaud.com` |

## Duplicate-content precautions

- No portfolio projects, blog posts, or production case studies are duplicated on this subdomain.
- The homepage's "Meraki Audio credibility" section is a **summary + link**, not a copy of any
  merakiaud.com page content.
- If real wedding photography/case studies are added later, keep them native to this subdomain
  (don't publish the same case study on both sites) — link *from* merakiaud.com's portfolio *to*
  this subdomain instead, if a wedding project ever belongs in both places.

## Brand relationship language (repeat on both sites)

"Meraki Weddings is a focused wedding service from Meraki Audio." Use consistently in metadata,
on-page copy, and structured data — never phrase it as two separate companies.
