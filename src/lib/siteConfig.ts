// Single source of truth for the production URL and cross-site links.
// Never hard-code the Vercel preview domain or weddings.merakiaud.com anywhere
// else in the codebase — always import from here.

export const SITE_URL = "https://weddings.merakiaud.com";
export const SITE_NAME = "Meraki Weddings";

export const MERAKIAUD_URL = "https://merakiaud.com";
export const MERAKIAUD_PORTFOLIO_URL = "https://merakiaud.com/portfolio";

export const HIGHLEVEL_FORM_ID = "8leVfMi2URk4EUlQbmdQ";
export const HIGHLEVEL_FORM_EMBED_SRC = `https://api.leadconnectorhq.com/widget/form/${HIGHLEVEL_FORM_ID}`;
export const HIGHLEVEL_EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

// Confirmed business facts (owner-verified 2026-07-27, service radius and
// subwoofer inclusion revised 2026-08-27 — see CONTENT-QUESTIONS.md history).
export const BUSINESS_INFO = {
  phone: "(509) 778-6151",
  phoneHref: "tel:+15097786151",
  email: "weddings@merakiaud.com",
  emailHref: "mailto:weddings@merakiaud.com",
  serviceRadiusMiles: 150,
  serviceRadiusNote: "within 150 miles of the Tri-Cities, throughout Eastern Washington",
  maxGuestCount: 300,
  depositPercent: 20,
  cancellationNoticeDays: 45,
  responseTimeBusinessDays: 2,
  // GA4 property "Meraki Weddings" created 2026-07-27, separate from the
  // merakiaud.com main-site property. The actual gtag.js loader lives in
  // index.html (loads earliest, no React-mount dependency) — this value is
  // kept here for reference/debugging only, not read by any tracking code.
  gaMeasurementId: "G-VFZ04LZBTN",
};

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
