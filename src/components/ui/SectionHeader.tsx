"use client";

import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={[isCenter ? "text-center" : "", className ?? ""].join(" ")}>
      {eyebrow ? (
        <div
          className={[
            "flex items-center gap-3 mb-4",
            isCenter ? "justify-center" : "",
          ].join(" ")}
        >
          <div
            className="w-5 h-px"
            style={{ background: isLight ? "#ffffff" : "#000000" }}
          />
          <span
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: isLight ? "rgba(255,255,255,0.65)" : "#666" }}
          >
            {eyebrow}
          </span>
          <div
            className="w-5 h-px"
            style={{ background: isLight ? "#ffffff" : "#000000" }}
          />
        </div>
      ) : null}

      <h2
        className="font-serif text-3xl md:text-4xl font-bold leading-tight"
        style={{
          color: isLight ? "#ffffff" : "#000000",
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={[
            "text-base leading-relaxed mt-4",
            isCenter ? "max-w-lg mx-auto" : "max-w-md",
          ].join(" ")}
          style={{ color: isLight ? "rgba(255,255,255,0.6)" : "#666" }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

