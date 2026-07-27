// Lightweight analytics event hook.
//
// No analytics script is installed yet — [BUSINESS CONFIRMATION NEEDED: Google
// Analytics 4 measurement ID]. Once a GA4 property (or other analytics tool)
// exists, drop its loader script into index.html and this function will start
// firing real events immediately with zero changes to the pages below.
//
// Until then, calls are no-ops in production and log to the console in dev,
// so the event names/payloads are already validated.

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(eventName: string, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
    return;
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[analytics:dev-only]", eventName, payload);
  }
}

// Named helpers for the specific events the SEO/conversion brief calls out.
export const trackPrimaryCTA = (location: string) =>
  track("primary_cta_click", { location });

export const trackSecondaryCTA = (location: string) =>
  track("secondary_cta_click", { location });

export const trackFormStart = (formName: string) =>
  track("form_start", { form_name: formName });

export const trackFormSubmit = (formName: string) =>
  track("form_submit", { form_name: formName });

export const trackPhoneClick = () => track("phone_click");

export const trackEmailClick = () => track("email_click");

export const trackPortfolioLinkClick = (location: string) =>
  track("portfolio_link_click_merakiaud", { location });

export const trackPackagesPageView = () => track("packages_page_view");
