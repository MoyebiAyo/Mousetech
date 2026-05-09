"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Check,
  Code2,
  Copy,
  ExternalLink,
  GraduationCap,
  Rocket,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

const WHATSAPP_PRESET_MESSAGE = `VIBECODE

Full name:
See attached payment proof.`;

const WHATSAPP_REGISTER =
  "https://wa.me/2348078933943?text=" +
  encodeURIComponent(WHATSAPP_PRESET_MESSAGE);

const ACCENT = "#dfff4a";
const ACCENT_DIM = "rgba(223, 255, 74, 0.12)";

const outcomes = [
  {
    title: "Build your own startup like a pro developer",
    icon: Rocket,
  },
  {
    title: "Build websites without AI slop",
    icon: Sparkles,
  },
  {
    title: "Gain real experience to work as a developer",
    icon: GraduationCap,
  },
  {
    title: "Build frontend and backends with AI",
    icon: Code2,
  },
  {
    title: "Build platforms — not just websites",
    icon: Users,
  },
];

function BuiltHighlightCard({ cs }: { cs: CaseStudy }) {
  return (
    <li
      className="rounded-xl p-6 md:p-7 transition-colors"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <p className="font-semibold text-white">{cs.title}</p>
          <p className="text-sm text-white/50 mt-1">
            {cs.industry} · {cs.clientType}
          </p>
          <p className="text-sm text-white/60 mt-2 leading-relaxed">
            {cs.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end shrink-0">
          <Link
            href={`/case-studies/${cs.slug}`}
            className="text-sm font-medium no-underline px-3 py-1.5 rounded-lg border border-white/15 text-white/85 hover:bg-white/5 transition-colors whitespace-nowrap"
          >
            Case study
          </Link>
          {cs.href ? (
            <a
              href={cs.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium no-underline px-3 py-1.5 rounded-lg text-black transition-colors whitespace-nowrap"
              style={{ background: ACCENT }}
            >
              Live site
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
}

function Section({
  id,
  children,
  className = "",
  style,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section id={id} className={className} style={style}>
      {children}
    </section>
  );
}

export default function VibecodeLanding() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyText = async (label: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  const paymentBlock =
    "Bank: OPAY\nAccount number: 8078933943\nAccount name: Ayodele Oluwasegun Moyebi\nTransfer reference: VIBECODE + your full name\n\nNext step: On WhatsApp (0807 893 3943), attach your payment receipt/screenshot and send a message that starts with VIBECODE and includes your full name.";

  const eventPassCs = caseStudies.find((c) => c.slug === "eventpass");
  const steamCs = caseStudies.find((c) => c.slug === "mouse-steam-club");
  const portfolioCs = caseStudies.filter((c) =>
    [
      "ayodele-portfolio",
      "dorcas-ayomide-portfolio",
      "praise-okwuchi-portfolio",
    ].includes(c.slug)
  );

  return (
    <main
      className="min-h-screen bg-[#050505] text-white"
      style={{
        backgroundColor: "#050505",
        color: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <NavBar
        variant="dark"
        ctaText="Register on WhatsApp"
        ctaHref={WHATSAPP_REGISTER}
        lightLinks={[
          { label: "Home", href: "/" },
          { label: "What you'll learn", href: "#outcomes" },
          { label: "Instructor", href: "#instructor" },
          { label: "Selected work", href: "#highlights" },
          { label: "Dates & pricing", href: "#pricing" },
          { label: "Payment", href: "#payment" },
        ]}
      />

      {/* Hero — full viewport on desktop so the grid band fills the first screen */}
      <section
        className="relative overflow-hidden flex flex-col pt-[88px] pb-16 md:pb-24 px-[5%] min-h-screen lg:min-h-[100dvh]"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute -top-24 right-[-10%] w-[420px] h-[420px] rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ background: ACCENT }}
        />

        <div className="max-w-[1200px] mx-auto relative w-full flex-1 grid lg:grid-cols-[1fr_minmax(280px,420px)] gap-12 lg:gap-16 items-center lg:py-4">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Mouse Technologies · Live masterclass
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              <span className="text-white">Vibecode</span>
              <br />
              <span style={{ color: ACCENT }}>like a pro dev</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/65 max-w-[520px] leading-relaxed mb-8">
              A premium, hands-on masterclass for aspiring developers who want
              to build, ship, and scale real-world products — live on Google Meet.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
                style={{
                  background: ACCENT_DIM,
                  color: ACCENT,
                  border: "1px solid rgba(223,255,74,0.35)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#ff4d4d" }}
                  aria-hidden
                />
                No experience required
              </span>
              <span
                className="inline-flex items-center gap-2 text-sm text-white/70 px-4 py-2 rounded-full border border-white/12"
              >
                Live on Google Meet
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-black no-underline transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfff4a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                style={{ background: ACCENT }}
              >
                Open WhatsApp to register
              </a>
              <Link
                href="#pricing"
                className="inline-flex justify-center items-center px-7 py-3.5 rounded-lg font-semibold no-underline transition-colors border border-white/20 text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                See dates &amp; pricing
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/45 max-w-[520px] leading-relaxed">
              WhatsApp <span className="text-white/70">0807 893 3943</span>: pay
              into the OPAY account below first, then <strong className="text-white/90">manually attach</strong> your
              receipt in WhatsApp with the caption{" "}
              <strong className="text-white/90">VIBECODE</strong> and your full name so we can confirm your seat.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div
              className="absolute inset-0 rounded-2xl blur-2xl scale-95 opacity-50"
              style={{ background: ACCENT }}
              aria-hidden
            />
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{
                borderColor: "rgba(223,255,74,0.35)",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.4), 0 24px 64px rgba(0,0,0,0.45)",
              }}
            >
              <Image
                src="/vibecode-flyer.png"
                alt="Vibecode masterclass promotional flyer"
                width={900}
                height={1200}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <Section id="outcomes" className="px-[5%] py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: ACCENT }}
          >
            What you&apos;ll learn
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-[640px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Practical skills you can use immediately — from idea to shipped
            product.
          </h2>
          <p className="text-white/55 text-lg max-w-[560px] mb-12">
            This is not theory-only training. Expect hands-on building,
            real workflows, and a roadmap to present yourself as job-ready.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 list-none p-0 m-0">
            {outcomes.map(({ title, icon: Icon }, i) => (
              <li
                key={i}
                className="flex gap-4 p-6 rounded-xl transition-colors"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: ACCENT_DIM, color: ACCENT }}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </span>
                <span className="text-base font-medium text-white/90 leading-snug pt-1">
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Instructor — profile only */}
      <Section
        id="instructor"
        className="px-[5%] py-24 md:py-32 lg:py-36"
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center"
            style={{ color: ACCENT }}
          >
            Your instructor
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-center"
            style={{ letterSpacing: "-0.03em" }}
          >
            Meet Ayodele
          </h2>
          <p className="text-lg text-white/55 text-center max-w-[640px] mx-auto mb-16 md:mb-20">
            Founder of Mouse Technologies — building and shipping real products
            for businesses, creators, and learners across Nigeria.
          </p>

          <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-14 lg:gap-20 lg:items-center">
            <div className="mx-auto w-full max-w-[380px] lg:mx-0">
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{
                  borderColor: "rgba(223,255,74,0.28)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
                }}
              >
                <Image
                  src="/profile-picture.jpeg"
                  alt="Ayodele Oluwasegun Moyebi"
                  width={600}
                  height={720}
                  className="w-full h-auto object-cover aspect-[5/6] lg:aspect-auto lg:min-h-[420px]"
                  sizes="(max-width: 1024px) 90vw, 380px"
                />
              </div>
              <p className="mt-5 text-center lg:text-left text-sm text-white/45">
                Ayodele Oluwasegun Moyebi · Founder, Mouse Technologies
              </p>
            </div>

            <div className="text-left space-y-8 md:space-y-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  I teach what I build every week
                </h3>
                <p className="text-white/65 leading-relaxed text-[17px] md:text-lg">
                  I run Mouse Technologies as a hands-on developer, not a
                  slide-only coach. My day job is shipping production software:
                  performant websites, structured platforms, and client
                  projects using modern stacks like Next.js, React, and
                  TypeScript — the same tools you&apos;ll touch in this
                  masterclass.
                </p>
              </div>
              <p className="text-white/60 leading-relaxed text-[17px] md:text-lg">
                We take on education, events, portfolios, and business sites. I
                care about clear UX, fast shipping, and writing code you&apos;re
                not ashamed to show — including using AI as a lever, not a
                crutch. A few shipped highlights are in the next section.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Selected work — case highlights, separate band */}
      <Section
        id="highlights"
        className="px-[5%] py-24 md:py-32 lg:py-36"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center"
            style={{ color: ACCENT }}
          >
            Selected work
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-center max-w-[720px] mx-auto"
            style={{ letterSpacing: "-0.03em" }}
          >
            What I&apos;ve built
          </h2>
          <p className="text-white/50 text-center max-w-[560px] mx-auto mb-14 md:mb-16 text-base md:text-lg leading-relaxed">
            Real products and client launches — the same kind of shipping
            mindset you&apos;ll practice in the masterclass.
          </p>

          <ul className="space-y-5 md:space-y-6 list-none p-0 m-0">
            {eventPassCs ? (
              <BuiltHighlightCard cs={eventPassCs} key={eventPassCs.slug} />
            ) : null}
            {steamCs ? (
              <BuiltHighlightCard cs={steamCs} key={steamCs.slug} />
            ) : null}
            <li
              className="rounded-xl p-6 md:p-8 transition-colors"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="font-semibold text-white text-lg">Portfolios</p>
              <p className="text-sm text-white/50 mt-2">
                Personal &amp; client showcase sites
              </p>
              <p className="text-sm text-white/60 mt-3 leading-relaxed max-w-[720px]">
                Fast, premium portfolio experiences — clear layouts, strong
                first impressions, and contact-forward flows for personal brands
                and service businesses.
              </p>
              <div className="mt-8 space-y-6 md:space-y-8">
                {portfolioCs.map((cs, i) => (
                  <div
                    key={cs.slug}
                    className={i > 0 ? "pt-6 md:pt-8 border-t border-white/10" : ""}
                  >
                    <p className="font-medium text-white/90">{cs.title}</p>
                    <p className="text-xs text-white/45 mt-1">
                      {cs.industry} · {cs.clientType}
                    </p>
                    <p className="text-sm text-white/55 mt-3 leading-relaxed">
                      {cs.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Link
                        href={`/case-studies/${cs.slug}`}
                        className="text-sm font-medium no-underline px-3 py-1.5 rounded-lg border border-white/15 text-white/85 hover:bg-white/5 transition-colors whitespace-nowrap"
                      >
                        Case study
                      </Link>
                      {cs.href ? (
                        <a
                          href={cs.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium no-underline px-3 py-1.5 rounded-lg text-black transition-colors whitespace-nowrap"
                          style={{ background: ACCENT }}
                        >
                          Live site
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </li>
          </ul>
          <div className="mt-12 md:mt-14 flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-start">
            <Link
              href="/case-studies"
              className="text-sm font-semibold no-underline"
              style={{ color: ACCENT }}
            >
              Browse all case studies →
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-white/55 hover:text-white/80 no-underline"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-white/55 hover:text-white/80 no-underline"
            >
              About MouseTech
            </Link>
          </div>
        </div>
      </Section>

      {/* Schedule + Pricing */}
      <Section id="schedule" className="px-[5%] pt-8 pb-12 md:pb-16">
        <div className="max-w-[1100px] mx-auto">
          <div
            className="flex flex-col md:flex-row md:items-center gap-4 p-6 md:p-8 rounded-2xl mb-12"
            style={{
              background: ACCENT_DIM,
              border: "1px solid rgba(223,255,74,0.25)",
            }}
          >
            <div
              className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.35)", color: ACCENT }}
            >
              <Calendar className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Class holds 18th–20th May 2026
              </h3>
              <p className="text-white/70 flex flex-wrap items-center gap-2">
                <Video className="w-4 h-4 inline text-white/50" />
                Online via Google Meet · Join link shared after registration
              </p>
            </div>
          </div>

          <p
            id="pricing"
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: ACCENT }}
          >
            Pricing
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Choose your window — early bird saves ₦3,000
          </h2>
          <p className="text-white/50 text-sm max-w-[640px] mb-10">
            After you pay by transfer, send your proof on WhatsApp: attach the
            screenshot or PDF, and use <strong className="text-white/70">VIBECODE</strong>{" "}
            plus your full name in the message (nothing is uploaded on this site).
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                border: `2px solid ${ACCENT}`,
                background: "linear-gradient(145deg, rgba(223,255,74,0.08), rgba(0,0,0,0.2))",
              }}
            >
              <span
                className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-black"
                style={{ background: ACCENT }}
              >
                Best value
              </span>
              <h3 className="text-lg font-semibold text-white/80 mb-2">
                Early bird
              </h3>
              <p className="text-4xl font-bold mb-2" style={{ color: ACCENT }}>
                ₦7,000
              </p>
              <p className="text-white/55 text-sm mb-6">
                8th–15th May 2026 · Lock this rate before it closes.
              </p>
              <ul className="space-y-2 text-sm text-white/70 mb-8 list-none p-0">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                  Full 3-day live sessions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                  Google Meet access
                </li>
              </ul>
              <a
                href={WHATSAPP_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 rounded-lg font-semibold text-black no-underline"
                style={{ background: ACCENT }}
              >
                Reserve early bird
              </a>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h3 className="text-lg font-semibold text-white/80 mb-2">
                Regular
              </h3>
              <p className="text-4xl font-bold text-white mb-2">₦10,000</p>
              <p className="text-white/55 text-sm mb-6">
                16th–18th May 2026 · Same full access — higher investment.
              </p>
              <ul className="space-y-2 text-sm text-white/70 mb-8 list-none p-0">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 text-white/40" />
                  Full 3-day live sessions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0 text-white/40" />
                  Google Meet access
                </li>
              </ul>
              <a
                href={WHATSAPP_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3.5 rounded-lg font-semibold no-underline border border-white/25 text-white hover:bg-white/5 transition-colors"
              >
                Register at regular price
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Payment */}
      <Section id="payment" className="px-[5%] py-20 md:py-28">
        <div className="max-w-[640px] mx-auto">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: ACCENT }}
          >
            Pay by transfer
          </p>
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            OPAY account details
          </h2>
          <p className="text-white/55 mb-6 space-y-3">
            <span className="block">
              <strong className="text-white/90">1.</strong> Pay into the OPAY
              account below (use a transfer reference that includes{" "}
              <strong className="text-white/90">VIBECODE</strong> and your name
              if your bank allows it).
            </span>
            <span className="block">
              <strong className="text-white/90">2.</strong> On{" "}
              <strong className="text-white/90">WhatsApp</strong>, open a chat
              with <strong className="text-white/90">0807 893 3943</strong>,
              <strong className="text-white/90"> attach</strong> your payment
              receipt or screenshot{" "}
              <strong className="text-white/90">manually</strong>, then send your
              message starting with <strong className="text-white/90">VIBECODE</strong>{" "}
              and your <strong className="text-white/90">full name</strong> so we can
              match your payment and confirm your seat.
            </span>
          </p>
          <p className="text-white/45 text-sm mb-8">
            We do not collect proof on this website — everything goes through
            WhatsApp after you pay.
          </p>

          <div
            className="rounded-2xl p-6 md:p-8 space-y-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {[
              { label: "Account number", value: "8078933943" },
              { label: "Bank", value: "OPAY" },
              { label: "Account name", value: "Ayodele Oluwasegun Moyebi" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-6 border-b border-white/10 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                    {row.label}
                  </p>
                  <p className="text-lg font-semibold text-white">{row.value}</p>
                </div>
                <button
                  type="button"
                  onClick={() => copyText(row.label, row.value)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-white/15 text-white/85 hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 self-start sm:self-center"
                >
                  {copiedField === row.label ? (
                    <>
                      <Check className="w-4 h-4" style={{ color: ACCENT }} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => copyText("all", paymentBlock)}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold border transition-colors"
              style={{
                borderColor: "rgba(223,255,74,0.4)",
                color: ACCENT,
                background: ACCENT_DIM,
              }}
            >
              {copiedField === "all" ? (
                <>
                  <Check className="w-5 h-5" />
                  Copied all details
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy all payment details
                </>
              )}
            </button>

            <a
              href={WHATSAPP_REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold no-underline border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Open WhatsApp to send proof
            </a>
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <section
        className="px-[5%] py-24 text-center"
        style={{
          background: "linear-gradient(180deg, rgba(223,255,74,0.08), transparent)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-[560px] mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Ready to vibecode like a pro?
          </h2>
          <p className="text-white/60 mb-8">
            Pay by transfer, then on WhatsApp <strong className="text-white">attach</strong> your
            receipt and send <strong className="text-white">VIBECODE</strong> with your full name
            — we&apos;ll confirm your seat and Meet link.
          </p>
          <a
            href={WHATSAPP_REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-black no-underline transition-transform hover:scale-[1.02]"
            style={{ background: ACCENT }}
          >
            Open WhatsApp
          </a>
          <p className="mt-6 text-sm text-white/40">
            <Link href="/" className="text-white/60 hover:text-white no-underline">
              ← Back to MouseTech home
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
