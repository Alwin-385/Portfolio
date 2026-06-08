"use client";

import { Download, ExternalLink, GraduationCap } from "lucide-react";
import { m } from "motion/react";

import {
  resumeCtaReveal,
  resumeHighlightItem,
  resumeHighlightStagger,
  resumePanelReveal,
} from "@/animations/resume-variants";
import { buttonVariants } from "@/components/ui/button";
import { DescriptionText, MetadataText } from "@/components/ui/typography";
import {
  resumeAchievements,
  resumeEducation,
} from "@/data/resume";
import { cn } from "@/lib/utils";

type ResumeHighlightsProps = {
  fileUrl: string;
  filename: string;
};

export function ResumeHighlights({ fileUrl, filename }: ResumeHighlightsProps) {
  return (
    <div className="flex min-w-0 flex-col gap-6">
      {/* CTAs */}
      <m.div
        className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={resumeHighlightStagger}
      >
        <m.a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={resumeCtaReveal}
          className={cn(
            buttonVariants({ variant: "accent", size: "lg" }),
            "group w-full justify-center sm:w-auto",
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ExternalLink className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          View Resume
        </m.a>
        <m.a
          href={fileUrl}
          download={filename}
          variants={resumeCtaReveal}
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "group w-full justify-center sm:w-auto",
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          Download Resume
        </m.a>
      </m.div>

      {/* Education */}
      <m.article
        variants={resumePanelReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={cn(
          "rounded-[var(--radius-card-token)] border border-default bg-bg-elevated/80 p-5 backdrop-blur-sm",
          "transition-all duration-300 hover:border-border-accent hover:shadow-elevation-sm",
        )}
      >
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-[var(--radius-button-token)] border border-default bg-bg-secondary text-accent-blue">
            <GraduationCap className="size-4" aria-hidden />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Education
          </p>
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {resumeEducation.degree}
        </h3>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
          {resumeEducation.institution ? (
            <MetadataText>{resumeEducation.institution}</MetadataText>
          ) : null}
          <MetadataText className="font-mono tabular-nums text-accent-blue">
            {resumeEducation.period}
          </MetadataText>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{resumeEducation.status}</p>
      </m.article>

      {/* Highlights */}
      <m.div
        className="space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={resumeHighlightStagger}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Highlights
        </p>
        <ul className="space-y-2">
          {resumeAchievements.map((item) => (
            <m.li
              key={item.id}
              variants={resumeHighlightItem}
              className={cn(
                "group flex gap-3 rounded-[var(--radius-card-token)] border border-default",
                "bg-bg-secondary/60 p-4 transition-all duration-300",
                "hover:border-border-accent hover:bg-bg-elevated hover:shadow-elevation-xs",
              )}
            >
              <div
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-button-token)]",
                  "border border-default bg-bg-elevated text-accent-blue",
                  "transition-transform duration-300 group-hover:scale-110 group-hover:shadow-glow-accent",
                )}
              >
                <item.icon className="size-4" aria-hidden />
              </div>
              <div className="min-w-0 space-y-0.5">
                <p className="font-heading text-sm font-semibold text-foreground">
                  {item.label}
                </p>
                <DescriptionText className="text-left text-pretty text-xs">
                  {item.description}
                </DescriptionText>
              </div>
            </m.li>
          ))}
        </ul>
      </m.div>
    </div>
  );
}
