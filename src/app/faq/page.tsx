"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    category: "General Questions",
    faqs: [
      { q: "What is MouseTech?", a: "MouseTech is a software solutions company based in Nigeria. We specialize in web development, mobile app development, custom software solutions, and UI/UX design for businesses, organizations, and individuals." },
      { q: "Where are you located?", a: "We're based in Lagos, Nigeria, but we serve clients across Nigeria and internationally. All our services can be delivered remotely." },
      { q: "What industries do you work with?", a: "We work with businesses of all sizes across various industries including retail, healthcare, education, finance, entertainment, and more." },
      { q: "Do you offer free consultations?", a: "Yes! We offer free initial consultations to understand your project requirements and provide recommendations." },
    ],
  },
  {
    category: "Services & Pricing",
    faqs: [
      { q: "How much does a website cost?", a: "Website costs vary based on complexity. Starter websites start at ₦150,000, business websites at ₦350,000, and e-commerce platforms at ₦600,000+. Contact us for a detailed quote." },
      { q: "How long does it take to build a website?", a: "A simple website takes 2-4 weeks, while complex projects can take 2-3 months. We'll provide a timeline during consultation." },
      { q: "Do you offer payment plans?", a: "Yes, we offer flexible payment plans. Typically, we require 50% upfront and 50% upon completion, but we can customize this based on your needs." },
      { q: "What technologies do you use?", a: "We use modern technologies like Next.js, React, React Native, Flutter, Node.js, and various cloud platforms depending on project requirements." },
      { q: "Can you redesign my existing website?", a: "Absolutely! We can redesign and modernize your existing website while preserving your content and improving performance." },
    ],
  },
  {
    category: "Mobile App Development",
    faqs: [
      { q: "Do you build both iOS and Android apps?", a: "Yes! We build cross-platform apps that work on both iOS and Android using technologies like React Native and Flutter." },
      { q: "How much does a mobile app cost?", a: "Mobile app costs vary widely. Simple apps start at ₦500,000, while complex apps can range from ₦1,000,000 to ₦5,000,000+ depending on features." },
      { q: "Will you help publish my app?", a: "Yes, we handle the entire app store submission process for both Apple App Store and Google Play Store." },
      { q: "How long does app development take?", a: "Simple apps take 2-3 months, while complex apps can take 4-6 months or more." },
    ],
  },
  {
    category: "Support & Maintenance",
    faqs: [
      { q: "Do you provide ongoing support?", a: "Yes! All our packages include free support (1-6 months depending on package). After that, we offer affordable maintenance plans." },
      { q: "What if I need changes after launch?", a: "We offer hourly support and monthly retainer packages for ongoing updates and improvements." },
      { q: "How do I contact support?", a: "You can reach us via WhatsApp at +234-807-893-3943, email at hello@mousetech.app, or through our website contact form." },
      { q: "What are your support hours?", a: "Our support hours are Monday-Friday, 9AM-6PM WAT. Emergency support is available for critical issues." },
    ],
  },
  {
    category: "Process & Communication",
    faqs: [
      { q: "What is your development process?", a: "Our process includes: Discovery & Planning → Design → Development → Testing → Launch → Ongoing Support." },
      { q: "How will we communicate during the project?", a: "We use WhatsApp, email, and video calls. You'll have a dedicated project manager who keeps you updated throughout." },
      { q: "Can I see progress during development?", a: "Absolutely! We provide regular updates and demos throughout the development process." },
      { q: "What if I'm not satisfied with the result?", a: "We work iteratively and get your feedback at every stage. We won't consider the project complete until you're 100% satisfied." },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <main className="min-h-screen" style={{ background: '#0d1b2a' }}>
      <section className="px-[5%] py-20" style={{ background: 'linear-gradient(160deg, #0d1b2a 0%, #1a2e42 55%, #1a3a5c 100%)' }}>
        <div className="max-w-[900px] mx-auto">
          <div className="mb-4">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors no-underline">← Back to Home</Link>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked <span style={{ color: '#7ab8f5' }}>Questions</span>
          </h1>
          <p className="text-lg text-white/70">
            Find answers to common questions about our services, pricing, and process.
          </p>
        </div>
      </section>

      <section className="px-[5%] py-20">
        <div className="max-w-[900px] mx-auto space-y-12">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-2xl font-bold text-white mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq, idx) => {
                  const key = `${catIdx}-${idx}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={key}
                      className="rounded-xl border overflow-hidden transition-all duration-300"
                      style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="text-lg font-semibold text-white pr-4">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 flex-shrink-0" style={{ color: '#7ab8f5' }} />
                        ) : (
                          <ChevronDown className="w-6 h-6 flex-shrink-0" style={{ color: '#7ab8f5' }} />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-white/70 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[5%] py-20 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-white/60 mb-8">We&apos;re here to help! Contact us and we&apos;ll answer any questions you have.</p>
          <a href="https://wa.me/2348078933943?text=Hi%20MouseTech!%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg" style={{ background: '#1e5fa8' }}>
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
