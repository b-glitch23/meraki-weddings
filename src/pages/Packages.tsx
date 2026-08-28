import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { trackPrimaryCTA, trackPackagesPageView } from "../lib/analytics";
import { BUSINESS_INFO } from "../lib/siteConfig";

const included = [
  "Pre-wedding planning call",
  "Professional ceremony sound system",
  "Two wired microphones",
  "Wireless microphones available for an additional fee",
  "Ceremony music playback",
  "Processional and recessional music cues",
  "Cocktail-hour and reception audio",
  "Subwoofers for reception sound",
  "Audio for speeches and announcements",
  "Delivery, setup, and soundcheck",
  "An experienced audio operator on site",
  "Equipment breakdown after the event",
  `Support for weddings of up to ${BUSINESS_INFO.maxGuestCount} guests`,
];

export default function Packages() {
  useEffect(() => {
    trackPackagesPageView();
  }, []);

  return (
    <>
      <SEO
        title="Wedding Sound Package & Day Rate | Tri-Cities WA"
        description="One straightforward day rate covers professional wedding ceremony and reception sound — microphones, speakers, music playback, and an on-site audio operator."
        path="/packages/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Packages", path: "/packages/" }]} />

      <section className="px-6 pt-10 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-6">
            Professional Wedding Sound — One Day Rate
          </h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            One straightforward day rate gives you professional sound support for your ceremony
            and reception, without hourly limits or unnecessary package upgrades.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto bg-white/60 border border-blush/60 rounded-2xl p-8 sm:p-10">
          <h2 className="font-display text-xl text-charcoal mb-5">Included</h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-charcoal/80">
                <span className="text-rose mt-0.5" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-charcoal/50 text-sm mt-6">
            Travel fees may apply to venues outside our standard service area.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">What's a Quote</h2>
          <p className="text-charcoal/70 leading-relaxed mb-3">
            Pricing stays quote-only, since every ceremony and venue is a little different. Check
            your date and we'll confirm your exact day-rate quote directly. A 20% deposit holds
            your date once you're ready to book.
          </p>
          <p className="text-charcoal/70 leading-relaxed">
            We're based in Richland, WA and serve weddings {BUSINESS_INFO.serviceRadiusNote}. See{" "}
            <Link to="/faq/" className="underline hover:text-rose">
              the FAQ
            </Link>{" "}
            for deposit, cancellation, and other common questions.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <Link
          to="/contact/"
          onClick={() => trackPrimaryCTA("packages_page")}
          className="inline-block bg-rose text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-charcoal transition-colors"
        >
          Check My Date
        </Link>
      </section>
    </>
  );
}
