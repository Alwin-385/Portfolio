"use client";

import { Briefcase, CheckCircle2 } from "lucide-react";
import { m } from "motion/react";
import Link from "next/link";

import {
  experienceBadgePop,
  experienceCardContent,
  experienceCardLine,
  experienceTimelineItem,
} from "@/animations/experience-variants";
import { Badge } from "@/components/ui/badge";
import { DescriptionText, MetadataText } from "@/components/ui/typography";
import type { ExperienceEntry } from "@/data/experience";
import { cn } from "@/lib/utils";

import { ExperienceCertificateViewer } from "./experience-certificate-viewer";

type ExperienceTimelineItemProps = {
  entry: ExperienceEntry;
  isLast: boolean;
};

export function ExperienceTimelineItem({ entry, isLast }: ExperienceTimelineItemProps) {
  return (
    <m.li
      variants={experienceTimelineItem}
      className="relative grid list-none grid-cols-[2.5rem_minmax(0,1fr)] gap-x-5 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-x-8"
    >
      {/* Spine + node */}
      <div className="relative flex flex-col items-center">
        <span
          className={cn(
            "z-10 flex size-10 shrink-0 items-center justify-center rounded-full",
            "border-2 border-accent-blue bg-bg-primary",
            "shadow-[0_0_16px_var(--accent-blue-muted)]",
            "transition-transform duration-300 hover:scale-110",
          )}
          aria-hidden
        >
          <Briefcase className="size-4 text-accent-blue" />
        </span>
        {!isLast ? (
          <span
            className="mt-2 w-px flex-1 min-h-16 bg-gradient-to-b from-accent-blue/60 via-accent-purple/30 to-transparent"
            aria-hidden
          />
        ) : null}
      </div>

      {/* Card */}
      <ExperienceCard entry={entry} />
    </m.li>
  );
}

type ExperienceCardProps = {
  entry: ExperienceEntry;
};

function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-card-token)]",
        "border border-default bg-bg-elevated/80 p-5 shadow-elevation-sm backdrop-blur-sm md:p-6",
        "transition-all duration-400",
        "hover:border-border-accent hover:bg-bg-elevated hover:shadow-elevation-lg hover:shadow-glow-accent",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          "bg-[radial-gradient(ellipse_at_top_left,oklch(0.68_0.16_250/10%)_0%,transparent_55%)]",
        )}
        aria-hidden
      />

      <m.div
        className="relative space-y-5"
        variants={experienceCardContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <m.div variants={experienceCardLine} className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="status" status="active">
              {entry.type === "internship" ? "Internship" : entry.type}
            </Badge>
            <MetadataText className="font-mono tabular-nums text-accent-blue">
              {entry.period}
            </MetadataText>
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
            {entry.role}
          </h3>
          <p className="text-sm font-medium text-muted-foreground">{entry.organization}</p>
        </m.div>

        <m.div variants={experienceCardLine} className="space-y-3">
          <DescriptionText className="text-left text-pretty text-sm">
            {entry.summary}
          </DescriptionText>
          {entry.certificate ? (
            <ExperienceCertificateViewer certificate={entry.certificate} />
          ) : null}
        </m.div>

        {/* Responsibilities */}
        <m.div variants={experienceCardLine} className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Responsibilities
          </p>
          <ul className="grid list-none gap-2 sm:grid-cols-2">
            {entry.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2
                  className="mt-0.5 size-3.5 shrink-0 text-accent-blue"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </m.div>

        {/* Technologies */}
        <m.div variants={experienceCardLine} className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {entry.technologies.map((tech) => (
              <m.span key={tech} variants={experienceBadgePop}>
                <Badge
                  variant="tech"
                  className="transition-all duration-200 hover:scale-105 hover:border-accent-blue/40 hover:bg-accent-blue-muted hover:text-accent-blue"
                >
                  {tech}
                </Badge>
              </m.span>
            ))}
          </div>
        </m.div>

        {/* Projects */}
        {entry.projects.length > 0 ? (
          <m.div variants={experienceCardLine} className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Projects shipped
            </p>
            <div className="flex flex-wrap gap-2">
              {entry.projects.map((project) =>
                project.href ? (
                  <Link
                    key={project.name}
                    href={project.href}
                    className={cn(
                      "inline-flex items-center rounded-full border border-accent-blue/30",
                      "bg-accent-blue-muted px-3 py-1.5 text-sm font-medium text-accent-blue",
                      "transition-all duration-200 hover:scale-105 hover:border-accent-blue/50 hover:bg-accent-blue/20",
                    )}
                  >
                    {project.name} →
                  </Link>
                ) : (
                  <span
                    key={project.name}
                    className="inline-flex items-center rounded-full border border-default bg-bg-secondary px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {project.name}
                  </span>
                ),
              )}
            </div>
          </m.div>
        ) : null}
      </m.div>
    </article>
  );
}
