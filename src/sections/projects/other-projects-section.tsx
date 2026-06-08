"use client";

import { m } from "motion/react";

import { projectCardReveal, projectStaggerContainer } from "@/animations/project-variants";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { otherProjects } from "@/data/projects";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { ProjectShowcaseCard } from "./project-showcase-card";

export function OtherProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionContainer
      id="other-projects"
      label="Projects"
      description="Supporting projects — full-stack builds across civic tech, inventory, and education"
      className="relative bg-bg-secondary/20"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-accent to-transparent opacity-40"
        aria-hidden
      />

      <div className="relative flex w-full flex-col gap-10 md:gap-14">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Supporting evidence of full-stack craft"
          description="Real products solving real problems — civic reporting, inventory ops, and education UX. Each reinforces product thinking beyond the flagship."
          titleId="other-projects-heading"
        />

        <m.div
          className="flex flex-col gap-8 md:gap-10 lg:gap-12"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={projectStaggerContainer}
        >
          {otherProjects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.slug}
              project={project}
              index={index}
              reversed={index % 2 === 1}
              variants={projectCardReveal}
            />
          ))}
        </m.div>
      </div>
    </SectionContainer>
  );
}
