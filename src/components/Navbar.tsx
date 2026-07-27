import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { trackPrimaryCTA } from "../lib/analytics";

const navLinks = [
  { to: "/wedding-ceremony-audio/", label: "Ceremony Audio" },
  { to: "/wedding-audio-without-a-dj/", label: "Without a DJ" },
  { to: "/outdoor-wedding-audio/", label: "Outdoor Weddings" },
  { to: "/packages/", label: "Packages" },
  { to: "/how-it-works/", label: "How It Works" },
  { to: "/faq/", label: "FAQ" },
  { to: "/about/", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-cream/95 backdrop-blur border-b border-blush/50 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-xl tracking-wide text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose rounded"
          onClick={() => setOpen(false)}
        >
          Meraki <span className="text-rose">Weddings</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose rounded ${
                  isActive ? "text-rose" : "text-charcoal/70 hover:text-rose"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact/"
            onClick={() => trackPrimaryCTA("navbar")}
            className="hidden sm:inline-block bg-charcoal text-cream text-sm tracking-wide px-5 py-2.5 rounded-full hover:bg-rose transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
          >
            Check Your Wedding Date
          </Link>
          <button
            type="button"
            className="lg:hidden p-2 text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose rounded"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="lg:hidden border-t border-blush/50 bg-cream px-6 py-4 flex flex-col gap-3"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-charcoal/80 text-sm py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose rounded"
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact/"
            onClick={() => {
              trackPrimaryCTA("mobile_navbar");
              setOpen(false);
            }}
            className="bg-charcoal text-cream text-sm text-center tracking-wide px-5 py-2.5 rounded-full mt-2"
          >
            Check Your Wedding Date
          </Link>
        </nav>
      )}
    </header>
  );
}
