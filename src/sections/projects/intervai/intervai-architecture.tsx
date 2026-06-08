"use client";

import { ChevronDown } from "lucide-react";
import { m } from "motion/react";

import {
  intervaiArchStep,
  intervaiStaggerContainer,
} from "@/animations/intervai-variants";
import { CardTitleText, DescriptionText, LabelText } from "@/components/ui/typography";
import { intervaiArchitecture } from "@/data/intervai";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function IntervaiArchitecture() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full space-y-8">
      <div className="mx-auto max-w-2xl space-y-2 text-center">
        <LabelText>Architecture</LabelText>
        <CardTitleText as="h3" className="text-section-title">
          End-to-end AI pipeline
        </CardTitleText>
        <DescriptionText>
          From sign-up and resume upload through mock interviews, evaluation, weak-area
          detection, analytics, and personalized roadmaps — orchestrated with LangGraph.
        </DescriptionText>
      </div>

      <m.ol
        className="mx-auto flex w-full max-w-xl list-none flex-col items-stretch gap-0 sm:max-w-2xl"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={intervaiStaggerContainer}
      >
        {intervaiArchitecture.map((step, index) => (
          <m.li key={step.id} variants={intervaiArchStep} className="flex w-full min-w-0 flex-col">
            <div
              className={cn(
                "relative w-full min-w-0 rounded-[var(--radius-card-token)] border border-default bg-bg-elevated px-5 py-4 text-center sm:px-6 sm:py-5",
                "transition-all duration-300 hover:border-border-accent hover:shadow-elevation-sm hover:shadow-glow-accent",
              )}
            >
              <p className="font-heading text-base font-semibold text-foreground">
                {step.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-pretty text-muted-foreground">
                {step.description}
              </p>
            </div>
            {index < intervaiArchitecture.length - 1 ? (
              <div className="flex flex-col items-center py-2" aria-hidden>
                <div className="intervai-arch-connector h-6 w-px" />
                <ChevronDown className="size-4 text-accent-blue/60" />
                <div className="intervai-arch-connector h-6 w-px" />
              </div>
            ) : null}
          </m.li>
        ))}
      </m.ol>
    </div>
  );
}
