import type { Variants } from "motion/react";

import { staggerDefaults } from "@/animations/config";
import type { AnimationPreset, MotionVariantMap } from "@/types";

const hidden = { opacity: 0 };
const visible = { opacity: 1 };

export const fadeIn: Variants = {
  hidden: { ...hidden },
  visible: { ...visible },
};

export const fadeInUp: Variants = {
  hidden: { ...hidden, y: 24 },
  visible: { ...visible, y: 0 },
};

export const fadeInDown: Variants = {
  hidden: { ...hidden, y: -24 },
  visible: { ...visible, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { ...hidden, x: -24 },
  visible: { ...visible, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { ...hidden, x: 24 },
  visible: { ...visible, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { ...hidden, scale: 0.96 },
  visible: { ...visible, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: staggerDefaults,
  },
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
