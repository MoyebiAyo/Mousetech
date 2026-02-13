"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";

const benefits = [
  "No credit card required",
  "30-minute strategy call",
  "Custom solution proposal",
];

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-gold-500/10 to-blue-500/20 rounded-3xl blur-2xl" />

          {/* Card */}
          <div className="relative glass-card rounded-3xl p-12 md:p-16 border border-white/[0.1]">
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-gold-500/10 rounded-2xl rotate-12" />
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl -rotate-12" />

            <div className="text-center relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] mb-8"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-white/70 text-sm">Start Your Transformation Today</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              >
                Ready to scale your{" "}
                <span className="text-gradient-gold">institution?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/50 max-w-lg mx-auto text-lg mb-10"
              >
                Join 50+ churches and schools already leveraging our platform 
                to grow their digital presence and impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              >
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
              >
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400/60" />
                    {benefit}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
