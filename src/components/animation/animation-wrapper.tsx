"use client";

import { m } from "motion/react";

import { getAnimationVariant } from "@/animations/variants";
import { defaultTransition } from "@/animations/transitions";
import { viewportDefaults } from "@/animations/config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { AnimationWrapperProps } from "@/types";

export function AnimationWrapper({
  preset = "fadeInUp",
  delay = 0,
  duration,
  once = viewportDefaults.once,
  amount = viewportDefaults.amount,
  className,
  children,
}: AnimationWrapperProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = getAnimationVariant(preset);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{
        ...defaultTransition,
        delay,
        ...(duration !== undefined ? { duration } : {}),
      }}
    >
      {children}
    </m.div>
  );
}
