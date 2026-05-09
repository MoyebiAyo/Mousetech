export type CaseStudy = {
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  results: string[];
  stack: string[];
  timeline?: string;
  scope?: string[];
  metrics?: Array<{ label: string; value: string }>;
  testimonial?: { quote: string; name: string; role: string };
  screenshots?: Array<{ src: string; alt: string }>;
  href?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "eventpass",
    title: "EventPass",
    clientType: "Product",
    industry: "Events / ticketing",
    summary:
      "An events platform built for organisers and attendees — ticketing, access control, and a smooth mobile-first experience from discovery to check-in.",
    problem:
      "Events needed a dependable way to sell and validate access without friction, with a product that stays fast when traffic spikes.",
    solution:
      "We engineered a focused flow for tickets, passes, and on-the-door verification, with performance and clarity as first-class concerns.",
    results: [
      "Clear attendee journey from ticket to entry",
      "Flows tuned for real-world event-day load",
      "Modern stack ready to extend with new features",
    ],
    stack: ["Next.js", "React", "TypeScript"],
    timeline: "Ongoing product development",
    scope: ["Product UX", "Ticketing & access flows", "Performance"],
    metrics: [
      { label: "Focus", value: "Events" },
      { label: "Experience", value: "Mobile-first" },
      { label: "Stack", value: "Next.js" },
    ],
    href: "https://theeventpass.com",
  },
  {
    slug: "mouse-steam-club",
    title: "Mouse STEAM Club",
    clientType: "Education initiative",
    industry: "Education / STEM",
    summary:
      "A modern STEM learning platform that makes it easy for schools to run structured learning programs and publish interactive content.",
    problem:
      "The project needed a fast, modern platform to publish STEAM resources, keep students engaged, and remain easy to update over time.",
    solution:
      "We delivered a responsive web platform optimized for performance and discoverability, with clean navigation and content structure that scales.",
    results: [
      "Fast-loading pages optimized for modern devices",
      "Clear information architecture for easy discovery",
      "SEO-ready structure for long-term organic growth",
    ],
    stack: ["Next.js", "React", "TypeScript", "Vercel"],
    timeline: "4 weeks (design → build → launch)",
    scope: ["Information architecture", "Responsive UI", "Performance optimization", "SEO foundations"],
    metrics: [
      { label: "Page load feel", value: "Snappy" },
      { label: "SEO baseline", value: "Schema + sitemap" },
      { label: "UX goal", value: "Easy content discovery" },
    ],
    href: "https://steam.mousetech.app",
  },
  {
    slug: "ayodele-portfolio",
    title: "Ayodele Portfolio",
    clientType: "Personal brand",
    industry: "Creative / Portfolio",
    summary:
      "A premium portfolio experience designed to showcase work clearly, load instantly, and convert visitors into inquiries.",
    problem:
      "A portfolio site needed to feel premium, remain fast, and make it easy for visitors to contact the owner.",
    solution:
      "We built a clean, responsive site with performance-focused assets, clear CTAs, and a layout designed for scanning.",
    results: [
      "Improved readability and conversion-focused layout",
      "Mobile-first UI that looks premium on all screens",
      "Stronger first impression for prospects",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    timeline: "1–2 weeks",
    scope: ["Premium UI/UX", "Mobile-first layout", "Conversion-focused structure"],
    metrics: [
      { label: "Mobile UX", value: "Optimized" },
      { label: "Performance", value: "Fast assets" },
      { label: "Conversion", value: "Clear CTAs" },
    ],
    href: "https://ayo.mousetech.app",
  },
  {
    slug: "dorcas-ayomide-portfolio",
    title: "Dorcas Ayomide Portfolio",
    clientType: "Professional services",
    industry: "Virtual Assistance",
    summary:
      "A simple, elegant website that clearly communicates services, builds trust, and makes it easy to reach out.",
    problem:
      "The client needed a clean online presence that explains services quickly and helps prospects take action.",
    solution:
      "We created a modern single-direction layout with clear sections, simple messaging, and contact-forward CTAs.",
    results: [
      "Professional online presence that builds credibility",
      "Clear service communication and faster decision-making",
      "Easy contact flow for inbound leads",
    ],
    stack: ["Next.js", "React", "Responsive UI"],
    timeline: "1–2 weeks",
    scope: ["Service positioning", "Trust blocks", "Contact-first flow"],
    testimonial: {
      quote:
        "The site looks clean and professional, and it’s easy for clients to understand my services and reach out.",
      name: "Dorcas Ayomide",
      role: "Virtual Assistant",
    },
    href: "https://dorcasayomide.vercel.app",
  },
  {
    slug: "praise-okwuchi-portfolio",
    title: "Praise Okwuchi Portfolio",
    clientType: "Personal brand",
    industry: "Creative / Portfolio",
    summary:
      "A polished portfolio site that presents work and personality clearly, stays fast on every device, and makes it effortless for visitors to connect.",
    problem:
      "The client needed a standout online presence that reflects their craft, loads quickly, and turns visitors into conversations.",
    solution:
      "We shipped a responsive, performance-minded site with strong typography, scannable sections, and obvious next steps to get in touch.",
    results: [
      "A memorable first impression that matches the client’s brand",
      "Smooth experience on mobile and desktop",
      "Simple path from discovery to contact",
    ],
    stack: ["Next.js", "React", "Responsive UI", "Vercel"],
    timeline: "1–2 weeks",
    scope: ["Portfolio structure", "Visual polish", "Contact flow"],
    metrics: [
      { label: "Hosting", value: "Vercel" },
      { label: "UX", value: "Mobile-first" },
      { label: "Goal", value: "Clear CTAs" },
    ],
    href: "https://praiseokwuchi.vercel.app",
  },
];

const lookup = new Map(caseStudies.map((cs) => [cs.slug, cs]));

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return lookup.get(slug);
}

