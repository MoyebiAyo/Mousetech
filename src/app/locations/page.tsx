import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Locations | MouseTech",
  description:
    "MouseTech provides web development, SEO, and custom software across Nigeria. Explore services by city.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Locations | MouseTech",
    description:
      "Explore MouseTech services by city across Nigeria: web development, mobile apps, and custom software.",
    url: "/locations",
    type: "website",
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar
        variant="auto"
        lightLinks={[
          { label: "How It Works", href: "/#how" },
          { label: "Services", href: "/services" },
          { label: "Pricing", href: "/pricing" },
          { label: "About", href: "/about" },
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

        <div className="relative max-w-[1100px] mx-auto px-[5%] text-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#0070F3" }}
            />
            <span
              className="text-xs font-medium tracking-wide"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              Locations
            </span>
          </div>

          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            Web development across{" "}
            <span style={{ color: "#0070F3" }}>Nigeria</span>.
          </h1>
          <p
            className="text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Explore our most popular locations. If your city isn’t listed, we
            still deliver remotely across Nigeria.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-[5%]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="block p-8 rounded-2xl border no-underline transition-colors hover:border-[#1e5fa8] focus-visible:outline-none"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#0070F3" }}>
                  {location.region}
                </div>
                <div className="text-2xl font-bold mb-3" style={{ color: "#000", letterSpacing: "-0.02em" }}>
                  {location.city}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  {location.heroSubtitle}
                </p>
                <div className="mt-5 text-sm font-semibold" style={{ color: "#0070F3" }}>
                  View location →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

