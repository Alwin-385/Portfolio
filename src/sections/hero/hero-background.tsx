"use client";

import { m, type MotionValue, useMotionValue, useTransform } from "motion/react";
import { useMemo } from "react";

import { motionPageFade } from "@/animations/motion-variants";
import { usePageReveal } from "@/hooks/use-scroll-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type HeroBackgroundProps = {
  className?: string;
  parallaxX?: MotionValue<number>;
  parallaxY?: MotionValue<number>;
};

type Particle = {
  id: number;
  left: string;
  top: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  tx: number;
  ty: number;
};

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: `${10 + ((id * 17) % 80)}%`,
    top: `${8 + ((id * 23) % 75)}%`,
    size: 1 + (id % 3),
    opacity: 0.15 + (id % 4) * 0.08,
    duration: 6 + (id % 5) * 2,
    delay: (id % 6) * 0.8,
    tx: ((id % 7) - 3) * 4,
    ty: ((id % 5) - 2) * 6,
  }));
}

export function HeroBackground({
  className,
  parallaxX,
  parallaxY,
}: HeroBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const pageReveal = usePageReveal();
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const xSource = parallaxX ?? fallbackX;
  const ySource = parallaxY ?? fallbackY;

  const auroraX = useTransform(xSource, [-0.5, 0.5], [-24, 24]);
  const auroraY = useTransform(ySource, [-0.5, 0.5], [-16, 16]);
  const gridX = useTransform(xSource, [-0.5, 0.5], [-8, 8]);
  const gridY = useTransform(ySource, [-0.5, 0.5], [-6, 6]);

  const particles = useMemo(
    () => createParticles(prefersReducedMotion ? 0 : 18),
    [prefersReducedMotion],
  );

  const useParallax = !prefersReducedMotion && parallaxX && parallaxY;

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute inset-0 bg-bg-primary" />

      <m.div
        className={cn(
          "hero-gradient-shift absolute -inset-[20%] opacity-50",
          "bg-[radial-gradient(ellipse_at_30%_20%,var(--accent-blue-muted)_0%,transparent_50%),radial-gradient(ellipse_at_70%_60%,var(--accent-purple-muted)_0%,transparent_45%)]",
        )}
        variants={motionPageFade}
        {...pageReveal}
      />

      <m.div
        className="hero-aurora absolute -left-[10%] top-[5%] size-[55vw] max-w-[640px] rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)",
          x: useParallax ? auroraX : 0,
          y: useParallax ? auroraY : 0,
        }}
      />
      <m.div
        className="hero-aurora-secondary absolute -right-[5%] top-[20%] size-[45vw] max-w-[520px] rounded-full opacity-30 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)",
          x: useParallax ? auroraX : 0,
          y: useParallax ? auroraY : 0,
        }}
      />
      <m.div
        className="hero-aurora absolute bottom-[10%] left-[30%] size-[35vw] max-w-[400px] rounded-full opacity-20 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)",
          x: useParallax ? gridX : 0,
          y: useParallax ? gridY : 0,
        }}
      />

      <m.div
        className="hero-grid absolute inset-0 opacity-60"
        style={{
          x: useParallax ? gridX : 0,
          y: useParallax ? gridY : 0,
        }}
      />

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="hero-particle absolute rounded-full bg-foreground/80"
          style={
            {
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              "--opacity": particle.opacity,
              "--duration": `${particle.duration}s`,
              "--delay": `${particle.delay}s`,
              "--tx": `${particle.tx}px`,
              "--ty": `${particle.ty}px`,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </div>
  );
}
