import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SEO in Nigeria | MouseTech",
  description:
    "Technical SEO + on-page optimization for Nigerian businesses. Fast sites, clean metadata, schema, and content that ranks.",
  keywords: ["SEO Nigeria", "technical SEO Nigeria", "local SEO Nigeria", "SEO agency Nigeria", "SEO services Nigeria"],
  alternates: { canonical: "/services/seo-nigeria" },
  openGraph: {
    title: "SEO in Nigeria | MouseTech",
    description: "Technical SEO and ongoing optimization for Nigerian businesses.",
    url: "/services/seo-nigeria",
    type: "website",
  },
};

const faqs = [
  {
    q: "How long does SEO take to work?",
    a: "SEO is cumulative. Many sites see early improvements within 4–8 weeks, but competitive keywords often take 3–6 months. We focus on technical foundations first so growth compounds.",
  },
  {
    q: "Do you do Local SEO (Google Maps)?",
    a: "Yes. We optimize your Google Business Profile, NAP consistency, location pages, and review strategy so you can rank in your city for high-intent searches.",
  },
  {
    q: "Do you help with content?",
    a: "Yes. We can plan and write content that targets search intent (service pages + FAQs + supporting content) and link it together for topical authority.",
  },
  {
    q: "What’s included in technical SEO?",
    a: "Core Web Vitals, sitemap/robots, metadata, canonical, structured data (schema), internal linking, and crawl/indexing improvements.",
  },
];

export default function SeoNigeriaPage() {
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
    "Hi MouseTech! I need SEO in Nigeria. Please audit my site and recommend a plan to rank for my services."
  );

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="faq-schema-seo-ng"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <NavBar
        variant="auto"
        lightLinks={[
          { label: "Services", href: "/services", active: true },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Locations", href: "/locations" },
          { label: "Pricing", href: "/pricing" },
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
            SEO in <span style={{ color: "#0070F3" }}>Nigeria</span>
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Technical SEO + content strategy that helps you rank for high-intent searches and turn traffic into real leads.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href={`https://wa.me/2348078933943?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary"
            >
              Request an SEO audit
            </a>
            <Link href="/case-studies" className="btn-hero-ghost no-underline">
              See case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Technical SEO", d: "Core Web Vitals, schema, sitemap, canonical, crawl/indexing fixes." },
              { t: "Local SEO", d: "Google Business Profile + location pages + NAP consistency + review strategy." },
              { t: "Content that ranks", d: "Service pages + FAQs + supporting content for topical authority." },
            ].map((x) => (
              <div key={x.t} className="p-8 rounded-2xl border" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
                <div className="text-lg font-bold mb-2" style={{ color: "#000" }}>
                  {x.t}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  {x.d}
                </p>
              </div>
            ))}
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

            <div className="mt-12 p-8 rounded-2xl border" style={{ borderColor: "#e2e8f0", background: "#fafafa" }}>
              <div className="text-lg font-bold mb-2" style={{ color: "#000" }}>
                Related pages
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/web-development-nigeria" className="text-sm font-semibold no-underline focus-visible:outline-none" style={{ color: "#0070F3" }}>
                  Web development Nigeria →
                </Link>
                <Link href="/locations" className="text-sm font-semibold no-underline focus-visible:outline-none" style={{ color: "#0070F3" }}>
                  Service areas →
                </Link>
                <Link href="/pricing" className="text-sm font-semibold no-underline focus-visible:outline-none" style={{ color: "#0070F3" }}>
                  Pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

