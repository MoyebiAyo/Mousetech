"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type AnchorProps = SharedProps &
  Omit<ComponentProps<"a">, "className" | "children"> & {
    href: string;
  };

type ButtonProps = SharedProps &
  Omit<ComponentProps<"button">, "className" | "children">;

export type UiButtonProps = AnchorProps | ButtonProps;

function classesFor(variant: ButtonVariant, size: ButtonSize) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium no-underline transition-colors transition-transform duration-200 focus-visible:outline-none";

  const sizeClass =
    size === "sm"
      ? "px-4 py-2 text-sm"
      : size === "lg"
        ? "px-8 py-4 text-base"
        : "px-6 py-3 text-sm";

  const variantClass =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-900"
      : variant === "secondary"
        ? "bg-white text-black border border-[var(--gray-200)] hover:border-black"
        : variant === "outline"
          ? "bg-transparent text-black border border-[var(--gray-200)] hover:border-black"
          : "bg-transparent text-white border border-white/30 hover:border-white/70";

  return `${base} ${sizeClass} ${variantClass}`;
}

export default function Button(props: UiButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } =
    props as any;

  const classes = [classesFor(variant, size), className ?? ""].join(" ");

  // Anchor behavior
  if ("href" in props) {
    const href = props.href;
    const isExternal = /^https?:\/\//i.test(href);
    const isHash = href.startsWith("#") || href.includes("/#");

    if (!isExternal && !isHash) {
      return (
        <Link href={href} className={classes} {...(rest as any)}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : props.target}
        rel={isExternal ? "noopener noreferrer" : props.rel}
        {...(rest as any)}
      >
        {children}
      </a>
    );
  }

  // Button behavior
  return (
    <button className={classes} {...(rest as any)}>
      {children}
    </button>
  );
}

