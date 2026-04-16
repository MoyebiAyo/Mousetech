"use client";

import { motion } from "framer-motion";
import { Quote, Star, Building2, GraduationCap } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Michael Okafor",
    role: "CEO, TechVentures Nigeria",
    content: "Mouse Tech transformed our digital presence. Our online sales increased by 300% in just 3 months!",
    rating: 5,
    icon: Building2,
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Founder, EduSmart Academy",
    content: "The custom software solution has made our operations so much easier. Highly recommended!",
    rating: 5,
    icon: GraduationCap,
  },
  {
    name: "David Nwosu",
    role: "Director, QuickDelivery",
    content: "Our customer base doubled after launching the new mobile app. Game changer!",
    rating: 5,
    icon: Building2,
  },
];

const partners = [
  "TechVentures", "EduSmart Academy", "QuickDelivery", "FinServe Bank", "HealthPlus", "RetailMax"
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-amber-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/60 text-xs md:text-sm mb-4 md:mb-6">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-400" />
            Trusted by 50+ Clients
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            Loved by businesses{" "}
            <span className="text-gradient-gold">across Nigeria</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-lg">
            Join hundreds of businesses and organizations already transforming their digital presence.
          </p>
        </motion.div>

        {/* Social Proof Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-36 sm:h-44 md:h-56">
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop" 
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-navy-900/70" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-16 text-center">
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-gold">50+</div>
                  <div className="text-white/60 text-xs md:text-sm">Clients</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-gold">300%</div>
                  <div className="text-white/60 text-xs md:text-sm">Avg Growth</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-gold">99.9%</div>
                  <div className="text-white/60 text-xs md:text-sm">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <div className="mb-10 md:mb-16">
          <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-6 md:mb-8">Trusted by businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 lg:gap-10">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-white/25 font-heading text-xs md:text-sm lg:text-lg font-medium hover:text-amber-400/60 transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/[0.06]"
            >
              <div className="flex items-start gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white/70 mb-5 leading-relaxed text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400/20 to-gold-500/10 flex items-center justify-center">
                  <testimonial.icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-white/40 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
