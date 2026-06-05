import type { Transition } from "motion/react";

import { motionDefaults } from "@/animations/config";

export const defaultTransition: Transition = {
  duration: motionDefaults.duration,
  ease: motionDefaults.ease,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};

export const fastTransition: Transition = {
  duration: 0.35,
  ease: motionDefaults.ease,
};

export const slowTransition: Transition = {
  duration: 0.9,
  ease: motionDefaults.ease,
};

export function createTransition(
  overrides: Partial<Transition> = {},
): Transition {
  return {
    ...defaultTransition,
    ...overrides,
  };
}
