"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { m, type Variants } from "motion/react";

import {
  projectBadgePop,
  projectBadgeStagger,
  projectCardReveal,
  projectContentReveal,
  projectContentRevealRight,
  projectVisualReveal,
} from "@/animations/project-variants";
import { LiveDemoColdStartNote } from "@/components/ui/live-demo-cold-start-note";
import { SocialIcon } from "@/components/navigation/social-icon";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CardTitleText, DescriptionText, LabelText } from "@/components/ui/typography";
import type { ProjectCaseStudy } from "@/data/projects";
import { PROJECT_ROUTES } from "@/data/projects";
import { projectHasRenderColdStart } from "@/data/project-deployment";
import { getProjectCover } from "@/data/project-images";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

import { ProjectScreenshot } from "./project-screenshot";

type ProjectShowcaseCardProps = {
  project: ProjectCaseStudy;
  index: number;
  reversed?: boolean;
  variants?: Variants;
};

const statusMap = {
  live: "active" as const,
  beta: "beta" as const,
  "coming-soon": "coming-soon" as const,
};

export function ProjectShowcaseCard({
  project,
  index,
  reversed = false,
  variants,
}: ProjectShowcaseCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const caseStudyHref = PROJECT_ROUTES[project.slug];
  const isReversed = reversed || index % 2 === 1;

  const contentVariants = isReversed ? projectContentRevealRight : projectContentReveal;

  return (
    <m.article
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-card-token)]",
        "border border-default bg-bg-elevated/80 shadow-elevation-sm",
        "transition-all duration-500",
        "hover:border-border-accent hover:shadow-elevation-lg hover:shadow-glow-accent",
      )}
      variants={variants}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[var(--gradient-glow)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden
      />

      <div
        className={cn(
          "relative grid min-w-0 items-stretch gap-0",
          "lg:grid-cols-2",
          isReversed && "lg:[direction:rtl]",
        )}
      >
        {/* Visual panel */}
        <m.div
          className={cn(
            "relative min-w-0 overflow-hidden border-b border-default lg:border-b-0 lg:border-r",
            isReversed && "lg:border-r-0 lg:border-l lg:[direction:ltr]",
          )}
          variants={projectVisualReveal}
        >
          <div className="p-4 sm:p-5 lg:p-6">
            <ProjectScreenshot
              src={getProjectCover(project.slug)}
              alt={`${project.name} screenshot`}
              projectName={project.name}
              theme={project.theme}
              priority={index === 0}
            />
          </div>
        </m.div>

        {/* Content panel */}
        <m.div
          className={cn(
            "flex min-w-0 flex-col justify-center gap-5 p-5 sm:p-6 lg:p-8 lg:[direction:ltr]",
          )}
          variants={contentVariants}
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-metadata text-accent-blue tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-5 bg-gradient-to-r from-accent-blue to-accent-purple" aria-hidden />
            <LabelText>{project.tagline}</LabelText>
            <Badge variant="status" status={statusMap[project.status]}>
              {project.status === "live" ? "Live" : "Beta"}
            </Badge>
            {project.scopeLabel ? (
              <Badge variant="tech" className="border-accent-purple/30 text-accent-purple">
                {project.scopeLabel}
              </Badge>
            ) : null}
          </div>

          <div className="space-y-3">
            <CardTitleText as="h3" className="text-[clamp(1.35rem,2.5vw,1.75rem)]">
              {project.name}
            </CardTitleText>
            <DescriptionText className="text-left text-pretty text-base leading-relaxed">
              {project.description}
            </DescriptionText>
          </div>

          <m.div className="flex flex-wrap gap-1.5" variants={projectBadgeStagger}>
            {project.techStack.map((tech) => (
              <m.div key={tech} variants={projectBadgePop}>
                <Badge
                  variant="tech"
                  className="transition-transform duration-200 hover:scale-105 hover:border-border-accent"
                >
                  {tech}
                </Badge>
              </m.div>
            ))}
          </m.div>

          <div className="space-y-3 pt-1">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "accent", size: "default" }),
                  "mobile-full-width transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
                )}
              >
                Live Demo
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "default" }),
                  "mobile-full-width transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
                )}
              >
                <SocialIcon name="github" />
                GitHub
              </a>
            ) : null}
            <Link
              href={caseStudyHref}
              className={cn(
                buttonVariants({ variant: "ghost", size: "default" }),
                "mobile-full-width group/link text-muted-foreground hover:text-accent-blue",
              )}
            >
              Case Study
              <ArrowRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
            </Link>
            </div>
            {project.liveUrl && projectHasRenderColdStart(project.slug) ? (
              <LiveDemoColdStartNote />
            ) : null}
          </div>
        </m.div>
      </div>
    </m.article>
  );
}
