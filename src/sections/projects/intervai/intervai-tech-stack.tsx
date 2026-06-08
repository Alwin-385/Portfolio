"use client";

import { m } from "motion/react";

import {
  intervaiBadgePop,
  intervaiStaggerContainer,
} from "@/animations/intervai-variants";
import { Badge } from "@/components/ui/badge";
import { CardTitleText, LabelText } from "@/components/ui/typography";
import { intervaiTechStack } from "@/data/intervai";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function IntervaiTechStack() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2.5">
          <span
            className="h-px w-6 bg-gradient-to-r from-accent-blue to-accent-purple"
            aria-hidden
          />
          <LabelText>Technology</LabelText>
        </div>
        <CardTitleText as="h3" className="text-section-title">
          Production-grade stack
        </CardTitleText>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {intervaiTechStack.map((category) => (
          <m.div
            key={category.id}
            className="space-y-4 rounded-[var(--radius-card-token)] border border-default bg-bg-secondary p-5"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={intervaiStaggerContainer}
          >
            <p className="text-label text-muted-foreground">{category.label}</p>
            <m.div className="flex flex-wrap gap-2" variants={intervaiStaggerContainer}>
              {category.items.map((item) => (
                <m.div key={item} variants={intervaiBadgePop}>
                  <Badge
                    variant="tech"
                    className="transition-transform duration-200 hover:scale-105"
                  >
                    {item}
                  </Badge>
                </m.div>
              ))}
            </m.div>
          </m.div>
        ))}
      </div>
    </div>
  );
}
