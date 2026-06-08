"use client";

import { useCallback, useRef } from "react";
import { m, useMotionValue, useSpring } from "motion/react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type MagneticButtonProps = {
  href: string;
  variant?: "accent" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

const MAGNETIC_STRENGTH = 0.35;

export function MagneticButton({
  href,
  variant = "accent",
  children,
  className,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (prefersReducedMotion || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const offsetX = event.clientX - (rect.left + rect.width / 2);
      const offsetY = event.clientY - (rect.top + rect.height / 2);

      x.set(offsetX * MAGNETIC_STRENGTH);
      y.set(offsetY * MAGNETIC_STRENGTH);
    },
    [prefersReducedMotion, x, y],
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <m.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(buttonVariants({ variant, size: "lg" }), "touch-manipulation", className)}
      style={
        prefersReducedMotion
          ? undefined
          : { x: springX, y: springY }
      }
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </m.a>
  );
}
