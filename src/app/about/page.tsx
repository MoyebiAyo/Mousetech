"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Zap, ArrowRight, Quote, MessageCircle } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in every project we deliver. Our passion drives us to go above and beyond.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Good enough is never enough. We strive for excellence in every line of code and every pixel we place.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of the curve, adopting the latest technologies and trends to give you a competitive edge.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We don't just build projects; we build relationships. Your success is our success, and we're with you every step of the way.",
  },
];

const timeline = [
  {
    year: "2026",
    title: "The Beginning",
    description: "MouseTech was founded with a vision to help businesses and organizations thrive in the digital age.",
  },
  {
    year: "2027",
    title: "Rapid Expansion",
    description: "Projected to expand our team and services, delivering over 50 successful projects.",
  },
  {
    year: "2028",
    title: "Innovation Hub",
    description: "Introducing cutting-edge solutions including AI integration and advanced analytics for businesses.",
  },
  {
    year: "2029",
    title: "Industry Leader",
    description: "Aiming to be recognized as a leading tech agency in Nigeria with clients across multiple states.",
  },
];

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-[5%] flex items-center justify-between h-[72px] bg-white/97 shadow-lg" style={{ backdropFilter: 'blur(12px)', borderBottom: '1px solid #dce6f0' }}>
        <a href="/" className="font-serif text-2xl font-bold tracking-tight no-underline" style={{ color: '#0d1b2a' }}>
          MouseTech
        </a>
        <ul className="hidden md:flex gap-10 list-none">
          <li><a href="/#how" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity no-underline" style={{ color: '#1a2535' }}>How It Works</a></li>
          <li><a href="/#services" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity no-underline" style={{ color: '#1a2535' }}>Services</a></li>
          <li><a href="/#pricing" className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity no-underline" style={{ color: '#1a2535' }}>Pricing</a></li>
          <li><a href="/about" className="text-sm font-medium opacity-100 transition-opacity no-underline" style={{ color: '#1e5fa8' }}>About</a></li>
        </ul>
        <div className="flex gap-3 items-center">
          <a href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I'm%20interested%20in%20your%20software%20solutions.%20Can%20we%20discuss%20my%20project?" target="_blank" rel="noopener noreferrer" className="btn-solid text-sm no-underline flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0d1b2a 0%, #1a2e42 55%, #1a3a5c 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(30,95,168,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30,95,168,0.15) 0%, transparent 40%)' }} />
        
        <div className="relative max-w-[1100px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(30,95,168,0.3)', border: '1px solid rgba(30,95,168,0.5)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7ab8f5' }} />
                <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#7ab8f5' }}>About Us</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                Building Digital<br />
                <em className="not-italic" style={{ color: '#7ab8f5' }}>Excellence</em>
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                MouseTech is a forward-thinking technology agency dedicated to helping businesses and organizations thrive in the digital age. We combine creativity, technical expertise, and strategic thinking to deliver solutions that drive real results.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/#services" className="btn-hero-primary no-underline">
                  Our Services
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/#pricing" className="btn-hero-ghost no-underline">View Pricing</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: 'linear-gradient(to right, rgba(30,95,168,0.2), rgba(30,95,168,0.1))' }} />
              <div className="relative rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <Image
                  src="/profile-picture.jpeg"
                  alt="Ayodele Moyebi - Founder"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ background: '#f7f9fc', borderTop: '1px solid #dce6f0', borderBottom: '1px solid #dce6f0' }}>
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold leading-none mb-2" style={{ color: '#0d1b2a' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: '#8a9ab0' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl"
              style={{ background: 'linear-gradient(to bottom right, rgba(248,250,252,0.5), rgba(241,245,249,0.5))', border: '1px solid #e2e8f0' }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6" style={{ background: '#1e5fa8' }}>
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: '#0d1b2a' }}>Our Mission</h2>
              <p className="leading-relaxed" style={{ color: '#64748b' }}>
                To empower businesses and organizations with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their customers. We believe technology should be accessible, powerful, and beautiful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl"
              style={{ background: 'linear-gradient(to bottom right, rgba(248,250,252,0.5), rgba(241,245,249,0.5))', border: '1px solid #e2e8f0' }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6" style={{ background: '#1e5fa8' }}>
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: '#0d1b2a' }}>Our Vision</h2>
              <p className="leading-relaxed" style={{ color: '#64748b' }}>
                To be the leading technology partner for businesses and organizations across Nigeria and beyond, known for our innovation, reliability, and commitment to client success. We envision a world where every business can leverage technology to achieve its full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24" style={{ background: '#f7f9fc' }}>
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1e5fa8' }}>Our Values</span>
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d1b2a' }}>
              Our Core Values
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border transition-all duration-300 hover:border-[#1e5fa8]/30"
                style={{ borderColor: '#e2e8f0' }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4" style={{ background: '#e8f1fb' }}>
                  <value.icon className="w-6 h-6" style={{ color: '#1e5fa8' }} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0d1b2a' }}>{value.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1e5fa8' }}>Our Journey</span>
              <div className="w-6 h-0.5 rounded" style={{ background: '#1e5fa8' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0d1b2a' }}>
              Our Journey
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b' }}>
              Milestones that mark our growth and evolution
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full hidden md:block" style={{ background: 'linear-gradient(to bottom, #1e5fa8, transparent)' }} />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-right">
                    <div className={`${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="font-serif text-3xl font-bold mb-2" style={{ color: '#1e5fa8' }}>{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#0d1b2a' }}>{item.title}</h3>
                      <p style={{ color: '#64748b' }}>{item.description}</p>
                    </div>
                  </div>

                  <div className="w-4 h-4 rounded-full border-4 relative z-10 hidden md:block" style={{ background: '#1e5fa8', borderColor: '#ffffff' }} />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24" style={{ background: '#f7f9fc' }}>
        <div className="max-w-4xl mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote className="w-16 h-16 mx-auto mb-8" style={{ color: 'rgba(30,95,168,0.2)' }} />
            <blockquote className="font-serif text-2xl md:text-3xl font-medium leading-relaxed mb-8" style={{ color: '#0d1b2a' }}>
              &ldquo;Mouse Tech transformed our online presence completely. Their attention to detail and commitment to excellence is unmatched. Highly recommended!&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: '#1e5fa8' }}>
                OA
              </div>
              <div className="text-left">
                <div className="font-semibold" style={{ color: '#0d1b2a' }}>Oluwaseun Adeyemi</div>
                <div className="text-sm" style={{ color: '#64748b' }}>CEO, GraceTech Solutions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #1e5fa8, #eab308)' }} />
            
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#0d1b2a' }}>
                Let&apos;s Work Together
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color: 'rgba(13,27,42,0.7)' }}>
                Ready to bring your vision to life? We&apos;re here to help you succeed.
              </p>
              <a href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I'm%20ready%20to%20bring%20my%20vision%20to%20life.%20Can%20we%20discuss%20my%20project?" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-colors" style={{ background: '#0d1b2a', color: '#ffffff' }}>
                <MessageCircle className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
