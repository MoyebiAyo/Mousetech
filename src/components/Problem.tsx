"use client";

import { motion } from "framer-motion";
import { Globe, CreditCard, Users, Mail, BarChart, Shield, AlertCircle } from "lucide-react";
import Image from "next/image";

const problems = [
  {
    icon: Globe,
    title: "No Online Presence",
    description: "Missing website means lost connections every single day.",
  },
  {
    icon: CreditCard,
    title: "No Online Payments",
    description: "You're missing out on tithes, offerings, and school fees.",
  },
  {
    icon: Users,
    title: "No Member Tracking",
    description: "No systematic way to track attendance or membership.",
  },
  {
    icon: Mail,
    title: "No Automation",
    description: "Visitors slip through the cracks without follow-up.",
  },
  {
    icon: BarChart,
    title: "No Marketing",
    description: "No way to communicate with your audience effectively.",
  },
  {
    icon: Shield,
    title: "No Structure",
    description: "Disorganized operations slow down your mission.",
  },
];

export default function Problem() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-red-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs md:text-sm mb-4 md:mb-6">
            <AlertCircle className="w-3 h-3 md:w-4 md:h-4" />
            The Problem
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            Is your institution{" "}
            <span className="text-white/90">missing out?</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-lg">
            Every day without a digital presence, you&apos;re leaving money on the table 
            and connections unmade.
          </p>
        </motion.div>

        {/* Problem Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-40 sm:h-52 md:h-64 lg:h-80">
            <Image 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop" 
              alt="Digital transformation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-3">
                {problems.slice(0, 4).map((problem) => (
                  <div key={problem.title} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/20 backdrop-blur-sm border border-red-500/30">
                    <problem.icon className="w-4 h-4 text-red-400" />
                    <span className="text-white/80 text-xs">{problem.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-5 rounded-xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1">
                    {problem.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
