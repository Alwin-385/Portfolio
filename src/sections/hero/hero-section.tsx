"use client";

import { useCallback } from "react";
import { useMotionValue, useSpring } from "motion/react";

import { HeroBackground } from "@/sections/hero/hero-background";
import { HeroContent } from "@/sections/hero/hero-content";
import { TechMarquee } from "@/sections/hero/tech-marquee";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 30 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (prefersReducedMotion) return;

      const rect = event.currentTarget.getBoundingClientRect();
      mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY, prefersReducedMotion],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-dvh flex-col"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex flex-1 flex-col justify-center pb-8 pt-[calc(4.5rem+env(safe-area-inset-top,0px))]">
        <HeroBackground parallaxX={springX} parallaxY={springY} />
        <HeroContent className="py-12 md:py-16" />
      </div>
      <TechMarquee />
    </section>
  );
}
