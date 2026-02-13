"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Shield, Globe, Zap, Play } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Users, label: "50+ Churches", color: "from-amber-400 to-amber-500" },
  { icon: TrendingUp, label: "300% Growth", color: "from-green-400 to-green-500" },
  { icon: Shield, label: "99.9% Uptime", color: "from-blue-400 to-blue-500" },
];

const floatingApps = [
  { icon: Globe, label: "Website", color: "bg-amber-500/20 border-amber-500/30" },
  { icon: Zap, label: "Automation", color: "bg-blue-500/20 border-blue-500/30" },
  { icon: Shield, label: "Security", color: "bg-green-500/20 border-green-500/30" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Background glow spots with animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-20 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -right-20 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] mb-6 md:mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span className="text-white/70 text-sm font-medium">Trusted by 50+ Institutions</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            >
              Transform Your{" "}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Institution
              </span>
              <br />
              <span className="text-white">Digitally</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/50 leading-relaxed mb-8 max-w-xl"
            >
              The all-in-one digital platform for churches and schools. 
              Build, automate, and grow with enterprise-grade technology 
              designed for Nigeria.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a href="#contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-gold-500 text-navy-900 font-bold text-base rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:scale-[1.02]">
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#packages" className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold text-base rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                <Sparkles className="w-5 h-5" />
                <span>View Pricing</span>
              </a>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 md:gap-8"
            >
              {features.map((feature, i) => (
                <div key={feature.label} className="flex items-center gap-2 md:gap-3">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-navy-900" />
                  </div>
                  <div>
                    <div className="text-sm md:text-lg font-semibold">{feature.label}</div>
                    <div className="text-white/40 text-xs">{i === 0 ? "Churches & Schools" : i === 1 ? "Average Growth" : "Guaranteed"}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Visual - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-gold-500/10 to-blue-500/20 rounded-3xl blur-2xl" />
              
              {/* Card */}
              <div className="relative glass-card rounded-2xl p-2 border border-white/[0.1] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" 
                    alt="Dashboard"
                    fill
                    className="object-cover opacity-30"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/60" />
                </div>
                
                {/* Browser chrome */}
                <div className="relative z-10 flex items-center gap-2 mb-4 pb-4 pt-2 border-b border-white/[0.08]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="px-4 py-1.5 bg-navy-900/60 rounded-lg text-white/40 text-xs text-center">
                      mousetech.com
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="relative z-10 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-6 bg-white/10 rounded w-32" />
                    <div className="flex gap-2">
                      <div className="h-6 w-6 rounded bg-amber-500/20" />
                      <div className="h-6 w-6 rounded bg-blue-500/20" />
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20">
                      <div className="h-3 w-12 bg-amber-500/30 rounded mb-2" />
                      <div className="h-4 w-16 bg-white/10 rounded" />
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="h-3 w-12 bg-white/20 rounded mb-2" />
                      <div className="h-4 w-16 bg-white/10 rounded" />
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="h-3 w-12 bg-white/20 rounded mb-2" />
                      <div className="h-4 w-16 bg-white/10 rounded" />
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-24 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/[0.06] flex items-end justify-between px-4 pb-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div key={i} className="w-4 bg-gradient-to-t from-blue-500/40 to-cyan-400/40 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>

                  {/* Activity row */}
                  <div className="flex gap-3">
                    <div className="flex-1 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06]" />
                    <div className="flex-1 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06]" />
                  </div>
                </div>
              </div>

              {/* Floating app cards */}
              {floatingApps.map((app, i) => (
                <motion.div
                  key={app.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    delay: 0.8 + i * 0.2, 
                    duration: 4 + i * 0.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute ${i === 0 ? '-top-4 right-0' : i === 1 ? 'bottom-8 left-0' : 'top-1/3 right-0'} 
                    ${app.color} backdrop-blur-xl rounded-xl p-3 border flex items-center gap-2 shadow-xl hidden lg:flex`}
                >
                  <app.icon className="w-4 h-4 text-white/80" />
                  <span className="text-xs font-medium text-white/80">{app.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
