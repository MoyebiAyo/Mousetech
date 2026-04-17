import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Smartphone, Apple, Wifi, Shield, Zap, Headphones } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobile App Development - MouseTech | iOS & Android Apps Nigeria",
  description: "Professional mobile app development services in Nigeria. Native and cross-platform apps for iOS and Android devices.",
  keywords: ["mobile app development Nigeria", "iOS app development", "Android app development", "React Native", "Flutter"],
};

const features = [
  { icon: Smartphone, title: "Cross-Platform", description: "One codebase for both iOS and Android" },
  { icon: Apple, title: "Native Performance", description: "Smooth, native-like user experiences" },
  { icon: Wifi, title: "Offline Capability", description: "Apps that work without internet connection" },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security features" },
  { icon: Zap, title: "Fast Deployment", description: "Quick time-to-market for your app" },
  { icon: Headphones, title: "App Store Support", description: "We handle App Store & Play Store submission" },
];

export default function MobileAppsPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0d1b2a' }}>
      <section className="px-[5%] py-20" style={{ background: 'linear-gradient(160deg, #0d1b2a 0%, #1a2e42 55%, #1a3a5c 100%)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-4">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors no-underline">← Back to Home</Link>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Mobile App <span style={{ color: '#7ab8f5' }}>Development</span>
          </h1>
          <p className="text-lg text-white/70 max-w-[700px] mb-8">
            Transform your ideas into powerful mobile apps. We build beautiful, high-performance iOS and Android applications that users love.
          </p>
          <a
            href="https://wa.me/2348078933943?text=Hi%20MouseTech!%20I'm%20interested%20in%20mobile%20app%20development."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg"
            style={{ background: '#1e5fa8' }}
          >
            Start Your App <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="px-[5%] py-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">App Development Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl border transition-all duration-300 hover:border-white/30" style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                <feature.icon className="w-12 h-12 mb-4" style={{ color: '#7ab8f5' }} />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-20 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your App?</h2>
          <p className="text-white/60 mb-8">Let&apos;s discuss your app idea and create a mobile experience your users will love.</p>
          <a href="https://wa.me/2348078933943?text=Hi%20MouseTech!%20I%20want%20to%20build%20a%20mobile%20app." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg" style={{ background: '#1e5fa8' }}>
            Get Free Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
