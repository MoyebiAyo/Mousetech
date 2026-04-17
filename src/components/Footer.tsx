"use client";

export default function Footer() {
  return (
    <footer style={{ background: '#0d1b2a', color: 'rgba(255,255,255,0.55)' }}>
      <div className="max-w-[1100px] mx-auto px-[5%] py-16">
        <div className="grid md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="font-serif text-2xl font-bold text-white no-underline mb-4 inline-block">
              MouseTech
            </a>
            <p className="text-sm leading-relaxed max-w-[260px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              We design, develop, and maintain professional websites, mobile apps, and custom software solutions for businesses and organizations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Services</h4>
            <ul className="flex flex-col gap-3 list-none">
              {['Web Development', 'Mobile Apps', 'Custom Software', 'UI/UX Design', 'Maintenance'].map((item) => (
                <li key={item}>
                  <a href="/services" className="text-sm no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Company</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><a href="/about" className="text-sm no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>About Us</a></li>
              <li><a href="/portfolio" className="text-sm no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>Portfolio</a></li>
              <li><a href="/pricing" className="text-sm no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>Pricing</a></li>
              <li><a href="/faq" className="text-sm no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>FAQ</a></li>
              <li><a href="mailto:hello@mousetech.app" className="text-sm no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>hello@mousetech.app</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Legal</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li><a href="/privacy" className="text-sm no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms of Service</a></li>
              <li><a href="#" className="text-sm no-underline transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>SLA</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2026 MouseTech. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Designed to perform. Built to last.
          </p>
        </div>
      </div>
    </footer>
  );
}
