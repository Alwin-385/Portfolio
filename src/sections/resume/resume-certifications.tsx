"use client";

import { Award } from "lucide-react";
import { m } from "motion/react";

import {
  resumeHighlightItem,
  resumeHighlightStagger,
  resumePanelReveal,
} from "@/animations/resume-variants";
import { DescriptionText } from "@/components/ui/typography";
import { resumeCertifications, resumeCredentialsSection } from "@/data/resume";
import { cn } from "@/lib/utils";

import { ExperienceCertificateViewer } from "@/sections/experience/experience-certificate-viewer";

export function ResumeCertifications() {
  if (resumeCertifications.length === 0) return null;

  return (
    <m.div
      className={cn(
        "w-full rounded-[var(--radius-card-token)] border border-default bg-bg-elevated/80 p-5 shadow-elevation-sm backdrop-blur-sm sm:p-6",
        "transition-all duration-300 hover:border-border-accent hover:shadow-elevation-md",
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={resumePanelReveal}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-[var(--radius-button-token)] border border-default bg-bg-secondary text-accent-purple">
            <Award className="size-4" aria-hidden />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {resumeCredentialsSection.title}
          </p>
        </div>

        <m.ul className="space-y-3" variants={resumeHighlightStagger}>
          {resumeCertifications.map((cert) => (
            <m.li
              key={cert.id}
              variants={resumeHighlightItem}
              className={cn(
                "rounded-[var(--radius-card-token)] border border-default bg-bg-secondary/50 p-4 sm:p-5",
                "transition-all duration-300 hover:border-border-accent hover:bg-bg-elevated hover:shadow-elevation-xs",
              )}
            >
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-heading text-base font-semibold text-foreground">
                      {cert.name}
                    </p>
                    {cert.level ? (
                      <span className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent-purple">
                        {cert.level}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                    {cert.issuer ? <span>{cert.issuer}</span> : null}
                    {cert.period ? (
                      <>
                        {cert.issuer ? <span aria-hidden>·</span> : null}
                        <span className="font-mono tabular-nums text-accent-blue">
                          {cert.period}
                        </span>
                      </>
                    ) : null}
                    {cert.score ? (
                      <>
                        <span aria-hidden>·</span>
                        <span className="font-medium text-foreground">{cert.score}</span>
                      </>
                    ) : null}
                  </div>
                  {cert.description ? (
                    <DescriptionText className="text-left text-pretty text-sm leading-relaxed">
                      {cert.description}
                    </DescriptionText>
                  ) : null}
                </div>
                {cert.certificate ? (
                  <div className="[&_button]:w-full sm:[&_button]:w-auto">
                    <ExperienceCertificateViewer certificate={cert.certificate} />
                  </div>
                ) : null}
              </div>
            </m.li>
          ))}
        </m.ul>
      </div>
    </m.div>
  );
}
