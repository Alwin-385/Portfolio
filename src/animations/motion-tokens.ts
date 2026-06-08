/**
 * Global motion tokens — single source of truth for the portfolio motion language.
 * Feel: 70% Linear · 20% Apple · 10% Raycast
 */

export const MOTION_EASE = {
  /** Primary ease — smooth deceleration */
  out: [0.22, 1, 0.36, 1] as const,
  /** Subtle in-out for layout shifts */
  inOut: [0.4, 0, 0.2, 1] as const,
  /** Cinematic — Apple-style dramatic deceleration for luxury reveals */
  cinema: [0.16, 1, 0.3, 1] as const,
} as const;

export const MOTION_DURATION = {
  fast: 0.35,
  base: 0.55,
  slow: 0.7,
  page: 0.5,
} as const;

export const MOTION_DISTANCE = {
  xs: 8,
  sm: 12,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export const MOTION_STAGGER = {
  tight: 0.04,
  base: 0.06,
  relaxed: 0.08,
  section: 0.09,
} as const;

export const MOTION_SPRING = {
  soft: { type: "spring" as const, stiffness: 260, damping: 28 },
  snappy: { type: "spring" as const, stiffness: 320, damping: 26 },
  badge: { type: "spring" as const, stiffness: 420, damping: 22 },
  /** Luxury — dramatic, slightly settling feel for cinematic reveals */
  cinema: { type: "spring" as const, stiffness: 180, damping: 22, restDelta: 0.001 },
} as const;

export const MOTION_VIEWPORT = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
} as const;

/** Section headings — slightly higher visibility threshold */
export const MOTION_VIEWPORT_HEADING = {
  once: true,
  amount: 0.4,
  margin: "0px 0px -60px 0px",
} as const;

export const MOTION_STAGGER_DEFAULTS = {
  staggerChildren: MOTION_STAGGER.relaxed,
  delayChildren: MOTION_STAGGER.base,
} as const;
