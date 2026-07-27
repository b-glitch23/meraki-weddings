import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

const articles = [
  {
    to: "/resources/wedding-ceremony-audio-checklist/",
    title: "Wedding Ceremony Audio Checklist",
    copy: "A practical checklist for wedding ceremony sound — whether you hire help or handle it yourself.",
  },
  {
    to: "/resources/how-to-have-wedding-music-without-a-dj/",
    title: "How to Have Wedding Music Without a DJ",
    copy: "What still needs a real sound system, and where a DJ isn't actually required.",
  },
  {
    to: "/resources/how-many-microphones-does-a-wedding-ceremony-need/",
    title: "How Many Microphones Does a Wedding Ceremony Need?",
    copy: "The short answer, the 'it depends' answer, and when you need more than two.",
  },
  {
    to: "/resources/can-you-use-a-bluetooth-speaker-for-a-wedding/",
    title: "Can You Use a Bluetooth Speaker for a Wedding Ceremony?",
    copy: "Where a Bluetooth speaker works fine, and where it falls short.",
  },
];

export default function ResourcesHub() {
  return (
    <>
      <SEO
        title="Wedding Ceremony Audio Resources | Meraki Weddings"
        description="Guides on wedding ceremony microphones, sound without a DJ, and outdoor audio — written by the wedding audio team at Meraki."
        path="/resources/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources/" }]} />

      <section className="px-6 pt-10 pb-16 text-center">
        <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-4">
          Wedding Ceremony Audio Resources
        </h1>
        <p className="text-charcoal/70 max-w-xl mx-auto">
          Practical guides for couples planning ceremony sound — with or without our help.
        </p>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.to}
              to={article.to}
              className="block bg-white/60 border border-blush/60 rounded-2xl p-8 hover:border-rose transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose"
            >
              <h2 className="font-display text-xl text-charcoal mb-3">{article.title}</h2>
              <p className="text-charcoal/70 leading-relaxed">{article.copy}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
