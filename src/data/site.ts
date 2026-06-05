import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Alwin Baby",
  role: "Full-Stack Developer",
  tagline: "Building AI-Powered Web Applications",
  description:
    "Portfolio of Alwin Baby — Full-Stack Developer specializing in AI-powered web applications, modern React ecosystems, and production-grade digital experiences.",
  heroDescription:
    "Final-year Computer Science student passionate about building intelligent, scalable, and impactful digital experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alwinbaby.dev",
  locale: "en_US",
  author: {
    name: "Alwin Baby",
    github: "https://github.com/alwinbaby",
    linkedin: "https://linkedin.com/in/alwinbaby",
  },
  keywords: [
    "Alwin Baby",
    "Full-Stack Developer",
    "AI Web Applications",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
};
