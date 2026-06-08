import type { Variants } from "motion/react";

import { staggerDefaults } from "@/animations/config";
import {
  createFadeUp,
  createScaleIn,
  motionFadeIn,
  motionFadeUp,
  motionFadeUpSm,
} from "@/animations/motion-variants";
import type { AnimationPreset, MotionVariantMap } from "@/types";

export const fadeIn: Variants = motionFadeIn;
export const fadeInUp: Variants = motionFadeUp;
export const fadeInDown: Variants = createFadeUp(-20);
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
export const scaleIn: Variants = createScaleIn();
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: staggerDefaults },
};

export const animationVariants: MotionVariantMap = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
};

export function getAnimationVariant(preset: AnimationPreset): Variants {
  return animationVariants[preset];
}

/** @deprecated Use motionFadeUpSm from motion-variants */
export { motionFadeUpSm as fadeInUpSmall };
