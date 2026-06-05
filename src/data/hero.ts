export const HERO_TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "LangGraph",
  "Qdrant",
  "Docker",
  "AWS",
] as const;

export type HeroTechnology = (typeof HERO_TECHNOLOGIES)[number];
