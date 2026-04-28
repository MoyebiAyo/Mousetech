"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LimitedTimeOfferBanner from "@/components/LimitedTimeOfferBanner";

function formatCountdown(totalSeconds: number) {
  const clamped = Math.max(0, totalSeconds);
  const days = Math.floor(clamped / (24 * 3600));
  const hours = Math.floor((clamped % (24 * 3600)) / 3600);
  const minutes = Math.floor((clamped % 3600) / 60);
  return { days, hours, minutes };
}

const plans = [
  {
    tier: "Starter",
    price: "₦150k",
    priceNote: "– ₦300k",
    description: "Ideal for small businesses and individuals getting online.",
    features: [
      "5-8 page custom website",
      "Mobile-responsive design",
      "Managed hosting + SSL",
      "3 content updates/month",
      "Basic SEO setup",
      "Monthly report",
      "Email support",
    ],
    popular: false,
    cta: "Get Started",
    ctaStyle: "outline",
    whatsappMessage: "Hi MouseTech! I'm interested in your Starter Package (₦150k-₦300k) for my business. Can we discuss getting started?",
  },
  {
    tier: "Growth",
    price: "₦400k",
    priceNote: "– ₦700k",
    description: "For growing businesses that need a serious digital presence.",
    features: [
      "15-page custom website",
      "Advanced custom design",
      "CDN + performance suite",
      "Unlimited content updates",
      "Full SEO management",
      "E-commerce integration",
      "Priority support + calls",
      "Custom analytics dashboard",
    ],
    popular: true,
    cta: "Get Started",
    ctaStyle: "white",
    whatsappMessage: "Hi MouseTech! I'm interested in your Growth Package (₦400k-₦700k). I need a professional website with e-commerce and full SEO. Can we schedule a call?",
  },
  {
    tier: "Enterprise",
    price: "₦1M+",
    priceNote: "",
    description: "Tailored for complex, high-traffic, or multi-site operations.",
    features: [
      "Unlimited pages & complexity",
      "Dedicated design team",
      "Multi-site management",
      "Custom integrations",
      "SLA guarantees",
      "Dedicated account director",
      "24/7 phone support",
      "Quarterly strategy sessions",
    ],
    popular: false,
    cta: "Talk to Sales",
    ctaStyle: "outline",
    whatsappMessage: "Hi MouseTech! I'm interested in your Enterprise Package (₦1M+) for our organization. We need a custom solution with dedicated support. Can we discuss our requirements?",
  },
];

const faqs = [
  {
    question: "What's included in the price?",
    answer: "All plans include custom design, development, hosting, SSL certificate, and ongoing maintenance. There are no hidden fees or surprise charges.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade your plan at any time. We'll simply adjust your billing and implement the additional features.",
  },
  {
    question: "How long does it take to build?",
    answer: "Starter sites typically take 7-14 days. Growth plans take 2-4 weeks. Enterprise timelines vary based on complexity but we provide detailed schedules upfront.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment options. You can pay upfront for a discount or split payments across the project timeline.",
  },
];

const comparisons = [
  { feature: "Custom Design", starter: true, growth: true, enterprise: true },
  { feature: "Mobile Responsive", starter: true, growth: true, enterprise: true },
  { feature: "SSL Certificate", starter: true, growth: true, enterprise: true },
  { feature: "Content Updates", starter: "3/month", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "SEO Management", starter: "Basic", growth: "Full", enterprise: "Advanced" },
  { feature: "E-Commerce", starter: false, growth: true, enterprise: true },
  { feature: "Analytics Dashboard", starter: "Basic", growth: "Custom", enterprise: "Advanced" },
  { feature: "Support", starter: "Email", growth: "Priority", enterprise: "24/7 Phone" },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const promoWhatsappMessage = encodeURIComponent(
    "Hi MouseTech! I want to claim the limited-time website promo for ₦50,000. Please share what’s included, the next steps, and how we can start today."
  );

  const offerEndsAt = useMemo(
    () => new Date("2026-05-12T23:59:59+01:00"),
    []
  );
  const offerStartsAt = useMemo(
    () => new Date("2026-04-28T00:00:00+01:00"),
    []
  );
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const remainingSeconds = Math.floor(
    (offerEndsAt.getTime() - now.getTime()) / 1000
  );
  const promoIsActive = now >= offerStartsAt && now <= offerEndsAt;
  const promoCountdown = formatCountdown(remainingSeconds);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar 
        variant="auto"
        lightLinks={[
          { label: "How It Works", href: "/#how" },
          { label: "Services", href: "/services" },
          { label: "Pricing", href: "/pricing", active: true },
          { label: "About", href: "/about" },
        ]}
      />

      <LimitedTimeOfferBanner className="pt-[72px]" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden" style={{ background: '#000' }}>
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,112,243,0.15) 0%, transparent 60%)' }} />
        
        <div className="relative max-w-[1200px] mx-auto px-[5%] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#0070F3' }} />
              <span className="text-xs font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.9)' }}>Pricing</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6" style={{ letterSpacing: '-0.04em' }}>
              Simple, transparent<br />
              <span style={{ color: '#0070F3' }}>pricing.</span>
            </h1>

            <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
              All plans include design, hosting, maintenance, and support. No hidden fees. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Limited-Time Offer Detail */}
      {promoIsActive && (
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-[1100px] mx-auto px-[5%]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: "#dce6f0",
                boxShadow: "0 18px 45px rgba(13,27,42,0.08)",
              }}
            >
            <div
              className="px-8 py-8 md:px-12 md:py-10"
              style={{
                background:
                  "linear-gradient(160deg, #000 0%, #1a2e42 55%, #1a3a5c 100%)",
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color: "#7ab8f5" }} />
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      Limited-time promo
                    </span>
                  </div>

                  <h2
                    className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-3"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    Website build for{" "}
                    <span style={{ color: "#7ab8f5" }}>₦50,000</span>
                  </h2>
                  <p
                    className="text-base md:text-lg"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Offer runs from <strong>Apr 28, 2026</strong> to{" "}
                    <strong>May 12, 2026</strong>. Perfect if you need a
                    clean, fast, professional website without breaking the bank.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/2348078933943?text=${promoWhatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold no-underline transition-all duration-200"
                    style={{ background: "#ffffff", color: "#000000" }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Claim offer on WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#standard-plans"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium no-underline transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    Compare with plans
                  </a>
                </div>
              </div>
            </div>

            <div className="px-8 py-8 md:px-12 md:py-10 bg-white">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#000" }}>
                    What you get for ₦50,000
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "1–3 page website (Landing / Business profile)",
                      "Mobile-responsive design",
                      "Basic on-page SEO (titles, descriptions, sitemap)",
                      "Contact button + WhatsApp click-to-chat",
                      "Fast loading + image optimization",
                      "Launch-ready on your hosting (or we guide setup)",
                      "3 rounds of revisions",
                      "Delivery in 3–5 business days (after content is received)",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 p-4 rounded-lg border"
                        style={{ borderColor: "#e2e8f0", background: "#f8fafc" }}
                      >
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "#e8f1fb" }}
                        >
                          <Check className="w-4 h-4" style={{ color: "#0070F3" }} />
                        </span>
                        <span className="text-sm" style={{ color: "#1a2535" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    className="p-6 rounded-2xl border"
                    style={{ borderColor: "#e2e8f0", background: "#ffffff" }}
                  >
                    <h3 className="text-lg font-bold mb-3" style={{ color: "#000" }}>
                      Promo terms (simple)
                    </h3>
                    <ul className="space-y-3 text-sm" style={{ color: "#475569" }}>
                      <li>
                        <strong style={{ color: "#0f172a" }}>Ends in:</strong>{" "}
                        {promoCountdown.days}d {promoCountdown.hours}h{" "}
                        {promoCountdown.minutes}m
                      </li>
                      <li>
                        <strong style={{ color: "#0f172a" }}>Deadline:</strong>{" "}
                        May 12, 2026
                      </li>
                      <li>
                        <strong style={{ color: "#0f172a" }}>Best for:</strong> new
                        businesses, personal brands, simple landing pages
                      </li>
                      <li>
                        <strong style={{ color: "#0f172a" }}>Not included:</strong>{" "}
                        e-commerce, complex dashboards, custom web apps (we’ll quote those)
                      </li>
                    </ul>
                    <div
                      className="mt-5 p-4 rounded-lg"
                      style={{ background: "#0b1220" }}
                    >
                      <div
                        className="text-xs uppercase tracking-widest font-bold mb-2"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        To start today
                      </div>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                        Send your business name, phone/email, and any text/images you want on the site.
                        We’ll reply with a quick outline and timeline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Pricing Cards */}
      <section id="standard-plans" className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl p-8 transition-all duration-300 ${plan.popular ? 'transform -translate-y-2' : ''}`}
                style={{ 
                  background: plan.popular ? '#000' : '#ffffff',
                  border: `1px solid ${plan.popular ? '#000' : '#dce6f0'}`,
                  boxShadow: plan.popular ? '0 20px 50px rgba(13,27,42,0.2)' : 'none'
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5" style={{ background: '#0070F3', color: '#ffffff' }}>
                    Most Popular
                  </div>
                )}

                {/* Tier */}
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: plan.popular ? '#7ab8f5' : '#0070F3' }}>
                  {plan.tier}
                </div>

                {/* Price */}
                <div className="font-sans text-4xl font-bold leading-none mb-1" style={{ color: plan.popular ? '#ffffff' : '#000' }}>
                  {plan.price}<span className="text-xl font-sans font-normal">{plan.priceNote}</span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: plan.popular ? 'rgba(255,255,255,0.5)' : '#666' }}>
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="h-px mb-6" style={{ background: plan.popular ? 'rgba(255,255,255,0.1)' : '#dce6f0' }} />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm" style={{ color: plan.popular ? 'rgba(255,255,255,0.8)' : '#333' }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: plan.popular ? 'rgba(30,95,168,0.4)' : '#e8f1fb', color: plan.popular ? '#7ab8f5' : '#0070F3' }}>
                        <Check className="w-3 h-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/2348078933943?text=${encodeURIComponent(plan.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 text-center text-sm font-semibold rounded-lg transition-all duration-200 no-underline ${
                    plan.ctaStyle === 'white' 
                      ? 'bg-white text-[#000] hover:bg-[#e8f1fb]' 
                      : 'bg-transparent border-2 border-[#dce6f0] text-[#000] hover:border-[#0070F3] hover:text-[#0070F3]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded" style={{ background: '#0070F3' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#0070F3' }}>Compare Plans</span>
              <div className="w-6 h-0.5 rounded" style={{ background: '#0070F3' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#000' }}>
              Feature Comparison
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <th className="text-left py-4 px-4 font-sans text-lg" style={{ color: '#000' }}>Feature</th>
                  <th className="text-center py-4 px-4 font-semibold" style={{ color: '#000' }}>Starter</th>
                  <th className="text-center py-4 px-4 font-semibold" style={{ color: '#000' }}>Growth</th>
                  <th className="text-center py-4 px-4 font-semibold" style={{ color: '#000' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={row.feature} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td className="py-4 px-4" style={{ color: '#000' }}>{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check className="w-5 h-5 mx-auto" style={{ color: '#0070F3' }} /> : <span style={{ color: '#cbd5e1' }}>—</span>
                      ) : (
                        <span style={{ color: '#666' }}>{row.starter}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? <Check className="w-5 h-5 mx-auto" style={{ color: '#0070F3' }} /> : <span style={{ color: '#cbd5e1' }}>—</span>
                      ) : (
                        <span style={{ color: '#666' }}>{row.growth}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? <Check className="w-5 h-5 mx-auto" style={{ color: '#0070F3' }} /> : <span style={{ color: '#cbd5e1' }}>—</span>
                      ) : (
                        <span style={{ color: '#666' }}>{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" style={{ background: '#fafafa' }}>
        <div className="max-w-[800px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded" style={{ background: '#0070F3' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#0070F3' }}>FAQ</span>
              <div className="w-6 h-0.5 rounded" style={{ background: '#0070F3' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#000' }}>
              Pricing Questions
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left font-sans font-bold transition-colors"
                  style={{ color: openFaq === index ? '#0070F3' : '#000' }}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <span className="text-xl transition-transform duration-300" style={{ transform: openFaq === index ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300"
                  style={{ gridTemplateRows: openFaq === index ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#666' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: '#000' }}>
        <div className="max-w-[680px] mx-auto px-[5%] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-6" style={{ color: '#7ab8f5' }} />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Our team is here to help you choose the right plan for your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/2348078933943" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#000] font-bold rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 no-underline">
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:hello@mousetech.app" className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-lg border transition-all duration-200 hover:border-white/60 no-underline" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
