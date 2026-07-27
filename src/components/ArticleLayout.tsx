import { Link } from "react-router-dom";
import SEO from "./SEO";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import { absoluteUrl } from "../lib/siteConfig";
import { trackPrimaryCTA } from "../lib/analytics";

type ArticleLayoutProps = {
  title: string;
  description: string;
  path: string;
  h1: string;
  updatedDate: string;
  children: React.ReactNode;
};

/**
 * Shared shell for the four educational resource articles: SEO tags,
 * Article JSON-LD (author is a placeholder — see CONTENT-QUESTIONS.md),
 * breadcrumbs, and a consistent soft CTA back into the service page and
 * contact page.
 */
export default function ArticleLayout({
  title,
  description,
  path,
  h1,
  updatedDate,
  children,
}: ArticleLayoutProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description,
    url: absoluteUrl(path),
    dateModified: updatedDate,
    author: {
      "@type": "Organization",
      name: "Meraki Audio",
    },
    publisher: {
      "@type": "Organization",
      name: "Meraki Audio",
    },
  };

  return (
    <>
      <SEO title={title} description={description} path={path}>
        <JsonLd data={articleJsonLd} />
      </SEO>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/" },
          { name: h1, path },
        ]}
      />

      <article className="px-6 pt-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl text-charcoal mb-3">{h1}</h1>
          <p className="text-charcoal/40 text-xs mb-10">
            Written by the Meraki Audio team · updated {updatedDate}
          </p>

          <div className="prose-article text-charcoal/80 leading-relaxed space-y-6">{children}</div>

          <div className="mt-14 border-t border-blush/60 pt-8 text-center">
            <p className="text-charcoal/70 mb-5">
              Want help with your ceremony instead of doing it yourself?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/wedding-ceremony-audio/"
                className="border border-charcoal/20 text-charcoal px-6 py-2.5 rounded-full text-sm hover:border-charcoal transition-colors"
              >
                See the Ceremony Audio Service
              </Link>
              <Link
                to="/contact/"
                onClick={() => trackPrimaryCTA(`article_${path}`)}
                className="bg-rose text-cream px-6 py-2.5 rounded-full text-sm hover:bg-charcoal transition-colors"
              >
                Check Your Wedding Date
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
