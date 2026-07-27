import { useEffect } from "react";

function useHighLevelFormScript() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
}

function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide text-charcoal">
          Meraki <span className="text-rose">Weddings</span>
        </a>
        <a
          href="#inquire"
          className="hidden sm:inline-block bg-charcoal text-cream text-sm tracking-wide px-5 py-2.5 rounded-full hover:bg-rose transition-colors"
        >
          Check Availability
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 px-6 bg-gradient-to-b from-blush/40 to-cream">
      <div className="max-w-4xl mx-auto text-center">
        <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
          Tri-Cities, WA &amp; Beyond
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-charcoal mt-5">
          Wedding Sound &amp; Audio Rental for Richland, Kennewick, Pasco &amp; Beyond
        </h1>
        <p className="text-lg sm:text-xl text-charcoal/70 mt-6 max-w-2xl mx-auto leading-relaxed">
          From your first look to your last dance, Meraki Weddings provides professional
          ceremony and reception sound so every "I do," toast, and song comes through clear.
          Serving weddings across the Tri-Cities and available for travel throughout Eastern
          Washington and beyond.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#inquire"
            className="bg-rose text-cream px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-charcoal transition-colors"
          >
            Check Your Date
          </a>
          <a
            href="#offer"
            className="border border-charcoal/20 text-charcoal px-8 py-3.5 rounded-full text-sm tracking-wide hover:border-charcoal transition-colors"
          >
            See What's Included
          </a>
        </div>
      </div>
    </section>
  );
}

const offerings = [
  {
    title: "Ceremony Sound",
    copy:
      "Crisp wireless mics for your officiant, vows, and readers, plus discreet speakers so every guest — front row or back — hears every word.",
  },
  {
    title: "Reception & Dance Floor Audio",
    copy:
      "Full-range speakers built for toasts, first dances, and a packed dance floor, tuned to the room so the party sounds as good as it feels.",
  },
  {
    title: "Toasts, Speeches & Announcements",
    copy:
      "Handheld and lapel mics for the wedding party and family, so speeches land and your MC's announcements are never missed.",
  },
  {
    title: "Setup, Monitoring & Breakdown",
    copy:
      "We arrive early, run sound checks before guests walk in, monitor levels through the day, and handle breakdown — you never touch a cable.",
  },
];

function Offerings() {
  return (
    <section id="offer" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4">
            Wedding Audio, Handled Start to Finish
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {offerings.map((item) => (
            <div key={item.title} className="bg-white/60 border border-blush/60 rounded-2xl p-8">
              <h3 className="font-display text-xl text-charcoal mb-3">{item.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    step: "01",
    title: "Tell Us About Your Day",
    copy: "Share your date, venue, and guest count through a quick inquiry — no obligation.",
  },
  {
    step: "02",
    title: "Get a Custom Quote",
    copy: "We put together a package sized to your ceremony and reception, with transparent pricing.",
  },
  {
    step: "03",
    title: "Reserve Your Date",
    copy: "Sign your agreement and lock in your date — our calendar fills up fast in peak season.",
  },
  {
    step: "04",
    title: "We Handle the Sound",
    copy: "Our team arrives early, sets up, runs sound through your event, and breaks down after — you just enjoy the day.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-blush/25">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4">
            Booking Wedding Sound, Made Simple
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
      </div>
    </section>
  );
}

const eventTypes = [
  "Ceremonies & Vow Renewals",
  "Receptions & Dance Floors",
  "Rehearsal Dinners",
  "Elopements & Micro-Weddings",
  "Outdoor & Vineyard Weddings",
  "Destination Weddings Beyond the Tri-Cities",
];

function PerfectFor() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
            Perfect For
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4">
            Every Kind of Wedding Day
          </h2>
          <p className="text-charcoal/70 mt-4 leading-relaxed">
            Based in Richland, WA and serving couples throughout Kennewick, Pasco, Walla Walla,
            Yakima, and beyond — including destination and vineyard weddings across Eastern
            Washington.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventTypes.map((type) => (
            <div
              key={type}
              className="bg-white/60 border border-blush/60 rounded-xl px-6 py-5 text-center text-charcoal font-medium"
            >
              {type}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Do we still need this if we're hiring a wedding DJ?",
    a: "Many couples pair us with their DJ or band — we handle ceremony mics, speeches, and reinforcement while your DJ focuses on the music. We can also run full reception sound solo if you'd rather skip a separate DJ system.",
  },
  {
    q: "How far do you travel outside the Tri-Cities?",
    a: "We're based in Richland, WA and regularly travel throughout Kennewick, Pasco, Walla Walla, Yakima, and beyond for weddings and destination events. Let us know your venue and we'll confirm availability and travel.",
  },
  {
    q: "What's actually included in a wedding audio rental?",
    a: "Every package includes equipment, delivery, professional setup, an on-site technician during your event, and breakdown — so you're never troubleshooting a mic between the vows and the first dance.",
  },
  {
    q: "How early should we book our wedding date?",
    a: "Peak wedding season (May–October) in the Tri-Cities books up months in advance. We recommend reaching out as soon as your venue and date are confirmed.",
  },
];

function FAQ() {
  return (
    <section className="py-24 px-6 bg-blush/25">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
            Questions Couples Ask
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4">
            Wedding Sound, Answered
          </h2>
        </div>
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
  );
}

function BookingForm() {
  useHighLevelFormScript();
  return (
    <section id="inquire" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="uppercase tracking-[0.3em] text-xs text-rose font-medium">
            Check Availability
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mt-4">
            Let's Talk About Your Date
          </h2>
          <p className="text-charcoal/70 mt-4 leading-relaxed">
            Tell us about your wedding and we'll follow up with availability and a custom quote —
            usually within one business day.
          </p>
        </div>
        <div className="bg-white/70 border border-blush/60 rounded-2xl p-2 sm:p-4">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/8leVfMi2URk4EUlQbmdQ"
            style={{ width: "100%", height: "900px", border: "none", borderRadius: "12px" }}
            id="inline-8leVfMi2URk4EUlQbmdQ"
            title="Meraki Weddings Booking Inquiry"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14 px-6 border-t border-blush/60 bg-cream">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="font-display text-lg text-charcoal">Meraki Weddings</p>
          <p className="text-charcoal/60 text-sm mt-1">
            A wedding sound &amp; audio rental service by{" "}
            <a href="https://merakiaud.com" className="underline hover:text-rose">
              Meraki Audio
            </a>{" "}
            — Richland, WA.
          </p>
        </div>
        <p className="text-charcoal/50 text-sm">
          Serving Richland, Kennewick, Pasco &amp; the greater Tri-Cities, WA — and beyond.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Offerings />
      <HowItWorks />
      <PerfectFor />
      <FAQ />
      <BookingForm />
      <Footer />
    </div>
  );
}
