"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discovery Call",
    description: "We spend 45 minutes learning about your business, your goals, your audience, and your brand. No forms — just a real conversation with a dedicated strategist.",
  },
  {
    number: "2",
    title: "Design & Build",
    description: "Our designers and developers create a bespoke solution for your needs. You review and approve every stage before we move forward.",
  },
  {
    number: "3",
    title: "Launch",
    description: "We handle deployment, testing, and quality assurance across all devices and platforms. Then we go live — all within your agreed timeframe.",
  },
  {
    number: "4",
    title: "Ongoing Support",
    description: "Your subscription covers unlimited updates, security patches, performance tuning, and a dedicated project manager every month.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px" style={{ background: '#000' }} />
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#666' }}>How It Works</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#000', letterSpacing: '-0.03em' }}>
              Up and running in four<br />straightforward steps.
            </h2>
          </div>
          <p className="text-base leading-relaxed max-w-md" style={{ color: '#666' }}>
            We&apos;ve made getting a world-class website as simple as possible. Here&apos;s what happens from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px" style={{ background: '#eaeaea', zIndex: 0 }} />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center px-6 relative"
            >
              {/* Step Bubble */}
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 font-sans text-lg font-semibold relative z-10 transition-all duration-200"
                style={{ 
                  background: '#fff', 
                  border: '1.5px solid #eaeaea', 
                  color: '#000',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#000';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.borderColor = '#eaeaea';
                }}
              >
                {step.number}
              </div>
              
              <h3 className="font-sans text-lg font-semibold mb-3" style={{ color: '#000' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
