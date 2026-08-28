import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { BUSINESS_INFO } from "../lib/siteConfig";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | Meraki Weddings"
        description="Booking terms for Meraki Weddings ceremony audio — deposits, cancellation, service area, and what we need from you on the day."
        path="/terms/"
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Terms of Service", path: "/terms/" }]} />

      <section className="px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl text-charcoal mb-2">Terms of Service</h1>
          <p className="text-charcoal/50 text-sm mb-8">Last updated July 27, 2026</p>

          <div className="bg-blush/25 border border-blush/60 rounded-xl p-5 mb-10 text-charcoal/70 text-sm leading-relaxed">
            These terms reflect the booking policies Meraki Audio confirmed for this service. They
            are not legal advice — have them reviewed by an attorney, and make sure your actual
            signed service agreement matches what's written here, before relying on this page.
          </div>

          <div className="space-y-8 text-charcoal/80 leading-relaxed">
            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">The Service</h2>
              <p>
                Meraki Weddings provides wedding ceremony audio — microphones, speakers, and music
                playback — for weddings {BUSINESS_INFO.serviceRadiusNote}, up to{" "}
                {BUSINESS_INFO.maxGuestCount} guests. We support ceremony, and, when your provided
                order of events calls for it, speeches, cocktail hour, and reception audio
                (including subwoofers for reception sound) at no extra charge beyond our day rate.
                Larger events can be arranged through Meraki Audio directly.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Booking & Deposit</h2>
              <p>
                A 20% deposit is required to hold your date. Dates are not considered booked until
                the deposit is received.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Cancellation & Rescheduling</h2>
              <p>
                Cancel or reschedule more than 45 days before your event and your deposit is
                refunded. Cancellations or reschedules made within 45 days of the event forfeit the
                deposit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">What We Need From You</h2>
              <p>
                To run your ceremony music and cues correctly, we need your order of events and
                playlist ahead of time. If these aren't provided, we'll do our best with what we
                have, but can't guarantee specific cues, reception coverage, or song timing.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Venue Requirements</h2>
              <p>
                Your venue must provide a minimum of two dedicated 120V power outlets accessible
                near the ceremony and/or reception setup area. Let us know at booking if you're
                unsure whether your venue meets this.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Weather & Venue Changes</h2>
              <p>
                We'll make every reasonable effort to deliver your service as planned, including
                through weather changes. If a last-minute change moves your event outside our
                standard service area ({BUSINESS_INFO.serviceRadiusNote}), an additional travel
                fee may apply.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Add-Ons</h2>
              <p>
                Additional or wireless microphones and rehearsal attendance are available for an
                added fee, confirmed at the time of booking. Subwoofers for reception sound are
                included in the day rate, not an add-on.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-charcoal mb-2">Questions</h2>
              <p>
                Reach out at{" "}
                <a href={BUSINESS_INFO.emailHref} className="underline hover:text-rose">
                  {BUSINESS_INFO.email}
                </a>{" "}
                or{" "}
                <a href={BUSINESS_INFO.phoneHref} className="underline hover:text-rose">
                  {BUSINESS_INFO.phone}
                </a>{" "}
                before booking if anything here doesn't match what you've discussed with us
                directly — your signed service agreement always governs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
