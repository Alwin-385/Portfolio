"use client";

import { m } from "motion/react";

import { SocialIcon } from "@/components/navigation/social-icon";
import { SOCIAL_LINKS } from "@/data/navigation";
import { cn } from "@/lib/utils";

type NavActionsProps = {
  className?: string;
  layout?: "horizontal" | "vertical";
};

export function NavActions({ className, layout = "horizontal" }: NavActionsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1",
        layout === "vertical" && "flex-col items-stretch gap-2",
        className,
      )}
    >
      {SOCIAL_LINKS.map(({ label, href, icon }, index) => (
        <m.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-[var(--radius-button-token)] border border-transparent p-2 text-muted-foreground transition-colors outline-none",
            "hover:border-default hover:bg-bg-secondary hover:text-foreground",
            "focus-visible:ring-2 focus-visible:ring-accent-blue/40",
            layout === "vertical" &&
              "justify-start border-default px-4 py-3 text-base",
          )}
          initial={layout === "vertical" ? { opacity: 0, x: -16 } : false}
          animate={layout === "vertical" ? { opacity: 1, x: 0 } : undefined}
          transition={{
            delay: layout === "vertical" ? 0.35 + index * 0.05 : 0,
            duration: 0.35,
          }}
          whileHover={{ scale: layout === "horizontal" ? 1.05 : 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <SocialIcon name={icon} />
          {layout === "vertical" ? <span>{label}</span> : null}
        </m.a>
      ))}
    </div>
  );
}
