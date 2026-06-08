"use client";

import { m } from "motion/react";

import { useLenis } from "@/components/providers/lenis-provider";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

type NavLinkProps = {
  item: NavItem;
  isActive: boolean;
  onNavigate?: () => void;
  className?: string;
  layout?: "horizontal" | "vertical";
  index?: number;
};

export function NavLink({
  item,
  isActive,
  onNavigate,
  className,
  layout = "horizontal",
  index = 0,
}: NavLinkProps) {
  const { scrollTo } = useLenis();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollTo(item.href);
    onNavigate?.();
  };

  return (
    <m.li
      className={className}
      initial={layout === "vertical" ? { opacity: 0, x: -16 } : false}
      animate={layout === "vertical" ? { opacity: 1, x: 0 } : undefined}
      transition={{
        delay: layout === "vertical" ? 0.05 + index * 0.05 : 0,
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a
        href={item.href}
        onClick={handleClick}
        aria-current={isActive ? "location" : undefined}
        className={cn(
          "group relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none touch-manipulation",
          "focus-visible:ring-2 focus-visible:ring-accent-blue/40",
          layout === "vertical" &&
            "touch-target-inline min-h-12 w-full px-4 py-3 text-lg",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        <span className="relative z-10">{item.label}</span>
        <m.span
          className={cn(
            "absolute inset-x-3 -bottom-px h-px origin-left bg-accent-blue",
            layout === "vertical" && "inset-x-4 bottom-2 h-0.5 rounded-full",
            !isActive && "opacity-0",
          )}
          initial={false}
          animate={{
            scaleX: isActive ? 1 : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />
        {!isActive ? (
          <span
            className="absolute inset-x-3 -bottom-px h-px scale-x-0 bg-foreground/20 transition-transform duration-200 group-hover:scale-x-100"
            aria-hidden
          />
        ) : null}
      </a>
    </m.li>
  );
}
