import { siteConfig } from "@/data/site";
import type { NavItem, SocialLink } from "@/types";

export const NAV_LINKS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: siteConfig.author.github ?? "https://github.com",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: siteConfig.author.linkedin ?? "https://linkedin.com",
    icon: "linkedin",
  },
];

export const NAV_HEIGHT = 72;
export const NAV_SCROLL_OFFSET = -NAV_HEIGHT;

export function getSectionId(href: string): string {
  return href.replace("#", "");
}
