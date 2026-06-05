"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

import { LENIS_CONFIG } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type LenisProviderProps = {
  children: React.ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: LENIS_CONFIG.duration,
      lerp: LENIS_CONFIG.lerp,
      smoothWheel: LENIS_CONFIG.smoothWheel,
      touchMultiplier: LENIS_CONFIG.touchMultiplier,
    });

    lenisRef.current = lenis;

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
