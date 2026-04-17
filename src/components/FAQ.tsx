"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Do I own my website/software?",
    answer: "Yes, absolutely. Your domain, code, content, and all assets are 100% yours. If you ever decide to leave, we provide a full export of everything. We don't believe in holding clients hostage.",
  },
  {
    question: "What does 'unlimited updates' mean?",
    answer: "It means exactly that — you can request text changes, feature additions, content updates, or bug fixes as often as you need. We handle each request within 1–2 business days, usually faster.",
  },
  {
    question: "How fast will my project be completed?",
    answer: "Most websites launch within 7–14 business days from the discovery call. Mobile apps and custom software may take 3–8 weeks depending on complexity. We give you a clear timeline before starting.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Our maintenance plans can be cancelled at any time with 30 days' notice. No penalties, no awkward conversations. We believe in earning your business every month.",
  },
  {
    question: "What if I already have a website or app?",
    answer: "We can either migrate and redesign your existing product, or maintain and improve what you already have. During the discovery call we'll audit your current solution and recommend the most cost-effective path forward.",
  },
  {
    question: "Do you offer e-commerce support?",
    answer: "Yes — on Growth and Enterprise plans. We build and manage full e-commerce systems including multiple payment gateways, inventory management, order tracking, and sales reporting.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px" style={{ background: '#000' }} />
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#666' }}>FAQ</span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: '#000', letterSpacing: '-0.03em' }}>
              Common questions,<br />honest answers.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#666' }}>
              Still not sure? Here are the questions we get asked most often. If yours isn&apos;t here, we&apos;re happy to chat.
            </p>

            {/* Contact Card */}
            <div className="rounded-lg p-6 text-white" style={{ background: '#000', border: '1px solid #eaeaea' }}>
              <h4 className="font-sans font-semibold mb-2">Still have questions?</h4>
              <p className="text-sm mb-5" style={{ color: '#999' }}>
                Our team typically responds within 2 business hours.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200"
                style={{ background: '#fff', color: '#000' }}
              >
                Chat with us →
              </a>
            </div>
          </motion.div>

          {/* Right Column - FAQ List */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b"
                  style={{ borderColor: '#eaeaea' }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left font-sans font-semibold transition-colors"
                    style={{ color: openIndex === index ? '#000' : '#333' }}
                  >
                    <span className="text-base">{faq.question}</span>
                    <span 
                      className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200"
                      style={{ 
                        borderColor: openIndex === index ? '#000' : '#eaeaea',
                        background: openIndex === index ? '#000' : 'transparent',
                        color: openIndex === index ? '#fff' : '#666',
                        transform: openIndex === index ? 'rotate(45deg)' : 'none'
                      }}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                  <div 
                    className="overflow-hidden transition-all duration-300"
                    style={{ 
                      maxHeight: openIndex === index ? '200px' : '0',
                      paddingBottom: openIndex === index ? '1.25rem' : '0'
                    }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
