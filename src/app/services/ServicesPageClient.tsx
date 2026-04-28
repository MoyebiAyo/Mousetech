"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { additionalServices, coreServices } from "@/data/services";

export default function ServicesPageClient() {
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
        className="relative pt-32 pb-20 md:py-32 overflow-hidden"
        style={{ background: "#000" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,112,243,0.15) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-[5%] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#0070F3" }}
              />
              <span
                className="text-xs font-medium tracking-wide"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                Our Services
              </span>
            </div>

            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              Comprehensive software
              <br />
              <span style={{ color: "#0070F3" }}>solutions for everyone.</span>
            </h1>

            <p
              className="text-xl leading-relaxed max-w-2xl mx-auto mb-10"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              From websites to mobile apps and custom software, we deliver
              end-to-end solutions for businesses, organizations, and
              individuals.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#services" className="btn-hero-primary no-underline">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/pricing" className="btn-hero-ghost no-underline">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
              <div className="w-6 h-0.5 rounded" style={{ background: "#0070F3" }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#0070F3" }}
              >
                Core Services
              </span>
              <div className="w-6 h-0.5 rounded" style={{ background: "#0070F3" }} />
            </div>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#000" }}
            >
              Complete Website Solutions
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666" }}>
              From design to maintenance, we handle it all so you can focus on
              your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border transition-all duration-300 hover:shadow-lg hover:border-[#0070F3]/30 group"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#0070F3]"
                  style={{ background: "#fafafa" }}
                >
                  <service.icon
                    className="w-7 h-7 transition-colors duration-300 group-hover:text-white"
                    style={{ color: "#0070F3" }}
                  />
                </div>
                <h3 className="font-sans text-xl font-bold mb-3" style={{ color: "#000" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#666" }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.cardFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm" style={{ color: "#666" }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#0070F3" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold no-underline transition-all duration-200 hover:gap-3 focus-visible:outline-none"
                  style={{ color: "#0070F3" }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "#fafafa" }}>
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded" style={{ background: "#0070F3" }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#0070F3" }}
              >
                Additional Services
              </span>
              <div className="w-6 h-0.5 rounded" style={{ background: "#0070F3" }} />
            </div>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#000" }}
            >
              Even More Ways We Help
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#666" }}>
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
                style={{ borderColor: "#e2e8f0" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#fafafa" }}
                >
                  <service.icon className="w-6 h-6" style={{ color: "#0070F3" }} />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold mb-1" style={{ color: "#000" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#666" }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                <div className="w-6 h-0.5 rounded" style={{ background: "#0070F3" }} />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#0070F3" }}
                >
                  Our Process
                </span>
              </div>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6"
                style={{ color: "#000" }}
              >
                How we deliver
                <br />
                excellence every time.
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#666" }}>
                Our proven process ensures your project is delivered on time, on budget,
                and exceeds expectations.
              </p>
              <a
                href="/#how"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors focus-visible:outline-none"
                style={{ background: "#0070F3" }}
              >
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
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-6 p-6 rounded-xl" style={{ background: "#fafafa" }}>
                  <span className="font-serif text-3xl font-bold" style={{ color: "#0070F3" }}>
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-bold" style={{ color: "#000" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#666" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "#000" }}>
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
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
              Let&apos;s discuss how we can help transform your digital presence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#000] font-bold rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5 no-underline focus-visible:outline-none"
              >
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I'm%20ready%20to%20get%20started%20with%20my%20website%20project.%20Can%20we%20discuss?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-lg border transition-all duration-200 hover:border-white/60 no-underline focus-visible:outline-none"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
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

