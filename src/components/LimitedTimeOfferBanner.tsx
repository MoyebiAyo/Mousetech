"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Clock3, Sparkles, ArrowRight, MessageCircle } from "lucide-react";

type LimitedTimeOfferBannerProps = {
  className?: string;
};

function formatDuration(totalSeconds: number) {
  const clamped = Math.max(0, totalSeconds);
  const days = Math.floor(clamped / (24 * 3600));
  const hours = Math.floor((clamped % (24 * 3600)) / 3600);
  const minutes = Math.floor((clamped % 3600) / 60);

  return { days, hours, minutes };
}

export default function LimitedTimeOfferBanner({
  className,
}: LimitedTimeOfferBannerProps) {
  // Offer window: starts today and ends in 14 days.
  // Using explicit WAT (+01:00) timestamps avoids “future” issues across timezones.
  const offerStartsAt = useMemo(
    () => new Date("2026-04-28T00:00:00+01:00"),
    []
  );
  const offerEndsAt = useMemo(
    () => new Date("2026-05-12T23:59:59+01:00"),
    []
  );

  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const isActive = now >= offerStartsAt && now <= offerEndsAt;
  if (!isActive) return null;

  const secondsRemaining = Math.floor(
    (offerEndsAt.getTime() - now.getTime()) / 1000
  );
  const remaining = formatDuration(secondsRemaining);

  const whatsappMessage = encodeURIComponent(
    "Hi MouseTech! I want to claim the limited-time website promo for ₦50,000. Please share what’s included and how we can start today."
  );

  return (
    <section
      className={[
        "relative overflow-hidden border-b",
        className ?? "",
      ].join(" ")}
      style={{
        background:
          "linear-gradient(160deg, #000 0%, #0b1b2a 55%, #0c2a44 100%)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,112,243,0.22) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-[5%] py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Sparkles className="w-5 h-5" style={{ color: "#7ab8f5" }} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Clock3 className="w-3.5 h-3.5" />
                  Limited-time offer
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  Build a website for{" "}
                  <span style={{ color: "#ffffff" }}>₦50,000</span>.
                </span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Ends in{" "}
                  <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                    {remaining.days}d {remaining.hours}h {remaining.minutes}m
                  </strong>
                  .
                </span>
              </div>
              <p
                className="text-xs sm:text-sm mt-1"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Runs Apr 28, 2026 – May 12, 2026. Limited slots available.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/2348078933943?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold no-underline transition-all duration-200"
              style={{
                background: "#ffffff",
                color: "#000000",
                border: "1px solid rgba(255,255,255,0.9)",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Claim offer on WhatsApp
            </a>

            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium no-underline transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              See details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

