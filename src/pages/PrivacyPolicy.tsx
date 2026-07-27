import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Meraki Weddings"
        description="How Meraki Weddings collects and uses information submitted through this website."
        path="/privacy-policy/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy/" }]} />

      <section className="px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl text-charcoal mb-6">Privacy Policy</h1>
          <div className="bg-blush/25 border border-blush/60 rounded-xl p-6 mb-8 text-charcoal/70 text-sm">
            [BUSINESS CONFIRMATION NEEDED: this page is a placeholder. Final privacy policy
            language should be reviewed by the business owner (and an attorney, if desired)
            before publishing. It should describe what information the contact form collects,
            how it's stored in HighLevel, whether any analytics tool is in use, and how a visitor
            can request their data be deleted.]
          </div>
          <p className="text-charcoal/70 leading-relaxed">
            This placeholder exists so the page is live and linkable ahead of launch. Replace this
            copy with reviewed privacy policy language before the site goes public on
            weddings.merakiaud.com.
          </p>
        </div>
      </section>
    </>
  );
}
