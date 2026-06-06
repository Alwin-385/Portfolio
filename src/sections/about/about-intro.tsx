"use client";

import { m } from "motion/react";

import { aboutFadeUp } from "@/animations/about-variants";
import { Badge } from "@/components/ui/badge";
import { DescriptionText, LabelText, SectionTitle } from "@/components/ui/typography";
import { aboutIntro } from "@/data/about";
import { siteConfig } from "@/data/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function AboutIntro() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      className="grid w-full gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-12 lg:items-start"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={aboutFadeUp}
    >
      <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
        <div
          className={cn(
            "relative flex size-28 items-center justify-center rounded-[var(--radius-card-token)]",
            "border border-default bg-bg-elevated shadow-elevation-md",
            "gradient-border",
          )}
        >
          <span className="font-heading text-4xl font-semibold gradient-accent-text">
            AB
          </span>
          <div
            className="pointer-events-none absolute inset-0 rounded-[var(--radius-card-token)] bg-[var(--gradient-glow)]"
            aria-hidden
          />
        </div>
        <div className="space-y-1">
          <p className="font-heading text-lg font-medium text-foreground">
            {siteConfig.name}
          </p>
          <Badge variant="tech">{aboutIntro.status}</Badge>
        </div>
      </div>

      <div className="min-w-0 space-y-4">
        <SectionTitle as="h3" className="text-left text-balance">
          {aboutIntro.headline}
        </SectionTitle>
        {aboutIntro.paragraphs.map((paragraph, index) => (
          <DescriptionText key={index} className="text-left text-pretty">
            {paragraph}
          </DescriptionText>
        ))}
      </div>
    </m.div>
  );
}

export function AboutSectionHeader() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.header
      className="mx-auto mb-12 max-w-3xl space-y-3 text-center md:mb-16"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={aboutFadeUp}
    >
      <LabelText>About</LabelText>
      <SectionTitle className="text-balance">
        The person behind the products
      </SectionTitle>
      <DescriptionText className="mx-auto max-w-2xl text-pretty">
        A quick story — who I am, what I build, and why it matters.
      </DescriptionText>
    </m.header>
  );
}
