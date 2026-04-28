import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services | MouseTech",
  description:
    "Explore MouseTech services: web development, mobile apps, custom software, UI/UX, SEO, hosting, and ongoing maintenance in Nigeria.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | MouseTech",
    description:
      "Web development, mobile apps, and custom software solutions delivered end-to-end.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
