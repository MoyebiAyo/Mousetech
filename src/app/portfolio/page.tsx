import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code, Smartphone, Layout, ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Portfolio - MouseTech | Web & Mobile Projects",
  description: "Explore our portfolio of successful web development, mobile apps, and custom software projects for businesses across Nigeria.",
  keywords: ["portfolio", "web development projects", "mobile app examples", "software case studies", "MouseTech work"],
};

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-featured online store with payment integration, inventory management, and real-time analytics dashboard for a Lagos-based retail business.",
    image: "/projects/ecommerce.png",
    icon: ShoppingCart,
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    results: "150% increase in online sales",
    link: "/services/web-development",
  },
  {
    title: "Health & Fitness App",
    category: "Mobile App",
    description: "iOS and Android fitness tracking app with workout plans, nutrition tracking, and social features for a Nigerian fitness brand.",
    image: "/projects/fitness.png",
    icon: Smartphone,
    tags: ["React Native", "Firebase", "Node.js", "HealthKit"],
    results: "10,000+ downloads in first month",
    link: "/services/mobile-apps",
  },
  {
    title: "Business Analytics Dashboard",
    category: "Custom Software",
    description: "Real-time business intelligence platform with data visualization, automated reporting, and predictive analytics for a consulting firm.",
    image: "/projects/analytics.png",
    icon: Layout,
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    results: "40% faster decision-making",
    link: "/services/custom-software",
  },
  {
    title: "Task Management System",
    category: "Custom Software",
    description: "Enterprise project management tool with team collaboration, time tracking, and automated workflows for a tech startup.",
    image: "/projects/taskmanager.png",
    icon: Code,
    tags: ["Vue.js", "GraphQL", "Docker", "Redis"],
    results: "60% improvement in team productivity",
    link: "/services/custom-software",
  },
  {
    title: "Weather Forecast App",
    category: "Mobile App",
    description: "Beautiful weather application with real-time forecasts, radar maps, and severe weather alerts for Nigerian cities.",
    image: "/projects/weather.png",
    icon: Smartphone,
    tags: ["Flutter", "Weather API", "Google Maps", "Dart"],
    results: "50,000+ active users",
    link: "/services/mobile-apps",
  },
  {
    title: "Corporate Website Redesign",
    category: "Web Development",
    description: "Modern, responsive website with CMS integration, SEO optimization, and performance improvements for a financial services company.",
    image: "/projects/corporate-site.jpg",
    icon: Layout,
    tags: ["Next.js", "Sanity CMS", "Vercel", "Framer Motion"],
    results: "200% increase in organic traffic",
    link: "/services/web-development",
  },
];

const categories = ["All", "Web Development", "Mobile App", "Custom Software"];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0d1b2a' }}>
      {/* Hero Section */}
      <section className="px-[5%] py-20" style={{ background: 'linear-gradient(160deg, #0d1b2a 0%, #1a2e42 55%, #1a3a5c 100%)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-4">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors no-underline">
              ← Back to Home
            </Link>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span style={{ color: '#7ab8f5' }}>Portfolio</span>
          </h1>
          <p className="text-lg text-white/70 max-w-[700px] mb-8">
            Real results for real businesses. Explore our successful projects and see how we've helped organizations across Nigeria achieve their digital goals.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-[5%] py-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ 
                  background: category === "All" ? '#1e5fa8' : 'rgba(255,255,255,0.05)',
                  color: category === "All" ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border transition-all duration-300 hover:border-white/30 hover:shadow-2xl"
                style={{ 
                  borderColor: 'rgba(255,255,255,0.1)',
                  background: 'linear-gradient(145deg, #1a2e42 0%, #0d1b2a 100%)'
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden" style={{ background: '#1a3a5c' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16" style={{ color: '#7ab8f5' }} />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: '#1e5fa8', color: '#ffffff' }}>
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-sm text-white/60 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Results */}
                  <div className="mb-4 px-4 py-2 rounded-lg" style={{ background: 'rgba(30,95,168,0.2)' }}>
                    <p className="text-sm font-semibold" style={{ color: '#7ab8f5' }}>
                      ✓ {project.results}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-colors hover:gap-3"
                    style={{ color: '#7ab8f5' }}
                  >
                    View Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Project?</h2>
            <p className="text-white/60 mb-8 max-w-[600px] mx-auto">
              Let's create something amazing together. Get a free consultation and see how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348078933943?text=Hi%20MouseTech!%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg"
                style={{ background: '#1e5fa8' }}
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-200 border hover:border-white/60 no-underline"
                style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
