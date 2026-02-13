"use client";

import { motion } from "framer-motion";
import { Globe, CreditCard, Mail, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Globe,
    title: "Smart Websites",
    description: "Beautiful, fast, mobile-optimized websites designed to convert visitors into members.",
    gradient: "from-amber-400/20 to-amber-500/10",
    iconGradient: "from-amber-400 to-amber-500",
    iconColor: "text-amber-400",
  },
  {
    icon: CreditCard,
    title: "Payment & Donations",
    description: "Secure online payment processing for tithes, offerings, school fees, and donations.",
    gradient: "from-green-400/20 to-green-500/10",
    iconGradient: "from-green-400 to-green-500",
    iconColor: "text-green-400",
  },
  {
    icon: Mail,
    title: "Automation & Email",
    description: "Automated follow-up sequences, email marketing, and member communication systems.",
    gradient: "from-blue-400/20 to-blue-500/10",
    iconGradient: "from-blue-400 to-cyan-400",
    iconColor: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Security & Backup",
    description: "Enterprise-grade security, daily backups, and 99.9% uptime guarantee.",
    gradient: "from-purple-400/20 to-purple-500/10",
    iconGradient: "from-purple-400 to-pink-400",
    iconColor: "text-purple-400",
  },
];

export default function Solution() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-purple-500/5 rounded-full blur-[80px]" />
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
            <Shield className="w-3 h-3 md:w-4 md:h-4 text-amber-400" />
            Everything You Need
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            One platform,{" "}
            <span className="text-gradient-gold">endless possibilities</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-lg">
            From websites to payments, automation to analytics — everything you need 
            to grow your institution digitally.
          </p>
        </motion.div>

        {/* Solution Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-56 sm:h-64 md:h-72 lg:h-80">
            <Image 
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&h=600&fit=crop" 
              alt="Digital solutions"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-4 sm:px-8 md:px-16 max-w-2xl w-full">
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-white leading-tight">
                  Complete Digital Ecosystem
                </h3>
                <p className="text-white/70 mb-3 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  A unified platform that connects your website, payments, 
                  members, and communications in one powerful system.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
                      <feature.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${feature.iconColor}`} />
                      <span className="text-white text-[10px] sm:text-xs">{feature.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card-hover p-6 rounded-2xl border border-white/[0.06] h-full">
                <div className="flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <a href="/services" className="inline-flex items-center gap-1 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
