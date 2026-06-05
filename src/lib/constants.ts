import type { BreakpointConfig } from "@/types";

/** Mobile-first breakpoint tokens (px) — supports 320 → 1920 viewports */
export const BREAKPOINTS: BreakpointConfig = {
  xs: 320,
  sm: 375,
  mobile: 390,
  md: 768,
  lg: 1024,
  xl: 1440,
  "2xl": 1920,
} as const;

export const CONTAINER_WIDTH = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px",
  full: "1920px",
} as const;

export const SECTION_SPACING = {
  y: {
    mobile: "py-16",
    tablet: "md:py-20",
    desktop: "lg:py-24 xl:py-28",
  },
  x: {
    mobile: "px-4 xs:px-5 sm:px-6",
    tablet: "md:px-8",
    desktop: "lg:px-12 xl:px-16 2xl:px-20",
  },
} as const;

export const LENIS_CONFIG = {
  duration: 1.2,
  lerp: 0.1,
  smoothWheel: true,
  touchMultiplier: 2,
} as const;

export const MOTION_CONFIG = {
  defaultDuration: 0.6,
  defaultEase: [0.22, 1, 0.36, 1] as const,
  staggerDelay: 0.08,
} as const;
