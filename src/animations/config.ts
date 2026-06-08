import { MOTION_DURATION, MOTION_EASE, MOTION_STAGGER, MOTION_VIEWPORT } from "@/animations/motion-tokens";

export const motionDefaults = {
  duration: MOTION_DURATION.base,
  ease: MOTION_EASE.out,
} as const;

export const viewportDefaults = {
  once: MOTION_VIEWPORT.once,
  amount: MOTION_VIEWPORT.amount,
  margin: MOTION_VIEWPORT.margin,
} as const;

export const staggerDefaults = {
  staggerChildren: MOTION_STAGGER.relaxed,
  delayChildren: MOTION_STAGGER.base,
} as const;
