"use client";

import { HERO_TECHNOLOGIES } from "@/data/hero";
import { cn } from "@/lib/utils";

type TechMarqueeProps = {
  className?: string;
};

function TechItem({ name }: { name: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-3 px-6">
      <span className="size-1 rounded-full bg-accent-blue/60" aria-hidden />
      <span className="whitespace-nowrap font-mono text-sm text-muted-foreground transition-colors hover:text-foreground md:text-base">
        {name}
      </span>
    </span>
  );
}

export function TechMarquee({ className }: TechMarqueeProps) {
  const items = [...HERO_TECHNOLOGIES, ...HERO_TECHNOLOGIES];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-default bg-bg-secondary/50 py-4 backdrop-blur-sm",
        className,
      )}
      aria-label="Technologies"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-primary to-transparent md:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-primary to-transparent md:w-24"
        aria-hidden
      />

      <div className="hero-marquee-track flex w-max items-center">
        {items.map((tech, index) => (
          <TechItem key={`${tech}-${index}`} name={tech} />
        ))}
      </div>
    </div>
  );
}
