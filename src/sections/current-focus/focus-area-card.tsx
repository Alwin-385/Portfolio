"use client";

import { ArrowUpRight } from "lucide-react";

import { DescriptionText } from "@/components/ui/typography";
import type { FocusArea } from "@/data/current-focus";
import { cn } from "@/lib/utils";

type FocusAreaCardProps = {
  area: FocusArea;
  index: number;
};

export function FocusAreaCard({ area, index }: FocusAreaCardProps) {
  const Icon = area.icon;
  const isBlue = area.accent === "blue";
  const isFeatured = index === 0;

  return (
    <article
      className={cn(
        "bento-card-shimmer card-lift group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card-token)]",
        "border border-default bg-bg-elevated/80 backdrop-blur-sm",
        "transition-all duration-300",
        "hover:border-border-accent hover:bg-bg-elevated hover:shadow-elevation-lg",
        isBlue ? "hover:shadow-glow-accent" : "hover:shadow-[var(--glow-purple)]",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          isBlue
            ? "bg-[radial-gradient(ellipse_at_top_right,oklch(0.68_0.16_250/14%)_0%,transparent_55%)]"
            : "bg-[radial-gradient(ellipse_at_top_left,oklch(0.65_0.18_290/14%)_0%,transparent_55%)]",
        )}
        aria-hidden
      />

      <div className={cn("relative flex h-full flex-col gap-4", isFeatured ? "p-6 md:p-7" : "p-5 md:p-6")}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-button-token)] border",
                "transition-all duration-300 group-hover:scale-110",
                isBlue
                  ? "border-accent-blue/30 bg-accent-blue-muted text-accent-blue group-hover:shadow-[0_0_16px_var(--accent-blue-muted)]"
                  : "border-accent-purple/30 bg-accent-purple-muted text-accent-purple group-hover:shadow-[0_0_16px_var(--accent-purple-muted)]",
              )}
            >
              <Icon className="size-5" aria-hidden />
            </div>
            <span
              className={cn(
                "font-mono text-xs font-semibold tabular-nums",
                isBlue ? "text-accent-blue/70" : "text-accent-purple/70",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <ArrowUpRight
            className={cn(
              "size-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300",
              "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100",
              isBlue ? "group-hover:text-accent-blue" : "group-hover:text-accent-purple",
            )}
            aria-hidden
          />
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <h3
            className={cn(
              "font-heading font-semibold text-foreground",
              isFeatured ? "text-xl md:text-2xl" : "text-lg",
            )}
          >
            {area.title}
          </h3>
          <DescriptionText className="text-left text-pretty text-sm leading-relaxed">
            {area.description}
          </DescriptionText>
        </div>

        <div
          className={cn(
            "h-px w-full opacity-60",
            isBlue
              ? "bg-gradient-to-r from-accent-blue/40 to-transparent"
              : "bg-gradient-to-r from-accent-purple/40 to-transparent",
          )}
          aria-hidden
        />
      </div>
    </article>
  );
}
