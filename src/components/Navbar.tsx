"use client";

import { useState, useEffect } from "react";

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
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      console.log('Navbar scroll state:', isScrolled, 'variant:', variant);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  // Determine appearance based on variant and scroll state
  // For "auto" mode: starts with white text (dark bg assumption), switches to dark text on scroll
  const isDarkBackground = variant === "dark" || (variant === "auto" && !scrolled);
  const hasWhiteBg = variant === "light" || (variant === "auto" && scrolled);
  
  // Text colors - white on dark backgrounds, dark on light backgrounds
  const textColor = isDarkBackground ? "#ffffff" : "#000000";
  const linkColor = isDarkBackground ? "rgba(255,255,255,0.8)" : "#333333";
  const borderColor = hasWhiteBg ? "1px solid #eaeaea" : "1px solid rgba(255,255,255,0.08)";

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 px-[5%] flex items-center justify-between h-[72px] transition-all duration-300" 
      style={{ 
        backdropFilter: 'blur(12px)',
        backgroundColor: hasWhiteBg ? 'rgba(255,255,255,0.98)' : 'transparent',
        borderBottom: borderColor,
      }}
    >
      <a href="/" className="font-sans text-xl font-bold tracking-tight no-underline transition-colors duration-300" style={{ color: textColor, letterSpacing: '-0.02em' }}>
        MouseTech
      </a>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 list-none">
        {lightLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="text-sm font-medium no-underline transition-all duration-200"
              style={{ 
                color: link.active ? '#0070F3' : linkColor,
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
          className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900 transition-all duration-200 no-underline"
        >
          {ctaText}
        </a>
      </div>
    </nav>
  );
}
