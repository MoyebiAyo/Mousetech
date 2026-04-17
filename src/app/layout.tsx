import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MouseTech — Software Solutions Company in Nigeria | Web & Mobile Apps",
    template: "%s | MouseTech"
  },
  description: "MouseTech is a leading software solutions company in Nigeria. We design, develop, and maintain professional websites, mobile apps, and custom software for businesses, organizations, and churches. Get a free consultation today.",
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
    "mousetech.app"
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  icons: {
    icon: "/mouse-tech-logo.png",
    shortcut: "/mouse-tech-logo.png",
    apple: "/mouse-tech-logo.png",
  },
  openGraph: {
    title: "MouseTech — Software Solutions Company in Nigeria",
    description: "Leading software solutions company in Nigeria. Professional websites, mobile apps, and custom software for businesses and organizations.",
    type: "website",
    locale: "en_NG",
    url: "https://mousetech.app",
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
    description: "Leading software solutions company in Nigeria. Professional websites, mobile apps, and custom software.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://mousetech.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `
          }}
        />
        
        {/* Hreflang Tags for Regional Targeting */}
        <link rel="alternate" hrefLang="en-ng" href="https://mousetech.app" />
        <link rel="alternate" hrefLang="en" href="https://mousetech.app" />
        
        {/* Structured Data for Google & AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MouseTech",
              "alternateName": "Mouse Technologies",
              "url": "https://mousetech.app",
              "logo": "https://mousetech.app/mouse-tech-logo.png",
              "description": "Software solutions company providing web development, mobile app development, and custom software solutions in Nigeria",
              "foundingDate": "2026",
              "areaServed": {
                "@type": "Country",
                "name": "Nigeria"
              },
              "serviceType": ["Web Development", "Mobile App Development", "Custom Software Solutions", "UI/UX Design", "Software Maintenance"],
              "knowsAbout": ["Software Development", "Web Design", "Mobile Applications", "E-commerce", "Digital Transformation"],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-807-893-3943",
                "email": "hello@mousetech.app",
                "contactType": "customer service",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://wa.me/2348078933943",
                "https://linkedin.com/company/mousetech",
                "https://twitter.com/mousetech_ng",
                "https://facebook.com/mousetechng",
                "https://instagram.com/mousetech_ng"
              ]
            })
          }}
        />
        {/* WebSite Structured Data for Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MouseTech",
              "url": "https://mousetech.app",
              "description": "Professional software solutions company in Nigeria",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mousetech.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "MouseTech",
              "image": "https://mousetech.app/mouse-tech-logo.png",
              "priceRange": "₦₦₦",
              "telephone": "+234-807-893-3943",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NG",
                "addressRegion": "Lagos"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "6.5244",
                "longitude": "3.3792"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
