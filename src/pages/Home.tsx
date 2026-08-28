import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { MERAKIAUD_PORTFOLIO_URL, BUSINESS_INFO } from "../lib/siteConfig";
import { trackPrimaryCTA, trackPortfolioLinkClick } from "../lib/analytics";

const fitPoints = [
  "You are not hiring a wedding DJ.",
  "You plan to use a playlist for ceremony music.",
  "Your venue does not provide reliable ceremony sound.",
  "Your officiant and vows need amplification.",
  "You need a small, professional setup rather than a large production.",
  "You want someone else handling microphones, speakers, and music cues.",
  "You need guests to hear clearly during an outdoor ceremony.",
];

const problems = [
  "The venue doesn't provide microphones.",
  "You're not hiring a DJ, but guests still need to hear the vows.",
  "A Bluetooth speaker isn't powerful or reliable enough for an outdoor space.",
  "Your officiant doesn't want to hold — or fumble with — a microphone.",
  "Ceremony music needs to start and stop at the right moment, every time.",
  "Nobody in the wedding party wants to manage cables, volume, or feedback.",
];

const included = [
  {
    title: "Microphones",
    copy:
      "Every booking includes two wired handheld microphones — one for the officiant, one for the couple, readers, or musicians. Additional microphones and wireless options are available for an added fee.",
  },
  {
    title: "Speakers",
    copy: "Two speakers and stands are included with every booking, sized and placed for your ceremony space.",
  },
  {
    title: "Ceremony Music Playback",
    copy:
      "Processional, recessional, and any interlude music cued at the right moments by an on-site operator. We have template playlists on hand if you don't have your own ready.",
  },
  {
    title: "Setup & Teardown",
    copy: "Equipment arrives, gets sound-checked, and is broken down after — handled for you.",
  },
];

const steps = [
  { step: "01", title: "Check Your Date", copy: "Tell us your wedding date and venue — we'll confirm availability." },
  { step: "02", title: "Talk Through Your Ceremony", copy: "We go over your space, timeline, and what your ceremony needs." },
  { step: "03", title: "We Handle Setup", copy: "Microphones and speakers arrive, get placed, and get sound-checked before guests arrive." },
  { step: "04", title: "Ceremony Sound, Handled", copy: "We manage levels and music cues during your ceremony, then break everything down." },
];

const faqPreview = [
  {
    q: "Do I need a DJ for wedding ceremony audio?",
    a: "No. Many couples skip a DJ entirely and just need reliable ceremony sound — microphones for vows and music playback at the right cues. That's exactly what Meraki Weddings focuses on.",
  },
  {
    q: "Can I just use a Bluetooth speaker?",
    a: "For a small, quiet indoor space, maybe. For most ceremonies — especially outdoors — a single Bluetooth speaker struggles with range, wind noise, and reliable amplification for vows.",
  },
  {
    q: "How many microphones do I actually need?",
    a: "Most ceremonies work well with around two: one for the officiant and one for the couple, readers, or musicians. Your exact setup depends on your ceremony format.",
  },
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPreview.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <SEO
        title="Wedding Ceremony Audio Without a DJ | Tri-Cities & Eastern WA"
        description="Professional wedding ceremony audio for couples without a DJ, serving the Tri-Cities and throughout Eastern Washington. Microphones, speakers, music playback, setup, and reliable support."
        path="/"
        jsonLd={[faqJsonLd]}
      />

      {/* Hero */}
      <section className="pt-20 pb-24 px-6 bg-gradient-to-b from-blush/40 to-cream">
        <div className="max-w-4xl mx-auto text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
            Wedding Ceremony Audio | Tri-Cities, Washington
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-charcoal mt-5">
            Professional Wedding Sound Without the DJ
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/80 mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
            Make sure every guest hears your vows, your music, and every meaningful moment.
          </p>
          <p className="text-base sm:text-lg text-charcoal/70 mt-4 max-w-2xl mx-auto leading-relaxed">
            Meraki Weddings provides professional microphones, speakers, music playback, and an
            experienced on-site audio operator for couples who want clear, reliable wedding sound
            — without hiring a traditional DJ.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/"
              onClick={() => trackPrimaryCTA("home_hero")}
              className="bg-rose text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-charcoal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            >
              Check My Date
            </Link>
          </div>
          <p className="text-charcoal/50 text-sm mt-6 max-w-xl mx-auto">
            A professional wedding sound service from Meraki Audio, serving weddings{" "}
            {BUSINESS_INFO.serviceRadiusNote}.
          </p>
        </div>
      </section>

      {/* Is This For You */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal text-center mb-10">
            This May Be the Right Fit If…
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {fitPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 bg-white/60 border border-blush/60 rounded-xl px-5 py-4 text-charcoal/80"
              >
                <span className="text-rose mt-0.5" aria-hidden="true">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="bg-charcoal/5 border border-charcoal/10 rounded-xl px-6 py-5 text-center">
            <p className="text-charcoal/70 leading-relaxed">
              Looking for a full wedding DJ, emcee, dance-floor entertainment, or reception music
              service?{" "}
              <Link to="/wedding-audio-without-a-dj/" className="underline hover:text-rose">
                Meraki Weddings may not be the right fit
              </Link>{" "}
              — but we're happy to point you in the right direction.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-20 px-6 bg-blush/25">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-5">
            Your Ceremony Deserves to Be Heard
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto font-medium">
            Your guests came to hear you exchange vows — not strain to understand what is being
            said.
          </p>
          <p className="text-charcoal/70 mt-4 leading-relaxed max-w-2xl mx-auto">
            Outdoor acoustics, wind, distance, and quiet voices can make even an intimate ceremony
            difficult to hear. Meraki Weddings handles the microphones, speakers, music cues, and
            live sound adjustments so every guest can stay connected to the moment.
          </p>
          <p className="font-display text-xl text-charcoal mt-6">
            You enjoy your wedding. We make sure everyone hears it.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
              The Problem
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4">
              Not Every Wedding Needs a DJ — Every Wedding Needs to Be Heard
            </h2>
            <p className="text-charcoal/70 mt-4 leading-relaxed">
              Skipping a DJ is a completely reasonable choice. Skipping ceremony sound usually
              isn't. Here's what tends to go wrong without it.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem) => (
              <li
                key={problem}
                className="bg-white/70 border border-blush/60 rounded-xl px-5 py-4 text-charcoal/80"
              >
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
              What May Be Included
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4">
              A Simple Setup, Not a Production
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {included.map((item) => (
              <div key={item.title} className="bg-white/60 border border-blush/60 rounded-2xl p-8">
                <h3 className="font-display text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link to="/wedding-ceremony-audio/" className="underline text-charcoal/70 hover:text-rose">
              See the full ceremony audio service page
            </Link>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-blush/25">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
              How the Service Works
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4">
              Small Setup, Professional Result
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step}>
                <span className="font-display text-4xl text-champagne">{s.step}</span>
                <h3 className="font-display text-lg text-charcoal mt-3 mb-2">{s.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{s.copy}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link to="/how-it-works/" className="underline text-charcoal/70 hover:text-rose">
              Read the full step-by-step process
            </Link>
          </p>
        </div>
      </section>

      {/* Outdoor */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
            Outdoor Ceremonies
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4 mb-5">
            Outdoor Weddings Often Need Amplification Too
          </h2>
          <p className="text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            Wind, distance, and open-air acoustics all work against a small speaker — even with a
            modest guest count. Proper microphone placement and speaker coverage make the
            difference between guests leaning in and guests hearing clearly.
          </p>
          <Link
            to="/outdoor-wedding-audio/"
            className="inline-block mt-6 underline text-charcoal/70 hover:text-rose"
          >
            See outdoor wedding audio considerations
          </Link>
        </div>
      </section>

      {/* Meraki Audio credibility */}
      <section className="py-20 px-6 bg-charcoal text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-champagne font-medium">
            Backed by Meraki Audio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-5">
            Wedding Audio Backed by Meraki Audio
          </h2>
          <p className="text-cream/70 leading-relaxed">
            Meraki Weddings is a focused wedding service from{" "}
            <a href="https://merakiaud.com" className="underline hover:text-champagne">
              Meraki Audio
            </a>
            , a Richland, WA recording and live-sound studio. The same professional care used for
            live audio and production work is applied to a simpler wedding ceremony setup.
          </p>
          <a
            href={MERAKIAUD_PORTFOLIO_URL}
            onClick={() => trackPortfolioLinkClick("home_credibility")}
            className="inline-block mt-6 bg-champagne text-charcoal px-7 py-3 rounded-full text-sm tracking-wide hover:bg-cream transition-colors"
          >
            View the Meraki Audio Portfolio
          </a>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl text-charcoal mb-3">Service Area</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Based in Richland, WA and serving weddings {BUSINESS_INFO.serviceRadiusNote} —
            including Kennewick, Pasco, Benton City, Prosser, Walla Walla, Spokane, and
            surrounding Eastern Washington communities. Venues further out may be possible with
            an added travel fee — just ask.
          </p>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-20 px-6 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal text-center mb-12">
            Questions Couples Ask
          </h2>
          <div className="space-y-8">
            {faqPreview.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-lg text-charcoal mb-2">{f.q}</h3>
                <p className="text-charcoal/70 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link to="/faq/" className="underline text-charcoal/70 hover:text-rose">
              See all frequently asked questions
            </Link>
          </p>
        </div>
      </section>

      {/* Meraki vs. DJ vs. Rental */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal">
              The Right Sound Option for Your Wedding
            </h2>
            <p className="text-charcoal/70 mt-4 leading-relaxed">
              Not every wedding needs a DJ — but nearly every wedding needs dependable sound.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10 items-stretch">
            <div className="bg-blush/30 border-2 border-rose rounded-2xl p-6">
              <h3 className="font-display text-lg text-charcoal mb-3">Meraki Weddings</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed mb-3">
                Best for couples who want professional ceremony and reception sound without
                traditional DJ entertainment.
              </p>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                You receive professional equipment, music playback, live audio management, and an
                experienced operator who stays on site. You provide the playlist and event plan;
                we make sure everything is heard clearly and played at the right time.
              </p>
            </div>
            <div className="bg-white/60 border border-blush/60 rounded-2xl p-6">
              <h3 className="font-display text-lg text-charcoal mb-3">Traditional Wedding DJ</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed mb-3">
                Best for couples who want reception entertainment, live song selection, crowd
                interaction, emceeing, announcements, games, and dance-floor management.
              </p>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                A DJ may also provide ceremony sound, but their primary role is usually
                entertainment and managing the reception atmosphere.
              </p>
            </div>
            <div className="bg-white/60 border border-blush/60 rounded-2xl p-6">
              <h3 className="font-display text-lg text-charcoal mb-3">Equipment Rental</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed mb-3">
                Best for someone who already has the technical knowledge, time, and designated
                personnel to set up, test, and operate the equipment.
              </p>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                A rental usually provides equipment — not planning, music cues, troubleshooting,
                or an audio professional monitoring the event.
              </p>
            </div>
          </div>
          <div className="bg-charcoal text-cream rounded-2xl p-8 sm:p-10 text-center">
            <p className="font-display text-xl sm:text-2xl mb-3">
              With Meraki, You Aren't Just Renting Speakers
            </p>
            <p className="text-cream/70 leading-relaxed max-w-2xl mx-auto mb-7">
              You're hiring an audio professional to manage the sound so you, your family, and
              your friends don't have to.
            </p>
            <Link
              to="/contact/"
              onClick={() => trackPrimaryCTA("home_comparison")}
              className="inline-block bg-champagne text-charcoal px-7 py-3 rounded-full text-sm tracking-wide hover:bg-cream transition-colors"
            >
              Check My Date
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-blush/25">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4">
            Let's Make Sure Your Wedding Is Heard
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-8">
            Tell us your date, venue, and wedding plans. We'll confirm availability and recommend
            the right sound setup for your day.
          </p>
          <Link
            to="/contact/"
            onClick={() => trackPrimaryCTA("home_final_cta")}
            className="inline-block bg-rose text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-charcoal transition-colors"
          >
            Check My Date
          </Link>
        </div>
      </section>
    </>
  );
}
