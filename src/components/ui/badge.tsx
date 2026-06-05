import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import type { StatusVariant } from "@/lib/design-tokens";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 whitespace-nowrap font-medium transition-colors",
  {
    variants: {
      variant: {
        tech: [
          "rounded-[var(--radius-badge-token)] border border-default bg-bg-secondary",
          "px-2.5 py-1 text-metadata font-mono text-foreground/80",
          "hover:border-border-accent hover:bg-accent-blue-muted",
        ],
        status: [
          "rounded-[var(--radius-badge-token)] border border-default bg-bg-elevated",
          "px-2.5 py-1 text-metadata",
        ],
      },
      status: {
        active: "text-accent-blue",
        beta: "text-accent-purple",
        archived: "text-muted-foreground",
        "coming-soon": "text-foreground/70",
      },
    },
    defaultVariants: {
      variant: "tech",
    },
  },
);

type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    status?: StatusVariant;
  };

function StatusDot({ status }: { status: StatusVariant }) {
  const dotColors: Record<StatusVariant, string> = {
    active: "bg-accent-blue shadow-[0_0_6px_var(--accent-blue)]",
    beta: "bg-accent-purple shadow-[0_0_6px_var(--accent-purple)]",
    archived: "bg-muted-foreground/50",
    "coming-soon": "bg-foreground/40",
  };

  return (
    <span
      className={cn("size-1.5 shrink-0 rounded-full", dotColors[status])}
      aria-hidden
    />
  );
}

function Badge({
  className,
  variant = "tech",
  status,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({
          variant,
          status: variant === "status" ? status : undefined,
          className,
        }),
      )}
      {...props}
    >
      {variant === "status" && status ? <StatusDot status={status} /> : null}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
