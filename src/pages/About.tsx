import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { MERAKIAUD_URL } from "../lib/siteConfig";
import { trackPortfolioLinkClick } from "../lib/analytics";

export default function About() {
  return (
    <>
      <SEO
        title="About Meraki Weddings | A Focused Service From Meraki Audio"
        description="Meraki Weddings is a focused ceremony-audio service from Meraki Audio, a Richland, WA recording and live-sound studio."
        path="/about/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]} />

      <section className="px-6 pt-10 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-6">
            About Meraki Weddings
          </h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            A focused wedding service from Meraki Audio.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">
            A Focused Service From Meraki Audio
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            Meraki Weddings is a wedding ceremony audio service from the team at Meraki Audio, a
            recording and live-sound studio based in Richland, WA. Rather than trying to be a full
            wedding DJ or entertainment company, Meraki Weddings applies that same professional
            audio care to a simpler, ceremony-focused setup.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">What We Focus On</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Ceremony microphones, appropriate speakers, and ceremony music playback — set up,
            monitored, and torn down by someone else, so your wedding party doesn't have to think
            about cables, volume, or music cues.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">
            What We Intentionally Don't Do
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            We don't position Meraki Weddings as a DJ replacement, an emcee service, or a
            reception entertainment company. If that's what you need,{" "}
            <Link to="/wedding-audio-without-a-dj/" className="underline hover:text-rose">
              this page explains where Meraki fits and where it doesn't
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-6 py-14 text-center">
        <h2 className="font-display text-2xl text-charcoal mb-3">Service Area</h2>
        <p className="text-charcoal/70 leading-relaxed max-w-xl mx-auto mb-8">
          Based in Richland, WA and serving weddings in Kennewick, Pasco, Benton City, Prosser,
          Walla Walla, and surrounding Eastern Washington communities.
        </p>
        <a
          href={MERAKIAUD_URL}
          onClick={() => trackPortfolioLinkClick("about_page")}
          className="inline-block bg-charcoal text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-rose transition-colors"
        >
          Learn More About Meraki Audio
        </a>
      </section>
    </>
  );
}
