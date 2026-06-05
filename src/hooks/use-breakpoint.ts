"use client";

import { useMemo } from "react";

import { BREAKPOINTS } from "@/lib/constants";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { BreakpointKey } from "@/types";

export function useBreakpoint(): BreakpointKey {
  const is2xl = useMediaQuery(`(min-width: ${BREAKPOINTS["2xl"]}px)`);
  const isXl = useMediaQuery(`(min-width: ${BREAKPOINTS.xl}px)`);
  const isLg = useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
  const isMd = useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`);
  const isMobile = useMediaQuery(`(min-width: ${BREAKPOINTS.mobile}px)`);
  const isSm = useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`);

  return useMemo(() => {
    if (is2xl) return "2xl";
    if (isXl) return "xl";
    if (isLg) return "lg";
    if (isMd) return "md";
    if (isMobile) return "mobile";
    if (isSm) return "sm";
    return "xs";
  }, [is2xl, isXl, isLg, isMd, isMobile, isSm]);
}

export function useMinBreakpoint(breakpoint: BreakpointKey): boolean {
  return useMediaQuery(`(min-width: ${BREAKPOINTS[breakpoint]}px)`);
}
