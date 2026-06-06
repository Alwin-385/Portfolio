"use client";

import { m } from "motion/react";

import { aboutFadeUp, aboutStaggerContainer, aboutStaggerItem } from "@/animations/about-variants";
import { Badge } from "@/components/ui/badge";
import { CardTitleText, DescriptionText, LabelText } from "@/components/ui/typography";
import { Tag } from "@/components/ui/tag";
import { aboutInterests, aboutInterestsSummary, aboutProjects } from "@/data/about";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function AboutInterests() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      className="w-full space-y-6 rounded-[var(--radius-card-token)] border border-default bg-bg-secondary/60 p-6 md:p-8"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={aboutFadeUp}
    >
      <div className="space-y-2">
        <LabelText>Current Interests</LabelText>
        <CardTitleText as="h3" className="text-section-title">
          What I&apos;m exploring right now
        </CardTitleText>
        <DescriptionText className="max-w-3xl text-pretty">
          {aboutInterestsSummary}
        </DescriptionText>
      </div>

      <div className="space-y-4">
        <p className="text-label">Active projects</p>
        <m.div
          className="flex flex-wrap gap-2"
          variants={aboutStaggerContainer}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {aboutProjects.map((project) => (
            <m.div key={project} variants={aboutStaggerItem}>
              <Badge variant="tech">{project}</Badge>
            </m.div>
          ))}
        </m.div>
      </div>

      <div className="space-y-3">
        <p className="text-label">Technologies & topics</p>
        <div className="flex flex-wrap gap-2">
          {aboutInterests.map(({ id, label, accent }) => (
            <Tag key={id} accent={accent ?? "none"}>
              {label}
            </Tag>
          ))}
        </div>
      </div>
    </m.div>
  );
}
