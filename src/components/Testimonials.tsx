"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Within 90 days our online presence transformed completely. Customer engagement went up 340%. I genuinely stopped thinking about our website — Mouse Tech just handles it.",
    author: "Michael Okafor",
    role: "CEO, TechVentures Nigeria",
    initials: "MO",
    color: "#1e5fa8",
  },
  {
    quote: "I used to dread every time something needed updating. Now I just message my project manager and it's handled within the hour. Completely transformed how we manage our digital presence.",
    author: "Sarah Adeyemi",
    role: "Founder, EduSmart Academy",
    initials: "SA",
    color: "#0d4a2a",
  },
  {
    quote: "The mobile app they built handles all our customer orders seamlessly. The ongoing optimization means our software keeps improving every single month.",
    author: "David Nwosu",
    role: "Operations Director, QuickDelivery",
    initials: "DN",
    color: "#4a1a1a",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px" style={{ background: '#000' }} />
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#666' }}>Client Stories</span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#000', letterSpacing: '-0.03em' }}>
              Real results from<br />real businesses.
            </h2>
          </div>
          <p className="text-base leading-relaxed max-w-md" style={{ color: '#666' }}>
            Don&apos;t take our word for it. Here&apos;s what business owners and leaders who rely on Mouse Tech every day have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg p-7 transition-all duration-200"
              style={{ background: '#fafafa', border: '1px solid #eaeaea' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" style={{ color: '#000' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: '#333' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold text-white flex-shrink-0"
                  style={{ background: '#333' }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: '#000' }}>{testimonial.author}</div>
                  <div className="text-xs" style={{ color: '#666' }}>{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
