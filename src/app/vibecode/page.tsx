import Script from "next/script";
import VibecodeLanding from "@/components/VibecodeLanding";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteUrl =
  configuredSiteUrl && /^https?:\/\//i.test(configuredSiteUrl)
    ? configuredSiteUrl.replace(/\/$/, "")
    : "https://mousetech.app";

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Vibecode Like a Pro Dev — Masterclass",
  description:
    "Premium hands-on masterclass for aspiring developers. Build, ship, and scale real-world products. Live on Google Meet. No experience required.",
  startDate: "2026-05-18",
  endDate: "2026-05-20",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "VirtualLocation",
    url: "https://meet.google.com/",
  },
  image: [`${siteUrl}/vibecode-flyer.png`],
  organizer: {
    "@type": "Organization",
    name: "Mouse Technologies",
    alternateName: "MouseTech",
    url: siteUrl,
  },
  offers: [
    {
      "@type": "Offer",
      name: "Early bird — Vibecode masterclass",
      price: "7000",
      priceCurrency: "NGN",
      validFrom: "2026-05-08",
      validThrough: "2026-05-15",
      url: `${siteUrl}/vibecode`,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Regular — Vibecode masterclass",
      price: "10000",
      priceCurrency: "NGN",
      validFrom: "2026-05-16",
      validThrough: "2026-05-18",
      url: `${siteUrl}/vibecode`,
      availability: "https://schema.org/InStock",
    },
  ],
};

export default function VibecodePage() {
  return (
    <>
      <Script
        id="vibecode-event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <VibecodeLanding />
    </>
  );
}
