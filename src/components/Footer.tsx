"use client";

export default function Footer() {
  return (
    <footer style={{ background: '#fafafa', color: '#666', borderTop: '1px solid #eaeaea' }}>
      <div className="max-w-[1200px] mx-auto px-[5%] py-16">
        <div className="grid md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: '1px solid #eaeaea' }}>
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="font-sans text-2xl font-bold text-black no-underline mb-4 inline-block" style={{ letterSpacing: '-0.02em' }}>
              MouseTech
            </a>
            <p className="text-sm leading-relaxed max-w-[260px]" style={{ color: '#666' }}>
              We design, develop, and maintain professional websites, mobile apps, and custom software solutions for businesses and organizations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase mb-5" style={{ color: '#999' }}>Services</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><a href="/services/web-development" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>Web Development</a></li>
              <li><a href="/services/mobile-apps" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>Mobile Apps</a></li>
              <li><a href="/services" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>Custom Software</a></li>
              <li><a href="/services" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>UI/UX Design</a></li>
              <li><a href="/services" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>Maintenance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase mb-5" style={{ color: '#999' }}>Company</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><a href="/about" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>About Us</a></li>
              <li><a href="/portfolio" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>Portfolio</a></li>
              <li><a href="/pricing" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>Pricing</a></li>
              <li><a href="/faq" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>FAQ</a></li>
              <li><a href="mailto:hello@mousetech.app" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>hello@mousetech.app</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase mb-5" style={{ color: '#999' }}>Legal</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><a href="/privacy" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm no-underline transition-colors" style={{ color: '#666' }}>Terms of Service</a></li>
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
