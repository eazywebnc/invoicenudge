import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — InvoiceNudge',
  description: 'Privacy Policy for InvoiceNudge by EazyWebNC',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-neutral-950 text-zinc-300 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-zinc-500 mb-8">Last updated: April 6, 2026</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>We collect account information (email, name), invoice data you upload (amounts, client details, due dates), and usage analytics. We never access your financial accounts directly.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use your data to send invoice reminders, generate payment analytics, and improve our service. Invoice data is used solely for your reminder workflows.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Data Security</h2>
            <p>All data is encrypted at rest and in transit. Invoice data is stored on Supabase with Row Level Security. We follow SOC 2 best practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Your Rights</h2>
            <p>You can export, correct, or delete your data at any time. Contact us at contact@eazyweb.nc for data requests.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Contact</h2>
            <p>InvoiceNudge is operated by EazyWebNC, Noumea, New Caledonia.<br />Email: contact@eazyweb.nc</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <a href="/" className="text-amber-400 hover:text-amber-300 transition">&larr; Back to InvoiceNudge</a>
        </div>
      </div>
    </div>
  )
}
