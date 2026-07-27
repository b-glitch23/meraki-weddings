import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { trackPrimaryCTA } from "../lib/analytics";

export default function OutdoorWeddingAudio() {
  return (
    <>
      <SEO
        title="Outdoor Wedding Ceremony Audio | Tri-Cities WA"
        description="Wind, distance, and open-air acoustics all affect whether guests hear your vows. Outdoor wedding ceremony audio serving the Tri-Cities and Eastern Washington."
        path="/outdoor-wedding-audio/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Outdoor Wedding Audio", path: "/outdoor-wedding-audio/" }]} />

      <section className="px-6 pt-10 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-6">
            Outdoor Wedding Ceremony Audio
          </h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Open-air ceremonies bring their own audio challenges — even with a small guest count.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">
            Why Outdoor Ceremonies Need Amplification Too
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            Voices carry differently outdoors than in a room with walls to reflect sound back to
            guests. Even a modest guest count can end up straining to hear vows spoken at normal
            conversational volume once you're outside.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Wind, Distance & Layout</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Wind noise, distance between the altar and back row, and the natural layout of an
            outdoor venue all affect how sound travels. Speaker placement and microphone choice
            both need to account for the specific space, not a one-size-fits-all setup.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Power & Battery Considerations</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Outdoor venues don't always have convenient power access.{" "}
            [BUSINESS CONFIRMATION NEEDED: whether battery-powered equipment is available for
            venues without accessible power]
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">What Meraki Brings Outdoors</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Microphones and speakers appropriate for the space, positioned and tested before
            guests arrive, with levels managed throughout the ceremony to account for wind and
            ambient noise.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Weather Considerations</h2>
          <p className="text-charcoal/70 leading-relaxed">
            [BUSINESS CONFIRMATION NEEDED: policy for rain, extreme heat, or venue changes due to
            weather]
          </p>
        </div>
      </section>

      <section className="px-6 py-14 text-center">
        <h2 className="font-display text-2xl text-charcoal mb-3">Service Area</h2>
        <p className="text-charcoal/70 leading-relaxed max-w-xl mx-auto">
          Based in Richland, WA and serving outdoor weddings throughout Kennewick, Pasco, Benton
          City, Prosser, Walla Walla, and surrounding Eastern Washington communities.
        </p>
      </section>

      <section className="px-6 py-16 text-center bg-blush/25">
        <Link to="/faq/" className="underline text-charcoal/70 hover:text-rose">
          See frequently asked questions
        </Link>
        <div className="mt-8">
          <Link
            to="/contact/"
            onClick={() => trackPrimaryCTA("outdoor_page")}
            className="inline-block bg-rose text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-charcoal transition-colors"
          >
            Check Your Wedding Date
          </Link>
        </div>
      </section>
    </>
  );
}
