import type { ProjectSlug } from "@/data/projects";

/** Projects whose API/backend is on Render free tier (cold start ~1–2 min) */
export const RENDER_COLD_START_SLUGS: ReadonlySet<ProjectSlug> = new Set([
  "intervai",
  "civic-pulse",
  "smart-inventory-dashboard",
]);

export const liveDemoColdStartNote =
  "This project's backend is hosted on Render's free tier. After inactivity, the server sleeps and the first load can take 30 seconds to 2 minutes while it wakes up. Please wait — data and features work normally once the server is running.";

export function projectHasRenderColdStart(slug: ProjectSlug): boolean {
  return RENDER_COLD_START_SLUGS.has(slug);
}
