"use client";

import { m } from "motion/react";

import { SocialIcon } from "@/components/navigation/social-icon";
import { motionIconHover, motionTapScale } from "@/animations/motion-interactions";
import { SOCIAL_LINKS } from "@/data/navigation";
import { cn } from "@/lib/utils";

type NavActionsProps = {
  className?: string;
  layout?: "horizontal" | "vertical";
  /** On very narrow screens, show email only in the top bar */
  filter?: "all" | "email";
};

export function NavActions({
  className,
  layout = "horizontal",
  filter = "all",
}: NavActionsProps) {
  const links =
    filter === "email"
      ? SOCIAL_LINKS.filter((link) => link.icon === "email")
      : SOCIAL_LINKS;

  return (
    <div
      className={cn(
        "flex items-center gap-1",
        layout === "vertical" && "flex-col items-stretch gap-2",
        className,
      )}
    >
      {links.map(({ label, href, icon }, index) => {
        const isExternal = href.startsWith("http");

        return (
          <m.a
            key={label}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={label}
          className={cn(
            "touch-target touch-manipulation inline-flex items-center justify-center rounded-[var(--radius-button-token)] border border-transparent p-0 text-muted-foreground transition-colors outline-none",
            "hover:border-default hover:bg-bg-secondary hover:text-foreground",
            "focus-visible:ring-2 focus-visible:ring-accent-blue/40",
            layout === "vertical" &&
              "min-h-12 w-full justify-start border-default px-4 py-3 text-base",
          )}
          initial={layout === "vertical" ? { opacity: 0, x: -16 } : false}
          animate={layout === "vertical" ? { opacity: 1, x: 0 } : undefined}
          transition={{
            delay: layout === "vertical" ? 0.35 + index * 0.05 : 0,
            duration: 0.35,
          }}
          whileHover={layout === "horizontal" ? motionIconHover : undefined}
          whileTap={motionTapScale}
        >
          <SocialIcon name={icon} />
          {layout === "vertical" ? <span>{label}</span> : null}
        </m.a>
        );
      })}
    </div>
  );
}
