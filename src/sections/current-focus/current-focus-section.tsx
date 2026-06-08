"use client";

import { m } from "motion/react";

import {
  focusCardReveal,
  focusGridContainer,
  focusSummaryReveal,
} from "@/animations/focus-variants";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  currentFocusIntro,
  currentFocusSummary,
  focusAreas,
} from "@/data/current-focus";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { FocusAreaCard } from "./focus-area-card";

export function CurrentFocusSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionContainer
      id="current-focus"
      label="Current Focus"
      description="Areas Alwin Baby is actively exploring and building in"
      className="section-focus relative overflow-hidden"
    >
      <div className="section-focus-aurora pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[var(--gradient-glow)] opacity-40"
        aria-hidden
      />

      <div className="relative flex w-full flex-col gap-10 md:gap-12">
        <SectionHeading
          index="06"
          eyebrow={currentFocusIntro.eyebrow}
          title={currentFocusIntro.title}
          description={currentFocusIntro.description}
          titleId="current-focus-heading"
        />

        <m.div
          className="mx-auto flex flex-wrap items-center justify-center gap-3"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={focusSummaryReveal}
        >
          <span className="rounded-full border border-default bg-bg-elevated/80 px-5 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="font-semibold text-foreground">{currentFocusSummary.areaCount}</span>{" "}
            active focus areas
          </span>
          <span className="rounded-full border border-accent-purple/30 bg-accent-purple-muted px-5 py-2 text-sm font-medium text-accent-purple">
            {currentFocusSummary.tagline}
          </span>
        </m.div>

        <m.ul
          className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={focusGridContainer}
        >
          {focusAreas.map((area, index) => (
            <m.li
              key={area.id}
              variants={focusCardReveal}
              className={index === 0 ? "min-w-0 sm:col-span-2 lg:col-span-2" : "min-w-0"}
            >
              <FocusAreaCard area={area} index={index} />
            </m.li>
          ))}
        </m.ul>
      </div>
    </SectionContainer>
  );
}
