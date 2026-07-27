import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { BUSINESS_INFO } from "../lib/siteConfig";

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
          <h1 className="font-display text-3xl text-charcoal mb-2">Privacy Policy</h1>
          <p className="text-charcoal/50 text-sm mb-8">Last updated July 27, 2026</p>

          <div className="bg-blush/25 border border-blush/60 rounded-xl p-5 mb-10 text-charcoal/70 text-sm leading-relaxed">
            This policy was drafted from the business details Meraki Audio provided and reflects
            how this site actually works today. It is not legal advice — have it reviewed by an
            attorney before relying on it, especially once analytics or payment processing is
            added.
          </div>

          <div className="space-y-8 text-charcoal/80 leading-relaxed">
            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">What We Collect</h2>
              <p>
                When you submit a wedding date inquiry through this site, we collect the
                information you provide in that form — names, contact details, wedding date,
                venue, and any other details about your ceremony you choose to share. We do not
                collect payment information through this website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">How We Use It</h2>
              <p>
                We use the information you submit to respond to your inquiry, provide a quote,
                plan your ceremony audio setup, and — if you book — deliver the service. We don't
                sell your information or share it with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Where It's Stored</h2>
              <p>
                Inquiry submissions are processed and stored through HighLevel, our customer
                relationship management platform. HighLevel's own privacy and security practices
                govern how that data is handled on their systems.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Analytics</h2>
              <p>
                We plan to use Google Analytics to understand how visitors use this site. Once
                that's active, Google Analytics may set cookies and collect standard usage data
                (pages visited, general location, device type). It does not collect the contents
                of your inquiry form.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Your Choices</h2>
              <p>
                You can ask us to access, correct, or delete the information you've submitted at
                any time by emailing{" "}
                <a href={BUSINESS_INFO.emailHref} className="underline hover:text-rose">
                  {BUSINESS_INFO.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Children's Privacy</h2>
              <p>
                This site is intended for adults planning a wedding and is not directed at
                children. We don't knowingly collect information from anyone under 18.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Questions</h2>
              <p>
                Reach out anytime at{" "}
                <a href={BUSINESS_INFO.emailHref} className="underline hover:text-rose">
                  {BUSINESS_INFO.email}
                </a>{" "}
                or{" "}
                <a href={BUSINESS_INFO.phoneHref} className="underline hover:text-rose">
                  {BUSINESS_INFO.phone}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
