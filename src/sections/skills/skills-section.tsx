"use client";

import { m } from "motion/react";

import {
  skillsCategoryReveal,
  skillsGridContainer,
  skillsSummaryReveal,
} from "@/animations/skills-variants";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories, skillsIntro, skillsSummary } from "@/data/skills";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { SkillCategoryCard } from "./skill-category-card";

/**
 * Bento layout:
 * Desktop (3-col):
 *   Row 1: [Frontend 2-col] [AI 1-col]
 *   Row 2: [Backend 1-col] [Database 1-col] [Cloud 1-col]
 *   Row 3: [Tools 2-col] (+ filler)
 *
 * Tablet (2-col): pairs
 * Mobile: single column
 */
const bentoConfig: Record<string, { colSpan: string; size: "large" | "medium" | "small" }> = {
  frontend: { colSpan: "lg:col-span-2", size: "large" },
  ai:       { colSpan: "lg:col-span-1", size: "large" },
  backend:  { colSpan: "lg:col-span-1", size: "medium" },
  database: { colSpan: "lg:col-span-1", size: "medium" },
  cloud:    { colSpan: "lg:col-span-1", size: "medium" },
  tools:    { colSpan: "lg:col-span-2 sm:col-span-2", size: "medium" },
};

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionContainer
      id="skills"
      label="Skills"
      description="Technical skills and tools used by Alwin Baby"
      className="section-skills relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="section-skills-lines pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative flex w-full flex-col gap-10 md:gap-12">
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title={skillsIntro.headline}
          description={skillsIntro.description}
          titleId="skills-heading"
        />

        {/* Stats pills */}
        <m.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={skillsSummaryReveal}
        >
          <span className="rounded-full border border-default bg-bg-elevated/80 px-5 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="font-semibold text-foreground">{skillsSummary.categoryCount}</span>{" "}
            domains
          </span>
          <span className="rounded-full border border-default bg-bg-elevated/80 px-5 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="font-semibold text-foreground">{skillsSummary.technologyCount}</span>{" "}
            technologies
          </span>
        </m.div>

        {/* Bento grid */}
        <m.div
          className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          variants={skillsGridContainer}
        >
          {skillCategories.map((category) => {
            const config = bentoConfig[category.id] ?? { colSpan: "", size: "medium" as const };
            return (
              <m.div
                key={category.id}
                variants={skillsCategoryReveal}
                className={config.colSpan}
              >
                <SkillCategoryCard category={category} size={config.size} />
              </m.div>
            );
          })}
        </m.div>
      </div>
    </SectionContainer>
  );
}
