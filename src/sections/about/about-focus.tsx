"use client";

import { m } from "motion/react";

import { aboutStaggerContainer, aboutStaggerItem } from "@/animations/about-variants";
import { DescriptionText } from "@/components/ui/typography";
import { aboutFocusAreas } from "@/data/about";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function AboutFocusAreas() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full">
      {/* Section label */}
      <div className="mb-10 flex items-center gap-3">
        <span className="h-px w-6 bg-gradient-to-r from-accent-blue to-accent-purple" aria-hidden />
        <span className="text-label">What I Build</span>
      </div>

      <m.div
        className="grid gap-0 divide-y divide-border-default"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={aboutStaggerContainer}
      >
        {aboutFocusAreas.map(({ id, title, description, icon: Icon }, index) => (
          <m.div
            key={id}
            variants={aboutStaggerItem}
            className={cn(
              "group relative grid items-center gap-6 py-7 transition-colors duration-300",
              "grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_1.5fr]",
              "hover:bg-gradient-to-r hover:from-accent-blue-muted hover:to-transparent",
            )}
          >
            {/* Number */}
            <span className="font-mono text-[clamp(2rem,4vw,3rem)] font-bold leading-none tabular-nums gradient-accent-text opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Title + icon row (mobile: single col; desktop: separate columns) */}
            <div className="flex min-w-0 items-center gap-4">
              <div
                className={cn(
                  "flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-button-token)]",
                  "border border-default bg-bg-elevated text-accent-blue",
                  "transition-all duration-300 group-hover:border-border-accent group-hover:scale-110 group-hover:shadow-glow-accent",
                )}
              >
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground md:text-xl">
                {title}
              </h3>
            </div>

            {/* Description — hidden on mobile, visible md+ */}
            <DescriptionText className="hidden text-left text-pretty md:block">
              {description}
            </DescriptionText>

            {/* Description for mobile below the row */}
            <DescriptionText className="col-span-2 -mt-2 text-left text-pretty md:hidden">
              {description}
            </DescriptionText>

            {/* Right arrow indicator */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
              aria-hidden
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </m.div>
        ))}
      </m.div>
    </div>
  );
}
