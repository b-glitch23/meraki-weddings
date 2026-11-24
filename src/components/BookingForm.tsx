import { useEffect } from "react";
import { HIGHLEVEL_FORM_EMBED_SRC, HIGHLEVEL_EMBED_SCRIPT_SRC } from "../lib/siteConfig";
import { trackFormSubmit } from "../lib/analytics";

function useHighLevelFormScript() {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${HIGHLEVEL_EMBED_SCRIPT_SRC}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.src = HIGHLEVEL_EMBED_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
}

/**
 * The HighLevel form lives in a cross-origin iframe, so we can't see its submit
 * button. HighLevel's embed posts a "set-sticky-contacts" message to the parent
 * page when a visitor submits, so we listen for that and fire a GA4
 * form_submit event (mark it as a key event in GA4 to count leads).
 */
function useHighLevelSubmitTracking() {
  useEffect(() => {
    let lastFired = 0;
    const onMessage = (event: MessageEvent) => {
      if (!/leadconnectorhq\.com|msgsndr\.com/.test(event.origin)) return;
      const data = event.data;
      const isSubmit = Array.isArray(data) && data[0] === "set-sticky-contacts";
      if (!isSubmit) return;
      const now = Date.now();
      if (now - lastFired < 5000) return; // the embed can post twice per submit
      lastFired = now;
      trackFormSubmit("booking_inquiry");
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
}

/**
 * The actual HighLevel "Booking Inquiry" form embed.
 *
 * Note (SEO-AUDIT.md M1): the fields inside this iframe are controlled in the
 * HighLevel Form Builder dashboard, not in this codebase. Adding fields like
 * "indoor or outdoor," "DJ already booked," or "rehearsal date" requires
 * editing the form directly in HighLevel — see IMPLEMENTATION-SUMMARY.md.
 */
export default function BookingForm() {
  useHighLevelFormScript();
  useHighLevelSubmitTracking();
  return (
    <div className="bg-white/70 border border-blush/60 rounded-2xl p-2 sm:p-4">
      <iframe
        src={HIGHLEVEL_FORM_EMBED_SRC}
        style={{ width: "100%", height: "900px", border: "none", borderRadius: "12px" }}
        id={`inline-${HIGHLEVEL_FORM_EMBED_SRC.split("/").pop()}`}
        title="Meraki Weddings Booking Inquiry"
      />
    </div>
  );
}
