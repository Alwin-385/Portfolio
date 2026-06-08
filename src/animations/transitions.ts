import type { Transition } from "motion/react";

import { motionDefaults, staggerDefaults } from "@/animations/config";
import {
  MOTION_DURATION,
  MOTION_EASE,
  MOTION_SPRING,
} from "@/animations/motion-tokens";

export const defaultTransition: Transition = {
  duration: motionDefaults.duration,
  ease: motionDefaults.ease,
};

export const springTransition: Transition = MOTION_SPRING.soft;

export const fastTransition: Transition = {
  duration: MOTION_DURATION.fast,
  ease: MOTION_EASE.out,
};

export const slowTransition: Transition = {
  duration: MOTION_DURATION.slow,
  ease: MOTION_EASE.out,
};

export function createTransition(
  overrides: Partial<Transition> = {},
): Transition {
  return {
    ...defaultTransition,
    ...overrides,
  };
}

export { staggerDefaults };
