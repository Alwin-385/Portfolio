"use client";

import { m } from "motion/react";

import { getAnimationVariant } from "@/animations/variants";
import { defaultTransition } from "@/animations/transitions";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import type { AnimationWrapperProps } from "@/types";

export function AnimationWrapper({
  preset = "fadeInUp",
  delay = 0,
  duration,
  once,
  amount,
  className,
  children,
}: AnimationWrapperProps) {
  const reveal = useScrollReveal({
    once: once ?? true,
    amount: amount ?? 0.2,
  });
  const variants = getAnimationVariant(preset);

  if (reveal.initial === false) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={cn(className)}
      variants={variants}
      {...reveal}
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
