"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bell,
  BarChart3,
  CreditCard,
  Users,
  ArrowRight,
  Check,
  X,
  Zap,
  FileText,
  Clock,
  Star,
  ChevronRight,
  Send,
  Shield,
  Globe,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
        }
      },
    });
  }, [inView, target, suffix, prefix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) {
  const dirs = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatingInvoice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -8, rotateX: 4 }}
      animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl" />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="relative bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 w-80 backdrop-blur-sm shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-neutral-200">INV-2026-042</span>
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
              7 days overdue
            </span>
          </div>
          <div className="mb-4">
            <p className="text-xs text-neutral-500">Client</p>
            <p className="text-sm text-neutral-300">Acme Design Co.</p>
          </div>
          <div className="mb-5">
            <p className="text-xs text-neutral-500">Amount Due</p>
            <p className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              $3,450.00
            </p>
          </div>
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3"
          >
            <Bell className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium text-amber-300">
              Reminder #2 sent — Polite follow-up
            </span>
          </motion.div>
          <div className="flex items-center gap-2 mt-4 justify-center">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="w-8 h-0.5 bg-green-500/50" />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className="w-8 h-0.5 bg-neutral-700" />
            <div className="w-2 h-2 rounded-full bg-neutral-700" />
            <div className="w-8 h-0.5 bg-neutral-700" />
            <div className="w-2 h-2 rounded-full bg-neutral-700" />
          </div>
          <div className="flex items-center justify-between mt-1 px-1">
            <span className="text-[10px] text-green-400">Sent</span>
            <span className="text-[10px] text-amber-400">Polite</span>
            <span className="text-[10px] text-neutral-600">Firm</span>
            <span className="text-[10px] text-neutral-600">Urgent</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    if (!headlineRef.current) return;
    const words = headlineRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { opacity: 0, y: 60, rotateX: -40 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.4)",
        delay: 0.2,
      }
    );
  }, []);

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".gsap-stat").forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const features = [
    {
      icon: Bell,
      title: "Smart Reminder Sequences",
      desc: "Polite \u2192 firm \u2192 urgent. Auto-escalating tone based on how many days overdue. You set the rules, we handle the nudging.",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: BarChart3,
      title: "Invoice Tracking Dashboard",
      desc: "See every invoice at a glance \u2014 paid, pending, overdue. Real-time status updates and aging reports.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: CreditCard,
      title: "Payment Links",
      desc: "Every reminder includes a one-click payment link. Stripe, PayPal, bank transfer. Remove friction, get paid.",
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      icon: Users,
      title: "Client Insights",
      desc: "Know exactly which clients pay late, which pay on time. Payment behavior analytics to protect your cash flow.",
      gradient: "from-amber-400 to-yellow-500",
    },
  ];

  const painPoints = [
    { before: "Awkward follow-up emails", after: "Automated polite reminders" },
    { before: "Forgotten invoices", after: "Smart escalation sequences" },
    { before: "Cash flow anxiety", after: "Predictable payments" },
  ];

  const steps = [
    {
      icon: FileText,
      title: "Import or Create Invoices",
      desc: "Connect your accounting tool or create invoices directly. CSV upload, API, or manual entry.",
    },
    {
      icon: Clock,
      title: "Set Your Reminder Schedule",
      desc: "Choose when and how often to nudge. Customize tone, frequency, and escalation triggers.",
    },
    {
      icon: Send,
      title: "InvoiceNudge Handles the Rest",
      desc: "Sit back while we send perfectly-timed reminders. Track opens, clicks, and payments in real time.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Freelance Designer",
      text: "I used to dread sending follow-ups. InvoiceNudge does it for me and my average payment time dropped from 45 to 18 days.",
      avatar: "SC",
    },
    {
      name: "Marcus Rodriguez",
      role: "Agency Owner",
      text: "We recovered $28K in overdue invoices the first month. The escalation sequences are genius.",
      avatar: "MR",
    },
    {
      name: "Priya Sharma",
      role: "Consultant",
      text: "The client insights feature showed me which clients were chronic late payers. Game changer for my business.",
      avatar: "PS",
    },
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "Perfect to get started",
      features: ["5 invoices / month", "Basic email reminders", "Invoice tracking", "Email support"],
      excluded: ["Smart sequences", "Payment links", "Analytics", "Custom branding"],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      desc: "For serious freelancers",
      features: [
        "Unlimited invoices",
        "Smart escalation sequences",
        "Payment links (Stripe, PayPal)",
        "Client analytics",
        "Custom reminder templates",
        "Priority email support",
      ],
      excluded: ["Team accounts", "API access"],
      cta: "Get Pro",
      highlighted: true,
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      desc: "For teams & agencies",
      features: [
        "Everything in Pro",
        "Team accounts (up to 10)",
        "API access",
        "Custom branding & domain",
        "Multi-currency support",
        "Priority phone support",
        "Dedicated account manager",
      ],
      excluded: [],
      cta: "Go Business",
      highlighted: false,
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* NAV */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-neutral-950/70 border-b border-neutral-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold">
              Invoice
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Nudge
              </span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="#features" className="hover:text-amber-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2">
              Log In
            </button>
            <button className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500 transition-all hover:shadow-lg hover:shadow-amber-500/25 active:scale-95">
              Get Started Free
            </button>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/8 rounded-full blur-[128px] animate-pulse [animation-delay:1s]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[160px]" />
          </motion.div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-medium text-amber-300">$12M+ recovered for freelancers</span>
              </motion.div>

              <h1
                ref={headlineRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6"
                style={{ perspective: "600px" }}
              >
                <span className="word inline-block mr-3">Stop</span>
                <span className="word inline-block mr-3">Chasing</span>
                <span className="word inline-block mr-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                  Payments.
                </span>
                <br />
                <span className="word inline-block mr-3">Start</span>
                <span className="word inline-block mr-3">Getting</span>
                <span className="word inline-block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Paid.
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="text-lg text-neutral-400 mb-8 max-w-lg"
              >
                Automated invoice reminders that are polite, persistent, and effective. Track overdue
                invoices and get paid 2x faster.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500 transition-all hover:shadow-2xl hover:shadow-amber-500/30 active:scale-[0.98]">
                  Get Paid Faster &mdash; Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl border border-neutral-700 text-neutral-300 hover:border-amber-500/50 hover:text-amber-300 transition-all">
                  See How It Works
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.3 }}
                className="flex items-center gap-4 mt-8"
              >
                <div className="flex -space-x-2">
                  {["SC", "MR", "PS", "JD"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-neutral-950"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-neutral-500">
                  <span className="text-amber-400 font-semibold">1,000+</span> freelancers getting
                  paid on time
                </div>
              </motion.div>
            </div>

            <div className="hidden lg:flex justify-center">
              <FloatingInvoice />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-neutral-700 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />
        <div className="relative max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Old Way is <span className="line-through text-neutral-600">Broken</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              You did the work. You sent the invoice. Now you wait... and wait. Sound familiar?
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn delay={0.1} direction="left">
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <X className="w-5 h-5 text-red-400" />
                  <h3 className="text-lg font-bold text-red-400">Without InvoiceNudge</h3>
                </div>
                <div className="space-y-4">
                  {painPoints.map((p, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-red-500/5">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-neutral-300">{p.before}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="right">
              <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Check className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-bold text-green-400">With InvoiceNudge</h3>
                </div>
                <div className="space-y-4">
                  {painPoints.map((p, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-green-500/5">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-neutral-300">{p.after}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Get Paid</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              From gentle reminders to payment analytics, InvoiceNudge has every tool to end the payment chase.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 hover:border-amber-500/30 transition-colors"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5`}>
                      <f.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/30 to-neutral-950" />
        <div className="relative max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Steps to Getting Paid</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Set it up in minutes. Get paid for months.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="gsap-stat inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30 mb-6 mx-auto">
                    <span className="text-2xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                      {i + 1}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
                  )}
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center mx-auto mb-4">
                    <s.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                1,000+
              </span>{" "}
              Freelancers Who Get Paid on Time
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { value: 12, prefix: "$", suffix: "M+", label: "Recovered for freelancers" },
              { value: 47, prefix: "", suffix: "%", label: "Faster payments on average" },
              { value: 10000, prefix: "", suffix: "+", label: "Invoices tracked" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="gsap-stat text-center p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50">
                  <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <p className="text-neutral-400 text-sm">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-amber-500/20 transition-colors"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-neutral-300 mb-5 leading-relaxed text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-xs font-bold text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-neutral-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/30 to-neutral-950" />
        <div className="relative max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Start free. Upgrade when you need more power. No hidden fees, ever.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative rounded-2xl p-8 ${
                    plan.highlighted
                      ? "border-2 border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-neutral-900/80 shadow-2xl shadow-amber-500/10"
                      : "border border-neutral-800 bg-neutral-900/50"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-xs font-bold text-white">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-neutral-500 mb-5">{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-neutral-500 text-sm">{plan.period}</span>
                  </div>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] mb-8 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500 hover:shadow-lg hover:shadow-amber-500/25"
                        : "bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
                    }`}
                  >
                    {plan.cta}
                  </button>
                  <div className="space-y-3">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400 shrink-0" />
                        <span className="text-neutral-300">{f}</span>
                      </div>
                    ))}
                    {plan.excluded.map((f, j) => (
                      <div key={`ex-${j}`} className="flex items-center gap-2 text-sm">
                        <X className="w-4 h-4 text-neutral-600 shrink-0" />
                        <span className="text-neutral-600">{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[160px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Never Chase a Payment{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Again
              </span>
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
              Join thousands of freelancers and agencies who stopped sending awkward follow-ups and
              started getting paid on time.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-2xl hover:shadow-amber-500/30 transition-shadow"
            >
              Start Free &mdash; No Credit Card Required
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
            </motion.button>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-neutral-500">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Setup in 2 min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                <span>Works worldwide</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold">
                Invoice
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Nudge
                </span>
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
              <a href="mailto:contact@eazyweb.nc" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
            <p className="text-sm text-neutral-600">
              Made with <span className="text-red-500" aria-label="love">&hearts;</span> in New Caledonia by{" "}
              <a
                href="https://eazyweb.nc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                EazyWebNC
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
