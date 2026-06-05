import type { Metadata } from "next";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientIntakeForm from "./ClientIntakeForm";

export const metadata: Metadata = {
  title: "Client Website Intake Form | MouseTech",
  description:
    "Complete the MouseTech client intake form before your website project kickoff. Share goals, content needs, design preferences, timeline, and budget.",
  alternates: { canonical: "/client-intake" },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Client Website Intake Form | MouseTech",
    description:
      "Share project details with MouseTech before kickoff so we can plan your website clearly.",
    url: "/client-intake",
    type: "website",
  },
};

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Intake", href: "/client-intake", active: true },
];

export default function ClientIntakePage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <NavBar variant="light" lightLinks={navLinks} ctaText="WhatsApp" ctaHref="https://wa.me/2348078933943" />

      <section className="px-[5%] pb-8 pt-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[760px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
              Mouse Technologies
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-black sm:text-5xl" style={{ letterSpacing: "-0.04em" }}>
              Client website intake form
            </h1>
            <p className="text-lg leading-8 text-gray-600">
              Complete this before your project kickoff so we can understand your goals, audience,
              content, design direction, integrations, timeline, and budget.
            </p>
          </div>
        </div>
      </section>

      <ClientIntakeForm />
      <Footer />
    </main>
  );
}
