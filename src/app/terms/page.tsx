import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — InvoiceNudge',
  description: 'Terms of Service for InvoiceNudge by EazyWebNC',
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-neutral-950 text-zinc-300 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-zinc-500 mb-8">Last updated: April 6, 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance</h2>
            <p>By using InvoiceNudge, you agree to these terms. If you do not agree, do not use the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Service Description</h2>
            <p>InvoiceNudge provides automated invoice reminder tools including payment tracking, reminder sequences, and client analytics for freelancers and businesses.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. User Obligations</h2>
            <p>You agree to use InvoiceNudge for legitimate business purposes only. You are responsible for the accuracy of invoice data and compliance with applicable billing regulations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Billing</h2>
            <p>Free plans have usage limits. Paid plans are billed monthly via Stripe. Cancel anytime with no penalty.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
            <p>InvoiceNudge is provided &ldquo;as is&rdquo;. We are not liable for failed payment collections, delayed reminders, or indirect damages arising from use of the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact</h2>
            <p>EazyWebNC, Noumea, New Caledonia<br />Email: contact@eazyweb.nc</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <a href="/" className="text-amber-400 hover:text-amber-300 transition">&larr; Back to InvoiceNudge</a>
        </div>
      </div>
    </div>
  )
}
