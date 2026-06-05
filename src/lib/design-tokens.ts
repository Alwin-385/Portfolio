/** TypeScript mirror of CSS design tokens for programmatic use */

export const SPACING = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
} as const;

export type SpacingKey = keyof typeof SPACING;

export const TYPOGRAPHY = {
  hero: {
    size: "clamp(2.5rem, 5vw + 1rem, 4.5rem)",
    lineHeight: "1.05",
    letterSpacing: "-0.04em",
    weight: 600,
  },
  sectionTitle: {
    size: "clamp(1.75rem, 3vw + 0.5rem, 2.75rem)",
    lineHeight: "1.15",
    letterSpacing: "-0.03em",
    weight: 600,
  },
  cardTitle: {
    size: "clamp(1.125rem, 1.5vw + 0.5rem, 1.375rem)",
    lineHeight: "1.3",
    letterSpacing: "-0.02em",
    weight: 500,
  },
  body: {
    size: "clamp(0.9375rem, 0.5vw + 0.875rem, 1.0625rem)",
    lineHeight: "1.65",
    weight: 400,
  },
  description: {
    size: "clamp(0.875rem, 0.4vw + 0.8125rem, 1rem)",
    lineHeight: "1.65",
    weight: 400,
  },
  metadata: {
    size: "clamp(0.75rem, 0.25vw + 0.7rem, 0.8125rem)",
    lineHeight: "1.25",
    weight: 400,
  },
  label: {
    size: "clamp(0.6875rem, 0.2vw + 0.65rem, 0.75rem)",
    lineHeight: "1.25",
    letterSpacing: "0.08em",
    weight: 500,
  },
} as const;

export const RADIUS = {
  button: "0.5rem",
  card: "0.875rem",
  badge: "9999px",
  tag: "0.375rem",
} as const;

export const BADGE_VARIANTS = ["tech", "status"] as const;
export const STATUS_VARIANTS = ["active", "beta", "archived", "coming-soon"] as const;

export type BadgeVariant = (typeof BADGE_VARIANTS)[number];
export type StatusVariant = (typeof STATUS_VARIANTS)[number];
