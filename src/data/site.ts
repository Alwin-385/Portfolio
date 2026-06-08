import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Alwin Baby",
  role: "Full-Stack Developer",
  tagline: "Building AI-Powered Web Applications",
  heroTagline: {
    primary: "Building AI-Powered",
    accent: "Web Applications",
  },
  description:
    "Alwin Baby — Full-Stack Developer building AI-powered web applications with Next.js, TypeScript, and production-grade architecture.",
  heroDescription:
    "Final-year Computer Science student building AI-powered web applications, full-stack products, and intelligent user experiences—from backend systems to polished frontend interfaces.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alwinbaby.dev",
  locale: "en_US",
  author: {
    name: "Alwin Baby",
    email: "alwinbaby385@gmail.com",
    github: "https://github.com/Alwin-385",
    linkedin: "https://www.linkedin.com/in/alwin-baby-a4a947297",
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
