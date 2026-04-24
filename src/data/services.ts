import {
  BarChart3,
  FileText,
  HeadphonesIcon,
  Mail,
  MessageSquare,
  Palette,
  Search,
  Shield,
  ShoppingCart,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface CoreService {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  fullDescription: string;
  cardFeatures: string[];
  benefits: string[];
  features: string[];
  process: ServiceProcessStep[];
  pricing: string;
}

export interface AdditionalService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const coreServices: CoreService[] = [
  {
    slug: "custom-web-design",
    title: "Custom Web Design",
    icon: Palette,
    description:
      "Bespoke, conversion-focused design built entirely around your brand.",
    fullDescription:
      "Your website is often the first impression people have of your business. We create stunning, custom designs that reflect your unique brand and goals. No templates, no generic layouts—every pixel is deliberate and purposeful.",
    cardFeatures: [
      "Responsive Design",
      "Brand Integration",
      "UX Optimization",
      "Mobile-First Approach",
    ],
    benefits: [
      "Stand out from competitors with unique design",
      "Build trust with professional appearance",
      "Increase engagement with intuitive navigation",
      "Mobile-first approach for all devices",
      "Fast loading times for better user experience",
    ],
    features: [
      "Custom homepage design",
      "Responsive layout for all screen sizes",
      "Brand color integration",
      "Typography optimization",
      "Image gallery and media sections",
      "Contact forms and maps",
      "Social media integration",
      "SEO-friendly structure",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "We learn about your brand, mission, and design preferences",
      },
      {
        step: "02",
        title: "Wireframing",
        desc: "We create layout structures for your approval",
      },
      {
        step: "03",
        title: "Visual Design",
        desc: "We craft the final look with colors, fonts, and imagery",
      },
      {
        step: "04",
        title: "Development",
        desc: "We bring the design to life with clean code",
      },
    ],
    pricing: "Included in all plans",
  },
  {
    slug: "performance-hosting",
    title: "Performance & Hosting",
    icon: Zap,
    description:
      "Global CDN, sub-second load times, and perfect Core Web Vitals scores.",
    fullDescription:
      "Your website needs to be fast and always available. We provide enterprise-grade hosting with global CDN, automatic scaling, and 99.9% uptime guarantee. Your site loads quickly for visitors anywhere in the world.",
    cardFeatures: ["Global CDN", "99.9% Uptime", "Auto-Scaling", "Daily Backups"],
    benefits: [
      "Lightning-fast page load speeds",
      "99.9% uptime guarantee",
      "Global CDN for worldwide access",
      "Automatic scaling during traffic spikes",
      "SSL certificate included",
    ],
    features: [
      "Global Content Delivery Network (CDN)",
      "SSD storage for faster access",
      "Automatic daily backups",
      "DDoS protection",
      "SSL/HTTPS encryption",
      "Server-side caching",
      "Image optimization",
      "Uptime monitoring",
    ],
    process: [
      { step: "01", title: "Setup", desc: "We configure your hosting environment" },
      { step: "02", title: "Migration", desc: "We transfer your site to our servers" },
      {
        step: "03",
        title: "Optimization",
        desc: "We fine-tune for maximum performance",
      },
      { step: "04", title: "Monitoring", desc: "We keep watch 24/7 for any issues" },
    ],
    pricing: "Included in all plans",
  },
  {
    slug: "seo-management",
    title: "SEO Management",
    icon: Search,
    description: "Technical SEO baked in from day one, plus ongoing optimization.",
    fullDescription:
      "Being found online is crucial. We implement technical SEO best practices from the start and provide ongoing optimization to help your business rank higher in search results and reach more customers.",
    cardFeatures: ["Keyword Research", "On-Page SEO", "Local SEO", "Monthly Reports"],
    benefits: [
      "Higher search engine rankings",
      "More organic traffic",
      "Better local visibility",
      "Increased customer engagement",
      "More sales inquiries",
    ],
    features: [
      "Keyword research and optimization",
      "On-page SEO implementation",
      "Local SEO for Google Maps",
      "Meta tags and descriptions",
      "Schema markup",
      "XML sitemaps",
      "Monthly SEO reports",
      "Competitor analysis",
    ],
    process: [
      { step: "01", title: "Audit", desc: "We analyze your current SEO status" },
      { step: "02", title: "Strategy", desc: "We create a customized SEO plan" },
      { step: "03", title: "Implementation", desc: "We optimize your site content" },
      { step: "04", title: "Reporting", desc: "We track and report on progress" },
    ],
    pricing: "Starter: Basic | Growth: Full | Enterprise: Advanced",
  },
  {
    slug: "ecommerce-payments",
    title: "E-Commerce & Payments",
    icon: ShoppingCart,
    description:
      "Full e-commerce and payment systems with multiple payment gateways.",
    fullDescription:
      "Make it easy for your customers to purchase your products and services online. We integrate secure payment systems that support multiple gateways, automated receipts, and comprehensive sales reporting.",
    cardFeatures: [
      "Payment Gateways",
      "Inventory Management",
      "Order Tracking",
      "Sales Analytics",
    ],
    benefits: [
      "Increase sales with easy checkout",
      "Accept payments 24/7",
      "Automatic receipt generation",
      "Detailed sales reporting",
      "Multiple payment options",
    ],
    features: [
      "Multiple payment gateways (Paystack, Flutterwave)",
      "One-time and recurring payments",
      "Product catalog management",
      "Order tracking system",
      "Automated email receipts",
      "Customer management system",
      "Financial dashboards",
      "Bank reconciliation",
    ],
    process: [
      { step: "01", title: "Setup", desc: "We configure payment gateways" },
      { step: "02", title: "Integration", desc: "We connect to your website" },
      { step: "03", title: "Testing", desc: "We ensure everything works smoothly" },
      { step: "04", title: "Launch", desc: "You start accepting payments" },
    ],
    pricing: "Growth & Enterprise plans",
  },
  {
    slug: "security-backups",
    title: "Security & Backups",
    icon: Shield,
    description: "Daily automated backups, malware scanning, and 24/7 monitoring.",
    fullDescription:
      "Protect your website and data with enterprise-level security. We provide daily backups, malware scanning, SSL certificates, and continuous monitoring to keep your site safe from threats.",
    cardFeatures: [
      "SSL Certificates",
      "Malware Scanning",
      "DDoS Protection",
      "Security Audits",
    ],
    benefits: [
      "Peace of mind with daily backups",
      "Protection against hackers",
      "SSL security for visitor trust",
      "Quick recovery from issues",
      "Compliance with data regulations",
    ],
    features: [
      "Daily automated backups",
      "Malware scanning and removal",
      "SSL certificate management",
      "DDoS attack protection",
      "Firewall configuration",
      "Security audits",
      "Uptime monitoring",
      "Emergency recovery",
    ],
    process: [
      { step: "01", title: "Assessment", desc: "We evaluate your security needs" },
      {
        step: "02",
        title: "Implementation",
        desc: "We deploy security measures",
      },
      { step: "03", title: "Monitoring", desc: "We watch for threats 24/7" },
      { step: "04", title: "Maintenance", desc: "We keep everything updated" },
    ],
    pricing: "Included in all plans",
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    icon: BarChart3,
    description:
      "Custom dashboards and actionable growth insights every month.",
    fullDescription:
      "Understand your audience and make data-driven decisions. We provide custom analytics dashboards, monthly performance reports, and actionable insights to help your business grow online.",
    cardFeatures: [
      "Custom Dashboards",
      "Traffic Analysis",
      "Conversion Tracking",
      "Growth Insights",
    ],
    benefits: [
      "Understand your audience better",
      "Track website performance",
      "Measure engagement metrics",
      "Make informed decisions",
      "Demonstrate ROI to leadership",
    ],
    features: [
      "Google Analytics integration",
      "Custom dashboard creation",
      "Monthly performance reports",
      "Traffic source analysis",
      "User behavior tracking",
      "Conversion tracking",
      "Event tracking",
      "Growth recommendations",
    ],
    process: [
      { step: "01", title: "Setup", desc: "We configure analytics tools" },
      { step: "02", title: "Tracking", desc: "We implement event tracking" },
      { step: "03", title: "Dashboard", desc: "We create custom reports" },
      { step: "04", title: "Insights", desc: "We provide monthly analysis" },
    ],
    pricing: "Starter: Basic | Growth: Custom | Enterprise: Advanced",
  },
];

const serviceLookup = new Map(coreServices.map((service) => [service.slug, service]));

export function getServiceBySlug(slug: string): CoreService | undefined {
  return serviceLookup.get(slug);
}

export const additionalServices: AdditionalService[] = [
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email campaigns and newsletter management",
  },
  {
    icon: MessageSquare,
    title: "SMS Notifications",
    description: "Bulk SMS for marketing, alerts, and reminders",
  },
  {
    icon: Users,
    title: "CRM Systems",
    description: "Customer relationship management and tracking systems",
  },
  {
    icon: Video,
    title: "Video Integration",
    description: "Embed live streams and video content on your website",
  },
  {
    icon: FileText,
    title: "Content Management",
    description: "Blog systems, documentation, and content workflows",
  },
  {
    icon: HeadphonesIcon,
    title: "Priority Support",
    description: "Dedicated account manager and 24/7 support",
  },
];
