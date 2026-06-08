import type { Transition } from "motion/react";

import { MOTION_SPRING } from "@/animations/motion-tokens";

/** Standard card hover — subtle lift, no bounce */
export const motionHoverLift = {
  y: -4,
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
} as const;

/** Interactive card — slightly more lift */
export const motionHoverLiftMd = {
  y: -6,
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
} as const;

/** Button / icon tap feedback */
export const motionTapScale = { scale: 0.97 } as const;

/** Primary button hover */
export const motionButtonHover = {
  scale: 1.02,
  transition: MOTION_SPRING.badge,
} as const;

/** Nav icon hover */
export const motionIconHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
} as const;

/** Spring transition for layout animations */
export const motionLayoutTransition: Transition = MOTION_SPRING.soft;
