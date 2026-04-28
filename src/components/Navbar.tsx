"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  variant?: "light" | "dark" | "auto";
  lightLinks?: Array<{ label: string; href: string; active?: boolean }>;
  ctaText?: string;
  ctaHref?: string;
}

function NavLink({
  href,
  children,
  active,
  className,
  style,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const isExternal = /^https?:\/\//i.test(href);
  const isHash = href.startsWith("#") || href.includes("/#");

  const commonProps = {
    className,
    style,
    onClick,
    "aria-current": active ? ("page" as const) : undefined,
  };

  if (!isExternal && !isHash) {
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...commonProps}
    >
      {children}
    </a>
  );
}

export default function NavBar({ 
  variant = "auto", 
  lightLinks = [],
  ctaText = "Get Started",
  ctaHref = "https://wa.me/2348078933943"
}: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Removed variant dependency - not needed

  const isDarkBackground = variant === "dark" || (variant === "auto" && !scrolled);
  const hasWhiteBg = variant === "light" || (variant === "auto" && scrolled);
  const textColor = isDarkBackground ? "#ffffff" : "#000000";
  const linkColor = isDarkBackground ? "rgba(255,255,255,0.8)" : "#333333";
  const borderColor = hasWhiteBg ? "1px solid #eaeaea" : "1px solid rgba(255,255,255,0.08)";
  const ctaIsExternal = /^https?:\/\//.test(ctaHref);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-[5%] flex items-center justify-between h-[72px] transition-all duration-300"
        style={{
          backdropFilter: "blur(12px)",
          backgroundColor: hasWhiteBg ? "rgba(255,255,255,0.98)" : "transparent",
          borderBottom: borderColor,
        }}
      >
        <Link
          href="/"
          className="font-sans text-xl font-bold tracking-tight no-underline transition-colors duration-300 focus-visible:outline-none"
          style={{ color: textColor, letterSpacing: "-0.02em" }}
          aria-label="MouseTech home"
        >
          MouseTech
        </Link>

        <ul className="hidden md:flex gap-10 list-none">
          {lightLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                href={link.href}
                active={link.active}
                className="text-sm font-medium no-underline transition-all duration-200 focus-visible:outline-none"
                style={{
                  color: link.active ? "#0070F3" : linkColor,
                  opacity: link.active ? 1 : 0.9,
                }}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <a
            href={ctaHref}
            target={ctaIsExternal ? "_blank" : undefined}
            rel={ctaIsExternal ? "noopener noreferrer" : undefined}
            className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900 transition-all duration-200 no-underline focus-visible:outline-none"
          >
            {ctaText}
          </a>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md transition-all duration-300 focus-visible:outline-none"
            style={{ color: textColor }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="md:hidden fixed top-[72px] left-0 right-0 z-40 px-[5%] py-6 shadow-xl"
          style={{
            background: hasWhiteBg ? "#ffffff" : "#000000",
            borderBottom: borderColor,
          }}
        >
          <div className="flex flex-col gap-2">
            {lightLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                active={link.active}
                className="text-base font-medium py-2 no-underline transition-colors focus-visible:outline-none"
                style={{
                  color: link.active ? "#0070F3" : hasWhiteBg ? "#333333" : "#ffffff",
                }}
              >
                {link.label}
              </NavLink>
            ))}
            <div
              className="pt-4 mt-2 border-t"
              style={{
                borderColor: hasWhiteBg ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.15)",
              }}
            >
              <a
                href={ctaHref}
                target={ctaIsExternal ? "_blank" : undefined}
                rel={ctaIsExternal ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center text-base font-medium px-6 py-3 rounded-md no-underline bg-black text-white focus-visible:outline-none"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
