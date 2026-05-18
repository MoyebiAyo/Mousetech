import Script from "next/script";
import VibecodeLanding from "@/components/VibecodeLanding";
import { vibecodePricing, vibecodeSchedule } from "@/data/vibecode";

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
    "5-day premium hands-on masterclass for aspiring developers. Build, ship, and scale real-world products with AI. Live on Google Meet. No experience required.",
  startDate: "2026-05-22",
  endDate: "2026-05-26",
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
      price: String(vibecodePricing.earlyBirdNgn),
      priceCurrency: "NGN",
      validFrom: vibecodeSchedule.earlyBirdStart.toISOString().slice(0, 10),
      validThrough: vibecodeSchedule.earlyBirdEnd.toISOString().slice(0, 10),
      url: `${siteUrl}/vibecode`,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Regular — Vibecode masterclass",
      price: String(vibecodePricing.regularNgn),
      priceCurrency: "NGN",
      validFrom: vibecodeSchedule.regularStart.toISOString().slice(0, 10),
      validThrough: vibecodeSchedule.regularEnd.toISOString().slice(0, 10),
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
