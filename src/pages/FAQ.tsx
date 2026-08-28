import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { trackPrimaryCTA } from "../lib/analytics";
import { BUSINESS_INFO } from "../lib/siteConfig";

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
    a: "Yes. An operator is on-site running sound for your entire booking — not just dropping off equipment. If needed, that can extend to your rehearsal and reception too.",
  },
  {
    q: "Is rehearsal attendance available?",
    a: "Yes, as an add-on billed at our day rate.",
  },
  {
    q: "What is the maximum guest count you can support?",
    a: "We comfortably support weddings up to 300 guests. Larger events can be arranged through Meraki Audio directly.",
  },
  {
    q: "What is your normal service radius?",
    a: `We're based in Richland, WA and serve weddings ${BUSINESS_INFO.serviceRadiusNote} — including Kennewick, Pasco, Benton City, Prosser, Walla Walla, and Spokane. Venues further out may be possible with an added travel fee.`,
  },
  {
    q: "Are indoor and outdoor weddings priced differently?",
    a: "No — pricing is the same regardless of venue type.",
  },
  {
    q: "Is power required, or is battery-powered equipment available?",
    a: "Power is required at the venue — a minimum of two dedicated 120V outlets. We don't currently offer battery-powered equipment.",
  },
  {
    q: "What happens in bad weather?",
    a: "We'll do everything we can to make your event happen as planned. If a last-minute move takes the venue outside our normal service area, a travel fee may apply.",
  },
  {
    q: "Is reception audio, speeches, or cocktail-hour audio ever available?",
    a: "Yes — it's included in the day rate as long as it's part of the order of events and playlist you provide. Subwoofers for reception dance-floor sound are included too, no separate add-on charge.",
  },
  {
    q: "Are package prices public?",
    a: "Not yet — pricing is confirmed directly when you check your date. See the packages page for the general framework.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes, a 20% deposit holds your date.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancel or reschedule more than 45 days before your date and your deposit is refunded. Inside 45 days, the deposit is non-refundable.",
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
        jsonLd={[faqJsonLd]}
      />
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
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
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
    a: "Yes. An operator is on-site running sound for your entire booking — not just dropping off equipment. If needed, that can extend to your rehearsal and reception too.",
  },
  {
    q: "Is rehearsal attendance available?",
    a: "Yes, as an add-on billed at our day rate.",
  },
  {
    q: "What is the maximum guest count you can support?",
    a: "We comfortably support weddings up to 300 guests. Larger events can be arranged through Meraki Audio directly.",
  },
  {
    q: "What is your normal service radius?",
    a: "We're based in Richland, WA and serve weddings within 30 miles of the Tri-Cities — Kennewick, Pasco, Benton City, Prosser, and surrounding Eastern Washington communities. Venues outside that radius may be possible with an added travel fee.",
  },
  {
    q: "Are indoor and outdoor weddings priced differently?",
    a: "No — pricing is the same regardless of venue type.",
  },
  {
    q: "Is power required, or is battery-powered equipment available?",
    a: "Power is required at the venue — a minimum of two dedicated 120V outlets. We don't currently offer battery-powered equipment.",
  },
  {
    q: "What happens in bad weather?",
    a: "We'll do everything we can to make your event happen as planned. If a last-minute move takes the venue outside our normal service area, a travel fee may apply.",
  },
  {
    q: "Is reception audio, speeches, or cocktail-hour audio ever available?",
    a: "Yes — it's included in the day rate as long as it's part of the order of events and playlist you provide. Subwoofers for dance-floor bass are the one add-on charge for reception.",
  },
  {
    q: "Are package prices public?",
    a: "Not yet — pricing is confirmed directly when you check your date. See the packages page for the general framework.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes, a 20% deposit holds your date.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancel or reschedule more than 45 days before your date and your deposit is refunded. Inside 45 days, the deposit is non-refundable.",
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
        jsonLd={[faqJsonLd]}
      />
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
