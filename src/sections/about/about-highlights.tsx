"use client";

import { m } from "motion/react";

import {
  aboutStaggerContainer,
  aboutStaggerItem,
  aboutFadeUp,
} from "@/animations/about-variants";
import { CardTitleText, DescriptionText, LabelText, MetadataText } from "@/components/ui/typography";
import { aboutHighlights, aboutTimeline } from "@/data/about";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function AboutHighlights() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full space-y-8">
      <div className="space-y-2">
        <LabelText>Highlights</LabelText>
        <CardTitleText as="h3" className="text-section-title">
          Why I&apos;m worth interviewing
        </CardTitleText>
      </div>

      <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-10">
        {/* Timeline */}
        <m.div
          className="min-w-0"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={aboutFadeUp}
        >
          <p className="mb-5 text-label">Experience & education</p>
          <ol className="relative list-none space-y-0 border-l border-default pl-6">
            {aboutTimeline.map((item, index) => (
              <li
                key={item.id}
                className={cn("relative pb-8 last:pb-0", index === 0 && "pt-0")}
              >
                <span
                  className="absolute -left-[calc(0.375rem+1px)] top-1.5 size-3 rounded-full border-2 border-accent-blue bg-bg-primary shadow-[0_0_8px_var(--accent-blue-muted)]"
                  aria-hidden
                />
                <div className="space-y-1">
                  <MetadataText>{item.period}</MetadataText>
                  <CardTitleText as="h4" className="text-base">
                    {item.role}
                  </CardTitleText>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.organization}
                  </p>
                  <DescriptionText className="pt-1 text-left text-pretty text-sm">
                    {item.description}
                  </DescriptionText>
                </div>
              </li>
            ))}
          </ol>
        </m.div>

        {/* Highlight cards */}
        <m.ul
          className="grid min-w-0 list-none gap-4 sm:grid-cols-2"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={aboutStaggerContainer}
        >
          {aboutHighlights.map(({ id, title, description, icon: Icon }) => (
            <m.li key={id} variants={aboutStaggerItem} className="min-w-0">
              <article
                className={cn(
                  "group flex h-full flex-col gap-3 rounded-[var(--radius-card-token)]",
                  "border border-default bg-bg-elevated p-5",
                  "transition-all duration-300",
                  "hover:border-border-accent hover:shadow-elevation-sm hover:shadow-glow-accent",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-button-token)] bg-accent-blue-muted text-accent-blue">
                    <Icon className="size-4" aria-hidden />
                  </div>
                  <CardTitleText as="h4" className="text-base">
                    {title}
                  </CardTitleText>
                </div>
                <DescriptionText className="text-left text-pretty text-sm">
                  {description}
                </DescriptionText>
              </article>
            </m.li>
          ))}
        </m.ul>
      </div>
    </div>
  );
}
