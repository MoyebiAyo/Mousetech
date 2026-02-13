"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Zap,
  ArrowRight,
  Quote,
} from "lucide-react";
import Image from "next/image";

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
    description:
      "We love what we do, and it shows in every project we deliver. Our passion drives us to go above and beyond.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Good enough is never enough. We strive for excellence in every line of code and every pixel we place.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay ahead of the curve, adopting the latest technologies and trends to give you a competitive edge.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We don't just build projects; we build relationships. Your success is our success, and we're with you every step of the way.",
  },
];

const timeline = [
  {
    year: "2026",
    title: "The Beginning",
    description:
      "Mouse Tech was founded with a vision to help businesses thrive in the digital age.",
  },
  {
    year: "2027",
    title: "Rapid Expansion",
    description:
      "Projected to expand our team and services, delivering over 50 successful projects.",
  },
  {
    year: "2028",
    title: "Innovation Hub",
    description:
      "Introducing cutting-edge solutions including AI integration and advanced analytics.",
  },
  {
    year: "2029",
    title: "Industry Leader",
    description:
      "Aiming to be recognized as a leading tech agency in Nigeria with clients across multiple industries.",
  },
];

const team = [
  {
    name: "Ayodele Moyebi",
    role: "Founder & Lead Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Full-stack developer with a passion for creating beautiful, functional digital experiences.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-amber-500/10 border border-amber-400/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-sm font-medium">
                  About Us
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Building Digital
                <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Mouse Tech is a forward-thinking technology agency dedicated to
                helping businesses thrive in the digital age. We combine
                creativity, technical expertise, and strategic thinking to
                deliver solutions that drive real results.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-navy-900 font-semibold rounded-full hover:shadow-lg hover:shadow-amber-400/25 transition-all"
                >
                  Our Services
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-amber-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Mouse Tech Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 mb-6">
                <Target className="w-7 h-7 text-navy-900" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-slate-300 leading-relaxed">
                To empower businesses with innovative digital solutions that
                drive growth, enhance efficiency, and create meaningful
                connections with their audiences. We believe technology should
                be accessible, powerful, and beautiful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 mb-6">
                <Eye className="w-7 h-7 text-navy-900" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Vision
              </h2>
              <p className="text-slate-300 leading-relaxed">
                To be the leading technology partner for businesses across
                Africa and beyond, known for our innovation, reliability, and
                commitment to client success. We envision a world where every
                business can leverage technology to achieve its full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-amber-400/20 to-amber-500/20 mb-4">
                  <value.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Milestones that mark our growth and evolution
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-amber-400/50 via-amber-400/20 to-transparent hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    <div
                      className={`${
                        index % 2 === 1 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <div className="text-3xl font-bold text-amber-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-amber-400 border-4 border-navy-900 relative z-10 hidden md:block" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Talented individuals dedicated to your success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/50">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-amber-400 text-sm mb-3">{member.role}</p>
                    <p className="text-slate-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote className="w-16 h-16 text-amber-400/30 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              &ldquo;Mouse Tech transformed our online presence completely. Their
              attention to detail and commitment to excellence is unmatched.
              Highly recommended!&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center text-navy-900 font-bold">
                OA
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Oluwaseun Adeyemi</div>
                <div className="text-slate-400 text-sm">CEO, GraceTech Solutions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80')] bg-cover bg-center opacity-10" />

            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg md:text-xl text-navy-800/80 max-w-2xl mx-auto mb-8">
                Ready to bring your vision to life? We&apos;re here to help you
                succeed.
              </p>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-semibold text-lg rounded-full hover:bg-navy-800 transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
