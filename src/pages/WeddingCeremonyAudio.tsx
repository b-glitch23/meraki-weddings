import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { trackPrimaryCTA, trackPortfolioLinkClick } from "../lib/analytics";
import { MERAKIAUD_URL, absoluteUrl, BUSINESS_INFO } from "../lib/siteConfig";

export default function WeddingCeremonyAudio() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wedding ceremony audio",
    name: "Wedding Ceremony Audio",
    url: absoluteUrl("/wedding-ceremony-audio/"),
    provider: { "@type": "Organization", name: "Meraki Audio", url: MERAKIAUD_URL },
    areaServed: ["Richland WA", "Kennewick WA", "Pasco WA", "Tri-Cities WA"],
    description:
      "Wedding ceremony audio for couples without a DJ: microphones, speakers, and ceremony music playback.",
  };

  return (
    <>
      <SEO
        title="Wedding Ceremony Sound & Microphones | Tri-Cities WA"
        description="Ceremony microphones, speakers, and music playback for weddings without a DJ. Serving Richland, Kennewick, Pasco, and the Tri-Cities, WA."
        path="/wedding-ceremony-audio/"
        jsonLd={[serviceJsonLd]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Wedding Ceremony Audio", path: "/wedding-ceremony-audio/" }]} />

      <section className="px-6 pt-10 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
            Main Service
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal mt-4 mb-6">
            Wedding Ceremony Audio for Couples Without a DJ
          </h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            A simple, professional audio setup for your ceremony — microphones, speakers, and
            music playback — without hiring a full DJ or entertainment package.
          </p>
          <Link
            to="/contact/"
            onClick={() => trackPrimaryCTA("service_page_hero")}
            className="inline-block mt-8 bg-rose text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-charcoal transition-colors"
          >
            Check Your Wedding Date
          </Link>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">What This Service Is</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Meraki Weddings handles the audio piece of your ceremony: making sure your officiant
            and vows are heard clearly, your ceremony music plays at the right moments, and the
            whole thing sounds clean without anyone in your wedding party managing cables or
            volume. It is not a DJ service, an emcee service, or a reception entertainment
            package — it's focused, ceremony-only sound.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Who It's For</h2>
          <ul className="space-y-2 text-charcoal/70">
            <li>• Couples who are not hiring a wedding DJ</li>
            <li>• Couples using a playlist for ceremony music</li>
            <li>• Outdoor ceremonies where a Bluetooth speaker won't reliably cover the space</li>
            <li>• Venues that don't provide their own ceremony sound</li>
            <li>• Officiants, planners, or family members who don't want to manage audio themselves</li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">What May Be Included</h2>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            Every booking includes two wired handheld microphones, two speakers with stands,
            ceremony music playback (template playlists available if you don't have your own),
            setup and teardown, and an on-site operator running sound throughout — not just
            dropped-off equipment. Additional microphones, wireless mics, and rehearsal
            attendance are all available, billed at our day rate.
          </p>
          <Link to="/packages/" className="inline-block mt-4 underline text-charcoal/70 hover:text-rose">
            See package options
          </Link>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Why Two Microphones Matter</h2>
          <p className="text-charcoal/70 leading-relaxed">
            One microphone covers your officiant. A second covers the couple, a reader, or a
            musician — so vows, readings, and exchanges are all heard clearly without someone
            passing a single mic back and forth mid-ceremony. It's a small detail that makes a
            noticeable difference for guests seated further back.
          </p>
          <Link
            to="/resources/how-many-microphones-does-a-wedding-ceremony-need/"
            className="inline-block mt-4 underline text-charcoal/70 hover:text-rose"
          >
            Read more about how many microphones a ceremony needs
          </Link>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Ceremony Music Playback</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Processional, recessional, and any interlude music is cued and played at the right
            moment through the same system — no propping up a phone next to a small speaker and
            hoping it doesn't cut out.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Outdoor Wedding Considerations</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Wind, distance, and open-air acoustics all affect ceremony audio outdoors, even for
            smaller guest counts.
          </p>
          <Link
            to="/outdoor-wedding-audio/"
            className="inline-block mt-4 underline text-charcoal/70 hover:text-rose"
          >
            See outdoor wedding audio considerations
          </Link>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">What Meraki Handles</h2>
            <ul className="space-y-2 text-charcoal/70">
              <li>• Equipment setup and teardown</li>
              <li>• Sound check before your ceremony</li>
              <li>• Audio level management</li>
              <li>• Processional, recessional, and other music cues — as long as you provide the order of events and playlist</li>
              <li>• On-site troubleshooting, with an operator present for the full booking</li>
              <li>• Speeches, cocktail-hour, and reception audio reinforcement, included in the day rate when part of your provided order of events</li>
              <li>• Subwoofers for reception dance-floor sound, included in the day rate</li>
              <li>• A pre-wedding planning call to walk through your venue and order of events</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-4">What Meraki Does Not Provide</h2>
            <ul className="space-y-2 text-charcoal/70">
              <li>• DJ entertainment — emceeing, reading the room, or live song selection</li>
              <li>• Dance-floor lighting</li>
              <li>• Music curation — you provide the playlist and order of events</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">How the Process Works</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Check your date, talk through your ceremony, we handle setup and sound on the day, then
            teardown.
          </p>
          <Link to="/how-it-works/" className="inline-block mt-4 underline text-charcoal/70 hover:text-rose">
            Read the full step-by-step process
          </Link>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Service Area</h2>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Based in Richland, WA and serving weddings {BUSINESS_INFO.serviceRadiusNote} —
            including Kennewick, Pasco, Benton City, Prosser, Walla Walla, and Spokane. Weddings
            up to {BUSINESS_INFO.maxGuestCount} guests are supported directly; larger events can
            be arranged through Meraki Audio.
          </p>
          <p className="text-charcoal/60 text-sm">
            Curious about the broader work behind Meraki Weddings?{" "}
            <a
              href={MERAKIAUD_URL}
              onClick={() => trackPortfolioLinkClick("service_page")}
              className="underline hover:text-rose"
            >
              Explore Our Professional Audio Work
            </a>
          </p>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <Link
          to="/faq/"
          className="underline text-charcoal/70 hover:text-rose"
        >
          See frequently asked questions
        </Link>
        <div className="mt-8">
          <Link
            to="/contact/"
            onClick={() => trackPrimaryCTA("service_page_bottom")}
            className="inline-block bg-rose text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-charcoal transition-colors"
          >
            Check Your Wedding Date
          </Link>
        </div>
      </section>
    </>
  );
}
