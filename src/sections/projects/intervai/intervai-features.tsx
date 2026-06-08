"use client";

import { m } from "motion/react";

import {
  intervaiStaggerContainer,
  intervaiStaggerItem,
} from "@/animations/intervai-variants";
import { CardTitleText, DescriptionText, LabelText } from "@/components/ui/typography";
import { intervaiFeatures } from "@/data/intervai";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function IntervaiFeatures() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <span
            className="h-px w-6 bg-gradient-to-r from-accent-blue to-accent-purple"
            aria-hidden
          />
          <LabelText>Capabilities</LabelText>
        </div>
        <CardTitleText as="h3" className="text-section-title">
          Built like a SaaS platform, not a side project
        </CardTitleText>
      </div>

      <m.ul
        className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={intervaiStaggerContainer}
      >
        {intervaiFeatures.map(({ id, title, description, icon: Icon }) => (
          <m.li key={id} variants={intervaiStaggerItem} className="min-w-0">
            <article
              className={cn(
                "group relative flex h-full flex-col gap-4 overflow-hidden rounded-[var(--radius-card-token)]",
                "border border-default bg-bg-elevated p-5 md:p-6",
                "transition-all duration-300",
                "hover:border-border-accent hover:shadow-elevation-md hover:shadow-glow-accent",
              )}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-accent-blue-muted opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div
                className={cn(
                  "relative flex size-11 items-center justify-center rounded-[var(--radius-button-token)]",
                  "border border-subtle bg-gradient-to-br from-accent-blue-muted to-accent-purple-muted",
                  "text-accent-blue transition-transform duration-300 group-hover:scale-105",
                )}
              >
                <Icon className="size-5" aria-hidden />
              </div>
              <div className="relative min-w-0 space-y-2">
                <CardTitleText as="h4">{title}</CardTitleText>
                <DescriptionText className="text-left text-pretty text-sm">
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
