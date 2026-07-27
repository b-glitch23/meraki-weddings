import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { absoluteUrl } from "../lib/siteConfig";
import JsonLd from "./JsonLd";

export type Crumb = { name: string; path: string };

/**
 * Visual breadcrumb nav + matching BreadcrumbList JSON-LD.
 * Pass the full trail including "Home" and the current page.
 * Example: <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq/" }]} />
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return (
    <>
      <Helmet>
        <JsonLd data={jsonLd} />
      </Helmet>
      <nav aria-label="breadcrumb" className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-charcoal/50">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="text-charcoal/70 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link to={item.path} className="hover:text-rose focus-visible:text-rose">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
