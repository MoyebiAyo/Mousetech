import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - MouseTech",
  description: "MouseTech's terms of service outlining the terms and conditions for using our services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-[5%] py-32" style={{ background: '#000' }}>
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }} />
        <div className="max-w-[800px] mx-auto relative">
          <div className="mb-6">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors no-underline">← Back to Home</Link>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-6" style={{ letterSpacing: '-0.04em' }}>
            Terms of <span style={{ color: '#0070F3' }}>Service</span>
          </h1>
          <p className="text-white/60">Last updated: February 14, 2025</p>
        </div>
      </section>

      <section className="px-[5%] py-28">
        <div className="max-w-[800px] mx-auto prose" style={{ color: '#333' }}>
          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>1. Acceptance of Terms</h2>
          <p className="mb-6">By accessing and using MouseTech&apos;s services, you accept and agree to be bound by these Terms of Service.</p>

          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>2. Services Description</h2>
          <p className="mb-6">MouseTech provides web development, mobile app development, custom software solutions, and related services as described on our website.</p>

          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>3. Payment Terms</h2>
          <p className="mb-6">Payment terms are as agreed upon in individual project contracts. Typically, 50% is required upfront before work begins, with the remaining 50% due upon project completion.</p>

          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>4. Project Timeline</h2>
          <p className="mb-6">Project timelines are estimates and may vary based on project complexity, client feedback speed, and scope changes. We commit to delivering quality work within agreed timeframes.</p>

          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>5. Intellectual Property</h2>
          <p className="mb-6">Upon full payment, clients receive ownership of the final deliverables. MouseTech retains the right to showcase completed work in our portfolio unless otherwise agreed.</p>

          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>6. Revisions & Changes</h2>
          <p className="mb-6">Each project includes a specified number of revision rounds. Additional revisions beyond the agreed scope may incur extra charges.</p>

          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>7. Warranty & Support</h2>
          <p className="mb-6">We provide free support for the duration specified in your package (1-6 months). This covers bug fixes and minor adjustments, not new features.</p>

          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>8. Limitation of Liability</h2>
          <p className="mb-6">MouseTech shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services.</p>

          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>9. Termination</h2>
          <p className="mb-6">Either party may terminate the project with written notice. Clients are responsible for payment for work completed up to the termination date.</p>

          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>10. Governing Law</h2>
          <p className="mb-6">These terms are governed by the laws of the Federal Republic of Nigeria.</p>

          <h2 className="text-2xl font-bold text-black mb-4" style={{ letterSpacing: '-0.02em' }}>11. Contact Information</h2>
          <p className="mb-6">For questions about these Terms, please contact us:</p>
          <p className="mb-6">
            Email: <a href="mailto:hello@mousetech.app" className="text-blue-600">hello@mousetech.app</a><br />
            Phone: +234-807-893-3943
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
