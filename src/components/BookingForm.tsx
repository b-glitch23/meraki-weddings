import { useEffect } from "react";
import { HIGHLEVEL_FORM_EMBED_SRC, HIGHLEVEL_EMBED_SCRIPT_SRC } from "../lib/siteConfig";

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
 * The actual HighLevel "Booking Inquiry" form embed.
 *
 * Note (SEO-AUDIT.md M1): the fields inside this iframe are controlled in the
 * HighLevel Form Builder dashboard, not in this codebase. Adding fields like
 * "indoor or outdoor," "DJ already booked," or "rehearsal date" requires
 * editing the form directly in HighLevel — see IMPLEMENTATION-SUMMARY.md.
 */
export default function BookingForm() {
  useHighLevelFormScript();
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
