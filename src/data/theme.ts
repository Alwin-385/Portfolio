/** Active portfolio color theme — mirrors src/styles/themes/active.css */
export const ACTIVE_COLOR_THEME = "linear" as const;

export type ColorTheme =
  | "linear"
  | "stripe-midnight"
  | "apple-dark"
  | "obsidian-warm";

export const COLOR_THEMES: Record<
  ColorTheme,
  { label: string; description: string; file: string }
> = {
  linear: {
    label: "Linear Original",
    description: "Near-black with blue/purple accents",
    file: "linear.css",
  },
  "stripe-midnight": {
    label: "Stripe Midnight",
    description: "Deep navy with blurple indigo accents",
    file: "stripe-midnight.css",
  },
  "apple-dark": {
    label: "Apple Dark",
    description: "Warm charcoal with soft system-blue accents",
    file: "apple-dark.css",
  },
  "obsidian-warm": {
    label: "Obsidian Warm",
    description: "Warm charcoal with sand and amber highlights",
    file: "obsidian-warm.css",
  },
};
