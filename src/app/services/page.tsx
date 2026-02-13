"use client";

import { motion } from "framer-motion";
import {
  Globe,
  CreditCard,
  Mail,
  Users,
  Calendar,
  Wrench,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    subtitle: "Stunning Digital Experiences",
    description:
      "We build beautiful, high-performance websites that captivate your audience and drive results. From sleek portfolios to complex web applications, our team crafts digital experiences that leave lasting impressions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: [
      "Responsive design for all devices",
      "SEO-optimized architecture",
      "Lightning-fast load times",
      "Modern UI/UX design",
      "Content Management System integration",
      "Custom animations and interactions",
    ],
    benefits: [
      "Increased online visibility",
      "Higher conversion rates",
      "Better user engagement",
      "Professional brand image",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    subtitle: "Seamless Transactions",
    description:
      "Enable secure, frictionless payments on your platform. We integrate multiple payment gateways including Paystack, Flutterwave, and international options like Stripe and PayPal to help you accept payments globally.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    features: [
      "Paystack & Flutterwave integration",
      "Stripe & PayPal support",
      "Multi-currency support",
      "Subscription billing",
      "Invoice generation",
      "Payment analytics dashboard",
    ],
    benefits: [
      "Global payment acceptance",
      "Reduced cart abandonment",
      "Automated billing cycles",
      "Real-time transaction monitoring",
    ],
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Mail,
    title: "Business Email Setup",
    subtitle: "Professional Communication",
    description:
      "Establish credibility with professional branded email addresses. We set up secure, reliable email systems using Google Workspace or Microsoft 365, complete with custom domains and advanced security features.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    features: [
      "Custom domain email addresses",
      "Google Workspace integration",
      "Microsoft 365 setup",
      "Email security & spam protection",
      "Cloud storage included",
      "Mobile device synchronization",
    ],
    benefits: [
      "Enhanced brand credibility",
      "Improved email deliverability",
      "Professional communication",
      "Advanced security features",
    ],
    color: "from-amber-500 to-orange-400",
  },
  {
    icon: Users,
    title: "Member Management Systems",
    subtitle: "Organized Operations",
    description:
      "Streamline your organization with powerful member management solutions. From churches to corporate teams, we build systems that help you track, communicate with, and manage your members efficiently.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    features: [
      "Member database management",
      "Role-based access control",
      "Automated communications",
      "Attendance tracking",
      "Group & department organization",
      "Custom profile fields",
    ],
    benefits: [
      "Centralized member data",
      "Improved communication",
      "Reduced administrative work",
      "Better member engagement",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Calendar,
    title: "Event Management Platforms",
    subtitle: "Memorable Experiences",
    description:
      "Create unforgettable events with our comprehensive event management solutions. From registration to check-in, we provide tools that make organizing events seamless and professional.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    features: [
      "Online event registration",
      "Ticket sales & management",
      "Automated reminders",
      "QR code check-in system",
      "Attendee analytics",
      "Multi-event management",
    ],
    benefits: [
      "Increased event attendance",
      "Streamlined registration process",
      "Real-time attendance tracking",
      "Professional event experience",
    ],
    color: "from-rose-500 to-red-400",
  },
  {
    icon: Wrench,
    title: "Continuous Maintenance",
    subtitle: "Always Optimized",
    description:
      "Keep your digital assets running smoothly with our comprehensive maintenance services. We handle updates, security patches, performance optimization, and technical support so you can focus on your business.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    features: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates",
      "Backup & disaster recovery",
      "24/7 technical support",
      "Monthly performance reports",
    ],
    benefits: [
      "Maximum uptime guarantee",
      "Enhanced security",
      "Improved performance",
      "Peace of mind",
    ],
    color: "from-indigo-500 to-blue-400",
  },
];

const processSteps = [
  {
    icon: Sparkles,
    title: "Discovery",
    description: "We understand your goals, audience, and requirements",
  },
  {
    icon: Zap,
    title: "Design",
    description: "We create stunning designs tailored to your brand",
  },
  {
    icon: Shield,
    title: "Development",
    description: "We build with cutting-edge technology and best practices",
  },
  {
    icon: Clock,
    title: "Launch & Support",
    description: "We deploy and provide ongoing maintenance and support",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-navy-900 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-amber-500/10 border border-amber-400/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-sm font-medium">
                Our Services
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Solutions That
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Drive Growth
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              From stunning websites to powerful business systems, we provide
              comprehensive digital solutions that help your organization
              thrive in the modern world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group">
                    <div
                      className={`absolute -inset-4 bg-gradient-to-r ${service.color} opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    <div className="relative rounded-2xl overflow-hidden border border-slate-700/50">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={500}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold`}
                        >
                          <service.icon className="w-4 h-4" />
                          {service.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Key Features
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <Check
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 text-transparent bg-gradient-to-r ${service.color} bg-clip-text`}
                            style={{
                              stroke: "url(#gradient)",
                            }}
                          />
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient id="gradient">
                                <stop offset="0%" stopColor="#fbbf24" />
                                <stop offset="100%" stopColor="#f59e0b" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 bg-navy-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results every time
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 mb-6">
                    <step.icon className="w-8 h-8 text-navy-900" />
                  </div>
                  <div className="text-5xl font-bold text-slate-700 mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px">
                    <div className="relative w-full">
                      <ArrowRight className="absolute right-0 -top-3 w-6 h-6 text-slate-600" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl text-navy-800/80 max-w-2xl mx-auto mb-8">
                Let&apos;s discuss your project and create something amazing
                together
              </p>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-semibold text-lg rounded-full hover:bg-navy-800 transition-colors"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
