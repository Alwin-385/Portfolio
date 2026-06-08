"use client";

import { m, useScroll, useSpring } from "motion/react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ScrollProgressBar() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) return null;

  return (
    <m.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[200] h-[2px] origin-[0%] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue"
      style={{ scaleX }}
    />
  );
}
