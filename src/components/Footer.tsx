"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "#packages" },
];

const services = [
  "Church Websites",
  "School Websites",
  "Payment Integration",
  "Email Marketing",
  "SMS System",
  "Maintenance",
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4 relative w-32 h-10">
              <Image 
                src="/mouse-tech-logo.png" 
                alt="Mouse Tech" 
                fill
                className="object-contain object-left"
              />
            </a>
            <p className="text-white/60 text-sm mb-6">
              Transforming churches and schools with AI-powered digital solutions across Nigeria.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white/60 hover:text-gold-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white/60 hover:text-gold-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white/60 hover:text-gold-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500/20 transition-colors"
              >
                <Youtube className="w-5 h-5 text-white/60 hover:text-gold-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-gold-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">0807 893 3943</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">moyebiayodelesegun@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Mouse Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-gold-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-gold-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
