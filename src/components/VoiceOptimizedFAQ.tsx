"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services does MouseTech offer?",
    answer: "MouseTech offers comprehensive software solutions including professional website design and development, mobile app development for iOS and Android, custom software development, UI/UX design, e-commerce solutions, and ongoing maintenance and support services.",
  },
  {
    question: "How much does it cost to build a website with MouseTech?",
    answer: "Our website packages start from ₦150,000 for basic websites and can go up to ₦1,000,000+ for complex enterprise solutions. We offer flexible pricing based on your specific needs. Contact us for a free consultation and custom quote.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: "Mobile app development typically takes 4-12 weeks depending on complexity. Simple apps can be completed in 4-6 weeks, while more complex applications with advanced features may take 8-12 weeks or more.",
  },
  {
    question: "Does MouseTech provide ongoing support after project completion?",
    answer: "Yes! We offer comprehensive maintenance and support packages that include regular updates, security patches, performance optimization, bug fixes, and 24/7 monitoring to ensure your software runs smoothly.",
  },
  {
    question: "Can MouseTech help my business in Lagos, Nigeria?",
    answer: "Absolutely! We serve businesses across Nigeria, with a strong presence in Lagos. We work with local businesses, startups, established companies, churches, schools, and organizations throughout the country.",
  },
  {
    question: "Do you offer e-commerce solutions?",
    answer: "Yes, we build complete e-commerce solutions with secure payment integration, inventory management, order tracking, customer accounts, and mobile-responsive design. We support multiple payment gateways popular in Nigeria.",
  },
  {
    question: "How do I contact MouseTech for a project?",
    answer: "You can reach us via WhatsApp at +234-807-893-3943, email us, or visit our website at mousetech.app. We offer free consultations and typically respond within 2 business hours.",
  },
  {
    question: "What makes MouseTech different from other software companies?",
    answer: "MouseTech stands out through our dedication to quality, transparent communication, dedicated project managers for each client, unlimited revisions during development, and our commitment to delivering solutions that truly drive business growth.",
  },
];

export default function VoiceSearchOptimizedFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-[5%]">
        {/* SEO Header - Optimized for Voice Search */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0d1b2a' }}>
            Frequently Asked Questions About MouseTech Software Solutions
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#64748b' }}>
            Everything you need to know about our web development, mobile app development, and custom software services in Nigeria.
          </p>
        </div>

        {/* FAQ List with Structured Data */}
        <div className="max-w-3xl mx-auto">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
          />

          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b"
                style={{ borderColor: '#dce6f0', borderTop: index === 0 ? '1px solid #dce6f0' : 'none' }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left font-serif font-bold transition-colors hover:text-[#1e5fa8]"
                  style={{ color: openIndex === index ? '#1e5fa8' : '#0d1b2a' }}
                >
                  <span className="text-base">{faq.question}</span>
                  <span 
                    className="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ 
                      borderColor: openIndex === index ? '#1e5fa8' : '#dce6f0',
                      background: openIndex === index ? '#1e5fa8' : 'transparent',
                      color: openIndex === index ? '#ffffff' : '#8a9ab0',
                      transform: openIndex === index ? 'rotate(45deg)' : 'none'
                    }}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{ 
                    maxHeight: openIndex === index ? '300px' : '0',
                    paddingBottom: openIndex === index ? '1.25rem' : '0'
                  }}
                >
                  <p className="text-base leading-relaxed" style={{ color: '#64748b' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA for Voice/AI Discovery */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6" style={{ color: '#64748b' }}>
            Still have questions? We&apos;re here to help!
          </p>
          <a 
            href="https://wa.me/2348078933943?text=Hi%20MouseTech!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e5fa8] text-white font-bold rounded-lg transition-all duration-200 hover:transform hover:-translate-y-0.5"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
