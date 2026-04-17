import { ArrowRight, Briefcase, FileText, ShieldCheck, HelpCircle, Code, Smartphone } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  {
    icon: Briefcase,
    title: "Portfolio",
    description: "See our successful projects and case studies",
    href: "/portfolio",
    color: "#1e5fa8",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Professional websites built to convert",
    href: "/services/web-development",
    color: "#7ab8f5",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android app development",
    href: "/services/mobile-apps",
    color: "#2a7dd4",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Answers to common questions",
    href: "/faq",
    color: "#1e5fa8",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Policy",
    description: "How we protect your data",
    href: "/privacy",
    color: "#7ab8f5",
  },
  {
    icon: FileText,
    title: "Terms of Service",
    description: "Our service terms and conditions",
    href: "/terms",
    color: "#2a7dd4",
  },
];

export default function QuickLinks() {
  return (
    <section className="px-[5%] py-20" style={{ background: "linear-gradient(180deg, #0d1b2a 0%, #1a2e42 100%)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Explore Our Resources</h2>
          <p className="text-lg text-white/70 max-w-[600px] mx-auto">
            Discover our work, learn about our services, and find the information you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group p-8 rounded-2xl border transition-all duration-300 hover:border-white/40 hover:shadow-2xl hover:-translate-y-1 no-underline"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                background: "linear-gradient(145deg, rgba(26,46,66,0.8) 0%, rgba(13,27,42,0.9) 100%)",
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="p-4 rounded-xl flex-shrink-0"
                  style={{ background: `${link.color}25` }}
                >
                  <link.icon className="w-7 h-7" style={{ color: link.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7ab8f5] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-base text-white/80 mb-4 leading-relaxed">{link.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: link.color }}>
                    View Page <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
