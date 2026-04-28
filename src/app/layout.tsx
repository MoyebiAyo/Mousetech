import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl =
  configuredSiteUrl && /^https?:\/\//i.test(configuredSiteUrl)
    ? configuredSiteUrl.replace(/\/$/, "")
    : "https://mousetech.app";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const googleVerificationCode =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MouseTech",
  alternateName: "Mouse Technologies",
  url: siteUrl,
  logo: `${siteUrl}/mouse-tech-logo.png`,
  description:
    "Software solutions company providing web development, mobile app development, and custom software solutions in Nigeria",
  foundingDate: "2025",
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "Custom Software Solutions",
    "UI/UX Design",
    "Software Maintenance",
  ],
  knowsAbout: [
    "Software Development",
    "Web Design",
    "Mobile Applications",
    "E-commerce",
    "Digital Transformation",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-807-893-3943",
    email: "hello@mousetech.app",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://wa.me/2348078933943",
    "https://linkedin.com/company/mousetech",
    "https://twitter.com/mousetech_ng",
    "https://facebook.com/mousetechng",
    "https://instagram.com/mousetech_ng",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MouseTech",
  url: siteUrl,
  description: "Professional software solutions company in Nigeria",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MouseTech",
  image: `${siteUrl}/mouse-tech-logo.png`,
  priceRange: "₦₦₦",
  telephone: "+234-807-893-3943",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressRegion: "Lagos",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "6.5244",
    longitude: "3.3792",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

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
    { "@type": "Country", name: "Nigeria" },
    { "@type": "City", name: "Lagos" },
    { "@type": "City", name: "Abuja" },
    { "@type": "City", name: "Port Harcourt" },
    { "@type": "City", name: "Ibadan" },
    { "@type": "City", name: "Kano" },
  ],
};

const servicesCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MouseTech Services",
  itemListElement: [
    "Web Development",
    "Mobile App Development",
    "Custom Software Development",
    "UI/UX Design",
    "SEO Management",
    "Performance & Hosting",
    "Security & Backups",
    "Analytics & Reporting",
  ].map((name, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Service",
      name,
      provider: { "@id": `${siteUrl}/#localbusiness` },
      areaServed: { "@type": "Country", name: "Nigeria" },
    },
  })),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MouseTech — Software Solutions Company in Nigeria | Web & Mobile Apps",
    template: "%s | MouseTech",
  },
  description:
    "MouseTech is a leading software solutions company in Nigeria. We design, develop, and maintain professional websites, mobile apps, and custom software for businesses and organizations. Get a free consultation today.",
  keywords: [
    "software company Nigeria",
    "web development Nigeria",
    "mobile app development",
    "custom software development",
    "software solutions Lagos",
    "website design Nigeria",
    "app developers Nigeria",
    "software company Africa",
    "business software solutions",
    "MouseTech",
    "mousetech.app",
  ],
  authors: [{ name: "MouseTech" }],
  creator: "MouseTech",
  publisher: "MouseTech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: googleVerificationCode
    ? {
        google: googleVerificationCode,
      }
    : undefined,
  icons: {
    icon: "/mouse-tech-logo.png",
    shortcut: "/mouse-tech-logo.png",
    apple: "/mouse-tech-logo.png",
  },
  openGraph: {
    title: "MouseTech — Software Solutions Company in Nigeria",
    description:
      "Leading software solutions company in Nigeria. Professional websites, mobile apps, and custom software for businesses and organizations.",
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "MouseTech",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MouseTech - Software Solutions Company in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MouseTech — Software Solutions Company in Nigeria",
    description:
      "Leading software solutions company in Nigeria. Professional websites, mobile apps, and custom software.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-NG": "/",
      en: "/",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesCatalogSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
