import type { LucideIcon } from "lucide-react";
import { Bot, Boxes, Briefcase } from "lucide-react";

export type ResumeAchievement = {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export type ResumeCertification = {
  id: string;
  name: string;
  issuer?: string;
  period?: string;
  /** e.g. Elite, Gold */
  level?: string;
  /** e.g. 75% consolidated score */
  score?: string;
  description?: string;
  certificate?: {
    imageSrc: string;
    alt: string;
    title: string;
  };
};

export type ResumeEducation = {
  degree: string;
  institution?: string;
  period: string;
  status: string;
};

export const resumeFile = {
  filename: "RESUME.pdf",
  url: "/RESUME.pdf",
  /** Optional: add public/RESUME-cover.png for a static preview thumbnail */
  previewImage: undefined as string | undefined,
} as const;

export const resumeCredentialsSection = {
  /** Section label — broader than "Certifications" so a single featured item doesn't read as the full list */
  title: "Recognition",
} as const;

export const resumeIntro = {
  headline: "Resume & credentials",
  description:
    "Final-year Computer Science student — view the PDF or browse education, highlights, and verified credentials at a glance.",
};

export const resumeSummary = {
  liveProducts: "4 live products",
  internships: "2 industry internships",
  availability: "Open to internships & full-time",
};

export const resumeEducation: ResumeEducation = {
  degree: "B.Tech Computer Science",
  institution: "SJCET",
  period: "2023 — 2027",
  status: "Final year · Graduating 2027",
};

export const resumeAchievements: ResumeAchievement[] = [
  {
    id: "ai-production",
    label: "Production AI Systems",
    description:
      "Solo-built IntervAI end to end — LangGraph orchestration, dual-mode AI (heuristic + GPT), Clerk auth, and 15+ API modules in production.",
    icon: Bot,
  },
  {
    id: "full-stack-shipped",
    label: "Solo Full-Stack Products",
    description:
      "Designed, built, and deployed CivicPulse and Smart Inventory Dashboard — database schema through dual-platform hosting with real production constraints.",
    icon: Boxes,
  },
  {
    id: "industry-oss",
    label: "Industry & Open Source",
    description:
      "Two certified one-month internships (MERN + frontend) and an open-source Questlytics upload UI contribution — honest scope, live demos, verifiable credentials.",
    icon: Briefcase,
  },
];

/** Verified credentials — NPTEL, industry programs, etc. */
export const resumeCertifications: ResumeCertification[] = [
  {
    id: "nptel-python-data-science",
    name: "Python for Data Science",
    issuer: "NPTEL · IIT Madras",
    period: "Jan — Feb 2025",
    level: "Elite",
    score: "75%",
    description:
      "4-week SWAYAM course covering Python fundamentals, NumPy, Pandas, and data analysis — Elite certification with proctored exam.",
    certificate: {
      imageSrc: "/certificates/nptel-python-data-science-elite.png",
      alt: "NPTEL Elite certificate for Python for Data Science from IIT Madras, January to February 2025",
      title: "NPTEL Elite — Python for Data Science",
    },
  },
];

export const resumePreviewMeta = {
  title: "Alwin Baby",
  subtitle: "Full-Stack Developer · AI Applications",
  updatedLabel: "PDF Resume · Updated for portfolio",
};
