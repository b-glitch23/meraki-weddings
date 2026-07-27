import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import QualifierGate from "../components/QualifierGate";

export default function Contact() {
  return (
    <>
      <SEO
        title="Check Your Wedding Date | Meraki Weddings"
        description="Tell us about your ceremony — date, venue, and whether you need ceremony audio only or something bigger. We'll follow up with availability."
        path="/contact/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }]} />

      <section className="px-6 pt-6 pb-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-4">
            Check Your Wedding Date
          </h1>
          <p className="text-charcoal/70 leading-relaxed">
            Tell us about your ceremony and we'll follow up with availability within 2 business
            days.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <QualifierGate />
        </div>
      </section>
    </>
  );
}
