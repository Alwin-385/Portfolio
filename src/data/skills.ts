import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Cloud,
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "database"
  | "ai"
  | "cloud"
  | "tools";

export type SkillCategory = {
  id: SkillCategoryId;
  label: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "purple";
  technologies: string[];
};

export const skillsIntro = {
  headline: "Technical breadth across the full stack",
  description:
    "Tools and frameworks from shipped work — IntervAI, CivicPulse, Smart Inventory, Questlytics, and industry internships. No proficiency scores, just the stack behind real products.",
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces from solo full-stack apps to vanilla HTML/CSS contributions.",
    icon: Code2,
    accent: "blue",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Vite",
      "Leaflet",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "REST APIs, auth, and server-side logic across Node and Python stacks.",
    icon: Server,
    accent: "purple",
    technologies: ["Node.js", "Express", "FastAPI", "REST APIs", "JWT", "OAuth"],
  },
  {
    id: "database",
    label: "Database",
    description: "Relational modeling, ORMs, and managed Postgres in production.",
    icon: Database,
    accent: "blue",
    technologies: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"],
  },
  {
    id: "ai",
    label: "AI",
    description: "LLM orchestration, vector search, and AI product workflows.",
    icon: Bot,
    accent: "purple",
    technologies: ["LangGraph", "OpenAI APIs", "Qdrant", "Python"],
  },
  {
    id: "cloud",
    label: "Cloud & Deployment",
    description: "Production hosting, auth, and live product delivery.",
    icon: Cloud,
    accent: "blue",
    technologies: ["Vercel", "Render", "Clerk", "Cloudinary"],
  },
  {
    id: "tools",
    label: "Tools",
    description: "Daily driver toolchain for building and shipping code.",
    icon: Wrench,
    accent: "purple",
    technologies: ["Git", "GitHub", "VS Code", "Docker", "Recharts"],
  },
];

export const skillsSummary = {
  categoryCount: skillCategories.length,
  technologyCount: skillCategories.reduce(
    (total, category) => total + category.technologies.length,
    0,
  ),
};
