"use client";

import { m } from "motion/react";

import {
  aboutStaggerContainer,
  aboutStaggerItem,
} from "@/animations/about-variants";
import { CardTitleText, DescriptionText, LabelText } from "@/components/ui/typography";
import { aboutFocusAreas } from "@/data/about";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function AboutFocusAreas() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <LabelText>What I Build</LabelText>
        <CardTitleText as="h3" className="text-section-title">
          Four pillars of my craft
        </CardTitleText>
      </div>

      <m.ul
        className="grid w-full list-none gap-4 sm:grid-cols-2"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={aboutStaggerContainer}
      >
        {aboutFocusAreas.map(({ id, title, description, icon: Icon }) => (
          <m.li key={id} variants={aboutStaggerItem} className="min-w-0">
            <article
              className={cn(
                "group flex h-full flex-col gap-4 rounded-[var(--radius-card-token)]",
                "border border-default bg-bg-secondary p-5 md:p-6",
                "shadow-elevation-xs transition-all duration-300",
                "hover:border-border-accent hover:bg-bg-elevated hover:shadow-elevation-md hover:shadow-glow-accent",
              )}
            >
              <div
                className={cn(
                  "flex size-10 items-center justify-center rounded-[var(--radius-button-token)]",
                  "border border-subtle bg-bg-elevated text-accent-blue",
                  "transition-colors group-hover:border-border-accent group-hover:text-accent-blue",
                )}
              >
                <Icon className="size-5" aria-hidden />
              </div>
              <div className="min-w-0 space-y-2">
                <CardTitleText as="h4">{title}</CardTitleText>
                <DescriptionText className="text-left text-pretty">
                  {description}
                </DescriptionText>
              </div>
            </article>
          </m.li>
        ))}
      </m.ul>
    </div>
  );
}
