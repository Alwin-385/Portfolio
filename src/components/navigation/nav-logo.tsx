"use client";

import { m } from "motion/react";
import Link from "next/link";

import { useLenis } from "@/components/providers/lenis-provider";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type NavLogoProps = {
  className?: string;
  onNavigate?: () => void;
};

export function NavLogo({ className, onNavigate }: NavLogoProps) {
  const { scrollTo } = useLenis();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollTo("#hero");
    onNavigate?.();
  };

  return (
    <Link
      href="#hero"
      onClick={handleClick}
      className={cn(
        "group relative flex items-center gap-2.5 outline-none",
        "focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent-blue/40",
        className,
      )}
      aria-label={`${siteConfig.name} — back to top`}
    >
      <m.span
        className="flex size-8 items-center justify-center rounded-[var(--radius-button-token)] border border-default bg-bg-elevated text-sm font-semibold text-foreground shadow-elevation-xs transition-colors group-hover:border-border-accent"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        AB
      </m.span>
      <span className="hidden font-heading text-sm font-medium tracking-tight text-foreground lg:block">
        {siteConfig.name.split(" ")[0]}
      </span>
    </Link>
  );
}
