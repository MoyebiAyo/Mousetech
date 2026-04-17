"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

interface NavBarProps {
  variant?: "light" | "dark" | "auto";
  lightLinks?: Array<{ label: string; href: string; active?: boolean }>;
  ctaText?: string;
  ctaHref?: string;
}

export default function NavBar({ 
  variant = "auto", 
  lightLinks = [],
  ctaText = "Get Started",
  ctaHref = "https://wa.me/2348078933943"
}: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we should use light text (white) or dark text
  const useLightText = variant === "dark" || (variant === "auto" && !scrolled);

  const bgColor = scrolled ? "bg-white/97 shadow-lg" : (variant === "light" ? "bg-white/97 shadow-lg" : "bg-transparent");
  const borderColor = scrolled || variant === "light" ? "1px solid #dce6f0" : "none";
  const textColor = useLightText ? "#ffffff" : "#0d1b2a";
  const linkColor = useLightText ? "rgba(255,255,255,0.9)" : "#1a2535";
  const mobileMenuBg = scrolled || variant === "light" ? "#ffffff" : "#0d1b2a";
  const mobileMenuTextColor = useLightText ? "#ffffff" : "#1a2535";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 px-[5%] flex items-center justify-between h-[72px] transition-all duration-300 ${bgColor}`} 
        style={{ backdropFilter: 'blur(12px)', borderBottom: borderColor }}
      >
        <a href="/" className="font-serif text-2xl font-bold tracking-tight no-underline" style={{ color: textColor }}>
          MouseTech
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 list-none">
          {lightLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className={`text-sm font-medium no-underline transition-colors duration-200 ${link.active ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                style={{ color: link.active ? '#7ab8f5' : linkColor }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex gap-3 items-center">
          <a 
            href={ctaHref} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden sm:inline-flex text-sm font-semibold px-4 py-2 rounded-md bg-[#1e5fa8] text-white hover:bg-[#2a7dd4] transition-colors no-underline"
          >
            {ctaText}
          </a>
        </div>
      </nav>
    </>
  );
}
