import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Boxes,
  Brain,
  Briefcase,
  Code2,
  Lightbulb,
  Rocket,
  Server,
} from "lucide-react";

export type AboutFocusArea = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type AboutHighlight = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type AboutTimelineItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
};

export type AboutInterest = {
  id: string;
  label: string;
  accent?: "blue" | "purple";
};

export const aboutIntro = {
  headline: "Engineering products that think, scale, and ship.",
  paragraphs: [
    "I'm Alwin Baby — a final-year B.Tech Computer Science student who builds at the intersection of full-stack development and artificial intelligence.",
    "I don't just write code. I design systems that solve real problems — from AI interview platforms to civic data tools — with the polish of a product engineer and the rigor of a software architect.",
  ],
  status: "Final-year B.Tech · Computer Science",
};

export const aboutFocusAreas: AboutFocusArea[] = [
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description:
      "End-to-end web applications with modern React, Node.js, and production-grade architecture.",
    icon: Code2,
  },
  {
    id: "ai-apps",
    title: "AI Applications",
    description:
      "LLM-powered features, intelligent workflows, and practical AI integrated into real products.",
    icon: Bot,
  },
  {
    id: "product",
    title: "Product Engineering",
    description:
      "Translating complex ideas into intuitive interfaces with premium UX and thoughtful detail.",
    icon: Rocket,
  },
  {
    id: "systems",
    title: "Scalable Systems",
    description:
      "APIs, databases, and infrastructure designed to grow — reliable, maintainable, and performant.",
    icon: Server,
  },
];

export const aboutProjects = [
  "IntervAI",
  "CivicPulse",
  "Smart Inventory Dashboard",
  "Questlytics",
] as const;

export const aboutInterests: AboutInterest[] = [
  { id: "rag", label: "RAG Pipelines", accent: "blue" },
  { id: "agents", label: "AI Agents", accent: "purple" },
  { id: "nextjs", label: "Next.js Ecosystem", accent: "blue" },
  { id: "design", label: "Design Systems" },
  { id: "cloud", label: "Cloud & DevOps", accent: "purple" },
  { id: "oss", label: "Open Source" },
];

export const aboutInterestsSummary =
  "Currently exploring agentic AI, retrieval-augmented generation, and the craft of building developer tools that feel invisible — powerful behind the scenes, effortless up front.";

export const aboutHighlights: AboutHighlight[] = [
  {
    id: "ai",
    title: "AI-Powered Applications",
    description:
      "Built intelligent platforms like IntervAI — combining LLMs with structured workflows for real-world impact.",
    icon: Brain,
  },
  {
    id: "fullstack",
    title: "Full-Stack Systems",
    description:
      "Designed and shipped complete products from database schema to deployed frontend across multiple domains.",
    icon: Boxes,
  },
  {
    id: "problems",
    title: "Real-World Problem Solving",
    description:
      "From civic engagement with CivicPulse to inventory analytics — I build for problems that matter.",
    icon: Lightbulb,
  },
  {
    id: "internship",
    title: "Professional Experience",
    description:
      "Frontend Developer Intern — shipping production UI, collaborating with teams, and learning industry standards.",
    icon: Briefcase,
  },
];

export const aboutTimeline: AboutTimelineItem[] = [
  {
    id: "intern",
    role: "Frontend Developer Intern",
    organization: "Industry Experience",
    period: "2024 — Present",
    description:
      "Developed responsive interfaces, integrated APIs, and contributed to production codebases in agile team environments.",
  },
  {
    id: "education",
    role: "B.Tech Computer Science",
    organization: "Final Year",
    period: "2022 — 2026",
    description:
      "Focused on software engineering, data structures, AI/ML fundamentals, and full-stack project development.",
  },
];
