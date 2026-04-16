"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";

const servicesData: Record<string, {
  title: string;
  icon: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  features: string[];
  process: { step: string; title: string; desc: string }[];
  pricing: string;
}> = {
  "custom-web-design": {
    title: "Custom Web Design",
    icon: "🎨",
    description: "Bespoke, conversion-focused design built entirely around your brand.",
    fullDescription: "Your website is often the first impression people have of your business. We create stunning, custom designs that reflect your unique brand and goals. No templates, no generic layouts—every pixel is deliberate and purposeful.",
    benefits: [
      "Stand out from competitors with unique design",
      "Build trust with professional appearance",
      "Increase engagement with intuitive navigation",
      "Mobile-first approach for all devices",
      "Fast loading times for better user experience"
    ],
    features: [
      "Custom homepage design",
      "Responsive layout for all screen sizes",
      "Brand color integration",
      "Typography optimization",
      "Image gallery and media sections",
      "Contact forms and maps",
      "Social media integration",
      "SEO-friendly structure"
    ],
    process: [
      { step: "01", title: "Discovery", desc: "We learn about your brand, mission, and design preferences" },
      { step: "02", title: "Wireframing", desc: "We create layout structures for your approval" },
      { step: "03", title: "Visual Design", desc: "We craft the final look with colors, fonts, and imagery" },
      { step: "04", title: "Development", desc: "We bring the design to life with clean code" }
    ],
    pricing: "Included in all plans"
  },
  "performance-hosting": {
    title: "Performance & Hosting",
    icon: "⚡",
    description: "Global CDN, sub-second load times, and perfect Core Web Vitals scores.",
    fullDescription: "Your website needs to be fast and always available. We provide enterprise-grade hosting with global CDN, automatic scaling, and 99.9% uptime guarantee. Your site loads quickly for visitors anywhere in the world.",
    benefits: [
      "Lightning-fast page load speeds",
      "99.9% uptime guarantee",
      "Global CDN for worldwide access",
      "Automatic scaling during traffic spikes",
      "SSL certificate included"
    ],
    features: [
      "Global Content Delivery Network (CDN)",
      "SSD storage for faster access",
      "Automatic daily backups",
      "DDoS protection",
      "SSL/HTTPS encryption",
      "Server-side caching",
      "Image optimization",
      "Uptime monitoring"
    ],
    process: [
      { step: "01", title: "Setup", desc: "We configure your hosting environment" },
      { step: "02", title: "Migration", desc: "We transfer your site to our servers" },
      { step: "03", title: "Optimization", desc: "We fine-tune for maximum performance" },
      { step: "04", title: "Monitoring", desc: "We keep watch 24/7 for any issues" }
    ],
    pricing: "Included in all plans"
  },
  "seo-management": {
    title: "SEO Management",
    icon: "🔍",
    description: "Technical SEO baked in from day one, plus ongoing optimization.",
    fullDescription: "Being found online is crucial. We implement technical SEO best practices from the start and provide ongoing optimization to help your business rank higher in search results and reach more customers.",
    benefits: [
      "Higher search engine rankings",
      "More organic traffic",
      "Better local visibility",
      "Increased customer engagement",
      "More sales inquiries"
    ],
    features: [
      "Keyword research and optimization",
      "On-page SEO implementation",
      "Local SEO for Google Maps",
      "Meta tags and descriptions",
      "Schema markup",
      "XML sitemaps",
      "Monthly SEO reports",
      "Competitor analysis"
    ],
    process: [
      { step: "01", title: "Audit", desc: "We analyze your current SEO status" },
      { step: "02", title: "Strategy", desc: "We create a customized SEO plan" },
      { step: "03", title: "Implementation", desc: "We optimize your site content" },
      { step: "04", title: "Reporting", desc: "We track and report on progress" }
    ],
    pricing: "Starter: Basic | Growth: Full | Enterprise: Advanced"
  },
  "ecommerce-payments": {
    title: "E-Commerce & Payments",
    icon: "💳",
    description: "Full e-commerce and payment systems with multiple payment gateways.",
    fullDescription: "Make it easy for your customers to purchase your products and services online. We integrate secure payment systems that support multiple gateways, automated receipts, and comprehensive sales reporting.",
    benefits: [
      "Increase sales with easy checkout",
      "Accept payments 24/7",
      "Automatic receipt generation",
      "Detailed sales reporting",
      "Multiple payment options"
    ],
    features: [
      "Multiple payment gateways (Paystack, Flutterwave)",
      "One-time and recurring donations",
      "Event ticket sales",
      "School fee payments",
      "Automated email receipts",
      "Donor management system",
      "Financial dashboards",
      "Bank reconciliation"
    ],
    process: [
      { step: "01", title: "Setup", desc: "We configure payment gateways" },
      { step: "02", title: "Integration", desc: "We connect to your website" },
      { step: "03", title: "Testing", desc: "We ensure everything works smoothly" },
      { step: "04", title: "Launch", desc: "You start accepting payments" }
    ],
    pricing: "Growth & Enterprise plans"
  },
  "security-backups": {
    title: "Security & Backups",
    icon: "🔒",
    description: "Daily automated backups, malware scanning, and 24/7 monitoring.",
    fullDescription: "Protect your website and data with enterprise-level security. We provide daily backups, malware scanning, SSL certificates, and continuous monitoring to keep your site safe from threats.",
    benefits: [
      "Peace of mind with daily backups",
      "Protection against hackers",
      "SSL security for visitor trust",
      "Quick recovery from issues",
      "Compliance with data regulations"
    ],
    features: [
      "Daily automated backups",
      "Malware scanning and removal",
      "SSL certificate management",
      "DDoS attack protection",
      "Firewall configuration",
      "Security audits",
      "Uptime monitoring",
      "Emergency recovery"
    ],
    process: [
      { step: "01", title: "Assessment", desc: "We evaluate your security needs" },
      { step: "02", title: "Implementation", desc: "We deploy security measures" },
      { step: "03", title: "Monitoring", desc: "We watch for threats 24/7" },
      { step: "04", title: "Maintenance", desc: "We keep everything updated" }
    ],
    pricing: "Included in all plans"
  },
  "analytics-reporting": {
    title: "Analytics & Reporting",
    icon: "📊",
    description: "Custom dashboards and actionable growth insights every month.",
    fullDescription: "Understand your audience and make data-driven decisions. We provide custom analytics dashboards, monthly performance reports, and actionable insights to help your business grow online.",
    benefits: [
      "Understand your audience better",
      "Track website performance",
      "Measure engagement metrics",
      "Make informed decisions",
      "Demonstrate ROI to leadership"
    ],
    features: [
      "Google Analytics integration",
      "Custom dashboard creation",
      "Monthly performance reports",
      "Traffic source analysis",
      "User behavior tracking",
      "Conversion tracking",
      "Event tracking",
      "Growth recommendations"
    ],
    process: [
      { step: "01", title: "Setup", desc: "We configure analytics tools" },
      { step: "02", title: "Tracking", desc: "We implement event tracking" },
      { step: "03", title: "Dashboard", desc: "We create custom reports" },
      { step: "04", title: "Insights", desc: "We provide monthly analysis" }
    ],
    pricing: "Starter: Basic | Growth: Custom | Enterprise: Advanced"
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [scrolled, setScrolled] = useState(false);
  
  const service = servicesData[slug];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!service) {
    return (
      <main className="min-h-screen bg-white pt-32">
        <div className="max-w-[1100px] mx-auto px-[5%] text-center">
          <h1 className="font-serif text-4xl font-bold mb-4" style={{ color: '#0d1b2a' }}>Service Not Found</h1>
          <a href="/services" className="inline-flex items-center gap-2 text-[#1e5fa8] hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </a>
        </div>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(`Hi Mouse Tech! I'm interested in learning more about your ${service.title} service. Can you provide more details?`);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-[5%] flex items-center justify-between h-[72px] transition-all duration-300 ${scrolled ? 'bg-white/97 shadow-lg' : 'bg-transparent'}`} style={{ backdropFilter: 'blur(12px)', borderBottom: scrolled ? '1px solid #dce6f0' : 'none' }}>
        <a href="/" className="font-serif text-2xl font-bold tracking-tight no-underline" style={{ color: scrolled ? '#0d1b2a' : '#0d1b2a' }}>
          MouseTech
        </a>
        <ul className="hidden md:flex gap-10 list-none">
          <li><a href="/#how" className="text-sm font-medium no-underline transition-colors duration-200 hover:text-[#1e5fa8]" style={{ color: '#1a2535' }}>How It Works</a></li>
          <li><a href="/services" className="text-sm font-medium no-underline transition-colors duration-200 hover:text-[#1e5fa8]" style={{ color: '#1e5fa8' }}>Services</a></li>
          <li><a href="/pricing" className="text-sm font-medium no-underline transition-colors duration-200 hover:text-[#1e5fa8]" style={{ color: '#1a2535' }}>Pricing</a></li>
          <li><a href="/about" className="text-sm font-medium no-underline transition-colors duration-200 hover:text-[#1e5fa8]" style={{ color: '#1a2535' }}>About</a></li>
        </ul>
        <div className="flex gap-3 items-center">
          <a href={`https://wa.me/2348078933943?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold px-4 py-2 rounded-md bg-[#1e5fa8] text-white hover:bg-[#2a7dd4] transition-colors no-underline">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:py-24" style={{ background: 'linear-gradient(160deg, #0d1b2a 0%, #1a2e42 55%, #1a3a5c 100%)' }}>
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="/services" className="inline-flex items-center gap-2 text-sm mb-6 transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </a>
            
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: '#0d1b2a' }}>Overview</h2>
                <p className="text-lg leading-relaxed mb-12" style={{ color: '#64748b' }}>
                  {service.fullDescription}
                </p>

                <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: '#0d1b2a' }}>Key Benefits</h2>
                <ul className="space-y-4 mb-12">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#e8f1fb' }}>
                        <Check className="w-4 h-4" style={{ color: '#1e5fa8' }} />
                      </span>
                      <span style={{ color: '#1a2535' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: '#0d1b2a' }}>Features</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-lg" style={{ background: '#f7f9fc' }}>
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#1e5fa8' }} />
                      <span className="text-sm" style={{ color: '#1a2535' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: '#0d1b2a' }}>Our Process</h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="font-serif text-3xl font-bold" style={{ color: '#1e5fa8' }}>{step.step}</div>
                      <div>
                        <h3 className="font-serif text-xl font-bold mb-2" style={{ color: '#0d1b2a' }}>{step.title}</h3>
                        <p style={{ color: '#64748b' }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 p-8 rounded-2xl"
                style={{ background: '#0d1b2a' }}
              >
                <h3 className="font-serif text-2xl font-bold text-white mb-4">Ready to get started?</h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Let&apos;s discuss how {service.title} can help your business.
                </p>
                
                <div className="mb-6 p-4 rounded-lg" style={{ background: 'rgba(30,95,168,0.3)' }}>
                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#7ab8f5' }}>Pricing</div>
                  <div className="text-white font-semibold">{service.pricing}</div>
                </div>

                <a 
                  href={`https://wa.me/2348078933943?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white text-[#0d1b2a] font-bold rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 no-underline mb-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                
                <a 
                  href="/pricing"
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 border-white/30 text-white font-medium rounded-lg transition-all duration-200 hover:border-white/60 no-underline"
                >
                  View Pricing
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
