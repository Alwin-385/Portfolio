"use client";

import { m } from "motion/react";

import {
  aboutFadeUp,
  aboutStaggerContainer,
  aboutStaggerItem,
} from "@/animations/about-variants";
import { SectionHeading } from "@/components/ui/section-heading";
import { BodyText, DescriptionText } from "@/components/ui/typography";
import { aboutIntro, aboutStats } from "@/data/about";
import { siteConfig } from "@/data/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function AboutIntro() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      className="flex w-full flex-col gap-8"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={aboutFadeUp}
    >
      <div className="grid w-full items-stretch gap-6 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-8">
        {/* Profile card */}
        <article
          className={cn(
            "relative flex flex-col gap-5 overflow-hidden rounded-[var(--radius-card-token)] p-6 md:p-7",
            "border border-default bg-bg-secondary/60 shadow-elevation-sm",
          )}
        >
          <div
            className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[var(--gradient-glow)] opacity-70"
            aria-hidden
          />

          <div className="relative flex items-center gap-4">
            <div
              className={cn(
                "relative flex size-16 shrink-0 items-center justify-center rounded-[var(--radius-button-token)]",
                "gradient-border shadow-elevation-sm",
              )}
            >
              <span className="font-heading text-2xl font-semibold gradient-accent-text">
                AB
              </span>
            </div>
            <div className="min-w-0 space-y-0.5">
              <p className="font-heading text-lg font-semibold text-foreground">
                {siteConfig.name}
              </p>
              <p className="text-sm text-accent-blue">{aboutIntro.role}</p>
            </div>
          </div>

          <div className="relative h-px w-full bg-border-default" aria-hidden />

          <div className="relative space-y-2">
            <p className="text-sm font-medium text-foreground">{aboutIntro.status}</p>
            <p className="text-sm text-muted-foreground">{aboutIntro.available}</p>
          </div>
        </article>

        {/* Narrative */}
        <div className="relative flex min-w-0 flex-col justify-center gap-4 lg:pl-2">
          <span
            className="absolute left-0 top-1 hidden h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-accent-blue/60 via-accent-purple/30 to-transparent lg:block"
            aria-hidden
          />
          <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-tight text-balance text-foreground lg:pl-6">
            {aboutIntro.headline}
          </h3>
          <BodyText className="text-lg font-medium text-foreground/90 lg:pl-6">
            {aboutIntro.lead}
          </BodyText>
          {aboutIntro.paragraphs.map((paragraph, index) => (
            <DescriptionText key={index} className="text-left text-pretty lg:pl-6">
              {paragraph}
            </DescriptionText>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <m.dl
        className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card-token)] border border-default bg-border-default sm:grid-cols-4"
        variants={aboutStaggerContainer}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {aboutStats.map((stat) => (
          <m.div
            key={stat.id}
            variants={aboutStaggerItem}
            className="flex flex-col gap-1 bg-bg-secondary/60 px-4 py-5 text-center transition-colors duration-300 hover:bg-bg-elevated"
          >
            <dt className="order-2 text-label">{stat.label}</dt>
            <dd className="order-1 font-heading text-lg font-semibold text-foreground">
              {stat.value}
            </dd>
          </m.div>
        ))}
      </m.dl>
    </m.div>
  );
}

export function AboutSectionHeader() {
  return (
    <SectionHeading
      index="01"
      eyebrow="About"
      title="The person behind the products"
      description="A quick story — who I am, what I build, and why it matters."
      titleId="about-heading"
    />
  );
}
