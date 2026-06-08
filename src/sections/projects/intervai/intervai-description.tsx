"use client";

import { m } from "motion/react";

import { intervaiFadeUp } from "@/animations/intervai-variants";
import { DescriptionText, LabelText, SectionTitle } from "@/components/ui/typography";
import { intervaiMeta } from "@/data/intervai";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function IntervaiDescription() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      className="mx-auto max-w-3xl space-y-4 text-center"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={intervaiFadeUp}
    >
      <LabelText>The Product</LabelText>
      <SectionTitle as="h3" className="text-section-title">
        Measurable interview preparation
      </SectionTitle>
      <DescriptionText className="text-base leading-relaxed text-pretty">
        {intervaiMeta.longDescription}
      </DescriptionText>
    </m.div>
  );
}
