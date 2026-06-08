"use client";

import { m } from "motion/react";

import {
  motionHeadingContainer,
  motionHeadingItem,
} from "@/animations/motion-variants";
import { DescriptionText, SectionTitle } from "@/components/ui/typography";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** Matches SectionContainer aria-labelledby (e.g. "about-heading") */
  titleId?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
};

/** Individual words animate in with a blur + lift reveal — pure cinema */
function AnimatedTitle({
  text,
  id,
  className,
}: {
  text: string;
  id?: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <SectionTitle
      id={id}
      className={cn("text-balance", className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <m.span
          key={`${word}-${i}`}
          className="inline-block"
          style={{ marginRight: i < words.length - 1 ? "0.28em" : 0 }}
          variants={{
            hidden: { opacity: 0, y: "0.45em", filter: "blur(8px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.07,
              },
            },
          }}
        >
          {word}
        </m.span>
      ))}
    </SectionTitle>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  titleId,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const prefersReducedMotion = useReducedMotion();
  const reveal = useScrollReveal({ heading: true });

  return (
    <m.div
      className={cn(
        "flex flex-col gap-4",
        isCenter ? "mx-auto max-w-2xl items-center text-center" : "items-start text-left",
        className,
      )}
      variants={motionHeadingContainer}
      {...reveal}
    >
      <m.div
        className={cn("flex items-center gap-3", isCenter && "justify-center")}
        variants={motionHeadingItem}
      >
        {index ? (
          <span className="font-mono text-metadata font-medium text-accent-blue tabular-nums">
            {index}
          </span>
        ) : null}
        <span
          className="h-px w-8 bg-gradient-to-r from-accent-blue to-accent-purple"
          aria-hidden
        />
        <span className="text-label">{eyebrow}</span>
      </m.div>

      <m.div variants={motionHeadingItem}>
        {prefersReducedMotion ? (
          <SectionTitle id={titleId} className={cn("text-balance", titleClassName)}>
            {title}
          </SectionTitle>
        ) : (
          <AnimatedTitle text={title} id={titleId} className={titleClassName} />
        )}
      </m.div>

      {description ? (
        <m.div variants={motionHeadingItem}>
          <DescriptionText
            className={cn("text-pretty", isCenter ? "mx-auto max-w-xl" : "max-w-2xl")}
          >
            {description}
          </DescriptionText>
        </m.div>
      ) : null}
    </m.div>
  );
}
