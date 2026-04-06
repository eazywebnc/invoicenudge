import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "InvoiceNudge Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-sm text-amber-400 hover:text-amber-300 transition-colors mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
        <p className="text-neutral-500 mb-12">Last updated: April 6, 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              InvoiceNudge (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is operated by
              EazyWebNC, a web agency based in New Caledonia. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use our invoice reminder
              service at invoicenudge.eazyweb.nc.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly:</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-400">
              <li>Account information (name, email address, password)</li>
              <li>Invoice data (client names, amounts, due dates, payment status)</li>
              <li>Client contact information (email addresses for sending reminders)</li>
              <li>Payment information (processed securely via Stripe; we do not store card details)</li>
              <li>Usage data (pages visited, features used, device information)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 text-neutral-400">
              <li>To provide and maintain the InvoiceNudge service</li>
              <li>To send automated invoice reminders on your behalf</li>
              <li>To process payments and manage subscriptions</li>
              <li>To generate analytics and insights about payment patterns</li>
              <li>To communicate with you about updates, support, and marketing (with consent)</li>
              <li>To improve our service and develop new features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing</h2>
            <p>
              We do not sell your personal data. We share information only with service providers
              necessary to operate InvoiceNudge (e.g., Supabase for data storage, Stripe for
              payments, email delivery services). All third parties are contractually required to
              protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption in transit
              (TLS/SSL), encryption at rest, and secure authentication. However, no method of
              transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. You can request deletion of
              your account and all associated data at any time by contacting us at
              contact@eazyweb.nc.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-400 mt-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Cookies</h2>
            <p>
              We use essential cookies to maintain your session and preferences. We use analytics
              cookies only with your consent to understand how our service is used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact</h2>
            <p>
              For any questions about this Privacy Policy or your data, contact us at:{" "}
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
