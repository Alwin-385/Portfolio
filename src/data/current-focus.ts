import type { LucideIcon } from "lucide-react";
import {
  Bot,
  GitBranch,
  Layers,
  Rocket,
  Search,
} from "lucide-react";

export type FocusAreaId =
  | "ai-agents"
  | "langgraph"
  | "rag"
  | "full-stack"
  | "scalable-ai";

export type FocusArea = {
  id: FocusAreaId;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "purple";
};

export const currentFocusIntro = {
  eyebrow: "Current Focus",
  title: "Where I'm heading next",
  description:
    "Areas I'm actively exploring and building in — growth-minded engineering, not a static skill list.",
};

export const focusAreas: FocusArea[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Building agent-based systems capable of reasoning, planning, and tool usage.",
    icon: Bot,
    accent: "blue",
  },
  {
    id: "langgraph",
    title: "LangGraph Workflows",
    description:
      "Designing structured AI workflows for scalable multi-step decision making.",
    icon: GitBranch,
    accent: "purple",
  },
  {
    id: "rag",
    title: "RAG Systems",
    description:
      "Creating retrieval-augmented systems that combine vector search and LLM reasoning.",
    icon: Search,
    accent: "blue",
  },
  {
    id: "full-stack",
    title: "Full-Stack Product Development",
    description:
      "Building complete products from frontend interfaces to backend infrastructure.",
    icon: Layers,
    accent: "purple",
  },
  {
    id: "scalable-ai",
    title: "Scalable AI Applications",
    description:
      "Developing production-ready AI systems with performance, security, and maintainability in mind.",
    icon: Rocket,
    accent: "blue",
  },
];

export const currentFocusSummary = {
  areaCount: focusAreas.length,
  tagline: "Growing into AI engineering",
};
