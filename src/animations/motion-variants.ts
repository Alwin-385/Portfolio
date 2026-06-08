import type { Transition, Variants } from "motion/react";

import {
  MOTION_DISTANCE,
  MOTION_DURATION,
  MOTION_EASE,
  MOTION_SPRING,
  MOTION_STAGGER,
  MOTION_STAGGER_DEFAULTS,
} from "@/animations/motion-tokens";

/* ── Blur-reveal factory ── */

/**
 * Cinematic blur + fade-up reveal.
 * Adds a `filter: blur()` to the hidden state for a premium "unfocus-to-sharp" entrance.
 */
export function createBlurReveal(
  distance: number = MOTION_DISTANCE.lg,
  blurPx = 10,
  transition: Transition = { duration: MOTION_DURATION.slow, ease: MOTION_EASE.cinema },
): Variants {
  return {
    hidden: { opacity: 0, y: distance, filter: `blur(${blurPx}px)` },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition },
  };
}

export const motionBlurReveal = createBlurReveal();
export const motionBlurRevealSm = createBlurReveal(
  MOTION_DISTANCE.md,
  6,
  { duration: MOTION_DURATION.base, ease: MOTION_EASE.cinema },
);

/* ── Factories ── */

export function createEaseTransition(duration: number = MOTION_DURATION.base): Transition {
  return { duration, ease: MOTION_EASE.out };
}

export function createStaggerContainer(
  staggerChildren: number = MOTION_STAGGER_DEFAULTS.staggerChildren,
  delayChildren: number = MOTION_STAGGER_DEFAULTS.delayChildren,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

export function createFadeUp(
  distance: number = MOTION_DISTANCE.lg,
  transition: Transition = createEaseTransition(),
): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0, transition },
  };
}

export function createFadeIn(transition: Transition = createEaseTransition()): Variants {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition },
  };
}

export function createScaleIn(
  scale = 0.97,
  transition: Transition = createEaseTransition(),
): Variants {
  return {
    hidden: { opacity: 0, scale },
    visible: { opacity: 1, scale: 1, transition },
  };
}

export function createSlideX(direction: "left" | "right", distance = MOTION_DISTANCE.lg): Variants {
  const offset = direction === "left" ? -distance : distance;
  return {
    hidden: { opacity: 0, x: offset },
    visible: {
      opacity: 1,
      x: 0,
      transition: createEaseTransition(MOTION_DURATION.slow),
    },
  };
}

/* ── Page load ── */

export const motionPageFade: Variants = createFadeIn(
  createEaseTransition(MOTION_DURATION.page),
);

export const motionNavReveal: Transition = {
  duration: MOTION_DURATION.fast,
  ease: MOTION_EASE.out,
};

/* ── Hero entrance ── */

export const motionHeroStaggerContainer = createStaggerContainer(
  MOTION_STAGGER.section,
  0.12,
);

export const motionHeroStaggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: MOTION_DISTANCE.lg,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: MOTION_SPRING.soft,
  },
};

export const motionHeroScrollHint: Variants = {
  hidden: { opacity: 0, y: MOTION_DISTANCE.sm },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...MOTION_SPRING.soft, delay: 0.5 },
  },
};

/* ── Scroll reveals ── */

export const motionFadeUp = createFadeUp(MOTION_DISTANCE.lg);
export const motionFadeUpSm = createFadeUp(MOTION_DISTANCE.md);
export const motionFadeUpLg = createFadeUp(MOTION_DISTANCE.xl);
export const motionFadeIn = createFadeIn();
export const motionScaleIn = createScaleIn(0.97);

/* ── Stagger ── */

export const motionStaggerContainer = createStaggerContainer();
export const motionStaggerContainerTight = createStaggerContainer(MOTION_STAGGER.tight, 0.1);
export const motionStaggerContainerRelaxed = createStaggerContainer(
  MOTION_STAGGER.relaxed,
  MOTION_STAGGER.base,
);
/** Wider stagger + delay for cinematic section intros */
export const motionStaggerContainerCinema = createStaggerContainer(0.12, 0.15);

export const motionStaggerItem: Variants = {
  hidden: { opacity: 0, y: MOTION_DISTANCE.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: MOTION_SPRING.soft,
  },
};

/* ── Cards & panels ── */

export const motionCardReveal: Variants = {
  hidden: { opacity: 0, y: MOTION_DISTANCE.lg, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: MOTION_SPRING.soft,
  },
};

export const motionPanelReveal: Variants = createFadeUp(MOTION_DISTANCE.xl, MOTION_SPRING.soft);

export const motionSpineReveal: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: createEaseTransition(MOTION_DURATION.slow),
  },
};

/* ── Badges & chips ── */

export const motionBadgeContainer = createStaggerContainer(MOTION_STAGGER.tight, 0.1);

export const motionBadgePop: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: MOTION_STAGGER.tight * 2 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: MOTION_SPRING.badge,
  },
};

/* ── Project layouts ── */

export const motionSlideLeft = createSlideX("left");
export const motionSlideRight = createSlideX("right");

export const motionVisualReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: MOTION_DISTANCE.sm },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: createEaseTransition(MOTION_DURATION.slow),
  },
};

export const motionProjectCardReveal: Variants = {
  hidden: { opacity: 0, y: MOTION_DISTANCE.xl },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...MOTION_SPRING.soft,
      staggerChildren: MOTION_STAGGER.relaxed,
      delayChildren: MOTION_STAGGER.base,
    },
  },
};

/* ── Gallery / carousel ── */

export const motionGallerySlide: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: createEaseTransition(MOTION_DURATION.fast),
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.98,
    transition: createEaseTransition(MOTION_DURATION.fast),
  }),
};

/* ── Section heading ── */

export const motionHeadingContainer = createStaggerContainer(
  MOTION_STAGGER.relaxed,
  MOTION_STAGGER.tight,
);

export const motionHeadingItem: Variants = createFadeUp(
  MOTION_DISTANCE.md,
  createEaseTransition(MOTION_DURATION.base),
);

/* ── Architecture / step nodes ── */

export const motionStepReveal: Variants = {
  hidden: { opacity: 0, y: MOTION_DISTANCE.sm, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: MOTION_SPRING.snappy,
  },
};

/* ── Line / content item (nested card content) ── */

export const motionContentLine: Variants = createFadeUp(
  MOTION_STAGGER.tight * 2,
  createEaseTransition(MOTION_DURATION.fast),
);

export const motionHighlightItem: Variants = {
  hidden: { opacity: 0, x: -MOTION_STAGGER.tight * 3 },
  visible: {
    opacity: 1,
    x: 0,
    transition: MOTION_SPRING.snappy,
  },
};

export const motionCtaReveal: Variants = {
  hidden: { opacity: 0, y: MOTION_DISTANCE.sm, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: MOTION_SPRING.badge,
  },
};
