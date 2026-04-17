"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Code, Palette, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    slug: "web-development",
    description: "Professional, responsive websites tailored to your brand. From landing pages to complex web applications, we build digital experiences that convert.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-apps",
    description: "Native and cross-platform mobile apps for iOS and Android. Intuitive design, smooth performance, and seamless user experiences.",
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    slug: null,
    description: "Bespoke software built for your unique business needs. CRM systems, automation tools, dashboards, and enterprise applications.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    slug: null,
    description: "User-centered design that delights and converts. Wireframing, prototyping, and polished interfaces that enhance user satisfaction.",
  },
  {
    icon: Zap,
    title: "Performance & Hosting",
    slug: null,
    description: "Lightning-fast load times, global CDN, and reliable hosting. Your applications run smoothly 24/7 with optimal performance.",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    slug: null,
    description: "Ongoing updates, security patches, backups, and technical support. We keep your software running perfectly so you can focus on business.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px" style={{ background: '#000' }} />
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#666' }}>What We Offer</span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#000', letterSpacing: '-0.03em' }}>
              Comprehensive software<br />solutions for everyone.
            </h2>
          </div>
          <p className="text-base leading-relaxed max-w-md" style={{ color: '#666' }}>
            From websites to mobile apps and custom software, we deliver end-to-end solutions for businesses and organizations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group cursor-pointer"
            >
              <div className="service-card-icon">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-lg font-semibold mb-3" style={{ color: '#000' }}>{service.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#666' }}>{service.description}</p>
              <a href={service.slug ? `/services/${service.slug}` : "/services"} className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group-hover:gap-3" style={{ color: '#000' }}>
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
