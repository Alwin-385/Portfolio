"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { AnimatePresence, m, useMotionValue, useSpring } from "motion/react";

import { intervaiSlideReveal } from "@/animations/intervai-variants";
import type { IntervaiScreenId } from "@/data/intervai";
import { projectImageSrc, screenshotCoverClass, screenshotImageClass } from "@/lib/screenshot-display";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

import { IntervaiScreenPreview } from "./intervai-screen-previews";

type IntervaiBrowserMockupProps = {
  screenId?: IntervaiScreenId;
  imageSrc?: string;
  imageAlt?: string;
  direction?: number;
  interactive?: boolean;
  className?: string;
  url?: string;
  priority?: boolean;
  /** cover = fill frame (homepage teaser); contain = full screenshot (gallery) */
  fit?: "cover" | "contain";
};

export function IntervaiBrowserMockup({
  screenId,
  imageSrc,
  imageAlt = "IntervAI screenshot",
  direction = 0,
  interactive = true,
  className,
  url = "interv-ai-zeta.vercel.app",
  priority = false,
  fit = "cover",
}: IntervaiBrowserMockupProps) {
  const prefersReducedMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive || prefersReducedMotion) return;

      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      rotateY.set(x * 8);
      rotateX.set(-y * 6);
    },
    [interactive, prefersReducedMotion, rotateX, rotateY],
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  const resolvedSrc = imageSrc ? projectImageSrc(imageSrc) : undefined;
  const slideKey = resolvedSrc ?? screenId ?? "preview";
  const useImage = Boolean(resolvedSrc) && !imageFailed;

  return (
    <m.div
      className={cn("relative min-w-0 overflow-hidden perspective-[1200px]", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        interactive && !prefersReducedMotion
          ? { rotateX: springRotateX, rotateY: springRotateY }
          : undefined
      }
    >
      <div
        className={cn(
          "intervai-browser relative w-full overflow-hidden rounded-xl md:rounded-2xl",
        )}
      >
        <div className="flex shrink-0 items-center gap-2 border-b border-white/8 bg-black/40 px-3 py-2.5 md:px-4">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-500/70" />
            <span className="size-2.5 rounded-full bg-yellow-500/70" />
            <span className="size-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="mx-auto flex min-w-0 flex-1 items-center justify-center">
            <div className="flex w-full max-w-[220px] items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 md:max-w-xs">
              <span className="size-2 shrink-0 rounded-full bg-green-400/60" aria-hidden />
              <span className="truncate text-[9px] text-white/50 md:text-[10px]">{url}</span>
            </div>
          </div>
        </div>

        <div className="relative aspect-[16/10] w-full min-h-[200px] overflow-hidden bg-bg-secondary sm:min-h-[260px] md:min-h-[320px] lg:min-h-[360px]">
          <AnimatePresence mode="wait" custom={direction}>
            <m.div
              key={slideKey}
              custom={direction}
              variants={prefersReducedMotion ? undefined : intervaiSlideReveal}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              {useImage ? (
                <Image
                  src={resolvedSrc!}
                  alt={imageAlt}
                  fill
                  priority={priority}
                  loading={priority ? "eager" : "lazy"}
                  className={fit === "contain" ? screenshotImageClass : screenshotCoverClass}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  onError={() => setImageFailed(true)}
                />
              ) : screenId ? (
                <IntervaiScreenPreview screenId={screenId} />
              ) : null}
            </m.div>
          </AnimatePresence>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -inset-x-4 -bottom-6 h-20 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.2_255/25%),transparent_70%)] blur-2xl md:-inset-x-8 md:-bottom-8 md:h-24"
        aria-hidden
      />
    </m.div>
  );
}
