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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine appearance based on variant and scroll state
  // For "auto" mode: starts with white text (dark bg assumption), switches to dark text on scroll
  const isDarkBackground = variant === "dark" || (variant === "auto" && !scrolled);
  const hasWhiteBg = variant === "light" || (variant === "auto" && scrolled);
  
  // Text colors - white on dark backgrounds, dark on light backgrounds
  const textColor = isDarkBackground ? "#ffffff" : "#0d1b2a";
  const linkColor = isDarkBackground ? "rgba(255,255,255,0.9)" : "#1a2535";
  const borderColor = hasWhiteBg ? "1px solid #dce6f0" : "1px solid rgba(255,255,255,0.1)";

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 px-[5%] flex items-center justify-between h-[72px] transition-all duration-300" 
      style={{ 
        backdropFilter: 'blur(12px)',
        backgroundColor: hasWhiteBg ? 'rgba(255,255,255,0.97)' : 'transparent',
        borderBottom: borderColor,
        boxShadow: hasWhiteBg ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <a href="/" className="font-serif text-2xl font-bold tracking-tight no-underline transition-colors duration-300" style={{ color: textColor }}>
        MouseTech
      </a>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 list-none">
        {lightLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-sm font-medium no-underline transition-all duration-300"
              style={{ 
                color: link.active ? '#7ab8f5' : linkColor,
                opacity: link.active ? 1 : 0.9
              }}
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
  );
}
