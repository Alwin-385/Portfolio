import { MOTION_CONFIG } from "@/lib/constants";

export const motionDefaults = {
  duration: MOTION_CONFIG.defaultDuration,
  ease: MOTION_CONFIG.defaultEase,
} as const;

export const viewportDefaults = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
} as const;

export const staggerDefaults = {
  staggerChildren: MOTION_CONFIG.staggerDelay,
  delayChildren: 0.1,
} as const;
