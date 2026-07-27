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

// Business facts that have not been confirmed by the owner yet.
// Every value below is a clearly-labeled placeholder — see CONTENT-QUESTIONS.md.
export const BUSINESS_PLACEHOLDERS = {
  phone: "[BUSINESS CONFIRMATION NEEDED: public phone number for the wedding service]",
  email: "[BUSINESS CONFIRMATION NEEDED: public email address for the wedding service]",
  serviceRadius:
    "[BUSINESS CONFIRMATION NEEDED: standard service radius / travel-fee cutoff distance]",
  gaMeasurementId: "[BUSINESS CONFIRMATION NEEDED: Google Analytics 4 measurement ID]",
};

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
