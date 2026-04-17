import { ArrowRight, Briefcase, FileText, ShieldCheck, HelpCircle, Code, Smartphone } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  {
    icon: Briefcase,
    title: "Portfolio",
    description: "See our successful projects and case studies",
    href: "/portfolio",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Professional websites built to convert",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android app development",
    href: "/services/mobile-apps",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Answers to common questions",
    href: "/faq",
  },
  {
    icon: ShieldCheck,
    title: "Privacy Policy",
    description: "How we protect your data",
    href: "/privacy",
  },
  {
    icon: FileText,
    title: "Terms of Service",
    description: "Our service terms and conditions",
    href: "/terms",
  },
];

export default function QuickLinks() {
  return (
    <section className="px-[5%] py-28" style={{ background: "#fafafa", borderTop: "1px solid #eaeaea" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4" style={{ letterSpacing: '-0.03em' }}>Explore Our Resources</h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Discover our work, learn about our services, and find the information you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group p-8 rounded-lg border-subtle transition-all duration-200 hover:border-black no-underline bg-white"
            >
              <div className="flex items-start gap-5">
                <div
                  className="p-3 rounded-md flex-shrink-0"
                  style={{ background: "#fafafa" }}
                >
                  <link.icon className="w-6 h-6" style={{ color: "#000" }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#0070F3] transition-colors" style={{ letterSpacing: '-0.01em' }}>
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{link.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-black group-hover:text-[#0070F3] transition-colors">
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
