import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Design in Lagos | MouseTech",
  description:
    "MouseTech designs modern, conversion-focused websites for Lagos businesses. Fast builds, strong SEO foundations, and premium UI/UX.",
  keywords: [
    "website design Lagos",
    "website designers Lagos",
    "web design company Lagos",
    "web development Lagos",
    "UI UX Lagos",
  ],
  alternates: { canonical: "/services/website-design-lagos" },
  openGraph: {
    title: "Website Design in Lagos | MouseTech",
    description: "Modern, conversion-focused website design for Lagos businesses.",
    url: "/services/website-design-lagos",
    type: "website",
  },
};

const faqs = [
  {
    q: "Do you do both design and development?",
    a: "Yes. We can handle UI/UX design + full development, plus hosting, performance, and ongoing updates so you don’t need multiple vendors.",
  },
  {
    q: "Can you design for a specific industry?",
    a: "Yes. We tailor design to your audience and goals (lead gen, e-commerce, brand trust). The layout, copy structure, and CTAs are designed for conversion.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. We design mobile-first and test across common devices so your site looks premium everywhere.",
  },
  {
    q: "Can you help me rank in Lagos searches?",
    a: "Yes. We implement technical SEO, location targeting, and can manage ongoing SEO plus Google Business Profile optimization.",
  },
];

export default function WebsiteDesignLagosPage() {
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
    "Hi MouseTech! I need website design in Lagos. Please share examples/case studies and recommend the best package."
  );

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="faq-schema-web-design-lagos"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <NavBar
        variant="auto"
        lightLinks={[
          { label: "Services", href: "/services", active: true },
          { label: "Locations", href: "/locations" },
          { label: "Case Studies", href: "/case-studies" },
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
            Website Design in{" "}
            <span style={{ color: "#0070F3" }}>Lagos</span>
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Premium design + clean UX built to convert. We design websites Lagos businesses are proud to send customers to.
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
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Conversion-first layout", d: "We structure pages around decisions: clarity, trust, and action." },
              { t: "Mobile-first design", d: "Looks premium on phones — where most Lagos traffic happens." },
              { t: "SEO foundations", d: "Metadata, performance, schema, and internal linking done right." },
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
                <Link href="/locations/lagos" className="text-sm font-semibold no-underline focus-visible:outline-none" style={{ color: "#0070F3" }}>
                  Lagos service area →
                </Link>
                <Link href="/services/web-development-nigeria" className="text-sm font-semibold no-underline focus-visible:outline-none" style={{ color: "#0070F3" }}>
                  Web development Nigeria →
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

