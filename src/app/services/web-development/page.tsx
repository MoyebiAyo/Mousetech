import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Code, Globe, Smartphone, Palette, Server, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services - MouseTech | Professional Websites in Nigeria",
  description: "Professional web development services in Nigeria. Custom websites, e-commerce platforms, and web applications built with modern technologies.",
  keywords: ["web development Nigeria", "website design Lagos", "custom web development", "e-commerce development", "responsive websites"],
};

const features = [
  { icon: Globe, title: "Responsive Design", description: "Mobile-first websites that look perfect on all devices" },
  { icon: Code, title: "Modern Tech Stack", description: "Built with Next.js, React, and the latest web technologies" },
  { icon: Smartphone, title: "Performance Optimized", description: "Lightning-fast load times and smooth user experiences" },
  { icon: Palette, title: "Custom UI/UX", description: "Beautiful, intuitive designs tailored to your brand" },
  { icon: Server, title: "Scalable Architecture", description: "Built to grow with your business needs" },
  { icon: Headphones, title: "Ongoing Support", description: "Continuous maintenance and technical support" },
];

const packages = [
  {
    name: "Starter Website",
    price: "₦150,000",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1 month free support",
      "SSL certificate",
    ],
  },
  {
    name: "Business Website",
    price: "₦350,000",
    description: "Ideal for growing businesses",
    features: [
      "Up to 15 pages",
      "Custom design & branding",
      "CMS integration",
      "Advanced SEO optimization",
      "Blog functionality",
      "Analytics setup",
      "3 months free support",
      "Performance optimization",
    ],
    popular: true,
  },
  {
    name: "E-Commerce Platform",
    price: "₦600,000+",
    description: "Full-featured online store",
    features: [
      "Unlimited products",
      "Payment gateway integration",
      "Inventory management",
      "Customer accounts",
      "Order tracking system",
      "Advanced analytics",
      "6 months free support",
      "Security features",
    ],
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0d1b2a' }}>
      {/* Hero */}
      <section className="px-[5%] py-20" style={{ background: 'linear-gradient(160deg, #0d1b2a 0%, #1a2e42 55%, #1a3a5c 100%)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-4">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors no-underline">
              ← Back to Home
            </Link>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Web <span style={{ color: '#7ab8f5' }}>Development</span>
          </h1>
          <p className="text-lg text-white/70 max-w-[700px] mb-8">
            Professional websites that convert visitors into customers. We build fast, secure, and beautiful websites tailored to your business needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/2348078933943?text=Hi%20MouseTech!%20I'm%20interested%20in%20web%20development%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg"
              style={{ background: '#1e5fa8' }}
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 border hover:border-white/60 no-underline"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-[5%] py-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border transition-all duration-300 hover:border-white/30"
                style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}
              >
                <feature.icon className="w-12 h-12 mb-4" style={{ color: '#7ab8f5' }} />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-[5%] py-20" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Web Development Packages</h2>
          <p className="text-white/60 text-center mb-12">Choose the package that fits your needs</p>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="relative p-8 rounded-2xl border transition-all duration-300 hover:border-white/30"
                style={{ 
                  borderColor: pkg.popular ? '#1e5fa8' : 'rgba(255,255,255,0.1)',
                  background: pkg.popular ? 'rgba(30,95,168,0.1)' : 'rgba(255,255,255,0.02)'
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold" style={{ background: '#1e5fa8', color: '#ffffff' }}>
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-white/60 text-sm mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold mb-6" style={{ color: '#7ab8f5' }}>{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#7ab8f5' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/2348078933943?text=${encodeURIComponent(`Hi MouseTech! I'm interested in the ${pkg.name} package.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 no-underline"
                  style={{ 
                    background: pkg.popular ? '#1e5fa8' : 'rgba(255,255,255,0.05)',
                    color: '#ffffff',
                    border: pkg.popular ? 'none' : '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5%] py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-white/60 mb-8">
            Every business is unique. Let's discuss your specific requirements and build a website that perfectly fits your needs.
          </p>
          <a
            href="https://wa.me/2348078933943?text=Hi%20MouseTech!%20I%20need%20a%20custom%20web%20development%20solution."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg"
            style={{ background: '#1e5fa8' }}
          >
            Schedule Free Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
