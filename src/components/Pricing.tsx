"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

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
    description: "Tailored for complex, high-traffic, or multi-platform operations.",
    features: [
      "Unlimited pages & complexity",
      "Dedicated design & dev team",
      "Multi-platform solutions",
      "Custom integrations & APIs",
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-5 h-px" style={{ background: '#000' }} />
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#666' }}>Pricing</span>
            <div className="w-5 h-px" style={{ background: '#000' }} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#000', letterSpacing: '-0.03em' }}>
            Simple, transparent pricing.
          </h2>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: '#666' }}>
            All plans include design, hosting, maintenance, and support. No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg p-8 transition-all duration-200 ${plan.popular ? 'transform -translate-y-1' : ''}`}
              style={{ 
                background: plan.popular ? '#000' : '#fff',
                border: `1px solid ${plan.popular ? '#000' : '#eaeaea'}`,
                boxShadow: plan.popular ? '0 16px 40px rgba(0,0,0,0.2)' : 'none'
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="inline-block px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase mb-5" style={{ background: '#0070F3', color: '#fff' }}>
                  Most Popular
                </div>
              )}

              {/* Tier */}
              <div className="text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: plan.popular ? '#999' : '#666' }}>
                {plan.tier}
              </div>

              {/* Price */}
              <div className="font-serif text-4xl font-bold leading-none mb-1" style={{ color: plan.popular ? '#fff' : '#000', letterSpacing: '-0.03em' }}>
                {plan.price}<span className="text-xl font-normal">{plan.priceNote}</span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: plan.popular ? '#999' : '#666' }}>
                {plan.description}
              </p>

              {/* Divider */}
              <div className="h-px mb-6" style={{ background: plan.popular ? 'rgba(255,255,255,0.1)' : '#eaeaea' }} />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm" style={{ color: plan.popular ? '#ccc' : '#333' }}>
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: plan.popular ? 'rgba(255,255,255,0.1)' : '#fafafa' }}>
                      <Check className="w-3 h-3" style={{ color: plan.popular ? '#fff' : '#000' }} />
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
                className="flex items-center justify-center gap-2 w-full py-3 text-center text-sm font-medium rounded-md transition-all duration-200 no-underline"
                style={{
                  background: plan.popular ? '#fff' : '#000',
                  color: plan.popular ? '#000' : '#fff',
                  border: plan.popular ? 'none' : '1px solid #000'
                }}
              >
                <MessageCircle className="w-4 h-4" />
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
