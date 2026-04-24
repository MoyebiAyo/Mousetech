"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Palette, Zap, Search, ShoppingCart, Shield, BarChart3, Mail, MessageSquare, Users, Video, FileText, HeadphonesIcon, type LucideIcon } from "lucide-react";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import type { ServiceProcessStep } from "@/data/services";

// Icon mapping to reconstruct components from names
const iconMap: Record<string, LucideIcon> = {
  Palette,
  Zap,
  Search,
  ShoppingCart,
  Shield,
  BarChart3,
  Mail,
  MessageSquare,
  Users,
  Video,
  FileText,
  HeadphonesIcon,
};

type SerializableService = {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  cardFeatures: string[];
  benefits: string[];
  features: string[];
  process: ServiceProcessStep[];
  pricing: string;
  iconName: string;
};

type ServiceDetailContentProps = {
  service: SerializableService;
};

export default function ServiceDetailContent({
  service,
}: ServiceDetailContentProps) {
  // Reconstruct icon from name
  const IconComponent = iconMap[service.iconName] || Palette;

  const whatsappMessage = encodeURIComponent(
    `Hi MouseTech! I'm interested in learning more about your ${service.title} service. Can you provide more details?`
  );

  return (
    <main className="min-h-screen bg-white">
      <NavBar
        variant="auto"
        lightLinks={[
          { label: "How It Works", href: "/#how" },
          { label: "Services", href: "/services", active: true },
          { label: "Pricing", href: "/pricing" },
          { label: "About", href: "/about" },
        ]}
      />

      <section
        className="pt-32 pb-16 md:py-24"
        style={{
          background:
            "linear-gradient(160deg, #000 0%, #1a2e42 55%, #1a3a5c 100%)",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm mb-6 transition-colors hover:text-white no-underline"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <IconComponent className="w-8 h-8 text-white" />
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6" style={{ letterSpacing: '-0.04em' }}>
              {service.title}
            </h1>
            <p
              className="text-xl leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2
                  className="font-serif text-3xl font-bold mb-6"
                  style={{ color: "#000" }}
                >
                  Overview
                </h2>
                <p
                  className="text-lg leading-relaxed mb-12"
                  style={{ color: "#64748b" }}
                >
                  {service.fullDescription}
                </p>

                <h2
                  className="font-serif text-3xl font-bold mb-6"
                  style={{ color: "#000" }}
                >
                  Key Benefits
                </h2>
                <ul className="space-y-4 mb-12">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "#e8f1fb" }}
                      >
                        <Check className="w-4 h-4" style={{ color: "#0070F3" }} />
                      </span>
                      <span style={{ color: "#1a2535" }}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h2
                  className="font-serif text-3xl font-bold mb-6"
                  style={{ color: "#000" }}
                >
                  Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-4 rounded-lg"
                      style={{ background: "#f7f9fc" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: "#0070F3" }}
                      />
                      <span className="text-sm" style={{ color: "#1a2535" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <h2
                  className="font-serif text-3xl font-bold mb-6"
                  style={{ color: "#000" }}
                >
                  Our Process
                </h2>
                <div className="space-y-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-6">
                      <div
                        className="font-sans text-3xl font-bold"
                        style={{ color: "#0070F3" }}
                      >
                        {step.step}
                      </div>
                      <div>
                        <h3
                          className="font-sans text-xl font-bold mb-2"
                          style={{ color: "#000", letterSpacing: '-0.02em' }}
                        >
                          {step.title}
                        </h3>
                        <p style={{ color: "#64748b" }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 p-8 rounded-2xl"
                style={{ background: "#000" }}
              >
                <h3 className="font-sans text-2xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                  Ready to get started?
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Let&apos;s discuss how {service.title} can help your business.
                </p>

                <div
                  className="mb-6 p-4 rounded-lg"
                  style={{ background: "rgba(30,95,168,0.3)" }}
                >
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ color: "#7ab8f5" }}
                  >
                    Pricing
                  </div>
                  <div className="text-white font-semibold">{service.pricing}</div>
                </div>

                <a
                  href={`https://wa.me/2348078933943?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white text-[#000] font-bold rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 no-underline mb-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>

                <Link
                  href="/pricing"
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 border-white/30 text-white font-medium rounded-lg transition-all duration-200 hover:border-white/60 no-underline"
                >
                  View Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
