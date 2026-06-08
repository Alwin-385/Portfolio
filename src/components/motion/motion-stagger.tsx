"use client";

import { m, type HTMLMotionProps } from "motion/react";

import {
  motionStaggerContainer,
  motionStaggerContainerTight,
  motionStaggerItem,
} from "@/animations/motion-variants";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type MotionStaggerProps = HTMLMotionProps<"div"> & {
  tight?: boolean;
};

export function MotionStagger({
  tight = false,
  className,
  children,
  ...props
}: MotionStaggerProps) {
  const reveal = useScrollReveal();

  return (
    <m.div
      className={cn(className)}
      variants={tight ? motionStaggerContainerTight : motionStaggerContainer}
      {...reveal}
      {...props}
    >
      {children}
    </m.div>
  );
}

type MotionItemProps = HTMLMotionProps<"div">;

export function MotionItem({ className, children, ...props }: MotionItemProps) {
  return (
    <m.div className={cn(className)} variants={motionStaggerItem} {...props}>
      {children}
    </m.div>
  );
}
