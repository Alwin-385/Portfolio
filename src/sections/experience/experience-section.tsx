"use client";

import { m } from "motion/react";

import {
  experienceTimelineContainer,
} from "@/animations/experience-variants";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  experienceEntries,
  experienceIntro,
  experienceSummary,
} from "@/data/experience";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { ExperienceTimelineItem } from "./experience-timeline-item";

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionContainer
      id="experience"
      label="Experience"
      description="Professional experience and internship work by Alwin Baby"
      className="section-experience relative overflow-hidden"
    >
      {/* Background overlays */}
      <div className="section-experience-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[var(--gradient-glow)] opacity-40"
        aria-hidden
      />

      <div className="relative flex w-full flex-col gap-10 md:gap-12">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title={experienceIntro.headline}
          description={experienceIntro.description}
          titleId="experience-heading"
        />

        {/* Summary strip */}
        <m.div
          className="mx-auto flex flex-wrap items-center justify-center gap-3"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="rounded-full border border-default bg-bg-elevated/80 px-5 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="font-semibold text-foreground">{experienceSummary.totalRoles}</span>{" "}
            professional {experienceSummary.totalRoles === 1 ? "role" : "roles"}
          </span>
          <span className="rounded-full border border-accent-blue/30 bg-accent-blue-muted px-5 py-2 text-sm font-medium text-accent-blue">
            {experienceSummary.internshipLabel}
          </span>
        </m.div>

        {/* Timeline */}
        <div className="relative mx-auto w-full max-w-3xl">
          <m.ol
            className="relative list-none space-y-10 lg:space-y-16"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={experienceTimelineContainer}
          >
            {experienceEntries.map((entry, index) => (
              <ExperienceTimelineItem
                key={entry.id}
                entry={entry}
                isLast={index === experienceEntries.length - 1}
              />
            ))}
          </m.ol>
        </div>
      </div>
    </SectionContainer>
  );
}
