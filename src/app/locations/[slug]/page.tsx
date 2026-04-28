import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { coreServices } from "@/data/services";
import { getLocationBySlug, locations } from "@/data/locations";

type LocationPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }: LocationPageProps): Metadata {
  const location = getLocationBySlug(params.slug);
  if (!location) return { title: "Location Not Found | MouseTech", robots: { index: false, follow: false } };

  const title = `${location.heroTitle} | MouseTech`;
  return {
    title,
    description: location.heroSubtitle,
    keywords: location.keywords,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: {
      title,
      description: location.heroSubtitle,
      url: `/locations/${location.slug}`,
      type: "website",
    },
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();

  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteUrl =
    configuredSiteUrl && /^https?:\/\//i.test(configuredSiteUrl)
      ? configuredSiteUrl.replace(/\/$/, "")
      : "https://mousetech.app";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "MouseTech",
    url: siteUrl,
    image: `${siteUrl}/mouse-tech-logo.png`,
    telephone: "+234-807-893-3943",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressRegion: "Lagos",
    },
    areaServed: [
      { "@type": "City", name: location.city },
      { "@type": "Country", name: "Nigeria" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Web Development in ${location.city}`,
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: { "@type": "City", name: location.city },
    serviceType: ["Web Development", "SEO", "Custom Software", "Maintenance"],
    url: `${siteUrl}/locations/${location.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${siteUrl}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.city,
        item: `${siteUrl}/locations/${location.slug}`,
      },
    ],
  };

  const faqs = [
    {
      q: `Do you serve clients in ${location.city}?`,
      a: `Yes. We work with businesses in ${location.city} and across Nigeria. Projects can be delivered fully remotely, with calls and WhatsApp updates.`,
    },
    {
      q: "How much does a website cost?",
      a: "It depends on scope. We’ll recommend the best plan after a quick chat. We also run limited-time promos for simple websites when available.",
    },
    {
      q: "How long does it take to build?",
      a: "Small sites can ship in days, while larger websites and e-commerce projects usually take a few weeks. We confirm timeline before starting.",
    },
    {
      q: "Do you help with SEO and Google Maps?",
      a: "Yes. We implement technical SEO and can help optimize your Google Business Profile + location targeting for local searches.",
    },
  ];

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
    `Hi MouseTech! I’m looking for web development in ${location.city}. I’d like the ₦50,000 promo or a recommendation based on my needs. Can we discuss?`
  );

  return (
    <main className="min-h-screen bg-white">
      <Script
        id={`schema-localbusiness-${location.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id={`schema-service-${location.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`schema-breadcrumb-${location.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`schema-faq-${location.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <NavBar
        variant="auto"
        lightLinks={[
          { label: "How It Works", href: "/#how" },
          { label: "Services", href: "/services" },
          { label: "Pricing", href: "/pricing" },
          { label: "Locations", href: "/locations", active: true },
        ]}
      />

      <section
        className="relative pt-32 pb-20 md:py-32 overflow-hidden"
        style={{ background: "#000" }}
      >
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
              href="/locations"
              className="text-sm text-white/60 hover:text-white transition-colors no-underline focus-visible:outline-none"
            >
              ← Back to Locations
            </Link>
          </div>

          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            {location.heroTitle}
          </h1>
          <p
            className="text-xl leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {location.heroSubtitle}
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
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#000", letterSpacing: "-0.02em" }}>
                What we build in {location.city}
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#666" }}>
                We help businesses in {location.city} launch high-performing websites and software that convert visitors into customers. We focus on speed, SEO foundations, and a clean user experience.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Websites that convert", d: "Landing pages and business sites designed for clarity and leads." },
                  { t: "E-commerce & payments", d: "Sell online with secure payment and a smooth checkout experience." },
                  { t: "SEO foundations", d: "Technical SEO, metadata, schema, and performance best practices." },
                  { t: "Ongoing support", d: "Updates, fixes, and improvements when you need them." },
                ].map((item) => (
                  <div key={item.t} className="p-6 rounded-2xl border" style={{ borderColor: "#e2e8f0", background: "#ffffff" }}>
                    <div className="text-lg font-bold mb-2" style={{ color: "#000" }}>
                      {item.t}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="p-8 rounded-2xl border sticky top-24" style={{ borderColor: "#e2e8f0", background: "#fafafa" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#0070F3" }}>
                Popular services
              </div>
              <div className="space-y-3">
                {coreServices.slice(0, 5).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block p-3 rounded-lg border no-underline hover:border-[#1e5fa8] focus-visible:outline-none"
                    style={{ borderColor: "#e2e8f0", background: "#ffffff", color: "#000" }}
                  >
                    <div className="font-semibold">{service.title}</div>
                    <div className="text-xs mt-1" style={{ color: "#666" }}>
                      {service.description}
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "#fafafa" }}>
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ color: "#000", letterSpacing: "-0.02em" }}
          >
            FAQs about working with MouseTech in {location.city}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="p-6 rounded-2xl border"
                style={{ borderColor: "#e2e8f0", background: "#ffffff" }}
              >
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
      </section>

      <section className="py-20" style={{ background: "#000" }}>
        <div className="max-w-[900px] mx-auto px-[5%] text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6" style={{ letterSpacing: "-0.03em" }}>
            Ready to build in {location.city}?
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
            Share what you need and we’ll recommend the best approach, timeline, and pricing.
          </p>
          <a
            href={`https://wa.me/2348078933943?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold bg-white text-black no-underline focus-visible:outline-none"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

