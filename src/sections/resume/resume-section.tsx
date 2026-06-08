"use client";

import { m } from "motion/react";

import { resumeGridContainer, resumePanelReveal } from "@/animations/resume-variants";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  resumeFile,
  resumeIntro,
  resumeSummary,
} from "@/data/resume";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

import { ResumeCertifications } from "./resume-certifications";
import { ResumeHighlights } from "./resume-highlights";
import { ResumePreviewCard } from "./resume-preview-card";

export function ResumeSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionContainer
      id="resume"
      label="Resume"
      description="Resume, education, highlights, and verified credentials for Alwin Baby"
      className="section-resume relative overflow-hidden"
    >
      <div className="section-resume-glow pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[var(--gradient-glow)] opacity-35"
        aria-hidden
      />

      <div className="relative flex w-full flex-col gap-10 md:gap-12">
        <SectionHeading
          index="07"
          eyebrow="Resume"
          title={resumeIntro.headline}
          description={resumeIntro.description}
          titleId="resume-heading"
        />

        <m.div
          className="mx-auto flex flex-wrap items-center justify-center gap-3"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="rounded-full border border-default bg-bg-elevated/80 px-5 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            {resumeSummary.liveProducts}
          </span>
          <span className="rounded-full border border-accent-blue/30 bg-accent-blue-muted px-5 py-2 text-sm font-medium text-accent-blue">
            {resumeSummary.internships}
          </span>
          <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-5 py-2 text-sm font-medium text-accent-purple">
            {resumeSummary.availability}
          </span>
        </m.div>

        <m.div
          className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={resumeGridContainer}
        >
          <div className="flex min-w-0 flex-col gap-6">
            <m.div variants={resumePanelReveal}>
              <ResumePreviewCard
                fileUrl={resumeFile.url}
                previewImage={resumeFile.previewImage}
              />
            </m.div>
            <ResumeCertifications />
          </div>

          <m.div variants={resumePanelReveal} className="min-w-0">
            <ResumeHighlights
              fileUrl={resumeFile.url}
              filename={resumeFile.filename}
            />
          </m.div>
        </m.div>
      </div>
    </SectionContainer>
  );
}
