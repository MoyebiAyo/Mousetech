import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

type CaseStudyPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return { title: "Case Study Not Found | MouseTech", robots: { index: false, follow: false } };

  const title = `${cs.title} Case Study | MouseTech`;
  return {
    title,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title,
      description: cs.summary,
      url: `/case-studies/${cs.slug}`,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

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
    address: { "@type": "PostalAddress", addressCountry: "NG", addressRegion: "Lagos" },
  };

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${cs.title} — Case Study`,
    about: cs.industry,
    description: cs.summary,
    author: { "@id": `${siteUrl}/#localbusiness` },
    publisher: { "@id": `${siteUrl}/#localbusiness` },
    url: `${siteUrl}/case-studies/${cs.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: `${siteUrl}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cs.title,
        item: `${siteUrl}/case-studies/${cs.slug}`,
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    `Hi MouseTech! I saw your case study (${cs.title}) and I’d like something similar for my business. Can we discuss?`
  );

  return (
    <main className="min-h-screen bg-white">
      <Script
        id={`schema-localbusiness-case-${cs.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id={`schema-case-${cs.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <Script
        id={`schema-breadcrumb-${cs.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <NavBar
        variant="auto"
        lightLinks={[
          { label: "Services", href: "/services" },
          { label: "Case Studies", href: "/case-studies", active: true },
          { label: "Pricing", href: "/pricing" },
          { label: "Locations", href: "/locations" },
        ]}
      />

      <section className="relative pt-32 pb-16 overflow-hidden" style={{ background: "#000" }}>
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

        <div className="relative max-w-[900px] mx-auto px-[5%]">
          <div className="mb-6">
            <Link
              href="/case-studies"
              className="text-sm text-white/60 hover:text-white transition-colors no-underline focus-visible:outline-none"
            >
              ← Back to Case Studies
            </Link>
          </div>
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#7ab8f5" }}>
            {cs.industry} • {cs.clientType}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6" style={{ letterSpacing: "-0.04em" }}>
            {cs.title}
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            {cs.summary}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-[5%]">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-2xl border" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#0070F3" }}>
                Industry
              </div>
              <div className="font-semibold" style={{ color: "#000" }}>
                {cs.industry}
              </div>
            </div>
            <div className="p-6 rounded-2xl border" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#0070F3" }}>
                Stack
              </div>
              <div className="text-sm" style={{ color: "#111" }}>
                {cs.stack.join(" • ")}
              </div>
            </div>
            <div className="p-6 rounded-2xl border" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#0070F3" }}>
                Next step
              </div>
              <a
                href={`https://wa.me/2348078933943?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold no-underline focus-visible:outline-none"
                style={{ color: "#0070F3" }}
              >
                Request a quote →
              </a>
            </div>
          </div>

          {(cs.metrics?.length || cs.timeline || cs.scope?.length) && (
            <div
              className="rounded-2xl border p-6 md:p-8 mb-12"
              style={{ borderColor: "#e2e8f0", background: "#fafafa" }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {cs.metrics?.length ? (
                  <div className="md:col-span-2">
                    <div
                      className="text-xs font-bold tracking-widest uppercase mb-3"
                      style={{ color: "#0070F3" }}
                    >
                      Key metrics
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {cs.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-4 rounded-xl border"
                          style={{ borderColor: "#e2e8f0", background: "#ffffff" }}
                        >
                          <div
                            className="text-xs uppercase tracking-wider mb-1"
                            style={{ color: "#64748b" }}
                          >
                            {m.label}
                          </div>
                          <div
                            className="text-lg font-bold"
                            style={{ color: "#000", letterSpacing: "-0.02em" }}
                          >
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div>
                  <div
                    className="text-xs font-bold tracking-widest uppercase mb-3"
                    style={{ color: "#0070F3" }}
                  >
                    Delivery
                  </div>
                  {cs.timeline ? (
                    <div className="mb-4">
                      <div className="text-sm font-semibold" style={{ color: "#000" }}>
                        Timeline
                      </div>
                      <div className="text-sm" style={{ color: "#666" }}>
                        {cs.timeline}
                      </div>
                    </div>
                  ) : null}
                  {cs.scope?.length ? (
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "#000" }}>
                        Scope
                      </div>
                      <ul className="list-disc pl-5 mt-2 space-y-1" style={{ color: "#666" }}>
                        {cs.scope.map((s) => (
                          <li key={s} className="text-sm">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )}

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#000" }}>
                Problem
              </h2>
              <p className="leading-relaxed" style={{ color: "#666" }}>
                {cs.problem}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#000" }}>
                Solution
              </h2>
              <p className="leading-relaxed" style={{ color: "#666" }}>
                {cs.solution}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#000" }}>
                Results
              </h2>
              <ul className="list-disc pl-6 space-y-2" style={{ color: "#666" }}>
                {cs.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            {cs.testimonial ? (
              <div
                className="p-8 rounded-2xl border"
                style={{ borderColor: "#e2e8f0", background: "#ffffff" }}
              >
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "#0070F3" }}
                >
                  Testimonial
                </div>
                <blockquote
                  className="text-lg leading-relaxed mb-5"
                  style={{ color: "#000" }}
                >
                  “{cs.testimonial.quote}”
                </blockquote>
                <div className="text-sm font-semibold" style={{ color: "#000" }}>
                  {cs.testimonial.name}
                </div>
                <div className="text-sm" style={{ color: "#666" }}>
                  {cs.testimonial.role}
                </div>
              </div>
            ) : null}

            {cs.screenshots?.length ? (
              <div>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#000" }}>
                  Screenshots
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {cs.screenshots.map((s) => (
                    <div
                      key={s.src}
                      className="rounded-2xl border overflow-hidden"
                      style={{ borderColor: "#e2e8f0", background: "#fafafa" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.src} alt={s.alt} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {cs.href ? (
              <div className="p-6 rounded-2xl border" style={{ borderColor: "#e2e8f0", background: "#fafafa" }}>
                <div className="text-sm font-semibold mb-2" style={{ color: "#000" }}>
                  Live link
                </div>
                <a
                  href={cs.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm no-underline focus-visible:outline-none"
                  style={{ color: "#0070F3" }}
                >
                  {cs.href}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

