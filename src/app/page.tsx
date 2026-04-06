'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Receipt, Bell, CreditCard, BarChart3, Clock, ArrowRight, Sparkles, Check, Star, TrendingUp, Shield, Zap } from 'lucide-react'

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
}

const features = [
  {
    icon: Bell,
    title: 'Smart Reminder Sequences',
    desc: 'Polite, firm, then urgent. Auto-escalating tone based on days overdue. Always professional.',
  },
  {
    icon: BarChart3,
    title: 'Invoice Tracking Dashboard',
    desc: 'See all invoices at a glance: paid, pending, overdue. Real-time status with actionable insights.',
  },
  {
    icon: CreditCard,
    title: 'Payment Links',
    desc: 'Include payment links in every reminder. Stripe, PayPal, bank transfer. One-click pay.',
  },
  {
    icon: TrendingUp,
    title: 'Client Insights',
    desc: 'Know which clients always pay late. Payment behavior analytics and credit scoring.',
  },
]

const steps = [
  { num: '01', title: 'Import your invoices', desc: 'Upload CSV or connect your billing tool. Takes 2 minutes.' },
  { num: '02', title: 'Set reminder schedule', desc: 'Choose frequency and tone. We handle the rest automatically.' },
  { num: '03', title: 'Get paid faster', desc: 'Sit back while InvoiceNudge follows up politely and persistently.' },
]

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['5 invoices/month', 'Basic reminders', 'Email only', 'Payment tracking'],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    features: ['Unlimited invoices', 'Smart sequences', 'Payment links', 'Client analytics', 'Multi-currency', 'Priority support'],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Business',
    price: '$49',
    period: '/month',
    features: ['Team accounts', 'API access', 'Custom branding', 'Webhooks', 'SSO', 'Dedicated manager'],
    cta: 'Contact Sales',
    popular: false,
  },
]

function FloatingInvoice() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-72 shadow-2xl shadow-amber-500/10"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-zinc-500">INVOICE #1247</span>
        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full font-medium">Overdue</span>
      </div>
      <div className="text-2xl font-bold text-white mb-1">$4,250.00</div>
      <div className="text-sm text-zinc-500 mb-4">Due: March 15, 2026</div>
      <div className="flex items-center gap-2">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center"
        >
          <Bell className="w-4 h-4 text-amber-400" />
        </motion.div>
        <span className="text-xs text-amber-400">Reminder sent 2h ago</span>
      </div>
    </motion.div>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-neutral-950 to-orange-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.1),transparent_60%)]" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Automated Invoice Reminders
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-6"
              >
                Stop Chasing
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Payments.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-zinc-400 max-w-lg mb-8"
              >
                Automated invoice reminders that are polite, persistent, and effective.
                Track overdue invoices and get paid 2x faster.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start gap-4 mb-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all"
                >
                  Get Paid Faster — Free <ArrowRight className="w-5 h-5" />
                </motion.button>
                <span className="text-zinc-500 text-sm pt-2">No credit card required</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4 text-sm text-zinc-500"
              >
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Bank-grade security</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold text-amber-300">
                    <AnimatedCounter target={12} prefix="$" suffix="M+" /> recovered
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex justify-center"
            >
              <FloatingInvoice />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pain Points */}
      <section className="py-24 px-4 bg-neutral-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
            className="text-4xl sm:text-5xl font-bold text-center mb-16"
          >
            Before vs After{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">InvoiceNudge</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-red-400 mb-6">Without InvoiceNudge</h3>
              <ul className="space-y-4">
                {['Awkward follow-up emails you dread writing', 'Forgotten invoices buried in spreadsheets', 'Cash flow anxiety every month', 'Strained client relationships'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-400">
                    <span className="text-red-400 mt-0.5">✕</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={1}
              className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-green-400 mb-6">With InvoiceNudge</h3>
              <ul className="space-y-4">
                {['Automated polite reminders on autopilot', 'Smart escalation: polite → firm → urgent', 'Predictable payments, steady cash flow', 'Professional communication that preserves trust'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-bold mb-4">
              Get Paid Without the{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Awkwardness</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Smart tools that handle the uncomfortable conversations so you don&apos;t have to.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition">
                    <f.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
            className="text-4xl sm:text-5xl font-bold text-center mb-16"
          >
            Simple as{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">1-2-3</span>
          </motion.h2>

          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-2xl font-black text-black">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                  <p className="text-zinc-400 text-lg">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { value: 12, prefix: '$', suffix: 'M+', label: 'Revenue recovered' },
              { value: 47, suffix: '%', label: 'Faster payments' },
              { value: 10, suffix: 'K+', label: 'Invoices tracked' },
            ].map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} custom={i} className="text-center">
                <div className="text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter target={s.value} prefix={s.prefix || ''} suffix={s.suffix} />
                </div>
                <p className="text-zinc-400">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Lisa R.', role: 'Freelance Designer', text: 'I used to spend hours writing follow-up emails. Now InvoiceNudge handles it and I get paid 2 weeks earlier on average.' },
              { name: 'Mark D.', role: 'Agency Owner', text: 'We recovered $45K in overdue invoices in the first month. The escalation sequences are perfectly toned.' },
              { name: 'Priya S.', role: 'Consultant', text: 'My clients actually appreciate the professional reminders. No more awkward conversations about money.' },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-zinc-500 text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 bg-neutral-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-zinc-400 text-lg">Start free. Upgrade when your business grows.</motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className={`relative rounded-2xl p-8 ${p.popular ? 'bg-gradient-to-b from-amber-900/30 to-neutral-900 border-2 border-amber-500' : 'bg-neutral-900/50 border border-neutral-800'}`}
              >
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black">{p.price}</span>
                  <span className="text-zinc-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-zinc-300">
                      <Check className="w-4 h-4 text-amber-400 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 rounded-xl font-semibold transition ${p.popular ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/25' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
                >
                  {p.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-bold mb-6">
              Never Chase a Payment{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Again</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-zinc-400 text-lg mb-8">
              Join 1,000+ freelancers who get paid on time, every time.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold px-10 py-4 rounded-xl flex items-center gap-2 mx-auto shadow-lg shadow-amber-500/25"
              >
                Start Free — No Credit Card Required <Receipt className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Receipt className="w-6 h-6 text-amber-400" />
            <span className="font-bold text-lg">InvoiceNudge</span>
          </div>
          <div className="flex items-center gap-6 text-zinc-500 text-sm">
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <a href="/terms" className="hover:text-white transition">Terms</a>
            <a href="mailto:contact@eazyweb.nc" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-zinc-600 text-sm">
            Made with love in New Caledonia by{' '}
            <a href="https://eazyweb.nc" className="text-amber-400 hover:text-amber-300 transition">EazyWebNC</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
