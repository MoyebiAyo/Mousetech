import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "E-commerce Website in Nigeria | MouseTech",
  description:
    "Sell online with a fast, secure e-commerce website in Nigeria. Payments, inventory, order tracking, SEO foundations, and conversion-first UX.",
  keywords: [
    "ecommerce website Nigeria",
    "online store Nigeria",
    "payment integration Nigeria",
    "Paystack integration",
    "Flutterwave integration",
  ],
  alternates: { canonical: "/services/ecommerce-website-nigeria" },
  openGraph: {
    title: "E-commerce Website in Nigeria | MouseTech",
    description: "Fast, secure e-commerce websites with payments and SEO foundations.",
    url: "/services/ecommerce-website-nigeria",
    type: "website",
  },
};

const faqs = [
  {
    q: "Which payment gateways can you integrate?",
    a: "We commonly integrate Paystack and Flutterwave, and can also support bank transfer flows or other gateways depending on your needs.",
  },
  {
    q: "Can you manage inventory and orders?",
    a: "Yes. We can include product management, inventory tracking, order notifications, receipts, and admin dashboards depending on the package.",
  },
  {
    q: "Will my store be SEO-friendly?",
    a: "Yes. We implement strong technical SEO foundations (metadata, structured data, performance, clean URLs) and can offer ongoing SEO to compete in search.",
  },
  {
    q: "How long does it take?",
    a: "A simple store can launch in 3–6 weeks depending on product count and integrations. We’ll confirm timeline after a quick scoping chat.",
  },
];

export default function EcommerceNigeriaPage() {
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
    "Hi MouseTech! I want to build an e-commerce website in Nigeria with payments. Please share packages, timeline, and next steps."
  );

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="faq-schema-ecom-ng"
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
            E-commerce website in{" "}
            <span style={{ color: "#0070F3" }}>Nigeria</span>
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: "rgba(255,255,255,0.65)" }}>
            Sell online with payments, inventory, order tracking, and a checkout experience designed to convert.
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
            <Link href="/pricing" className="btn-hero-ghost no-underline">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Payments", d: "Paystack/Flutterwave integration, receipts, and transaction reporting." },
              { t: "Store management", d: "Products, inventory, orders, delivery statuses, and admin controls." },
              { t: "SEO + performance", d: "Fast load times, clean URLs, schema, and SEO foundations from day one." },
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
                <Link href="/services/seo-nigeria" className="text-sm font-semibold no-underline focus-visible:outline-none" style={{ color: "#0070F3" }}>
                  SEO Nigeria →
                </Link>
                <Link href="/services/web-development-nigeria" className="text-sm font-semibold no-underline focus-visible:outline-none" style={{ color: "#0070F3" }}>
                  Web development Nigeria →
                </Link>
                <Link href="/case-studies" className="text-sm font-semibold no-underline focus-visible:outline-none" style={{ color: "#0070F3" }}>
                  Case studies →
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

