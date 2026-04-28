import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web Development in Nigeria | MouseTech",
  description:
    "MouseTech builds fast, SEO-ready, conversion-focused websites for Nigerian businesses. Landing pages, company sites, e-commerce, and custom web apps.",
  keywords: [
    "web development Nigeria",
    "website design Nigeria",
    "website developers Nigeria",
    "software company Nigeria",
    "ecommerce website Nigeria",
  ],
  alternates: { canonical: "/services/web-development-nigeria" },
  openGraph: {
    title: "Web Development in Nigeria | MouseTech",
    description:
      "Fast, SEO-ready, conversion-focused websites for Nigerian businesses.",
    url: "/services/web-development-nigeria",
    type: "website",
  },
};

const faqs = [
  {
    q: "How much does a website cost in Nigeria?",
    a: "It depends on scope. We offer transparent packages and can recommend the best option after a short discovery chat. For limited time, we also run a ₦50,000 promo for a simple 1–3 page site.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Typical timelines range from 3–5 business days for a small landing site to 2–6 weeks for larger websites. We agree on timeline upfront before we start.",
  },
  {
    q: "Do you handle SEO?",
    a: "Yes. Every build includes technical SEO basics (metadata, performance, sitemap/schema) and we offer ongoing SEO management for competitive industries.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We can rebuild your site for better speed, trust, and conversion while preserving the important content.",
  },
];

export default function WebDevelopmentNigeriaPage() {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteUrl =
    configuredSiteUrl && /^https?:\/\//i.test(configuredSiteUrl)
      ? configuredSiteUrl.replace(/\/$/, "")
      : "https://mousetech.app";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const whatsappMessage = encodeURIComponent(
    "Hi MouseTech! I need web development in Nigeria. Please recommend the best package for my business and share next steps."
  );

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="faq-schema-web-dev-ng"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <NavBar
        variant="auto"
        lightLinks={[
          { label: "Services", href: "/services", active: true },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Pricing", href: "/pricing" },
          { label: "Locations", href: "/locations" },
        ]}
      />

      <section className="relative pt-32 pb-20 md:py-32 overflow-hidden" style={{ background: "#000" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,112,243,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[1100px] mx-auto px-[5%]">
          <div className="mb-6">
            <Link
              href="/services"
              className="text-sm text-white/60 hover:text-white transition-colors no-underline focus-visible:outline-none"
            >
              ← Back to Services
            </Link>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: "-0.04em" }}>
            Web Development in{" "}
            <span style={{ color: "#0070F3" }}>Nigeria</span>
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            We build fast, SEO-ready websites designed to convert visitors into leads — for Nigerian businesses across every industry.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href={`https://wa.me/2348078933943?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              Get a free quote
            </a>
            <Link href="/case-studies" className="btn-hero-ghost no-underline">
              See case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#000", letterSpacing: "-0.02em" }}>
                What we can build
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Landing pages", d: "Simple, fast pages optimized for conversion and WhatsApp inquiries." },
                  { t: "Business websites", d: "Professional company sites that build trust and rank for your services." },
                  { t: "E-commerce", d: "Sell online with payments, inventory, and conversion-friendly checkout." },
                  { t: "Custom web apps", d: "Dashboards, portals, and internal systems tailored to your workflow." },
                ].map((x) => (
                  <div key={x.t} className="p-6 rounded-2xl border" style={{ borderColor: "#e2e8f0" }}>
                    <div className="text-lg font-bold mb-2" style={{ color: "#000" }}>
                      {x.t}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                      {x.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="p-8 rounded-2xl border sticky top-24" style={{ borderColor: "#e2e8f0", background: "#fafafa" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#0070F3" }}>
                Popular next steps
              </div>
              <div className="space-y-3">
                <Link
                  href="/pricing"
                  className="block p-4 rounded-xl border no-underline hover:border-[#1e5fa8] focus-visible:outline-none"
                  style={{ borderColor: "#e2e8f0", background: "#fff", color: "#000" }}
                >
                  <div className="font-semibold">View pricing</div>
                  <div className="text-xs mt-1" style={{ color: "#666" }}>
                    Transparent packages + promo offer details.
                  </div>
                </Link>
                <Link
                  href="/locations"
                  className="block p-4 rounded-xl border no-underline hover:border-[#1e5fa8] focus-visible:outline-none"
                  style={{ borderColor: "#e2e8f0", background: "#fff", color: "#000" }}
                >
                  <div className="font-semibold">Browse service areas</div>
                  <div className="text-xs mt-1" style={{ color: "#666" }}>
                    Lagos, Abuja, Port Harcourt, Kano, Jos, and more.
                  </div>
                </Link>
                <a
                  href={`${siteUrl}/case-studies`}
                  className="block p-4 rounded-xl border no-underline hover:border-[#1e5fa8] focus-visible:outline-none"
                  style={{ borderColor: "#e2e8f0", background: "#fff", color: "#000" }}
                >
                  <div className="font-semibold">See real work</div>
                  <div className="text-xs mt-1" style={{ color: "#666" }}>
                    Case studies built for SEO + conversion.
                  </div>
                </a>
              </div>
            </aside>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#000", letterSpacing: "-0.02em" }}>
              FAQs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((f) => (
                <div key={f.q} className="p-6 rounded-2xl border" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
                  <div className="font-semibold mb-2" style={{ color: "#000" }}>
                    {f.q}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

