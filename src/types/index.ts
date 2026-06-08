import type { ReactNode } from "react";
import type { Variants } from "motion/react";

export type HeroTagline = {
  primary: string;
  accent: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  tagline: string;
  heroTagline: HeroTagline;
  description: string;
  heroDescription: string;
  url: string;
  locale: string;
  author: {
    name: string;
    email?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  keywords: string[];
};

export type BreakpointKey =
  | "xs"
  | "sm"
  | "mobile"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export type BreakpointConfig = Record<BreakpointKey, number>;

export type AnimationPreset =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn"
  | "staggerContainer";

export type AnimationWrapperProps = {
  preset?: AnimationPreset;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  children: ReactNode;
};

export type SectionContainerProps = {
  id?: string;
  label?: string;
  description?: string;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "article";
  children: ReactNode;
};

export type PageWrapperProps = {
  className?: string;
  children: ReactNode;
};

export type MotionVariantMap = Record<AnimationPreset, Variants>;

export type NavItem = {
  label: string;
  href: string;
};

export type SocialIcon = "github" | "linkedin" | "email";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};
