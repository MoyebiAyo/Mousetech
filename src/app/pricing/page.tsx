"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle, MessageCircle } from "lucide-react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    whatsappMessage: "Hi Mouse Tech! I'm interested in your Starter Package (₦150k-₦300k) for my business. Can we discuss getting started?",
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
    whatsappMessage: "Hi Mouse Tech! I'm interested in your Growth Package (₦400k-₦700k). I need a professional website with e-commerce and full SEO. Can we schedule a call?",
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
    whatsappMessage: "Hi Mouse Tech! I'm interested in your Enterprise Package (₦1M+) for our organization. We need a custom solution with dedicated support. Can we discuss our requirements?",
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-32 overflow-hidden" style={{ background: '#000' }}>
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

            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6" style={{ letterSpacing: '-0.04em' }}>
              Simple, transparent<br />
              <span style={{ color: '#0070F3' }}>pricing.</span>
            </h1>

            <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
              All plans include design, hosting, maintenance, and support. No hidden fees. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-28 bg-white">
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
                  background: plan.popular ? '#0d1b2a' : '#ffffff',
                  border: `1px solid ${plan.popular ? '#0d1b2a' : '#dce6f0'}`,
                  boxShadow: plan.popular ? '0 20px 50px rgba(13,27,42,0.2)' : 'none'
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5" style={{ background: '#1e5fa8', color: '#ffffff' }}>
                    Most Popular
                  </div>
                )}

                {/* Tier */}
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: plan.popular ? '#7ab8f5' : '#1e5fa8' }}>
                  {plan.tier}
                </div>

                {/* Price */}
                <div className="font-serif text-4xl font-bold leading-none mb-1" style={{ color: plan.popular ? '#ffffff' : '#0d1b2a' }}>
                  {plan.price}<span className="text-xl font-sans font-normal">{plan.priceNote}</span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: plan.popular ? 'rgba(255,255,255,0.5)' : '#64748b' }}>
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="h-px mb-6" style={{ background: plan.popular ? 'rgba(255,255,255,0.1)' : '#dce6f0' }} />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm" style={{ color: plan.popular ? 'rgba(255,255,255,0.8)' : '#1a2535' }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: plan.popular ? 'rgba(30,95,168,0.4)' : '#e8f1fb', color: plan.popular ? '#7ab8f5' : '#1e5fa8' }}>
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
                      ? 'bg-white text-[#0d1b2a] hover:bg-[#e8f1fb]' 
                      : 'bg-transparent border-2 border-[#dce6f0] text-[#0d1b2a] hover:border-[#1e5fa8] hover:text-[#1e5fa8]'
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
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1e5fa8' }}>Compare Plans</span>
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d1b2a' }}>
              Feature Comparison
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <th className="text-left py-4 px-4 font-serif text-lg" style={{ color: '#0d1b2a' }}>Feature</th>
                  <th className="text-center py-4 px-4 font-semibold" style={{ color: '#0d1b2a' }}>Starter</th>
                  <th className="text-center py-4 px-4 font-semibold" style={{ color: '#0d1b2a' }}>Growth</th>
                  <th className="text-center py-4 px-4 font-semibold" style={{ color: '#0d1b2a' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={row.feature} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td className="py-4 px-4" style={{ color: '#0d1b2a' }}>{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check className="w-5 h-5 mx-auto" style={{ color: '#1e5fa8' }} /> : <span style={{ color: '#cbd5e1' }}>—</span>
                      ) : (
                        <span style={{ color: '#64748b' }}>{row.starter}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? <Check className="w-5 h-5 mx-auto" style={{ color: '#1e5fa8' }} /> : <span style={{ color: '#cbd5e1' }}>—</span>
                      ) : (
                        <span style={{ color: '#64748b' }}>{row.growth}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? <Check className="w-5 h-5 mx-auto" style={{ color: '#1e5fa8' }} /> : <span style={{ color: '#cbd5e1' }}>—</span>
                      ) : (
                        <span style={{ color: '#64748b' }}>{row.enterprise}</span>
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
      <section className="py-24" style={{ background: '#f7f9fc' }}>
        <div className="max-w-[800px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1e5fa8' }}>FAQ</span>
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d1b2a' }}>
              Pricing Questions
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#e2e8f0' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left font-serif font-bold transition-colors"
                  style={{ color: openFaq === index ? '#1e5fa8' : '#0d1b2a' }}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <span className="text-xl transition-transform duration-300" style={{ transform: openFaq === index ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === index ? '200px' : '0' }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#64748b' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: '#0d1b2a' }}>
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
              <a href="https://wa.me/2348078933943" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0d1b2a] font-bold rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 no-underline">
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
