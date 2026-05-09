import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const vibeDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-vibe-display",
  display: "swap",
});

const title = "Vibecode Like a Pro Dev — Live Masterclass";
const description =
  "Premium hands-on masterclass (18–20 May 2026, Google Meet). No experience required. Build real products with frontend, backend, and AI — and ship like a professional developer.";

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
