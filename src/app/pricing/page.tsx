"use client";

import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Crown,
  Building2,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for small churches and schools starting their digital journey",
    price: "₦150k - ₦300k",
    period: "one-time",
    popular: false,
    features: [
      "5-8 page professional website",
      "Online donation/payment integration",
      "Basic SEO setup",
      "WhatsApp integration",
      "Mobile responsive design",
      "Contact form",
    ],
    cta: "Get Started",
    href: "#contact",
  },
  {
    name: "Growth",
    icon: Sparkles,
    description: "For growing institutions ready to scale their digital presence",
    price: "₦400k - ₦700k",
    period: "one-time",
    popular: true,
    features: [
      "Everything in Starter",
      "Livestream embed",
      "Email marketing setup",
      "Visitor follow-up automation",
      "Event landing pages",
      "Social media integration",
      "Basic analytics",
    ],
    cta: "Most Popular",
    href: "#contact",
  },
  {
    name: "Enterprise",
    icon: Crown,
    description: "Complete digital transformation for established institutions",
    price: "₦1M+",
    period: "starting",
    popular: false,
    features: [
      "Everything in Growth",
      "Custom web application",
      "Member management system",
      "Advanced analytics dashboard",
      "API integrations",
      "Priority support",
      "Training & documentation",
    ],
    cta: "Contact Us",
    href: "#contact",
  },
];

const addOns = [
  {
    name: "Maintenance Package",
    price: "₦30,000/month",
    description:
      "Regular updates, security patches, content updates, and technical support",
  },
  {
    name: "SEO Optimization",
    price: "₦50,000",
    description:
      "Comprehensive SEO audit and optimization to improve search rankings",
  },
  {
    name: "Content Writing",
    price: "₦20,000/page",
    description: "Professional copywriting for your website pages",
  },
  {
    name: "Logo Design",
    price: "₦30,000",
    description: "Custom logo design with multiple concepts and revisions",
  },
  {
    name: "Social Media Setup",
    price: "₦25,000",
    description: "Professional setup and branding for all social platforms",
  },
  {
    name: "Training Session",
    price: "₦40,000",
    description: "2-hour training on managing your website and content",
  },
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Timeline varies based on complexity. A Starter website typically takes 1-2 weeks, Professional 3-4 weeks, and Enterprise projects 6-8 weeks or more depending on requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, Paystack, and Flutterwave. For larger projects, we offer milestone-based payment plans.",
  },
  {
    question: "Do you provide hosting services?",
    answer:
      "Yes! We can recommend and set up reliable hosting for your website. Hosting costs are separate from development fees and typically range from ₦15,000 to ₦50,000 annually.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Absolutely! We build websites with user-friendly content management systems. We also provide training so you can make updates independently.",
  },
  {
    question: "What happens after the free support period?",
    answer:
      "After your free support period ends, you can continue with our Maintenance Package for ongoing support, or contact us for ad-hoc assistance as needed.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We work closely with you throughout the development process to ensure satisfaction. Due to the nature of digital services, refunds are handled on a case-by-case basis.",
  },
];

const comparisonFeatures = [
  { name: "Pages", starter: "5-8", professional: "10-15", enterprise: "Unlimited" },
  { name: "Payment Integration", starter: true, professional: true, enterprise: true },
  { name: "WhatsApp Integration", starter: true, professional: true, enterprise: true },
  { name: "SEO Setup", starter: "Basic", professional: "Advanced", enterprise: "Advanced" },
  { name: "Mobile Responsive", starter: true, professional: true, enterprise: true },
  { name: "Livestream Embed", starter: false, professional: true, enterprise: true },
  { name: "Email Marketing", starter: false, professional: true, enterprise: true },
  { name: "Automation", starter: false, professional: true, enterprise: true },
  { name: "Event Pages", starter: false, professional: true, enterprise: true },
  { name: "Analytics", starter: false, professional: "Basic", enterprise: "Advanced" },
  { name: "Member Management", starter: false, professional: false, enterprise: true },
  { name: "Custom Development", starter: false, professional: false, enterprise: true },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-amber-500/10 border border-amber-400/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-sm font-medium">
                Simple, Transparent Pricing
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Invest in Your
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include our
              signature quality and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.popular
                    ? "bg-gradient-to-b from-amber-400/20 to-navy-800 border-2 border-amber-400/50 scale-105 z-10"
                    : "bg-slate-800/50 border border-slate-700/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 text-navy-900 text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                      plan.popular
                        ? "bg-gradient-to-r from-amber-400 to-amber-500"
                        : "bg-slate-700"
                    }`}
                  >
                    <plan.icon
                      className={`w-6 h-6 ${
                        plan.popular ? "text-navy-900" : "text-amber-400"
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-sm ml-2">
                      /{plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.popular ? "text-amber-400" : "text-emerald-400"
                          }`}
                        />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-amber-400 to-amber-500 text-navy-900 hover:shadow-lg hover:shadow-amber-400/25"
                        : "bg-slate-700 text-white hover:bg-slate-600"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="relative py-20 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Optional Add-ons
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Enhance your package with these additional services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {addon.name}
                </h3>
                <p className="text-2xl font-bold text-amber-400 mb-3">
                  {addon.price}
                </p>
                <p className="text-slate-400 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              See exactly what&apos;s included in each package
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-400 font-medium">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 text-amber-400 font-semibold">
                    Growth
                  </th>
                  <th className="text-center py-4 px-4 text-white font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={feature.name} className="border-b border-slate-800">
                    <td className="py-4 px-4 text-slate-300">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className="text-slate-300 text-sm">
                          {feature.starter}
                        </span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-amber-400/5">
                      {typeof feature.professional === "boolean" ? (
                        feature.professional ? (
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className="text-slate-300 text-sm">
                          {feature.professional}
                        </span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <span className="text-slate-600">—</span>
                        )
                      ) : (
                        <span className="text-slate-300 text-sm">
                          {feature.enterprise}
                        </span>
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
      <section className="relative py-20 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-400/20 to-amber-500/20 mb-6">
              <HelpCircle className="w-7 h-7 text-amber-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-300">
              Got questions? We&apos;ve got answers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-slate-400 pl-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80')] bg-cover bg-center opacity-10" />

            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="text-lg md:text-xl text-navy-800/80 mb-8">
                    Let&apos;s discuss your project and find the perfect solution
                    for your business needs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/2348078933943"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-semibold text-lg rounded-full hover:bg-navy-800 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </a>
                    <a
                      href="mailto:moyebiayodelesegun@gmail.com"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-navy-900 font-semibold text-lg rounded-full hover:bg-white/30 transition-colors"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-navy-900/20 rounded-3xl blur-2xl" />
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                      alt="Get Started"
                      width={600}
                      height={400}
                      className="relative rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
