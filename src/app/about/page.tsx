"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Zap, ArrowRight, Quote, MessageCircle } from "lucide-react";
import Image from "next/image";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "12+", label: "Happy Clients" },
  { value: "1+", label: "Years Experience" },
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
    year: "2025",
    title: "The Beginning",
    description: "MouseTech was founded with a vision to help businesses and organizations thrive in the digital age.",
  },
  {
    year: "2026",
    title: "Growing Team",
    description: "Expanded our services and delivered over 15 successful projects for businesses across Nigeria.",
  },
  {
    year: "2027",
    title: "Innovation Focus",
    description: "Introducing cutting-edge solutions including AI integration and advanced analytics for businesses.",
  },
  {
    year: "2028",
    title: "Scaling Impact",
    description: "Aiming to be recognized as a leading tech agency in Nigeria with clients across multiple states.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar 
        variant="auto"
        lightLinks={[
          { label: "How It Works", href: "/#how" },
          { label: "Services", href: "/services" },
          { label: "Pricing", href: "/pricing" },
          { label: "About", href: "/about", active: true },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-32 overflow-hidden" style={{ background: '#000' }}>
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,112,243,0.15) 0%, transparent 60%)' }} />
        
        <div className="relative max-w-[1200px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#0070F3' }} />
                <span className="text-xs font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.9)' }}>About Us</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6" style={{ letterSpacing: '-0.04em' }}>
                Building Digital<br />
                <span style={{ color: '#0070F3' }}>Excellence</span>
              </h1>

              <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                MouseTech is a forward-thinking technology agency dedicated to helping businesses and organizations thrive in the digital age. We combine creativity, technical expertise, and strategic thinking to deliver solutions that drive real results.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/services" className="btn-hero-primary no-underline">
                  Our Services
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/pricing" className="btn-hero-ghost no-underline">View Pricing</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-2xl blur-2xl" style={{ background: 'linear-gradient(to right, rgba(0,112,243,0.2), rgba(0,112,243,0.1))' }} />
              <div className="relative rounded-lg overflow-hidden border" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
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
      <section className="py-16 border-t border-b" style={{ borderColor: '#eaeaea' }}>
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center md:border-r last:md:border-r-0 px-4" style={{ borderColor: '#eaeaea' }}
              >
                <div className="font-sans text-4xl md:text-5xl font-bold leading-none mb-2" style={{ color: '#000', letterSpacing: '-0.03em' }}>
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider font-medium" style={{ color: '#666' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-lg border-subtle"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md mb-6" style={{ background: '#000' }}>
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: '#000', letterSpacing: '-0.02em' }}>Our Mission</h2>
              <p className="leading-relaxed" style={{ color: '#666' }}>
                To empower businesses and organizations with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their customers. We believe technology should be accessible, powerful, and beautiful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-lg border-subtle"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md mb-6" style={{ background: '#000' }}>
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: '#000', letterSpacing: '-0.02em' }}>Our Vision</h2>
              <p className="leading-relaxed" style={{ color: '#666' }}>
                To be the leading technology partner for businesses and organizations across Nigeria and beyond, known for our innovation, reliability, and commitment to client success. We envision a world where every business can leverage technology to achieve its full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-5 h-px" style={{ background: '#000' }} />
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#666' }}>Our Values</span>
              <div className="w-5 h-px" style={{ background: '#000' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#000', letterSpacing: '-0.03em' }}>
              Our Core Values
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666' }}>
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
                className="p-6 rounded-lg bg-white border-subtle transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-4" style={{ background: '#fafafa' }}>
                  <value.icon className="w-5 h-5" style={{ color: '#000' }} />
                </div>
                <h3 className="font-sans text-lg font-semibold mb-2" style={{ color: '#000', letterSpacing: '-0.01em' }}>{value.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{value.description}</p>
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
              <div className="w-6 h-0.5 rounded" style={{ background: '#0070F3' }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#0070F3' }}>Our Journey</span>
              <div className="w-6 h-0.5 rounded" style={{ background: '#0070F3' }} />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#000' }}>
              Our Journey
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666' }}>
              Milestones that mark our growth and evolution
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full hidden md:block" style={{ background: 'linear-gradient(to bottom, #0070F3, transparent)' }} />

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
                      <div className="font-sans text-3xl font-bold mb-2" style={{ color: '#0070F3' }}>{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#000' }}>{item.title}</h3>
                      <p style={{ color: '#666' }}>{item.description}</p>
                    </div>
                  </div>

                  <div className="w-4 h-4 rounded-full border-4 relative z-10 hidden md:block" style={{ background: '#0070F3', borderColor: '#ffffff' }} />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24" style={{ background: '#fafafa' }}>
        <div className="max-w-4xl mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote className="w-16 h-16 mx-auto mb-8" style={{ color: 'rgba(30,95,168,0.2)' }} />
            <blockquote className="font-sans text-2xl md:text-3xl font-medium leading-relaxed mb-8" style={{ color: '#000' }}>
              &ldquo;MouseTech transformed our online presence completely. Their attention to detail and commitment to excellence is unmatched. Highly recommended!&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: '#0070F3' }}>
                OA
              </div>
              <div className="text-left">
                <div className="font-semibold" style={{ color: '#000' }}>Oluwaseun Adeyemi</div>
                <div className="text-sm" style={{ color: '#666' }}>CEO, GraceTech Solutions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden" style={{ background: '#000' }}
          >
            <div className="absolute inset-0" style={{ 
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,112,243,0.15), transparent 60%)' }} />
            
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ letterSpacing: '-0.03em' }}>
                Let&apos;s Work Together
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Ready to bring your vision to life? We&apos;re here to help you succeed.
              </p>
              <a href="https://wa.me/2348078933943?text=Hi%20Mouse%20Tech!%20I'm%20ready%20to%20bring%20my%20vision%20to%20life.%20Can%20we%20discuss%20my%20project?" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium text-lg transition-all duration-200" style={{ background: '#fff', color: '#000' }}>
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
