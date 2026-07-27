import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Meraki Weddings"
        description="This page couldn't be found."
        path="/404/"
      />
      <section className="px-6 py-32 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="font-display text-4xl text-charcoal mb-4">Page Not Found</h1>
          <p className="text-charcoal/70 leading-relaxed mb-8">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="bg-charcoal text-cream px-6 py-2.5 rounded-full text-sm hover:bg-rose transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/contact/"
              className="border border-charcoal/20 text-charcoal px-6 py-2.5 rounded-full text-sm hover:border-charcoal transition-colors"
            >
              Check Your Wedding Date
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
