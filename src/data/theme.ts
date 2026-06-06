/** Active portfolio color theme — mirrors src/styles/themes/active.css */
export const ACTIVE_COLOR_THEME = "stripe-midnight" as const;

export type ColorTheme = "linear" | "stripe-midnight";

export const COLOR_THEMES: Record<
  ColorTheme,
  { label: string; description: string }
> = {
  linear: {
    label: "Linear Original",
    description: "Near-black with blue/purple accents",
  },
  "stripe-midnight": {
    label: "Stripe Midnight",
    description: "Deep navy with blurple indigo accents",
  },
};
