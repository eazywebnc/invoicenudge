import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "InvoiceNudge Terms of Service — rules and guidelines for using our service.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-sm text-amber-400 hover:text-amber-300 transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
        <p className="text-neutral-500 mb-12">Last updated: April 6, 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using InvoiceNudge (&ldquo;the Service&rdquo;), operated by EazyWebNC,
              you agree to be bound by these Terms of Service. If you do not agree, do not use the
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
            <p>
              InvoiceNudge is an automated invoice reminder platform that helps freelancers,
              agencies, and businesses send payment reminders, track invoice status, and manage
              accounts receivable. The service includes email reminders, payment link generation,
              analytics, and client management tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Account Registration</h2>
            <p>
              You must provide accurate, complete information when creating an account. You are
              responsible for maintaining the confidentiality of your credentials and for all
              activity under your account. You must notify us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Subscription and Billing</h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-400">
              <li>Free plan: 5 invoices per month, basic features, no charge</li>
              <li>Pro plan: $19/month, unlimited invoices, advanced features</li>
              <li>Business plan: $49/month, team features, API access, priority support</li>
              <li>Subscriptions renew automatically. Cancel anytime before the next billing cycle.</li>
              <li>Refunds are handled on a case-by-case basis within 14 days of purchase.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-400 mt-2">
              <li>Use the Service to send spam or unsolicited messages</li>
              <li>Upload malicious content or attempt to compromise the Service</li>
              <li>Impersonate others or provide false information</li>
              <li>Use the Service for illegal activities or to harass others</li>
              <li>Reverse-engineer, decompile, or attempt to extract the source code</li>
              <li>Exceed rate limits or abuse API access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Email Sending</h2>
            <p>
              InvoiceNudge sends emails on your behalf to your clients. You are responsible for
              ensuring you have the right to contact the recipients. We comply with anti-spam laws
              (CAN-SPAM, GDPR) and include unsubscribe mechanisms in all reminder emails.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Intellectual Property</h2>
            <p>
              The Service, including its design, code, logos, and content, is owned by EazyWebNC. You
              retain ownership of all data you upload. By using the Service, you grant us a limited
              license to process your data solely to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              InvoiceNudge is provided &ldquo;as is&rdquo; without warranties of any kind. We are
              not liable for any indirect, incidental, or consequential damages arising from your use
              of the Service. Our total liability shall not exceed the amount you paid us in the
              preceding 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Termination</h2>
            <p>
              We may suspend or terminate your account if you violate these Terms. You may delete
              your account at any time. Upon termination, your data will be deleted within 30 days
              unless required by law to retain it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes via
              email or through the Service. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of New Caledonia / France. Any disputes shall be
              resolved in the courts of Noum&eacute;a, New Caledonia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Contact</h2>
            <p>
              For questions about these Terms, contact us at:{" "}
              <a href="mailto:contact@eazyweb.nc" className="text-amber-400 hover:text-amber-300">
                contact@eazyweb.nc
              </a>
            </p>
            <p className="mt-2">
              EazyWebNC — Noum&eacute;a, New Caledonia
              <br />
              Phone: +687 95 90 85
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
