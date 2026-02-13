import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Mouse Tech | AI Website-as-a-Service for Churches & Schools",
  description: "Transform your church or school with digital infrastructure, automation, and growth systems. Smart websites, payment solutions, and complete digital structure.",
  keywords: ["church website", "school website", "digital transformation", "church automation", "school management", "Nigeria", "SaaS"],
  openGraph: {
    title: "Mouse Tech | AI Website-as-a-Service for Churches & Schools",
    description: "Transform your church or school with digital infrastructure, automation, and growth systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <div className="gradient-mesh" />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
