"use client";

import { m } from "motion/react";

import { aboutFadeUp } from "@/animations/about-variants";
import { DescriptionText } from "@/components/ui/typography";
import { aboutInterests, aboutInterestsSummary } from "@/data/about";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const row1 = aboutInterests.concat(aboutInterests); // duplicate for seamless loop
const row2 = [...aboutInterests].reverse().concat([...aboutInterests].reverse());

type TickerPillProps = {
  label: string;
  accent?: "blue" | "purple";
};

function TickerPill({ label, accent }: TickerPillProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap",
        "transition-colors duration-200",
        accent === "blue"
          ? "border-accent-blue/30 bg-accent-blue-muted text-accent-blue hover:bg-accent-blue/20"
          : accent === "purple"
            ? "border-accent-purple/30 bg-accent-purple-muted text-accent-purple hover:bg-accent-purple/20"
            : "border-default bg-bg-elevated text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </span>
  );
}

export function AboutInterests() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      className="w-full space-y-8"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={aboutFadeUp}
    >
      {/* Section label + statement */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-gradient-to-r from-accent-blue to-accent-purple" aria-hidden />
          <span className="text-label">Currently Exploring</span>
          <span className="h-px w-6 bg-gradient-to-l from-accent-blue to-accent-purple" aria-hidden />
        </div>
        <DescriptionText className="mx-auto max-w-2xl text-center text-base text-pretty">
          {aboutInterestsSummary}
        </DescriptionText>
      </div>

      {/* Ticker rows */}
      <div className="relative w-full overflow-hidden space-y-3 py-2">
        {/* Fade masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-bg-primary to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-bg-primary to-transparent"
          aria-hidden
        />

        {/* Row 1 — left to right */}
        <div
          className={cn(
            "flex gap-3",
            prefersReducedMotion ? "flex-wrap justify-center" : "w-max interest-ticker",
          )}
          aria-hidden={!prefersReducedMotion}
        >
          {row1.map(({ id, label, accent }, i) => (
            <TickerPill key={`${id}-${i}`} label={label} accent={accent} />
          ))}
        </div>

        {/* Row 2 — right to left */}
        {!prefersReducedMotion ? (
          <div className="flex w-max gap-3 interest-ticker-reverse">
            {row2.map(({ id, label, accent }, i) => (
              <TickerPill key={`r2-${id}-${i}`} label={label} accent={accent} />
            ))}
          </div>
        ) : null}
      </div>
    </m.div>
  );
}
