"use client";

import { motion } from "framer-motion";
import { Rocket, RefreshCw, TrendingUp, Shield, Check, Zap, Search } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Dedicated Project Manager",
    description: "Every client gets a real human who knows your project, your goals, and your vision. Reach them by email, WhatsApp, or phone — not a ticketing system.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Revisions & Updates",
    description: "Need changes to your app, new features, or content updates? Just ask. No hourly billing, no project minimums, no waiting weeks.",
  },
  {
    icon: TrendingUp,
    title: "Proactive Growth Strategy",
    description: "We don't just build — we improve. Monthly performance reviews, optimization recommendations, and feature enhancements keep you growing.",
  },
  {
    icon: Shield,
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade infrastructure with automatic failover, DDoS protection, and guaranteed uptime backed by a real service-level agreement.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-[5%]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl p-8 relative overflow-hidden"
            style={{ background: '#0d1b2a', boxShadow: '0 30px 60px rgba(13,27,42,0.15)' }}
          >
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(30,95,168,0.3), transparent 60%)' }} />
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <span className="font-serif text-base font-bold text-white">Site Health Dashboard</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(30,95,168,0.3)', border: '1px solid rgba(30,95,168,0.5)', color: '#7ab8f5' }}>● Live</span>
            </div>

            {/* Rows */}
            {[
              { icon: Zap, label: "Page Speed Score", sub: "Core Web Vitals" },
              { icon: Shield, label: "SSL Certificate", sub: "Valid · Auto-renews" },
              { icon: RefreshCw, label: "Last Backup", sub: "Today at 3:00 AM" },
              { icon: Search, label: "SEO Health", sub: "94/100 · 3 suggestions" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-4 rounded-lg mb-3 relative z-10" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'rgba(30,95,168,0.3)' }}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white/80">{item.label}</div>
                    <div className="text-xs text-white/35">{item.sub}</div>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#22c55e' }}>
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
            ))}

            {/* Progress Bars */}
            <div className="mt-6 relative z-10">
              {[
                { label: "Monthly Organic Traffic", value: "↑ 38%", width: "72%" },
                { label: "Conversion Rate", value: "5.8%", width: "58%" },
                { label: "Uptime This Month", value: "100%", width: "100%" },
              ].map((bar, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-white/40">{bar.label}</span>
                    <span className="text-xs font-semibold" style={{ color: '#7ab8f5' }}>{bar.value}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div className="h-full rounded-full" style={{ width: bar.width, background: 'linear-gradient(90deg, #1e5fa8, #7ab8f5)' }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1e5fa8' }}>Why MouseTech</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-10" style={{ color: '#0d1b2a' }}>
              Stop worrying about<br />your website. Ever.
            </h2>

            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#e8f1fb' }}>
                    <feature.icon className="w-5 h-5" style={{ color: '#1e5fa8' }} />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold mb-2" style={{ color: '#0d1b2a' }}>{feature.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#8a9ab0' }}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
