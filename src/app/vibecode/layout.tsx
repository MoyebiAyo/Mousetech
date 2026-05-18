import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const vibeDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-vibe-display",
  display: "swap",
});

const title = "Vibecode Like a Pro Dev — Live Masterclass";
const description =
  "5-day premium hands-on masterclass (22–26 May 2026, Google Meet). Early bird ₦7,000 (8–20 May) · Regular ₦10,000 (21–22 May). No experience required — build real products with AI.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/vibecode",
    type: "website",
    locale: "en_NG",
    siteName: "MouseTech",
    images: [
      {
        url: "/vibecode-flyer.png",
        width: 1200,
        height: 630,
        alt: "Vibecode masterclass — Mouse Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/vibecode-flyer.png"],
  },
  alternates: {
    canonical: "/vibecode",
    languages: {
      "en-NG": "/vibecode",
      en: "/vibecode",
    },
  },
};

export default function VibecodeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={vibeDisplay.variable}
      style={{
        backgroundColor: "#080808",
        color: "#fafafa",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
