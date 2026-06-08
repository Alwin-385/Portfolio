"use client";

import { m, type HTMLMotionProps } from "motion/react";

import { motionHoverLift, motionTapScale } from "@/animations/motion-interactions";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type MotionCardProps = HTMLMotionProps<"article"> & {
  lift?: "sm" | "md" | "none";
};

export function MotionCard({
  lift = "sm",
  className,
  children,
  ...props
}: MotionCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverProps =
    !prefersReducedMotion && lift !== "none"
      ? { whileHover: lift === "md" ? { y: -6 } : motionHoverLift, whileTap: motionTapScale }
      : {};

  return (
    <m.article
      className={cn("motion-card", lift !== "none" && "motion-card-lift", className)}
      {...hoverProps}
      {...props}
    >
      {children}
    </m.article>
  );
}
