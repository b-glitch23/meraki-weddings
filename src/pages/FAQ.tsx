import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";
import Breadcrumbs from "../components/Breadcrumbs";
import { trackPrimaryCTA } from "../lib/analytics";

const faqs = [
  {
    q: "Do I need a DJ for wedding ceremony audio?",
    a: "No. Ceremony audio and DJ services are two different things. A DJ typically covers reception music and entertainment; ceremony audio is just microphones, speakers, and music playback for your vows. Plenty of couples book one without the other.",
  },
  {
    q: "How many microphones does a wedding ceremony need?",
    a: "Most ceremonies work well with around two: one for the officiant and one for the couple, readers, or musicians. Larger wedding parties or multiple readers may need more — it depends on your format.",
  },
  {
    q: "Can I just use a Bluetooth speaker for my ceremony?",
    a: "For a very small, quiet indoor space, it might work. For most ceremonies — and especially outdoors — a single Bluetooth speaker struggles with range, wind noise, and reliably amplifying a voice at the volume vows are usually spoken at.",
  },
  {
    q: "Do outdoor weddings need microphones?",
    a: "Usually, yes. Wind, distance, and open-air acoustics all work against sound the way walls and ceilings would help indoors, even with a smaller guest count.",
  },
  {
    q: "Is a technician present throughout the ceremony?",
    a: "[BUSINESS CONFIRMATION NEEDED: whether an audio technician remains on-site for the entire ceremony]",
  },
  {
    q: "Is rehearsal attendance available?",
    a: "[BUSINESS CONFIRMATION NEEDED: whether rehearsal attendance is offered or available as an add-on]",
  },
  {
    q: "What is the maximum guest count you can support?",
    a: "[BUSINESS CONFIRMATION NEEDED: guest-count limits, if any]",
  },
  {
    q: "What is your normal service radius?",
    a: "We're based in Richland, WA and regularly serve Kennewick, Pasco, Benton City, Prosser, Walla Walla, and surrounding Eastern Washington communities. [BUSINESS CONFIRMATION NEEDED: exact service radius / travel-fee cutoff distance]",
  },
  {
    q: "Are indoor and outdoor weddings priced differently?",
    a: "[BUSINESS CONFIRMATION NEEDED: whether pricing differs by venue type]",
  },
  {
    q: "Is power required, or is battery-powered equipment available?",
    a: "[BUSINESS CONFIRMATION NEEDED: whether battery-powered equipment is available for venues without accessible power]",
  },
  {
    q: "What happens in bad weather?",
    a: "[BUSINESS CONFIRMATION NEEDED: policy for rain, extreme heat, or last-minute venue changes]",
  },
  {
    q: "Is reception audio, speeches, or cocktail-hour audio ever available?",
    a: "[BUSINESS CONFIRMATION NEEDED: whether any reception-adjacent audio is available, or whether the service is strictly ceremony-only]",
  },
  {
    q: "Are package prices public?",
    a: "Not yet — pricing is confirmed directly when you check your date. See the packages page for the general framework.",
  },
  {
    q: "Is a deposit required?",
    a: "[BUSINESS CONFIRMATION NEEDED: deposit policy]",
  },
  {
    q: "What is the cancellation policy?",
    a: "[BUSINESS CONFIRMATION NEEDED: cancellation policy]",
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs
      .filter((f) => !f.a.startsWith("[BUSINESS CONFIRMATION NEEDED"))
      .map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
  };

  return (
    <>
      <SEO
        title="Wedding Ceremony Audio FAQ | Meraki Weddings"
        description="Common questions about wedding ceremony microphones, speakers, music playback, outdoor setups, and whether you need a DJ at all."
        path="/faq/"
      >
        <JsonLd data={faqJsonLd} />
      </SEO>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq/" }]} />

      <section className="px-6 pt-10 pb-16 text-center">
        <h1 className="font-display text-4xl sm:text-5xl text-charcoal">
          Frequently Asked Questions
        </h1>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="sr-only">Ceremony Audio Questions</h2>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-lg text-charcoal mb-2">{f.q}</h3>
                <p className="text-charcoal/70 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-blush/25 text-center">
        <p className="text-charcoal/70 mb-6">
          Still have questions?{" "}
          <Link to="/resources/" className="underline hover:text-rose">
            Browse our resource guides
          </Link>{" "}
          or reach out directly.
        </p>
        <Link
          to="/contact/"
          onClick={() => trackPrimaryCTA("faq_page")}
          className="inline-block bg-rose text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-charcoal transition-colors"
        >
          Ask About Your Venue
        </Link>
      </section>
    </>
  );
}
