import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - MouseTech | Software Solutions",
  description: "Find answers to common questions about MouseTech's web development, mobile app development, and custom software services.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
