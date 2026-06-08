"use client";

import { m } from "motion/react";

import { aboutStaggerContainer, aboutStaggerItem } from "@/animations/about-variants";
import { CardTitleText, DescriptionText } from "@/components/ui/typography";
import { aboutHighlights } from "@/data/about";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function AboutHighlights() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full space-y-8">
      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-gradient-to-r from-accent-blue to-accent-purple" aria-hidden />
        <span className="text-label">Why I stand out</span>
      </div>

      <m.div
        className="grid gap-4 sm:grid-cols-2"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={aboutStaggerContainer}
      >
        {aboutHighlights.map(({ id, title, description, icon: Icon }) => (
          <m.article
            key={id}
            variants={aboutStaggerItem}
            className={cn(
              "card-lift group flex gap-4 rounded-[var(--radius-card-token)] border border-default bg-bg-elevated/60 p-5",
              "transition-colors duration-300 hover:border-border-accent hover:bg-bg-elevated hover:shadow-elevation-sm",
            )}
          >
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-button-token)]",
                "border border-default bg-bg-secondary text-accent-blue",
                "transition-all duration-300 group-hover:border-border-accent group-hover:shadow-glow-accent",
              )}
            >
              <Icon className="size-4" aria-hidden />
            </div>
            <div className="min-w-0 space-y-1.5">
              <CardTitleText as="h3" className="text-base">
                {title}
              </CardTitleText>
              <DescriptionText className="text-left text-pretty text-sm">
                {description}
              </DescriptionText>
            </div>
          </m.article>
        ))}
      </m.div>
    </div>
  );
}
