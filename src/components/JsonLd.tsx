// Renders a single JSON-LD <script> tag. Meant to be used as a child of
// <SEO>...</SEO> (react-helmet-async hoists <script> children into <head>).
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  );
}
