"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import {
  VIBECODE_WHATSAPP_URL,
  formatClassDatesLabel,
  formatCountdown,
  formatEarlyBirdWindowLabel,
  formatRegularWindowLabel,
  isEarlyBirdActive,
  vibecodeSchedule,
} from "@/data/vibecode";

const WHATSAPP_REGISTER = VIBECODE_WHATSAPP_URL;

/** Primary electric lime — MouseTech energy */
const ACCENT = "#d4ff3d";
const ACCENT_DIM = "rgba(212, 255, 61, 0.09)";
const ACCENT_BORDER = "rgba(212, 255, 61, 0.32)";

const glass =
  "rounded-[22px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl shadow-[0_12px_48px_rgba(0,0,0,0.4)]";

const glassHover =
  "transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.045] hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]";

const outcomes = [
  { title: "Build your own startup like a pro developer", icon: Rocket },
  { title: "Build websites without AI slop", icon: Sparkles },
  { title: "Gain real experience to work as a developer", icon: GraduationCap },
  { title: "Build frontend and backends with AI", icon: Code2 },
  { title: "Build platforms — not just websites", icon: Users },
];

const bentoSpans = [
  "md:col-span-4 md:row-span-2 min-h-[200px] md:min-h-[260px]",
  "md:col-span-2 min-h-[120px]",
  "md:col-span-2 min-h-[120px]",
  "md:col-span-3 min-h-[140px]",
  "md:col-span-3 min-h-[140px]",
] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function AmbientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(59,130,246,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_100%_30%,rgba(167,139,250,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_70%,rgba(212,255,61,0.06),transparent_45%)]" />
      <div className="absolute -top-[20%] left-[5%] h-[min(70vw,520px)] w-[min(70vw,520px)] animate-vibe-aurora rounded-full bg-[#3b82f6] opacity-[0.11] blur-[120px]" />
      <div className="absolute bottom-[-15%] right-[-8%] h-[min(55vw,440px)] w-[min(55vw,440px)] rounded-full bg-[#a78bfa] opacity-[0.13] blur-[100px] animate-vibe-glow" />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 40%, black 15%, transparent 75%)",
        }}
      />
    </div>
  );
}

function BuiltHighlightCard({ cs }: { cs: CaseStudy }) {
  return (
    <li
      className={`${glass} ${glassHover} group list-none p-6 md:p-8 rounded-[22px]`}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-white">
            {cs.title}
          </p>
          <p className="mt-1.5 text-sm text-white/45">
            {cs.industry} · {cs.clientType}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-white/55">
            {cs.summary}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col sm:items-end">
          <Link
            href={`/case-studies/${cs.slug}`}
            className="whitespace-nowrap rounded-xl border border-white/12 bg-white/[0.02] px-4 py-2 text-sm font-medium text-white/85 no-underline transition-colors hover:border-white/22 hover:bg-white/[0.06]"
          >
            Case study
          </Link>
          {cs.href ? (
            <a
              href={cs.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-gradient-to-br from-[#d4ff3d] to-[#9fe82a] px-4 py-2 text-sm font-semibold text-[#0a0a0a] no-underline shadow-[0_0_24px_rgba(212,255,61,0.25)] transition-transform hover:scale-[1.02]"
            >
              Live site
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
}

function Eyebrow({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <p
      id={id}
      className={`text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45 ${className}`}
    >
      {children}
    </p>
  );
}

function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-[5%] ${className}`}>
      {children}
    </section>
  );
}

function VibeFooter() {
  return (
    <footer className="relative mt-6 border-t border-white/[0.06] px-[5%] py-16 md:py-20">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-white no-underline transition-opacity hover:opacity-85"
        >
          MouseTech
        </Link>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/42"
        >
          <Link
            href="/about"
            className="no-underline transition-colors hover:text-white/85"
          >
            About
          </Link>
          <Link
            href="/case-studies"
            className="no-underline transition-colors hover:text-white/85"
          >
            Case studies
          </Link>
          <Link
            href="/portfolio"
            className="no-underline transition-colors hover:text-white/85"
          >
            Portfolio
          </Link>
          <a
            href={WHATSAPP_REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-[#d4ff3d]"
          >
            WhatsApp
          </a>
        </nav>
        <p className="text-xs text-white/28 md:text-right">
          © {new Date().getFullYear()} Mouse Technologies
        </p>
      </div>
    </footer>
  );
}

function EarlyBirdCountdown() {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      if (!isEarlyBirdActive()) {
        setSecondsLeft(null);
        return;
      }
      const ms = vibecodeSchedule.earlyBirdEnd.getTime() - Date.now();
      setSecondsLeft(Math.floor(ms / 1000));
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (secondsLeft === null || secondsLeft <= 0) return null;

  const { days, hours, minutes } = formatCountdown(secondsLeft);

  return (
    <p
      className="mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
      style={{
        borderColor: ACCENT_BORDER,
        background: ACCENT_DIM,
        color: ACCENT,
      }}
    >
      Early bird ends in{" "}
      <span className="tabular-nums text-white">
        {days}d {hours}h {minutes}m
      </span>
    </p>
  );
}

export default function VibecodeLanding() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

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
    <main className="relative min-h-screen text-[#fafafa] antialiased">
      <AmbientBackdrop />

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

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col overflow-hidden px-[5%] pb-20 pt-[88px] lg:min-h-[100dvh] lg:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[15%] top-[10%] h-[380px] w-[380px] rounded-full bg-[#d4ff3d] opacity-[0.07] blur-[100px]" />
          <div className="absolute bottom-[15%] left-[-10%] h-[280px] w-[280px] rounded-full bg-[#3b82f6] opacity-[0.08] blur-[90px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1200px] flex-1 items-center gap-14 py-6 lg:grid-cols-[1fr_minmax(280px,424px)] lg:gap-20 lg:py-10">
          <div>
            <Reveal>
              <Eyebrow className="mb-7 text-[#d4ff3d]/90">
                Mouse Technologies · Live masterclass
              </Eyebrow>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="font-display text-[2.5rem] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.02]">
                Vibecode
                <br />
                <span style={{ color: ACCENT }}>like a pro dev</span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-7 max-w-[32rem] text-lg leading-relaxed text-white/58 sm:text-xl">
                A 5-day premium hands-on masterclass for aspiring developers who
                want to build, ship, and scale real-world products — live on
                Google Meet.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <motion.div className="mt-9 flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
                  style={{
                    background: ACCENT_DIM,
                    borderColor: ACCENT_BORDER,
                    color: ACCENT,
                    boxShadow: "0 0 32px rgba(212,255,61,0.12)",
                  }}
                >
                  <span
                    className="h-2 w-2 animate-pulse rounded-full bg-[#ff5c5c]"
                    aria-hidden
                  />
                  No experience required
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-sm text-white/62 backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-[#d4ff3d]/80" strokeWidth={1.6} />
                  Learn to build with AI
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-sm text-white/62 backdrop-blur-md">
                  <Rocket className="h-4 w-4 text-white/40" strokeWidth={1.6} />
                  Earn extra income
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-sm text-white/62 backdrop-blur-md">
                  <Video className="h-4 w-4 text-white/40" strokeWidth={1.6} />
                  Google Meet · {formatClassDatesLabel()}
                </span>
              </motion.div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-row items-stretch gap-3 sm:gap-4">
                <a
                  href={WHATSAPP_REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] flex-1 basis-0 items-center justify-center gap-2 rounded-[18px] bg-gradient-to-br from-[#d4ff3d] to-[#9fe82a] px-3 py-3.5 text-center text-[13px] font-semibold leading-tight text-[#0a0a0a] no-underline shadow-[0_0_40px_rgba(212,255,61,0.22)] transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-[0_0_52px_rgba(212,255,61,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ff3d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] sm:px-8 sm:text-[15px] sm:leading-normal"
                >
                  Open WhatsApp to register
                </a>
                <Link
                  href="#pricing"
                  className="inline-flex min-h-[52px] flex-1 basis-0 items-center justify-center rounded-[18px] border border-white/[0.12] bg-white/[0.03] px-3 py-3.5 text-center text-[13px] font-semibold leading-tight text-white no-underline backdrop-blur-sm transition-colors hover:border-white/[0.2] hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 sm:px-8 sm:text-[15px] sm:leading-normal"
                >
                  Dates &amp; pricing
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-8 max-w-[32rem] text-sm leading-relaxed text-white/42">
                WhatsApp <span className="text-white/65">0807 893 3943</span>:
                pay into OPAY first, then{" "}
                <strong className="font-medium text-white/80">
                  attach your receipt
                </strong>{" "}
                in WhatsApp with{" "}
                <strong className="font-medium text-[#d4ff3d]/90">
                  VIBECODE
                </strong>{" "}
                and your full name so we can confirm your seat. Or send{" "}
                <strong className="font-medium text-[#d4ff3d]/90">VIBECODE</strong>{" "}
                to start on WhatsApp — same number.
              </p>
              <p className="mt-3 text-xs text-white/32">
                mousetech.app/vibecode
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.06} className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div className="relative">
              {!reduceMotion ? (
                <motion.div
                  aria-hidden
                  className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-[#3b82f6]/25 via-[#a78bfa]/20 to-[#d4ff3d]/15 opacity-70 blur-2xl"
                  animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ) : (
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-[#3b82f6]/20 via-[#a78bfa]/15 to-[#d4ff3d]/12 opacity-60 blur-2xl"
                />
              )}
              <motion.div
                className="relative"
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -10, 0], rotate: [0, 0.4, 0] }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className={`overflow-hidden rounded-[24px] border shadow-[0_24px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] ${glass}`}
                  style={{ borderColor: ACCENT_BORDER }}
                >
                  <Image
                    src="/vibecode-flyer.png"
                    alt="Vibecode masterclass promotional flyer"
                    width={900}
                    height={1200}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes — bento */}
      <SectionShell
        id="outcomes"
        className="border-t border-white/[0.06] py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <Eyebrow className="mb-4 text-[#a78bfa]">What you&apos;ll learn</Eyebrow>
            <h2 className="font-display max-w-[38rem] text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl md:text-[2.75rem]">
              From idea to shipped product — without the fluff.
            </h2>
            <p className="mt-5 max-w-[36rem] text-lg text-white/52">
              Hands-on building, real workflows, and a credible path to present
              yourself as job-ready.
            </p>
          </Reveal>

          <ul className="mt-14 grid list-none auto-rows-[minmax(100px,auto)] grid-cols-1 gap-3 p-0 md:grid-cols-6 md:gap-4">
            {outcomes.map(({ title, icon: Icon }, i) => (
              <Reveal key={title} delay={0.03 * i}>
                <li
                  className={`group flex h-full flex-col justify-between gap-4 p-6 md:p-7 ${glass} ${glassHover} ${bentoSpans[i]}`}
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent text-[#d4ff3d] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(212,255,61,0.15)]"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.65} />
                  </span>
                  <p className="pt-1 font-medium leading-snug text-white/88">
                    {title}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </SectionShell>

      {/* Schedule + Pricing */}
      <SectionShell
        id="schedule"
        className="border-t border-white/[0.06] py-20 md:py-28"
      >
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div
              className={`mb-14 flex flex-col gap-5 p-6 md:flex-row md:items-center md:gap-8 md:p-8 ${glass}`}
              style={{
                borderColor: "rgba(167, 139, 250, 0.22)",
                background:
                  "linear-gradient(135deg, rgba(167,139,250,0.08), rgba(255,255,255,0.02))",
              }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-black/30 text-[#c4b5fd]">
                <Calendar className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
                  {formatClassDatesLabel()}
                </h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-2 text-white/58">
                  <Video className="h-4 w-4 text-white/40" strokeWidth={1.6} />
                  5 days · Online · Google Meet · Link after registration
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <Eyebrow id="pricing" className="mb-4 text-[#7dd3fc]">
              Pricing
            </Eyebrow>
            <h2 className="font-display text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
              Early bird saves ₦3,000.
            </h2>
            <EarlyBirdCountdown />
            <p className="mt-4 max-w-[38rem] text-sm leading-relaxed text-white/48">
              After you pay by transfer, send proof on WhatsApp: attach your
              screenshot or PDF, and use{" "}
              <strong className="font-medium text-white/70">VIBECODE</strong> plus
              your full name (nothing is uploaded on this site).
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            <Reveal>
              <div
                className={`relative overflow-hidden p-8 md:p-9 ${glass} border-2`}
                style={{
                  borderColor: ACCENT,
                  background:
                    "linear-gradient(165deg, rgba(212,255,61,0.09), rgba(255,255,255,0.02))",
                  boxShadow: "0 0 60px rgba(212,255,61,0.08)",
                }}
              >
                <span className="absolute right-5 top-5 rounded-full bg-[#d4ff3d] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0a0a0a]">
                  Best value
                </span>
                <h3 className="text-base font-medium text-white/72">
                  Early bird
                </h3>
                <p
                  className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
                  style={{ color: ACCENT }}
                >
                  ₦7,000
                </p>
                <p className="mt-2 text-sm text-white/52">
                  {formatEarlyBirdWindowLabel()} · Lock before it closes.
                </p>
                <ul className="mt-8 list-none space-y-2.5 p-0 text-sm text-white/65">
                  <li className="flex items-center gap-2.5">
                    <Check
                      className="h-4 w-4 shrink-0"
                      style={{ color: ACCENT }}
                      strokeWidth={2.2}
                    />
                    Full 5-day live sessions
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check
                      className="h-4 w-4 shrink-0"
                      style={{ color: ACCENT }}
                      strokeWidth={2.2}
                    />
                    Google Meet access
                  </li>
                </ul>
                <a
                  href={WHATSAPP_REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full rounded-[16px] bg-gradient-to-br from-[#d4ff3d] to-[#9fe82a] py-3.5 text-center text-[15px] font-semibold text-[#0a0a0a] no-underline transition-[transform,box-shadow] hover:scale-[1.01] hover:shadow-[0_0_36px_rgba(212,255,61,0.25)]"
                >
                  Reserve early bird
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className={`p-8 md:p-9 ${glass} ${glassHover}`}>
                <h3 className="text-base font-medium text-white/72">Regular</h3>
                <p className="font-display mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  ₦10,000
                </p>
                <p className="mt-2 text-sm text-white/52">
                  {formatRegularWindowLabel()} · Same access, higher investment.
                </p>
                <ul className="mt-8 list-none space-y-2.5 p-0 text-sm text-white/55">
                  <li className="flex items-center gap-2.5">
                    <Check
                      className="h-4 w-4 shrink-0 text-white/35"
                      strokeWidth={2.2}
                    />
                    Full 5-day live sessions
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check
                      className="h-4 w-4 shrink-0 text-white/35"
                      strokeWidth={2.2}
                    />
                    Google Meet access
                  </li>
                </ul>
                <a
                  href={WHATSAPP_REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full rounded-[16px] border border-white/[0.14] bg-white/[0.03] py-3.5 text-center text-[15px] font-semibold text-white no-underline transition-colors hover:border-white/25 hover:bg-white/[0.07]"
                >
                  Register at regular price
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* Payment */}
      <SectionShell
        id="payment"
        className="border-t border-white/[0.06] pb-20 pt-8 md:pb-28 md:pt-12"
      >
        <div className="mx-auto max-w-[640px]">
          <Reveal>
            <Eyebrow className="mb-4 text-[#d4ff3d]">Pay by transfer</Eyebrow>
            <h2 className="font-display text-3xl font-bold tracking-[-0.035em] text-white">
              OPAY details
            </h2>
            <div className="mt-6 space-y-4 text-white/55">
              <p>
                <strong className="font-medium text-white/82">1.</strong> Pay
                into OPAY (reference with{" "}
                <strong className="text-white/82">VIBECODE</strong> and your name
                if your bank allows).
              </p>
              <p>
                <strong className="font-medium text-white/82">2.</strong> On{" "}
                <strong className="text-white/82">WhatsApp</strong> (0807 893
                3943), <strong className="text-white/82">attach</strong> your
                receipt, then message starting with{" "}
                <strong className="text-[#d4ff3d]/90">VIBECODE</strong> and your{" "}
                <strong className="text-white/82">full name</strong>.
              </p>
            </div>
            <p className="mt-6 text-sm text-white/38">
              We don&apos;t collect proof on this site — only WhatsApp after
              payment.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className={`mt-10 space-y-6 p-6 md:p-8 ${glass}`}>
              {[
                { label: "Account number", value: "8078933943" },
                { label: "Bank", value: "OPAY" },
                { label: "Account name", value: "Ayodele Oluwasegun Moyebi" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-3 border-b border-white/[0.08] pb-6 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="mb-1 text-[11px] uppercase tracking-wider text-white/38">
                      {row.label}
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {row.value}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyText(row.label, row.value)}
                    className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-white/22 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 sm:self-center"
                  >
                    {copiedField === row.label ? (
                      <>
                        <Check className="h-4 w-4 text-[#d4ff3d]" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => copyText("all", paymentBlock)}
                className="w-full rounded-[16px] border py-3.5 text-[15px] font-semibold transition-colors"
                style={{
                  borderColor: ACCENT_BORDER,
                  color: ACCENT,
                  background: ACCENT_DIM,
                }}
              >
                {copiedField === "all" ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <Check className="h-5 w-5" />
                    Copied all details
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2">
                    <Copy className="h-5 w-5" />
                    Copy all payment details
                  </span>
                )}
              </button>

              <a
                href={WHATSAPP_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-[16px] border border-white/[0.12] bg-white/[0.03] py-3.5 text-[15px] font-semibold text-white no-underline transition-colors hover:border-white/22 hover:bg-white/[0.06]"
              >
                Open WhatsApp to send proof
              </a>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* Instructor */}
      <SectionShell
        id="instructor"
        className="border-t border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <Eyebrow className="mb-4 text-center text-[#7dd3fc]">
              Your instructor
            </Eyebrow>
            <h2 className="font-display text-center text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
              Meet Ayodele
            </h2>
            <p className="mx-auto mt-5 max-w-[36rem] text-center text-lg text-white/52">
              Founder of Mouse Technologies — shipping real products for
              businesses and learners.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-center lg:gap-20">
            <Reveal className="mx-auto w-full max-w-[380px] lg:mx-0">
              <div
                className={`overflow-hidden rounded-[24px] border shadow-[0_24px_64px_rgba(0,0,0,0.45)] ${glass}`}
                style={{ borderColor: ACCENT_BORDER }}
              >
                <Image
                  src="/profile-picture.jpeg"
                  alt="Ayodele Oluwasegun Moyebi"
                  width={600}
                  height={720}
                  className="aspect-[5/6] h-auto w-full object-cover lg:aspect-auto lg:min-h-[420px]"
                  sizes="(max-width: 1024px) 90vw, 380px"
                />
              </div>
              <p className="mt-5 text-center text-sm text-white/42 lg:text-left">
                Ayodele Oluwasegun Moyebi · Founder, Mouse Technologies
              </p>
            </Reveal>

            <Reveal delay={0.06} className="space-y-8 text-left md:space-y-10">
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  I teach what I build every day
                </h3>
                <p className="mt-4 text-[17px] leading-relaxed text-white/60 md:text-lg">
                  I run Mouse Technologies as a hands-on developer, not a
                  slide-only coach. My day job is shipping production software:
                  performant websites, structured platforms, and client projects
                  using modern stacks like Next.js, React, and TypeScript — the
                  same tools you&apos;ll touch in this masterclass.
                </p>
              </div>
              <p className="text-[17px] leading-relaxed text-white/55 md:text-lg">
                We take on education, events, portfolios, and business sites. I
                care about clear UX, fast shipping, and code you&apos;re proud to
                show — including AI as a lever, not a crutch.
              </p>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      {/* Highlights */}
      <SectionShell
        id="highlights"
        className="border-t border-white/[0.06] py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <Eyebrow className="mb-4 text-center text-[#a78bfa]">
              Selected work
            </Eyebrow>
            <h2 className="font-display mx-auto max-w-[40rem] text-center text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
              What we&apos;ve shipped
            </h2>
            <p className="mx-auto mt-5 max-w-[34rem] text-center text-base leading-relaxed text-white/48 md:text-lg">
              Real launches — the same shipping mindset you&apos;ll practice live.
            </p>
          </Reveal>

          <ul className="mt-14 list-none space-y-5 p-0 md:space-y-6">
            {eventPassCs ? (
              <Reveal>
                <BuiltHighlightCard cs={eventPassCs} />
              </Reveal>
            ) : null}
            {steamCs ? (
              <Reveal delay={0.04}>
                <BuiltHighlightCard cs={steamCs} />
              </Reveal>
            ) : null}
            <Reveal delay={0.08}>
              <li
                className={`${glass} ${glassHover} list-none rounded-[22px] p-6 md:p-8`}
              >
                <p className="font-display text-lg font-semibold text-white">
                  Portfolios
                </p>
                <p className="mt-2 text-sm text-white/45">
                  Personal &amp; client showcase sites
                </p>
                <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-white/55">
                  Fast, premium portfolio experiences — clear layouts, strong
                  first impressions, contact-forward flows.
                </p>
                <div className="mt-8 space-y-6 md:space-y-8">
                  {portfolioCs.map((cs, i) => (
                    <div
                      key={cs.slug}
                      className={
                        i > 0 ? "border-t border-white/[0.08] pt-6 md:pt-8" : ""
                      }
                    >
                      <p className="font-medium text-white/90">{cs.title}</p>
                      <p className="mt-1 text-xs text-white/42">
                        {cs.industry} · {cs.clientType}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/55">
                        {cs.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Link
                          href={`/case-studies/${cs.slug}`}
                          className="whitespace-nowrap rounded-xl border border-white/12 bg-white/[0.02] px-3 py-1.5 text-sm font-medium text-white/85 no-underline transition-colors hover:bg-white/[0.06]"
                        >
                          Case study
                        </Link>
                        {cs.href ? (
                          <a
                            href={cs.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-gradient-to-br from-[#d4ff3d] to-[#9fe82a] px-3 py-1.5 text-sm font-semibold text-[#0a0a0a] no-underline hover:scale-[1.02]"
                          >
                            Live site
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </Reveal>
          </ul>

          <Reveal>
            <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 md:justify-start">
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-[#d4ff3d] no-underline transition-opacity hover:opacity-85"
              >
                Browse all case studies →
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-semibold text-white/45 no-underline transition-colors hover:text-white/75"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-white/45 no-underline transition-colors hover:text-white/75"
              >
                About MouseTech
              </Link>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      {/* Bottom CTA */}
      <section className="relative border-t border-white/[0.06] px-[5%] py-24 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,255,61,0.08),transparent_60%)]"
        />
        <Reveal className="relative mx-auto max-w-[540px]">
          <h2 className="font-display text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
            Ready to ship like a pro?
          </h2>
          <p className="mt-5 text-white/58">
            Pay by transfer, then on WhatsApp{" "}
            <strong className="font-medium text-white">attach</strong> your
            receipt and send{" "}
            <strong className="font-medium text-[#d4ff3d]">VIBECODE</strong> with
            your full name — we&apos;ll confirm your seat and Meet link.
          </p>
          <a
            href={WHATSAPP_REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-[18px] bg-gradient-to-br from-[#d4ff3d] to-[#9fe82a] px-10 py-4 text-[15px] font-semibold text-[#0a0a0a] no-underline shadow-[0_0_40px_rgba(212,255,61,0.2)] transition-[transform,box-shadow] hover:scale-[1.02] hover:shadow-[0_0_52px_rgba(212,255,61,0.3)]"
          >
            Open WhatsApp
          </a>
          <p className="mt-8 text-sm text-white/38">
            <Link
              href="/"
              className="text-white/55 no-underline transition-colors hover:text-white/80"
            >
              ← MouseTech home
            </Link>
          </p>
        </Reveal>
      </section>

      <VibeFooter />
    </main>
  );
}
