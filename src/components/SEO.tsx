import { Helmet } from "react-helmet-async";
import { SITE_NAME, absoluteUrl } from "../lib/siteConfig";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  children?: React.ReactNode;
};

/**
 * Per-page metadata: title, description, self-referencing canonical, and
 * Open Graph / Twitter Card tags. Renders into <head> via react-helmet-async
 * on every route change.
 *
 * Note (see SEO-AUDIT.md Section 0): this is client-rendered. Googlebot
 * executes JS and indexes this correctly, but non-JS social crawlers will
 * only see the static fallback tags in index.html, not these per-page values.
 */
export default function SEO({ title, description, path, children }: SEOProps) {
  const url = absoluteUrl(path);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {children}
    </Helmet>
  );
}
