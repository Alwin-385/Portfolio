"use client";

import { m, type HTMLMotionProps } from "motion/react";

import { motionFadeUp } from "@/animations/motion-variants";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type MotionRevealProps = HTMLMotionProps<"div"> & {
  heading?: boolean;
};

export function MotionReveal({
  heading = false,
  className,
  children,
  ...props
}: MotionRevealProps) {
  const reveal = useScrollReveal({ heading });

  return (
    <m.div
      className={cn(className)}
      variants={motionFadeUp}
      {...reveal}
      {...props}
    >
      {children}
    </m.div>
  );
}
