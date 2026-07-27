import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { trackPrimaryCTA } from "../lib/analytics";

export default function WeddingAudioWithoutDJ() {
  return (
    <>
      <SEO
        title="Wedding Audio Without a DJ | Tri-Cities WA"
        description="Planning wedding music without a DJ? Meraki provides ceremony microphones, speakers, and playlist playback — the audio piece, without the DJ package."
        path="/wedding-audio-without-a-dj/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Wedding Audio Without a DJ", path: "/wedding-audio-without-a-dj/" }]} />

      <section className="px-6 pt-10 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-6">
            How to Have Professional Wedding Audio Without Hiring a DJ
          </h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Not hiring a DJ doesn't mean skipping sound. Here's what a no-DJ wedding still needs,
            and where Meraki fits in.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Not Every Wedding Needs a DJ</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Plenty of couples skip a DJ entirely — using a playlist for the reception, a friend as
            emcee, or simply keeping things quiet and low-key. That's a completely reasonable
            choice, and it doesn't require replacing a DJ with another vendor of the same size.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">
            What You Still Need for Ceremony Sound
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            Even without a DJ, your ceremony still needs guests to hear the officiant and your
            vows, and it still needs music cued at the right moments for the processional and
            recessional. That's a much smaller job than full reception entertainment — but it
            still benefits from the right equipment and someone managing it.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">
            Using a Playlist Instead of a DJ
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            A playlist works well for ceremony and even reception music — as long as it's played
            through a system that can actually cover your space and cue tracks at the right
            moment. A phone propped against a small speaker is a common failure point.
          </p>
          <Link
            to="/resources/can-you-use-a-bluetooth-speaker-for-a-wedding/"
            className="inline-block mt-4 underline text-charcoal/70 hover:text-rose"
          >
            Can you use a Bluetooth speaker for a wedding ceremony?
          </Link>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Where Meraki Fits In</h2>
          <p className="text-charcoal/70 leading-relaxed">
            Meraki Weddings covers the ceremony-audio piece — microphones, speakers, and music
            playback — for couples who don't need or want a full DJ package.
          </p>
          <Link to="/wedding-ceremony-audio/" className="inline-block mt-4 underline text-charcoal/70 hover:text-rose">
            See the full ceremony audio service
          </Link>
        </div>
      </section>

      <section className="px-6 py-14 bg-blush/25">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-charcoal mb-4">Where Meraki Doesn't Fit In</h2>
          <p className="text-charcoal/70 leading-relaxed">
            If you're looking for a full wedding DJ — reception music, emceeing, dance-floor
            entertainment, or announcements throughout the night — Meraki Weddings isn't built for
            that, and we'd rather tell you that upfront than take on the wrong job.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <h2 className="font-display text-2xl text-charcoal mb-4">How It Works</h2>
        <p className="text-charcoal/70 leading-relaxed max-w-xl mx-auto mb-6">
          Check your date, talk through your ceremony, and we handle setup and sound on the day.
        </p>
        <Link
          to="/contact/"
          onClick={() => trackPrimaryCTA("no_dj_page")}
          className="inline-block bg-rose text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-charcoal transition-colors"
        >
          Ask About Your Venue
        </Link>
        <p className="mt-6">
          <Link to="/faq/" className="underline text-charcoal/70 hover:text-rose">
            See frequently asked questions
          </Link>
        </p>
      </section>
    </>
  );
}
