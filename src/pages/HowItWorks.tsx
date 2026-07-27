import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { trackPrimaryCTA } from "../lib/analytics";

const steps = [
  {
    title: "Inquiry & Date Check",
    copy: "Share your wedding date, venue, and a bit about your ceremony. We confirm availability and whether ceremony audio is the right fit.",
  },
  {
    title: "Planning Your Setup",
    copy: "We talk through your venue layout, indoor or outdoor considerations, and how many microphones your ceremony format calls for.",
  },
  {
    title: "Rehearsal Considerations",
    copy: "[BUSINESS CONFIRMATION NEEDED: whether rehearsal attendance is offered or available as an add-on]",
  },
  {
    title: "Ceremony Day",
    copy: "Equipment arrives ahead of your ceremony, gets placed and sound-checked, and is monitored through vows, readings, and music cues.",
  },
  {
    title: "Teardown",
    copy: "Once your ceremony wraps, equipment is broken down and cleared — one less thing for you or your wedding party to think about.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <SEO
        title="How Wedding Ceremony Audio Works | Meraki Weddings"
        description="From your first inquiry to teardown after the ceremony — here's exactly how booking wedding ceremony audio with Meraki works."
        path="/how-it-works/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "How It Works", path: "/how-it-works/" }]} />

      <section className="px-6 pt-10 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-6">How It Works</h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            A simple process, start to finish.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto space-y-10">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-6">
              <span className="font-display text-3xl text-champagne shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-xl text-charcoal mb-2">{s.title}</h2>
                <p className="text-charcoal/70 leading-relaxed">{s.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-blush/25 text-center">
        <Link to="/faq/" className="underline text-charcoal/70 hover:text-rose">
          See frequently asked questions
        </Link>
        <div className="mt-8">
          <Link
            to="/contact/"
            onClick={() => trackPrimaryCTA("how_it_works_page")}
            className="inline-block bg-rose text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-charcoal transition-colors"
          >
            Check Your Wedding Date
          </Link>
        </div>
      </section>
    </>
  );
}
