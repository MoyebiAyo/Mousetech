import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - MouseTech",
  description: "MouseTech's privacy policy outlining how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen" style={{ background: '#0d1b2a' }}>
      <section className="px-[5%] py-20" style={{ background: 'linear-gradient(160deg, #0d1b2a 0%, #1a2e42 55%, #1a3a5c 100%)' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="mb-4">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors no-underline">← Back to Home</Link>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
            Privacy <span style={{ color: '#7ab8f5' }}>Policy</span>
          </h1>
          <p className="text-white/60">Last updated: February 14, 2025</p>
        </div>
      </section>

      <section className="px-[5%] py-20">
        <div className="max-w-[800px] mx-auto prose" style={{ color: 'rgba(255,255,255,0.8)' }}>
          <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
          <p className="mb-6">We collect information you provide directly, including name, email address, phone number, and project details when you contact us or use our services.</p>

          <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">We use your information to provide services, communicate with you, improve our website, and comply with legal obligations.</p>

          <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
          <p className="mb-6">We do not sell or rent your personal information. We may share data with trusted service providers who assist in operating our website, conducting our business, or servicing you.</p>

          <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
          <p className="mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
          <p className="mb-6">Our website uses cookies to enhance user experience, analyze site usage, and enable certain functionalities.</p>

          <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Links</h2>
          <p className="mb-6">Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>

          <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
          <p className="mb-6">You have the right to access, correct, or delete your personal information. Contact us at hello@mousetech.app to exercise these rights.</p>

          <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
          <p className="mb-6">If you have questions about this Privacy Policy, please contact us at:</p>
          <p className="mb-6">
            Email: <a href="mailto:hello@mousetech.app" className="text-blue-400">hello@mousetech.app</a><br />
            Phone: +234-807-893-3943
          </p>
        </div>
      </section>
    </main>
  );
}
