// Post-build step: give every route its own static HTML file with the right
// <title>, meta description, canonical, Open Graph and Twitter tags already
// in the served HTML (before any JavaScript runs).
//
// Why: the site is a client-rendered Vite + React app. Without this step,
// every URL is served the same dist/index.html, whose fallback head points
// the canonical at the homepage. Google reads that raw canonical first and
// treats subpages as duplicates of "/". React (react-helmet-async) still
// manages the head after mount; this only fixes what is served up front.
//
// Source of truth: the literal title/description/path props already passed
// to <SEO> or <ArticleLayout> in src/pages. Nothing is duplicated here. The
// build fails loudly if a route in public/sitemap.xml has no matching page,
// so a new page can't silently ship with the homepage canonical.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const SITE_URL = "https://weddings.merakiaud.com";

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".tsx") ? [p] : [];
  });
}

// Pull title/description/path string literals from each page's <SEO> or
// <ArticleLayout> props.
const prop = (src, name) => {
  const m = src.match(new RegExp(`\\b${name}="([^"]*)"`));
  return m ? m[1] : null;
};

const pages = new Map();
for (const file of walk(join(root, "src", "pages"))) {
  const src = readFileSync(file, "utf8");
  const block = src.match(/<(SEO|ArticleLayout)\b[\s\S]*?>/);
  if (!block) continue;
  const title = prop(block[0], "title");
  const description = prop(block[0], "description");
  const path = prop(block[0], "path");
  if (title && description && path) pages.set(path, { title, description, file });
}

const sitemap = readFileSync(join(root, "public", "sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].trim().replace(SITE_URL, "")
);

const missing = routes.filter((r) => !pages.has(r));
if (missing.length) {
  console.error(`[prerender-head] No page metadata found for sitemap routes: ${missing.join(", ")}`);
  process.exit(1);
}

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const shell = readFileSync(join(dist, "index.html"), "utf8");

function render({ title, description }, path) {
  const url = `${SITE_URL}${path}`;
  const t = esc(title);
  const d = esc(description);
  const swaps = [
    [/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`],
    [/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${d}" data-rh="true" />`],
    [/<link\s+rel="canonical"[\s\S]*?\/>/, `<link rel="canonical" href="${url}" data-rh="true" />`],
    [/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${t}" data-rh="true" />`],
    [/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${d}" data-rh="true" />`],
    [/<meta\s+property="og:url"[\s\S]*?\/>/, `<meta property="og:url" content="${url}" data-rh="true" />`],
    [/<meta\s+name="twitter:title"[\s\S]*?\/>/, `<meta name="twitter:title" content="${t}" data-rh="true" />`],
    [/<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${d}" data-rh="true" />`],
  ];
  // data-rh="true" marks these as react-helmet-async's own tags, so when React
  // mounts it replaces them instead of adding a second copy of each.
  let html = shell;
  for (const [re, rep] of swaps) {
    if (!re.test(html)) {
      console.error(`[prerender-head] index.html is missing a tag matching ${re}`);
      process.exit(1);
    }
    html = html.replace(re, rep);
  }
  return html;
}

for (const path of routes) {
  const html = render(pages.get(path), path);
  const out = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`[prerender-head] ${path} -> ${out.replace(dist, "dist")}`);
}

// 404 page: served by Vercel with a real 404 status for unknown URLs, and
// marked noindex so it never competes with real pages.
const nf = pages.get("/404/");
if (nf) {
  let html = render(nf, "/404/")
    .replace(/<link\s+rel="canonical"[^>]*\/>\s*/, "")
    .replace(/<title>/, `<meta name="robots" content="noindex" />\n    <title>`);
  writeFileSync(join(dist, "404.html"), html);
  console.log("[prerender-head] /404/ -> dist/404.html (noindex)");
}
