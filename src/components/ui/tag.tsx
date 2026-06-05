import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  [
    "inline-flex items-center rounded-[var(--radius-tag-token)] border border-subtle",
    "bg-bg-secondary/80 px-2 py-0.5 text-label normal-case tracking-normal",
    "text-muted-foreground transition-all duration-200",
    "hover:border-default hover:bg-bg-elevated hover:text-foreground",
  ],
  {
    variants: {
      accent: {
        none: "",
        blue: "hover:border-accent-blue/30 hover:text-accent-blue",
        purple: "hover:border-accent-purple/30 hover:text-accent-purple",
      },
    },
    defaultVariants: {
      accent: "none",
    },
  },
);

type TagProps = ComponentProps<"span"> & VariantProps<typeof tagVariants>;

function Tag({ className, accent, children, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ accent, className }))} {...props}>
      {children}
    </span>
  );
}

export { Tag, tagVariants };
