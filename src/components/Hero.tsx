"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import NavBar from "@/components/Navbar";
import LimitedTimeOfferBanner from "@/components/LimitedTimeOfferBanner";

export default function Hero() {
  return (
    <div className="hero flex flex-col relative overflow-hidden" style={{ background: '#000', paddingTop: '72px', minHeight: '100vh' }}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px'
      }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,112,243,0.15) 0%, transparent 60%)' }} />
      
      {/* Navigation */}
      <NavBar
        variant="auto"
        lightLinks={[
          { label: "How It Works", href: "/#how" },
          { label: "Services", href: "/services" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Pricing", href: "/pricing" },
          { label: "About", href: "/about" },
        ]}
      />

      <LimitedTimeOfferBanner />

      {/* Hero Content */}
      <div className="flex-1 flex items-start px-[5%] pt-8 pb-3 sm:pt-10 sm:pb-5 md:pt-14 md:pb-8 lg:pt-16 lg:pb-16 relative z-10" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', gap: '4rem' }}>
        <motion.div 
          className="flex-1 max-w-[640px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tighter mb-2 sm:mb-3 md:mb-4" style={{ letterSpacing: '-0.04em' }}>
            Custom software solutions,<br />
            <span style={{ color: '#0070F3' }}>built to scale</span><br />
            your business.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-3 sm:mb-4 md:mb-5" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '580px' }}>
            We design, develop, and maintain professional websites, mobile apps, and custom software solutions. From startups to enterprises, we transform your ideas into powerful digital products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-4 md:mb-6">
            <a href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I'm%20interested%20in%20discussing%20a%20software%20solution%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              Start Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/#how" className="btn-hero-ghost">
              <Play className="w-4 h-4 fill-current" />
              See how it works
            </a>
          </div>

          {/* Trust */}
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2">
              {['AK', 'BL', 'CR', 'DM'].map((initials, i) => (
                <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white border-2 border-black" style={{ background: i === 0 ? '#333' : i === 1 ? '#555' : i === 2 ? '#777' : '#999', marginLeft: i > 0 ? '-6px' : '0' }}>
                  {initials}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white border-2 border-black" style={{ background: '#222', marginLeft: '-6px' }}>+</div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <strong className="text-white/90">50+ clients</strong> trust MouseTech
            </p>
          </div>
        </motion.div>

        {/* Hero Visual - Browser Mockup */}
        <motion.div 
          className="hidden lg:flex flex-1 justify-center items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rounded-lg overflow-hidden w-full max-w-md" style={{ background: '#111', boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)' }}>
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              <div className="flex-1 ml-2 px-3 py-1 rounded text-xs font-mono" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)' }}>mousetech.app</div>
            </div>
            
            {/* Browser Body */}
            <div>
              {/* Nav */}
              <div className="flex items-center justify-between px-5 py-3" style={{ background: '#000', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="w-16 h-2.5 rounded" style={{ background: '#fff', opacity: 0.9 }} />
                <div className="flex gap-2">
                  <div className="w-8 h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.15)' }} />
                  <div className="w-8 h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.15)' }} />
                  <div className="w-8 h-1.5 rounded" style={{ background: 'rgba(255,255,255,0.15)' }} />
                </div>
              </div>
              
              {/* Hero */}
              <div className="px-5 py-8" style={{ background: '#000' }}>
                <div className="h-4 rounded mb-2 w-3/4" style={{ background: '#fff' }} />
                <div className="h-4 rounded mb-4 w-1/2" style={{ background: '#fff', opacity: 0.7 }} />
                <div className="h-1.5 rounded mb-1.5 w-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
                <div className="h-1.5 rounded mb-4 w-3/4" style={{ background: 'rgba(255,255,255,0.2)' }} />
                <div className="w-24 h-8 rounded" style={{ background: '#0070F3' }} />
              </div>
              
              {/* Cards */}
              <div className="grid grid-cols-3 gap-3 p-4" style={{ background: '#fafafa' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded p-3 shadow-sm" style={{ border: '1px solid #eaeaea' }}>
                    <div className="w-5 h-5 rounded mb-1.5" style={{ background: '#f5f5f5' }} />
                    <div className="h-1.5 rounded mb-1" style={{ background: '#eaeaea' }} />
                    <div className="h-1.5 rounded w-2/3" style={{ background: '#eaeaea' }} />
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#000' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 py-3 px-4 text-center border-r last:border-r-0" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="h-3 rounded w-1/2 mx-auto mb-1" style={{ background: '#0070F3' }} />
                    <div className="h-1.5 rounded w-2/3 mx-auto" style={{ background: 'rgba(255,255,255,0.1)' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
