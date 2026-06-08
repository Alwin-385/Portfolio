import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Brain,
  FileSearch,
  Map,
  Mic,
  Route,
  Sparkles,
  Target,
} from "lucide-react";

export type IntervaiScreenId =
  | "landing"
  | "dashboard"
  | "interview"
  | "resume"
  | "analytics"
  | "roadmap";

export type IntervaiScreen = {
  id: IntervaiScreenId;
  title: string;
  caption: string;
};

export type IntervaiFeature = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IntervaiTechCategory = {
  id: string;
  label: string;
  items: string[];
};

export type IntervaiArchitectureStep = {
  id: string;
  label: string;
  description: string;
};

export const intervaiMeta = {
  name: "IntervAI",
  tagline: "AI Interview Intelligence Platform",
  role: "Solo full-stack developer — designed, built, and deployed the entire product.",
  shortDescription:
    "Production-deployed interview prep platform with voice mock interviews, resume analysis, rubric-based scoring, weak-area detection, analytics, and personalized roadmaps — orchestrated with LangGraph on free-tier infrastructure.",
  longDescription:
    "Most candidates practice interviews without structured feedback. IntervAI turns prep into a measurable loop: role-specific mock interviews, scored answers, resume intelligence, recurring weak-area detection, and AI-generated improvement roadmaps — all in one full-stack product I designed, built, and deployed solo.",
  liveDemoUrl: "https://interv-ai-zeta.vercel.app",
  githubUrl: "https://github.com/Alwin-385/IntervAI",
  apiHealthUrl: "https://intervai-3ycg.onrender.com/api/v1/health",
  status: "live" as const,
};

export const intervaiScreens: IntervaiScreen[] = [
  {
    id: "landing",
    title: "Landing Page",
    caption: "Public product positioning with Clerk-powered sign-in and onboarding.",
  },
  {
    id: "dashboard",
    title: "Dashboard Overview",
    caption: "Session stats, recent activity, and quick actions at a glance.",
  },
  {
    id: "interview",
    title: "Interview Session",
    caption: "Timed Q&A with browser speech-to-text, transcripts, and live progress.",
  },
  {
    id: "resume",
    title: "Resume Analyzer",
    caption: "PDF upload, text extraction, structured analysis, and skill-gap scoring.",
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    caption: "Score trends, role readiness, communication metrics, and weak-area frequency.",
  },
  {
    id: "roadmap",
    title: "Improvement Roadmap",
    caption: "Phased prep plans generated from interview performance data.",
  },
];

export const intervaiFeatures: IntervaiFeature[] = [
  {
    id: "mock-interviews",
    title: "Mock Interviews",
    description:
      "Create sessions by role, difficulty, and category — Technical, Behavioral, or DSA — with AI-generated questions tailored to the candidate profile.",
    icon: Brain,
  },
  {
    id: "live-session",
    title: "Live Interview Session",
    description:
      "Answer by voice or text in a timed flow. Browser speech-to-text captures transcripts; session progress and completion are tracked end to end.",
    icon: Mic,
  },
  {
    id: "answer-evaluation",
    title: "Answer Evaluation",
    description:
      "Rubric-based scoring across technical depth, communication, and correctness — with per-question feedback and session-level results.",
    icon: Target,
  },
  {
    id: "resume-intelligence",
    title: "Resume Intelligence",
    description:
      "Upload a PDF to cloud storage, extract text, and receive structured analysis with skills mapping and gap insights.",
    icon: FileSearch,
  },
  {
    id: "weak-areas",
    title: "Weak Area Detection",
    description:
      "Detects recurring gaps from answer and speech history, syncs to the user profile, and informs smarter future question generation.",
    icon: Sparkles,
  },
  {
    id: "performance-analytics",
    title: "Analytics Dashboard",
    description:
      "Score trends, communication and confidence charts, interview history, role readiness, and weak-area frequency over time.",
    icon: BarChart3,
  },
  {
    id: "personalized-roadmaps",
    title: "Improvement Roadmaps",
    description:
      "AI-generated phased preparation plans built from interview performance — turning practice data into actionable next steps.",
    icon: Route,
  },
];

export const intervaiTechStack: IntervaiTechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Zustand",
      "Recharts",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "FastAPI",
      "Python 3.12",
      "SQLAlchemy 2.0",
      "Alembic",
      "Pydantic v2",
      "Gunicorn + Uvicorn",
    ],
  },
  {
    id: "data",
    label: "Data & Storage",
    items: ["PostgreSQL (Supabase)", "Supabase Storage", "Redis (jobs)"],
  },
  {
    id: "ai",
    label: "AI & Orchestration",
    items: [
      "LangGraph",
      "Heuristic rubric engines",
      "Optional OpenAI GPT",
      "Optional Whisper / Qdrant RAG",
    ],
  },
  {
    id: "auth",
    label: "Auth & Security",
    items: ["Clerk", "JWT verification", "Rate limiting", "User-scoped access"],
  },
  {
    id: "ops",
    label: "DevOps & Quality",
    items: [
      "Vercel",
      "Render",
      "GitHub Actions",
      "pytest",
      "Jest",
      "ESLint",
      "Ruff",
    ],
  },
];

export const intervaiArchitecture: IntervaiArchitectureStep[] = [
  {
    id: "auth",
    label: "Sign Up",
    description: "Clerk authentication with JWT-secured API access",
  },
  {
    id: "resume",
    label: "Resume Upload",
    description: "PDF stored and analyzed for skills, gaps, and scores",
  },
  {
    id: "generation",
    label: "Interview Creation",
    description: "LangGraph generates tailored questions from resume and weak areas",
  },
  {
    id: "session",
    label: "Live Session",
    description: "Voice or text answers captured with speech-to-text",
  },
  {
    id: "evaluation",
    label: "Evaluation",
    description: "Rubric scoring plus speech confidence and communication metrics",
  },
  {
    id: "weak-areas",
    label: "Weak Areas",
    description: "Recurring gaps detected and synced to the user profile",
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Trends, readiness scores, and improvement index",
  },
  {
    id: "roadmap",
    label: "Roadmap",
    description: "Personalized phased prep plan generated from performance data",
  },
];

export const intervaiHighlights = [
  {
    id: "deployed",
    label: "Production Deployed",
    icon: Map,
  },
  {
    id: "agents",
    label: "LangGraph Orchestration",
    icon: Sparkles,
  },
  {
    id: "dual-mode",
    label: "Dual-Mode AI",
    icon: Brain,
  },
] as const;
