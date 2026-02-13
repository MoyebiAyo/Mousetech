"use client";

import { motion } from "framer-motion";
import { Server, RefreshCw, Shield, Database, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Server,
    title: "Hosting & Maintenance",
    description: "99.9% uptime, SSL certificates, and regular updates.",
  },
  {
    icon: RefreshCw,
    title: "Content Updates",
    description: "Monthly content changes, event updates, and news posts.",
  },
  {
    icon: Shield,
    title: "Security Monitoring",
    description: "24/7 security monitoring, malware scanning, and threat protection.",
  },
  {
    icon: Database,
    title: "Backup & Recovery",
    description: "Daily automated backups with instant disaster recovery.",
  },
];

export default function RecurringRevenue() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

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
            Ongoing Support
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            We keep you{" "}
            <span className="text-gradient-gold">protected</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Keep your digital presence running smoothly with our monthly maintenance packages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-5 rounded-xl border border-white/[0.06]"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400/20 to-amber-500/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-heading text-base font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/40 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-gold-500/10 to-amber-500/20 rounded-3xl blur-2xl" />

          <div className="relative glass-card rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 border border-white/[0.1]">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs md:text-sm font-medium mb-3 md:mb-4">
                Continuous Updates & Maintenance
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                <span className="text-gradient-gold">₦20k</span>
                <span className="text-white/30 text-xl md:text-2xl mx-1 md:mx-2">-</span>
                <span className="text-gradient-gold">₦50k</span>
                <span className="text-white/30 text-base md:text-lg font-normal ml-1 md:ml-2">/month</span>
              </div>
              <p className="text-white/40 text-sm md:text-base">Choose the plan that fits your needs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
