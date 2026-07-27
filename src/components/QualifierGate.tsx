import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";
import { trackFormStart, trackPhoneClick, trackEmailClick } from "../lib/analytics";
import { MERAKIAUD_URL, BUSINESS_INFO } from "../lib/siteConfig";

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: "ceremony-only", label: "Ceremony audio only" },
  { value: "ceremony-plus", label: "Ceremony and limited additional audio" },
  { value: "not-sure", label: "I'm not sure" },
  { value: "full-dj", label: "Full DJ and reception entertainment" },
];

/**
 * A front-end qualifier gate that sits in front of the HighLevel booking
 * form. This is implemented entirely in this codebase (no HighLevel access
 * required), and filters out the one lead type Meraki Weddings explicitly
 * does not serve: full DJ / reception entertainment.
 *
 * It does not add fields to the HighLevel form itself — see
 * BookingForm.tsx and SEO-AUDIT.md (issue M1) for that separate, manual step.
 */
export default function QualifierGate() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <fieldset className="bg-white/70 border border-blush/60 rounded-2xl p-6 sm:p-8">
        <legend className="font-display text-lg text-charcoal px-1">
          Are you looking for ceremony audio only, or a full wedding DJ?
        </legend>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {options.map((option) => (
            <label
              key={option.value}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors ${
                selected === option.value
                  ? "border-rose bg-blush/30"
                  : "border-blush/60 hover:border-rose/60"
              }`}
            >
              <input
                type="radio"
                name="audio-qualifier"
                value={option.value}
                checked={selected === option.value}
                onChange={() => {
                  setSelected(option.value);
                  if (!selected) trackFormStart("wedding_inquiry");
                }}
                className="accent-rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose"
              />
              <span className="text-charcoal text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {selected === "full-dj" && (
        <div className="mt-8 bg-blush/25 border border-blush/60 rounded-2xl p-6 sm:p-8 text-center">
          <p className="font-display text-lg text-charcoal mb-2">
            Meraki Weddings May Not Be the Right Fit
          </p>
          <p className="text-charcoal/70 leading-relaxed max-w-xl mx-auto">
            Meraki Weddings specializes in ceremony audio — microphones, speakers, and music
            playback for your vows — not full DJ services, emceeing, or reception entertainment.
            If your plans change and you just need ceremony sound alongside a separate DJ, we're
            happy to help. In the meantime, you're welcome to{" "}
            <a
              href={MERAKIAUD_URL}
              className="underline hover:text-rose"
            >
              explore Meraki Audio
            </a>{" "}
            for the team's broader audio and production work.
          </p>
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="mt-5 text-sm underline text-charcoal/60 hover:text-rose"
          >
            Actually, I'd like ceremony audio — go back
          </button>
        </div>
      )}

      {selected && selected !== "full-dj" && (
        <div className="mt-8">
          <BookingForm />
        </div>
      )}

      {!selected && (
        <p className="text-center text-charcoal/50 text-sm mt-6">
          Choose an option above to see the inquiry form.
        </p>
      )}

      <p className="text-center text-charcoal/40 text-xs mt-6">
        Prefer to reach us another way? Call{" "}
        <a
          href={BUSINESS_INFO.phoneHref}
          onClick={() => trackPhoneClick()}
          className="underline hover:text-rose"
        >
          {BUSINESS_INFO.phone}
        </a>{" "}
        or email{" "}
        <a
          href={BUSINESS_INFO.emailHref}
          onClick={() => trackEmailClick()}
          className="underline hover:text-rose"
        >
          {BUSINESS_INFO.email}
        </a>
        , or{" "}
        <Link to="/faq/" className="underline hover:text-rose">
          check the FAQ
        </Link>{" "}
        first.
      </p>
    </div>
  );
}
