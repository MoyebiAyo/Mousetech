"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: '#000' }}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px'
      }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,112,243,0.15), transparent)' }} />
      
      <div className="max-w-[700px] mx-auto px-[5%] text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Tag */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-5 h-px" style={{ background: '#fff' }} />
            <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#999' }}>Start Today</span>
            <div className="w-5 h-px" style={{ background: '#fff' }} />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-white mb-6" style={{ letterSpacing: '-0.03em' }}>
            Your best website is<br />
            <span style={{ color: '#0070F3' }}>one conversation away.</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Start with a free consultation. See your new site design within 7 days. Pay nothing until you love it — guaranteed.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/2348078933943" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-md transition-all duration-200"
            >
              Start Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="mailto:hello@mousetech.app" 
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-md border transition-all duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
