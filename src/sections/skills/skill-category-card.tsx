"use client";

import { m } from "motion/react";

import { skillsBadgeContainer, skillsBadgePop } from "@/animations/skills-variants";
import { Badge } from "@/components/ui/badge";
import { DescriptionText } from "@/components/ui/typography";
import type { SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

type SkillCategoryCardProps = {
  category: SkillCategory;
  /** Controls visual size/weight of the card in the bento grid */
  size?: "large" | "medium" | "small";
};

export function SkillCategoryCard({ category, size = "medium" }: SkillCategoryCardProps) {
  const Icon = category.icon;
  const isBlue = category.accent === "blue";

  return (
    <article
      className={cn(
        "bento-card-shimmer card-lift group relative flex flex-col overflow-hidden rounded-[var(--radius-card-token)]",
        "border border-default transition-all duration-300",
        "hover:border-border-accent hover:shadow-elevation-lg",
        isBlue ? "hover:shadow-glow-accent" : "hover:shadow-[var(--glow-purple)]",
        size === "large" && "min-h-[220px]",
        size === "medium" && "min-h-[180px]",
        size === "small" && "min-h-[140px]",
      )}
    >
      {/* Background gradient per accent */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          isBlue
            ? "bg-[radial-gradient(ellipse_at_top_right,oklch(0.68_0.16_250/12%)_0%,transparent_60%)]"
            : "bg-[radial-gradient(ellipse_at_top_left,oklch(0.65_0.18_290/12%)_0%,transparent_60%)]",
        )}
        aria-hidden
      />

      <div
        className={cn(
          "relative flex h-full flex-col gap-4",
          size === "large" ? "p-6 md:p-7" : "p-5",
        )}
      >
        {/* Header: icon + label */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-button-token)] border",
                "transition-all duration-300 group-hover:scale-110",
                isBlue
                  ? "border-accent-blue/30 bg-accent-blue-muted text-accent-blue group-hover:shadow-[0_0_12px_var(--accent-blue-muted)]"
                  : "border-accent-purple/30 bg-accent-purple-muted text-accent-purple group-hover:shadow-[0_0_12px_var(--accent-purple-muted)]",
              )}
            >
              <Icon className="size-4" aria-hidden />
            </div>
            <span
              className={cn(
                "font-heading font-semibold text-foreground",
                size === "large" ? "text-lg" : "text-base",
              )}
            >
              {category.label}
            </span>
          </div>

          {/* Tech count pill */}
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-label font-medium tabular-nums",
              isBlue
                ? "bg-accent-blue-muted text-accent-blue"
                : "bg-accent-purple-muted text-accent-purple",
            )}
          >
            {category.technologies.length}
          </span>
        </div>

        {/* Description — large and medium cards */}
        {size !== "small" ? (
          <DescriptionText className="text-left text-pretty text-sm">
            {category.description}
          </DescriptionText>
        ) : null}

        {/* Badges */}
        <m.div
          className="mt-auto flex flex-wrap gap-1.5"
          variants={skillsBadgeContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {category.technologies.map((tech) => (
            <m.div key={tech} variants={skillsBadgePop}>
              <Badge
                variant="tech"
                className={cn(
                  "cursor-default transition-all duration-200 hover:scale-105",
                  isBlue
                    ? "hover:border-accent-blue/40 hover:bg-accent-blue-muted hover:text-accent-blue"
                    : "hover:border-accent-purple/40 hover:bg-accent-purple-muted hover:text-accent-purple",
                )}
              >
                {tech}
              </Badge>
            </m.div>
          ))}
        </m.div>
      </div>
    </article>
  );
}
