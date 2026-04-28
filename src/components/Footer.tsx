"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: '#fafafa', color: '#666', borderTop: '1px solid #eaeaea' }}>
      <div className="max-w-[1200px] mx-auto px-[5%] py-16">
        <div className="grid md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: '1px solid #eaeaea' }}>
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-sans text-2xl font-bold text-black no-underline mb-4 inline-block focus-visible:outline-none" style={{ letterSpacing: '-0.02em' }}>
              MouseTech
            </Link>
            <p className="text-sm leading-relaxed max-w-[260px]" style={{ color: '#666' }}>
              We design, develop, and maintain professional websites, mobile apps, and custom software solutions for businesses and organizations.
            </p>
            <p className="text-sm mt-4" style={{ color: "#666" }}>
              <span className="font-semibold" style={{ color: "#000" }}>
                Service areas:
              </span>{" "}
              Lagos, Abuja, Port Harcourt, Kano, Jos — and remote across Nigeria.
            </p>
            <p className="text-sm mt-3" style={{ color: "#666" }}>
              <span className="font-semibold" style={{ color: "#000" }}>
                Address:
              </span>{" "}
              Lagos, Nigeria
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase mb-5" style={{ color: '#999' }}>Services</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link href="/services/web-development" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>Web Development</Link></li>
              <li><Link href="/services/mobile-apps" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>Mobile Apps</Link></li>
              <li><Link href="/services" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>Custom Software</Link></li>
              <li><Link href="/services" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>UI/UX Design</Link></li>
              <li><Link href="/services" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>Maintenance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase mb-5" style={{ color: '#999' }}>Company</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link href="/about" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>About Us</Link></li>
              <li><Link href="/portfolio" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>Portfolio</Link></li>
              <li><Link href="/pricing" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>Pricing</Link></li>
              <li><Link href="/faq" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>FAQ</Link></li>
              <li><a href="mailto:hello@mousetech.app" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>hello@mousetech.app</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase mb-5" style={{ color: '#999' }}>Legal</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link href="/privacy" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm no-underline transition-colors focus-visible:outline-none" style={{ color: '#666' }}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs" style={{ color: '#999' }}>
            © 2026 MouseTech. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#999' }}>
            Designed to perform. Built to last.
          </p>
        </div>
      </div>
    </footer>
  );
}
