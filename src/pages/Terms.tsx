import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | Meraki Weddings"
        description="Terms governing use of the Meraki Weddings website and booking inquiries."
        path="/terms/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms/" }]} />

      <section className="px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl text-charcoal mb-6">Terms of Service</h1>
          <div className="bg-blush/25 border border-blush/60 rounded-xl p-6 mb-8 text-charcoal/70 text-sm">
            [BUSINESS CONFIRMATION NEEDED: this page is a placeholder. Actual booking terms —
            deposit policy, cancellation policy, rescheduling, weather contingencies, and
            liability language — should be confirmed by the business owner and reflected both
            here and in the actual service agreement couples sign.]
          </div>
          <p className="text-charcoal/70 leading-relaxed">
            This placeholder exists so the page is live and linkable ahead of launch. Replace this
            copy with reviewed terms before the site goes public on weddings.merakiaud.com.
          </p>
        </div>
      </section>
    </>
  );
}
