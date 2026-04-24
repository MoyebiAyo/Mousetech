import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { coreServices } from "@/data/services";

type SearchPageProps = {
  searchParams?: {
    q?: string;
  };
};

type SearchEntry = {
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

const staticPages: SearchEntry[] = [
  {
    title: "Home",
    description:
      "MouseTech homepage with software solutions for web, mobile, and custom products.",
    href: "/",
    keywords: ["home", "homepage", "software solutions", "mousetech"],
  },
  {
    title: "Services",
    description:
      "Complete overview of MouseTech service offerings and delivery process.",
    href: "/services",
    keywords: ["services", "software services", "development services"],
  },
  {
    title: "Pricing",
    description: "Simple and transparent pricing plans for projects and support.",
    href: "/pricing",
    keywords: ["pricing", "cost", "plans", "packages"],
  },
  {
    title: "Portfolio",
    description: "Recent project work across web platforms and business solutions.",
    href: "/portfolio",
    keywords: ["portfolio", "projects", "case studies", "work"],
  },
  {
    title: "About",
    description:
      "MouseTech mission, values, and story as a software solutions company.",
    href: "/about",
    keywords: ["about", "company", "mission", "values", "team"],
  },
  {
    title: "FAQ",
    description: "Answers to common questions about services, timelines, and support.",
    href: "/faq",
    keywords: ["faq", "questions", "support", "help"],
  },
  {
    title: "Privacy Policy",
    description: "How MouseTech collects, uses, and protects personal information.",
    href: "/privacy",
    keywords: ["privacy", "policy", "data", "information"],
  },
  {
    title: "Terms of Service",
    description: "Terms and conditions for using MouseTech services.",
    href: "/terms",
    keywords: ["terms", "legal", "service terms", "conditions"],
  },
];

const serviceEntries: SearchEntry[] = coreServices.map((service) => ({
  title: service.title,
  description: service.description,
  href: `/services/${service.slug}`,
  keywords: [
    service.title,
    ...service.cardFeatures,
    ...service.features.slice(0, 3),
  ].map((item) => item.toLowerCase()),
}));

const searchableEntries = [...staticPages, ...serviceEntries];

export const metadata: Metadata = {
  title: "Search | MouseTech",
  description: "Search MouseTech pages and services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams?.q?.trim() ?? "";
  const normalizedQuery = query.toLowerCase();

  const results =
    normalizedQuery.length === 0
      ? []
      : searchableEntries.filter((entry) => {
          const haystack = [
            entry.title,
            entry.description,
            ...entry.keywords,
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes(normalizedQuery);
        });

  return (
    <main className="min-h-screen bg-white">
      <section
        className="relative px-[5%] pt-32 pb-20 overflow-hidden"
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
        <div className="relative max-w-[900px] mx-auto">
          <div className="mb-6">
            <Link
              href="/"
              className="text-sm text-white/60 hover:text-white transition-colors no-underline"
            >
              ← Back to Home
            </Link>
          </div>
          <h1
            className="font-sans text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            Search <span style={{ color: "#0070F3" }}>MouseTech</span>
          </h1>
          <form action="/search" method="get" className="flex gap-3 flex-wrap">
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search services, pricing, portfolio..."
              className="flex-1 min-w-[240px] px-4 py-3 rounded-md bg-white text-black border border-white/20"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md font-semibold text-white"
              style={{ background: "#0070F3" }}
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="px-[5%] py-16">
        <div className="max-w-[900px] mx-auto">
          {normalizedQuery.length === 0 ? (
            <p className="text-gray-600">Enter a search term to see results.</p>
          ) : results.length === 0 ? (
            <p className="text-gray-600">
              No results found for <strong>&ldquo;{query}&rdquo;</strong>.
            </p>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600">
                Found <strong>{results.length}</strong>{" "}
                {results.length === 1 ? "result" : "results"} for{" "}
                <strong>&ldquo;{query}&rdquo;</strong>.
              </p>
              {results.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  className="block p-5 rounded-lg border no-underline transition-colors hover:border-[#1e5fa8]"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <h2 className="text-xl font-semibold mb-2 text-black">
                    {result.title}
                  </h2>
                  <p className="text-gray-600">{result.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
