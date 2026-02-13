"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "₦150k",
    priceRange: "₦300k",
    description: "Perfect for small churches and schools starting their digital journey.",
    features: [
      "5-8 page professional website",
      "Online donation/payment integration",
      "Basic SEO setup",
      "WhatsApp integration",
      "Mobile responsive design",
      "Contact form",
    ],
    popular: false,
    cta: "Get Started",
    icon: Zap,
  },
  {
    name: "Growth",
    price: "₦400k",
    priceRange: "₦700k",
    description: "For growing institutions ready to scale their digital presence.",
    features: [
      "Everything in Starter",
      "Livestream embed",
      "Email marketing setup",
      "Visitor follow-up automation",
      "Event landing pages",
      "Social media integration",
      "Basic analytics",
    ],
    popular: true,
    cta: "Start Free Trial",
    icon: Sparkles,
  },
  {
    name: "Enterprise",
    price: "₦1M",
    priceRange: "+",
    description: "Complete digital transformation for established institutions.",
    features: [
      "Custom design",
      "Member portal",
      "SMS system",
      "Attendance system",
      "Analytics dashboard",
      "Priority support",
      "Advanced automation",
      "Custom integrations",
    ],
    popular: false,
    cta: "Contact Sales",
    icon: Crown,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-16 md:py-24 lg:py-32 relative">
      {/* Background accents */}
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/60 text-xs md:text-sm mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-amber-400" />
            Simple, Transparent Pricing
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            Choose the plan that{" "}
            <span className="text-gradient-gold">fits your needs</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-lg">
            Start small and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${pkg.popular ? 'md:-mt-4' : ''}`}
            >
              {/* Popular glow */}
              {pkg.popular && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-gold-500 to-amber-400 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
              )}

              <div className={`relative h-full glass-card rounded-2xl p-8 transition-all duration-500 ${
                pkg.popular 
                  ? 'border-amber-500/30 bg-navy-800/60' 
                  : 'border-white/[0.08] hover:border-white/[0.15]'
              }`}>
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-gold-500 text-navy-900 text-sm font-bold rounded-full shadow-lg shadow-amber-500/25">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-amber-400 to-gold-500' 
                    : 'bg-white/[0.05] border border-white/[0.1]'
                }`}>
                  <pkg.icon className={`w-6 h-6 ${pkg.popular ? 'text-navy-900' : 'text-white/60'}`} />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-white/50 text-sm">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-white/30">-</span>
                    <span className="text-2xl text-white/50">{pkg.priceRange}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        pkg.popular 
                          ? 'bg-gradient-to-br from-amber-400 to-gold-500' 
                          : 'bg-white/[0.1]'
                      }`}>
                        <Check className={`w-3 h-3 ${pkg.popular ? 'text-navy-900' : 'text-white/50'}`} />
                      </div>
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full py-4 rounded-full text-center font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-amber-400 via-gold-500 to-amber-400 text-navy-900 hover:shadow-[0_0_30px_rgba(212,168,85,0.35)] hover:-translate-y-1'
                      : 'border border-white/[0.15] text-white hover:bg-white/[0.05] hover:-translate-y-1'
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
