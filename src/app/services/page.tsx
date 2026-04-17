"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Zap, Search, ShoppingCart, Shield, BarChart3, Mail, MessageSquare, Users, Video, FileText, HeadphonesIcon, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Palette,
    title: "Custom Web Design",
    slug: "custom-web-design",
    description: "Bespoke, conversion-focused design built entirely around your brand. No templates. No generic layouts. Every pixel deliberate.",
    features: ["Responsive Design", "Brand Integration", "UX Optimization", "Mobile-First Approach"],
  },
  {
    icon: Zap,
    title: "Performance & Hosting",
    slug: "performance-hosting",
    description: "Global CDN, sub-second load times, and perfect Core Web Vitals scores. Your site runs fast everywhere, all the time.",
    features: ["Global CDN", "99.9% Uptime", "Auto-Scaling", "Daily Backups"],
  },
  {
    icon: Search,
    title: "SEO Management",
    slug: "seo-management",
    description: "Technical SEO baked in from day one, plus ongoing keyword research, on-page optimization, and monthly audits.",
    features: ["Keyword Research", "On-Page SEO", "Local SEO", "Monthly Reports"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    slug: "ecommerce-solutions",
    description: "Complete online store setups with payment integration, inventory management, and automated order processing.",
    features: ["Payment Gateways", "Inventory Management", "Order Tracking", "Sales Analytics"],
  },
  {
    icon: Shield,
    title: "Security & Backups",
    slug: "security-backups",
    description: "Daily automated backups, malware scanning, SSL management, and 24/7 uptime monitoring for peace of mind.",
    features: ["SSL Certificates", "Malware Scanning", "DDoS Protection", "Security Audits"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    description: "Custom dashboards, monthly performance reports, and actionable growth insights delivered every month.",
    features: ["Custom Dashboards", "Traffic Analysis", "Conversion Tracking", "Growth Insights"],
  },
];

const additionalServices = [
  { icon: Mail, title: "Email Marketing", description: "Automated email campaigns and newsletter management" },
  { icon: MessageSquare, title: "SMS Notifications", description: "Bulk SMS for marketing, alerts, and reminders" },
  { icon: Users, title: "CRM Systems", description: "Customer relationship management and tracking systems" },
  { icon: Video, title: "Video Integration", description: "Embed live streams and video content on your website" },
  { icon: FileText, title: "Content Management", description: "Blog systems, documentation, and content workflows" },
  { icon: HeadphonesIcon, title: "Priority Support", description: "Dedicated account manager and 24/7 support" },
];

export default function ServicesPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-[5%] flex items-center justify-between h-[72px] bg-white/97 shadow-lg" style={{ backdropFilter: 'blur(12px)', borderBottom: '1px solid #dce6f0' }}>
        <a href="/" className="font-serif text-2xl font-bold tracking-tight no-underline" style={{ color: '#0d1b2a' }}>
          MouseTech
        </a>
        <ul className="hidden md:flex gap-10 list-none">
          <li><a href="/#how" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity no-underline" style={{ color: '#1a2535' }}>How It Works</a></li>
          <li><a href="/services" className="text-sm font-medium opacity-100 transition-opacity no-underline" style={{ color: '#1e5fa8' }}>Services</a></li>
          <li><a href="/#pricing" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity no-underline" style={{ color: '#1a2535' }}>Pricing</a></li>
          <li><a href="/about" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity no-underline" style={{ color: '#1a2535' }}>About</a></li>
        </ul>
        <div className="flex gap-3 items-center">
          <a href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I'm%20interested%20in%20your%20website%20services.%20Can%20we%20discuss%20my%20project?" target="_blank" rel="noopener noreferrer" className="btn-solid text-sm no-underline flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0d1b2a 0%, #1a2e42 55%, #1a3a5c 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(30,95,168,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30,95,168,0.15) 0%, transparent 40%)' }} />
        
        <div className="relative max-w-[1100px] mx-auto px-[5%] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(30,95,168,0.3)', border: '1px solid rgba(30,95,168,0.5)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7ab8f5' }} />
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#7ab8f5' }}>Our Services</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Comprehensive software<br />
              <em className="not-italic" style={{ color: '#7ab8f5' }}>solutions for everyone.</em>
            </h1>

            <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
              From websites to mobile apps and custom software, we deliver end-to-end solutions for businesses, organizations, and individuals.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#services" className="btn-hero-primary no-underline">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/#pricing" className="btn-hero-ghost no-underline">View Pricing</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-24">
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
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1e5fa8' }}>Core Services</span>
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d1b2a' }}>
              Complete Website Solutions
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
              From design to maintenance, we handle it all so you can focus on your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border transition-all duration-300 hover:shadow-lg hover:border-[#1e5fa8]/30 group"
                style={{ borderColor: '#e2e8f0' }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#1e5fa8]" style={{ background: '#e8f1fb' }}>
                  <service.icon className="w-7 h-7 transition-colors duration-300 group-hover:text-white" style={{ color: '#1e5fa8' }} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3" style={{ color: '#0d1b2a' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#64748b' }}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm" style={{ color: '#64748b' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#1e5fa8' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24" style={{ background: '#f7f9fc' }}>
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
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1e5fa8' }}>Additional Services</span>
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d1b2a' }}>
              Even More Ways We Help
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
              Specialized services to enhance your digital presence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border"
                style={{ borderColor: '#e2e8f0' }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#e8f1fb' }}>
                  <service.icon className="w-6 h-6" style={{ color: '#1e5fa8' }} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold mb-1" style={{ color: '#0d1b2a' }}>{service.title}</h3>
                  <p className="text-sm" style={{ color: '#64748b' }}>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1e5fa8' }}>Our Process</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0d1b2a' }}>
                How we deliver<br />excellence every time.
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#64748b' }}>
                Our proven process ensures your project is delivered on time, on budget, and exceeds expectations.
              </p>
              <a href="/#how" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors" style={{ background: '#1e5fa8' }}>
                See Full Process
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { step: "01", title: "Discovery", desc: "We learn about your goals and requirements" },
                { step: "02", title: "Design", desc: "We create a custom design for your approval" },
                { step: "03", title: "Development", desc: "We build your site with clean, optimized code" },
                { step: "04", title: "Launch & Support", desc: "We go live and provide ongoing care" },
              ].map((item, index) => (
                <div key={item.step} className="flex items-center gap-6 p-6 rounded-xl" style={{ background: '#f7f9fc' }}>
                  <span className="font-serif text-3xl font-bold" style={{ color: '#1e5fa8' }}>{item.step}</span>
                  <div>
                    <h3 className="font-serif text-lg font-bold" style={{ color: '#0d1b2a' }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: '#64748b' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Let&apos;s discuss how we can help transform your digital presence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0d1b2a] font-bold rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 no-underline">
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I'm%20ready%20to%20get%20started%20with%20my%20website%20project.%20Can%20we%20discuss?" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-lg border transition-all duration-200 hover:border-white/60 no-underline" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
