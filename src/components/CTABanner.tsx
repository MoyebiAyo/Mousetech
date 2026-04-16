"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)' }}>
      {/* Background Glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(30,95,168,0.25), transparent)' }} />
      
      <div className="max-w-[680px] mx-auto px-[5%] text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Tag */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-0.5 rounded" style={{ background: '#7ab8f5' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#7ab8f5' }}>Start Today</span>
            <div className="w-6 h-0.5 rounded" style={{ background: '#7ab8f5' }} />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
            Your best website is<br />
            <em className="not-italic" style={{ color: '#7ab8f5' }}>one conversation away.</em>
          </h2>

          {/* Subtext */}
          <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Start with a free consultation. See your new site design within 7 days. Pay nothing until you love it — guaranteed.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/2348078933943" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0d1b2a] font-bold rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
            >
              Start Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="mailto:moyebiayodelesegun@gmail.com" 
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-lg border transition-all duration-200 hover:border-white/60"
              style={{ borderColor: 'rgba(255,255,255,0.25)' }}
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
