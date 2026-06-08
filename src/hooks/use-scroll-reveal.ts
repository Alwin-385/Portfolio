"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  MOTION_VIEWPORT,
  MOTION_VIEWPORT_HEADING,
} from "@/animations/motion-tokens";

type ScrollRevealOptions = {
  once?: boolean;
  amount?: number;
  margin?: string;
  heading?: boolean;
};

/**
 * Standard scroll-reveal props — respects reduced motion.
 */
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const prefersReducedMotion = useReducedMotion();
  const defaults = options.heading ? MOTION_VIEWPORT_HEADING : MOTION_VIEWPORT;

  const viewport = {
    once: options.once ?? defaults.once,
    amount: options.amount ?? defaults.amount,
    margin: options.margin ?? defaults.margin,
  };

  if (prefersReducedMotion) {
    return {
      initial: false as const,
      whileInView: undefined,
      viewport,
    };
  }

  return {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport,
  };
}

/**
 * Page-load animation props (hero, nav) — runs on mount, not scroll.
 */
export function usePageReveal() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return { initial: false as const, animate: undefined };
  }

  return { initial: "hidden" as const, animate: "visible" as const };
}
