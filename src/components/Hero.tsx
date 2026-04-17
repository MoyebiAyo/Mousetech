"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero min-h-screen flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0d1b2a 0%, #1a2e42 55%, #1a3a5c 100%)', paddingTop: '72px' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(30,95,168,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30,95,168,0.15) 0%, transparent 40%)' }} />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-[5%] flex items-center justify-between h-[72px] transition-all duration-300 ${scrolled ? 'bg-white/97 shadow-lg' : 'bg-transparent'}`} style={{ backdropFilter: 'blur(12px)', borderBottom: scrolled ? '1px solid #dce6f0' : 'none' }}>
        <a href="/" className="font-serif text-2xl font-bold tracking-tight no-underline" style={{ color: scrolled ? '#0d1b2a' : '#ffffff' }}>
          MouseTech
        </a>
        <ul className="hidden md:flex gap-10 list-none">
          <li><a href="/#how" className="text-sm font-medium no-underline transition-colors duration-200 hover:text-[#1e5fa8]" style={{ color: scrolled ? '#1a2535' : 'rgba(255,255,255,0.9)' }}>How It Works</a></li>
          <li><a href="/services" className="text-sm font-medium no-underline transition-colors duration-200 hover:text-[#1e5fa8]" style={{ color: scrolled ? '#1a2535' : 'rgba(255,255,255,0.9)' }}>Services</a></li>
          <li><a href="/portfolio" className="text-sm font-medium no-underline transition-colors duration-200 hover:text-[#1e5fa8]" style={{ color: scrolled ? '#1a2535' : 'rgba(255,255,255,0.9)' }}>Portfolio</a></li>
          <li><a href="/pricing" className="text-sm font-medium no-underline transition-colors duration-200 hover:text-[#1e5fa8]" style={{ color: scrolled ? '#1a2535' : 'rgba(255,255,255,0.9)' }}>Pricing</a></li>
          <li><a href="/about" className="text-sm font-medium no-underline transition-colors duration-200 hover:text-[#1e5fa8]" style={{ color: scrolled ? '#1a2535' : 'rgba(255,255,255,0.9)' }}>About</a></li>
        </ul>
        <div className="flex gap-3 items-center">
          <a href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I%20have%20a%20question%20about%20your%20software%20solutions." target="_blank" rel="noopener noreferrer" className={`hidden sm:inline-flex text-sm font-semibold px-4 py-2 rounded-md transition-all duration-200 no-underline items-center gap-2 ${scrolled ? 'border-2 border-[#dce6f0] text-[#0d1b2a] hover:border-[#1e5fa8] hover:text-[#1e5fa8]' : 'border-2 border-white/30 text-white hover:border-white/60'}`}>
            Contact
          </a>
          <a href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I'm%20interested%20in%20your%20software%20solutions.%20Can%20we%20discuss?" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold px-4 py-2 rounded-md bg-[#1e5fa8] text-white hover:bg-[#2a7dd4] transition-colors no-underline">Get Started</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center px-[5%] py-20 relative z-10" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', gap: '5rem' }}>
        <motion.div 
          className="flex-1 max-w-[580px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7" style={{ background: 'rgba(30,95,168,0.3)', border: '1px solid rgba(30,95,168,0.5)', color: '#7ab8f5', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#7ab8f5' }} />
            Trusted by 50+ Organizations & Businesses
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Custom software solutions,<br />
            <em className="not-italic" style={{ color: '#7ab8f5' }}>built to scale</em><br />
            your business.
          </h1>

          {/* Subheadline */}
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
            We design, develop, and maintain professional websites, mobile apps, and custom software solutions. From startups to enterprises, we transform your ideas into powerful digital products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
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
                <div key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2" style={{ background: i === 0 ? '#1e5fa8' : i === 1 ? '#1a3a5c' : i === 2 ? '#0d4a2a' : '#4a1a1a', borderColor: '#1a2e42', marginLeft: i > 0 ? '-8px' : '0' }}>
                  {initials}
                </div>
              ))}
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2" style={{ background: '#3a2a0d', borderColor: '#1a2e42', marginLeft: '-8px' }}>+</div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <strong className="text-white/90">50+ clients</strong> trust MouseTech with their digital solutions
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
          <div className="rounded-xl overflow-hidden w-full max-w-md" style={{ background: '#1e2d3d', boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)' }}>
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#16232f', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              <div className="flex-1 ml-2 px-3 py-1 rounded text-xs font-mono" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}>mousetech.app</div>
            </div>
            
            {/* Browser Body */}
            <div>
              {/* Nav */}
              <div className="flex items-center justify-between px-5 py-3" style={{ background: '#0d1b2a', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="w-16 h-3 rounded" style={{ background: '#1e5fa8', opacity: 0.8 }} />
                <div className="flex gap-2">
                  <div className="w-8 h-2 rounded" style={{ background: 'rgba(255,255,255,0.12)' }} />
                  <div className="w-8 h-2 rounded" style={{ background: 'rgba(255,255,255,0.12)' }} />
                  <div className="w-8 h-2 rounded" style={{ background: 'rgba(255,255,255,0.12)' }} />
                </div>
              </div>
              
              {/* Hero */}
              <div className="px-5 py-6" style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a2e42)' }}>
                <div className="h-3.5 rounded mb-2 w-3/4" style={{ background: '#ffffff' }} />
                <div className="h-3.5 rounded mb-4 w-1/2" style={{ background: '#ffffff', opacity: 0.85 }} />
                <div className="h-2 rounded mb-1.5 w-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
                <div className="h-2 rounded mb-4 w-3/4" style={{ background: 'rgba(255,255,255,0.3)' }} />
                <div className="w-24 h-7 rounded" style={{ background: '#1e5fa8' }} />
              </div>
              
              {/* Cards */}
              <div className="grid grid-cols-3 gap-3 p-4" style={{ background: '#f7f9fc' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-md p-3 shadow-sm">
                    <div className="w-5 h-5 rounded mb-1.5" style={{ background: '#e8f1fb' }} />
                    <div className="h-1.5 rounded mb-1" style={{ background: '#dce6f0' }} />
                    <div className="h-1.5 rounded w-2/3" style={{ background: '#dce6f0' }} />
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 py-3 px-4 text-center border-r last:border-r-0" style={{ background: '#0d1b2a', borderColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="h-3 rounded w-1/2 mx-auto mb-1" style={{ background: '#1e5fa8' }} />
                    <div className="h-1.5 rounded w-2/3 mx-auto" style={{ background: 'rgba(255,255,255,0.1)' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom */}
      <div className="border-t px-[5%] py-6 relative z-10" style={{ borderColor: 'rgba(255,255,255,0.07)', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div className="flex items-center gap-10 flex-wrap">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>Trusted by</span>
          {['TechCorp', 'FinServe', 'HealthPlus', 'EduSmart', 'RetailMax'].map((name) => (
            <span key={name} className="font-serif text-base font-bold italic" style={{ color: 'rgba(255,255,255,0.25)' }}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
