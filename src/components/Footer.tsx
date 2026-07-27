import { Link } from "react-router-dom";
import { MERAKIAUD_URL, BUSINESS_INFO } from "../lib/siteConfig";
import { trackPortfolioLinkClick, trackPhoneClick, trackEmailClick } from "../lib/analytics";

const columns = [
  {
    heading: "Wedding Audio",
    links: [
      { to: "/wedding-ceremony-audio/", label: "Ceremony Audio" },
      { to: "/wedding-audio-without-a-dj/", label: "Wedding Audio Without a DJ" },
      { to: "/outdoor-wedding-audio/", label: "Outdoor Wedding Audio" },
      { to: "/packages/", label: "Packages" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { to: "/how-it-works/", label: "How It Works" },
      { to: "/faq/", label: "FAQ" },
      { to: "/resources/", label: "Resources" },
      { to: "/about/", label: "About" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { to: "/privacy-policy/", label: "Privacy Policy" },
      { to: "/terms/", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-blush/60 bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="font-display text-lg text-charcoal">
            Meraki Weddings
          </Link>
          <p className="text-charcoal/60 text-sm mt-3 leading-relaxed">
            Wedding ceremony audio by{" "}
            <a
              href={MERAKIAUD_URL}
              onClick={() => trackPortfolioLinkClick("footer")}
              className="underline hover:text-rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose rounded"
            >
              Meraki Audio
            </a>{" "}
            — a focused wedding service, not a full DJ or production company.
          </p>
          <p className="text-charcoal/50 text-sm mt-3">
            Based in Richland, WA — serving weddings within 30 miles of the Tri-Cities.
          </p>
          <p className="text-charcoal/50 text-sm mt-3">
            <a
              href={BUSINESS_INFO.phoneHref}
              onClick={() => trackPhoneClick()}
              className="hover:text-rose"
            >
              {BUSINESS_INFO.phone}
            </a>
            {" · "}
            <a
              href={BUSINESS_INFO.emailHref}
              onClick={() => trackEmailClick()}
              className="hover:text-rose"
            >
              {BUSINESS_INFO.email}
            </a>
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="font-display text-sm text-charcoal mb-3">{col.heading}</p>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-charcoal/60 text-sm hover:text-rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-blush/50">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-charcoal/45">
          © {new Date().getFullYear()} Meraki Weddings, a service of Meraki Audio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
