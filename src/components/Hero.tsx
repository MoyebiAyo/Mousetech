"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Menu, X } from "lucide-react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      console.log('Hero nav scroll state:', isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero min-h-screen flex flex-col relative overflow-hidden" style={{ background: '#000', paddingTop: '72px' }}>
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
      <nav 
        className="fixed top-0 left-0 right-0 z-50 px-[5%] flex items-center justify-between h-[72px] transition-all duration-300" 
        style={{ 
          backdropFilter: 'blur(12px)',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
          borderBottom: scrolled ? '1px solid #eaeaea' : '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <a href="/" className="font-sans text-xl font-bold tracking-tight no-underline transition-colors duration-300" style={{ color: scrolled ? '#000' : '#fff' }}>
          MouseTech
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="/#how" className="text-sm font-medium no-underline transition-all duration-200" style={{ color: scrolled ? '#333' : 'rgba(255,255,255,0.8)' }}>How It Works</a></li>
          <li><a href="/services" className="text-sm font-medium no-underline transition-all duration-200" style={{ color: scrolled ? '#333' : 'rgba(255,255,255,0.8)' }}>Services</a></li>
          <li><a href="/portfolio" className="text-sm font-medium no-underline transition-all duration-200" style={{ color: scrolled ? '#333' : 'rgba(255,255,255,0.8)' }}>Portfolio</a></li>
          <li><a href="/pricing" className="text-sm font-medium no-underline transition-all duration-200" style={{ color: scrolled ? '#333' : 'rgba(255,255,255,0.8)' }}>Pricing</a></li>
          <li><a href="/about" className="text-sm font-medium no-underline transition-all duration-200" style={{ color: scrolled ? '#333' : 'rgba(255,255,255,0.8)' }}>About</a></li>
        </ul>
        
        <div className="flex gap-3 items-center">
          <a href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I%20have%20a%20question%20about%20your%20software%20solutions." target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-md transition-all duration-200 no-underline items-center gap-2" style={{ color: scrolled ? '#000' : '#fff', border: `1px solid ${scrolled ? '#eaeaea' : 'rgba(255,255,255,0.3)'}` }}>
            Contact
          </a>
          <a href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I'm%20interested%20in%20your%20software%20solutions.%20Can%20we%20discuss?" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-md transition-all duration-200 no-underline" style={{ background: scrolled ? '#000' : '#fff', color: scrolled ? '#fff' : '#000' }}>
            Get Started
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md transition-all duration-300"
            style={{ color: scrolled ? '#0d1b2a' : '#ffffff' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 px-[5%] py-6 shadow-xl" style={{ background: scrolled ? '#fff' : '#000', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex flex-col gap-4">
            <a href="/#how" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 no-underline" style={{ color: scrolled ? '#333' : '#fff' }}>How It Works</a>
            <a href="/services" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 no-underline" style={{ color: scrolled ? '#333' : '#fff' }}>Services</a>
            <a href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 no-underline" style={{ color: scrolled ? '#333' : '#fff' }}>Portfolio</a>
            <a href="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 no-underline" style={{ color: scrolled ? '#333' : '#fff' }}>Pricing</a>
            <a href="/about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 no-underline" style={{ color: scrolled ? '#333' : '#fff' }}>About</a>
            <a href="/faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 no-underline" style={{ color: scrolled ? '#333' : '#fff' }}>FAQ</a>
            <div className="pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <a href="https://wa.me/2348078933943?text=Hi%20MouseTech!%20I'm%20interested%20in%20your%20software%20solutions." target="_blank" rel="noopener noreferrer" className="block w-full text-center text-base font-medium px-6 py-3 rounded-md no-underline" style={{ background: '#fff', color: '#000' }}>
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex-1 flex items-center px-[5%] py-32 lg:py-40 relative z-10" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', gap: '6rem' }}>
        <motion.div 
          className="flex-1 max-w-[640px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.02em' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#0070F3' }} />
            Trusted by 50+ Organizations & Businesses
          </div>

          {/* Headline */}
          <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tighter mb-8" style={{ letterSpacing: '-0.04em' }}>
            Custom software solutions,<br />
            <span style={{ color: '#0070F3' }}>built to scale</span><br />
            your business.
          </h1>

          {/* Subheadline */}
          <p className="text-xl leading-relaxed mb-12" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '580px' }}>
            We design, develop, and maintain professional websites, mobile apps, and custom software solutions. From startups to enterprises, we transform your ideas into powerful digital products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
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
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {['AK', 'BL', 'CR', 'DM'].map((initials, i) => (
                <div key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white border-2 border-black" style={{ background: i === 0 ? '#333' : i === 1 ? '#555' : i === 2 ? '#777' : '#999', marginLeft: i > 0 ? '-8px' : '0' }}>
                  {initials}
                </div>
              ))}
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white border-2 border-black" style={{ background: '#222', marginLeft: '-8px' }}>+</div>
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

      {/* Hero Bottom */}
      <div className="border-t px-[5%] py-6 relative z-10" style={{ borderColor: 'rgba(255,255,255,0.06)', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div className="flex items-center gap-10 flex-wrap">
          <span className="text-xs tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>Trusted by</span>
          {['TechCorp', 'FinServe', 'HealthPlus', 'EduSmart', 'RetailMax'].map((name) => (
            <span key={name} className="font-sans text-base font-semibold" style={{ color: 'rgba(255,255,255,0.2)' }}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
