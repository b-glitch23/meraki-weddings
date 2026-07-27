import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { trackPrimaryCTA, trackPackagesPageView } from "../lib/analytics";

const packages = [
  {
    name: "Ceremony Essentials",
    forWho:
      "Designed for couples who need a straightforward ceremony setup: two wired microphones, two speakers with stands, and ceremony music playback, run by an on-site operator.",
  },
  {
    name: "Outdoor Ceremony Audio",
    forWho:
      "The same essentials, planned around your outdoor space — wind, layout, distance, and power all factored in. Requires two dedicated 120V outlets at the venue.",
  },
  {
    name: "Custom Ceremony Setup",
    forWho:
      "For live musicians, multiple readers, extra wireless microphones, subwoofers for dance-floor bass, rehearsal attendance, or full-day coverage through speeches and reception.",
  },
];

export default function Packages() {
  useEffect(() => {
    trackPackagesPageView();
  }, []);

  return (
    <>
      <SEO
        title="Wedding Audio Packages | Tri-Cities WA"
        description="Three simple ways to book wedding ceremony audio — Ceremony Essentials, Outdoor Ceremony Audio, and Custom Ceremony Setup. See what fits your day."
        path="/packages/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Packages", path: "/packages/" }]} />

      <section className="px-6 pt-10 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-6">
            Simple Ways to Book Wedding Ceremony Audio
          </h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Three straightforward starting points — the right one depends on your venue and
            ceremony. Exact pricing and inclusions are confirmed when you reach out.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-white/60 border border-blush/60 rounded-2xl p-8 flex flex-col">
              <h2 className="font-display text-xl text-charcoal mb-3">{pkg.name}</h2>
              <p className="text-charcoal/70 leading-relaxed flex-1">{pkg.forWho}</p>
              <p className="text-charcoal/40 text-xs mt-4">
                Priced by quote — check your date to get exact numbers for your ceremony.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">
            What's Included, What's a Quote
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-3">
            Every booking includes two wired microphones, two speakers with stands, ceremony
            music playback, and an operator on-site for the full booking — billed at our day
            rate, which covers ceremony through reception if your order of events calls for it.
            Rehearsal attendance, extra or wireless microphones, and subwoofers for dance-floor
            bass are all available as add-ons.
          </p>
          <p className="text-charcoal/70 leading-relaxed">
            Exact pricing stays quote-only — every ceremony is a little different. A 20% deposit
            holds your date once you're ready to book. See{" "}
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
          Request Ceremony Audio
        </Link>
      </section>
    </>
  );
}
