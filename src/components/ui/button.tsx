import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center gap-2",
    "rounded-[var(--radius-button-token)] text-body font-medium whitespace-nowrap",
    "transition-all duration-200 outline-none select-none",
    "focus-visible:ring-2 focus-visible:ring-accent-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        primary: [
          "border border-border-strong bg-foreground text-background",
          "shadow-elevation-sm hover:bg-foreground/90 hover:shadow-elevation-md",
        ],
        secondary: [
          "border border-default bg-bg-elevated text-foreground",
          "shadow-elevation-xs hover:border-border-strong hover:bg-bg-secondary hover:shadow-elevation-sm",
        ],
        ghost: [
          "border border-transparent bg-transparent text-muted-foreground",
          "hover:bg-bg-secondary hover:text-foreground",
        ],
        accent: [
          "border border-transparent text-white shadow-elevation-sm gradient-accent",
          "hover:shadow-glow-accent hover:brightness-110",
        ],
        outline:
          "border border-default bg-transparent text-foreground hover:bg-bg-secondary hover:border-border-strong",
        destructive:
          "border border-destructive/30 bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "border-transparent text-accent-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-metadata",
        lg: "h-11 px-5",
        icon: "size-10",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
