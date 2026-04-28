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
];

const lookup = new Map(caseStudies.map((cs) => [cs.slug, cs]));

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return lookup.get(slug);
}

