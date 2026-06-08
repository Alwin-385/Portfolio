import type { ProjectSlug } from "@/data/projects";
import { projectImageSrc } from "@/lib/screenshot-display";

export type ProjectScreenshot = {
  src: string;
  title: string;
  alt: string;
  /** Optional portal or section label — e.g. Citizen Portal, Admin Portal */
  group?: string;
};

function intervaiShot(path: string, title: string, alt: string): ProjectScreenshot {
  return { src: projectImageSrc(path), title, alt };
}

export const PROJECT_IMAGES: Partial<
  Record<
    ProjectSlug,
    {
      cover: string;
      screenshots: ProjectScreenshot[];
    }
  >
> = {
  intervai: {
    cover: projectImageSrc("/projects/intervai/landing.png"),
    screenshots: [
      intervaiShot(
        "/projects/intervai/landing.png",
        "Landing Page",
        "IntervAI landing page with product overview and sign-in",
      ),
      intervaiShot(
        "/projects/intervai/dashboard.png",
        "Dashboard Overview",
        "IntervAI dashboard with session history and readiness scores",
      ),
      intervaiShot(
        "/projects/intervai/interview-session.png",
        "Interview Session",
        "IntervAI live mock interview session with AI interviewer",
      ),
      intervaiShot(
        "/projects/intervai/interview-questions.png",
        "Interview Questions",
        "IntervAI AI-generated interview questions by role and difficulty",
      ),
      intervaiShot(
        "/projects/intervai/resume-analysis.png",
        "Resume Analyzer",
        "IntervAI resume analysis with skill extraction and gap insights",
      ),
      intervaiShot(
        "/projects/intervai/analytics.png",
        "Analytics Dashboard",
        "IntervAI performance analytics with scores and trend charts",
      ),
      intervaiShot(
        "/projects/intervai/weak-areas.png",
        "Weak Areas Analysis",
        "IntervAI weak areas breakdown with category-level feedback",
      ),
      intervaiShot(
        "/projects/intervai/roadmap.png",
        "Improvement Roadmap",
        "IntervAI personalized learning roadmap based on interview performance",
      ),
    ],
  },
  "civic-pulse": {
    cover: "/projects/civic-pulse/Citizen/cover.jpeg",
    screenshots: [
      {
        src: "/projects/civic-pulse/Citizen/cover.jpeg",
        title: "Citizen Landing",
        alt: "CivicPulse citizen portal landing page",
        group: "Citizen Portal",
      },
      {
        src: "/projects/civic-pulse/Citizen/dashboard.jpeg",
        title: "Citizen Dashboard",
        alt: "CivicPulse citizen dashboard",
        group: "Citizen Portal",
      },
      {
        src: "/projects/civic-pulse/Citizen/submit_complaint.jpeg",
        title: "Submit Complaint",
        alt: "CivicPulse submit complaint form",
        group: "Citizen Portal",
      },
      {
        src: "/projects/civic-pulse/Citizen/reports.jpeg",
        title: "My Reports",
        alt: "CivicPulse citizen reports list",
        group: "Citizen Portal",
      },
      {
        src: "/projects/civic-pulse/Citizen/report_status.jpeg",
        title: "Report Status",
        alt: "CivicPulse report status tracking",
        group: "Citizen Portal",
      },
      {
        src: "/projects/civic-pulse/Citizen/report_download.jpeg",
        title: "Report Download",
        alt: "CivicPulse report download",
        group: "Citizen Portal",
      },
      {
        src: "/projects/civic-pulse/Citizen/activity_feed.jpeg",
        title: "Activity Feed",
        alt: "CivicPulse citizen activity feed",
        group: "Citizen Portal",
      },
      {
        src: "/projects/civic-pulse/Citizen/settings.jpeg",
        title: "Settings",
        alt: "CivicPulse citizen settings",
        group: "Citizen Portal",
      },
      {
        src: "/projects/civic-pulse/Admin/dashboard.jpeg",
        title: "Admin Dashboard",
        alt: "CivicPulse admin dashboard",
        group: "Admin Portal",
      },
      {
        src: "/projects/civic-pulse/Admin/manage_complaint.jpeg",
        title: "Manage Complaints",
        alt: "CivicPulse admin complaint management",
        group: "Admin Portal",
      },
      {
        src: "/projects/civic-pulse/Admin/review_complaint.jpeg",
        title: "Review Complaint",
        alt: "CivicPulse admin complaint review",
        group: "Admin Portal",
      },
      {
        src: "/projects/civic-pulse/Admin/complaint_status.jpeg",
        title: "Complaint Status",
        alt: "CivicPulse admin complaint status",
        group: "Admin Portal",
      },
      {
        src: "/projects/civic-pulse/Admin/map.jpeg",
        title: "Issue Map",
        alt: "CivicPulse admin geolocation map",
        group: "Admin Portal",
      },
      {
        src: "/projects/civic-pulse/Admin/manage_staff.jpeg",
        title: "Manage Staff",
        alt: "CivicPulse admin staff management",
        group: "Admin Portal",
      },
      {
        src: "/projects/civic-pulse/Admin/new_staff.jpeg",
        title: "Add Staff",
        alt: "CivicPulse admin add new staff",
        group: "Admin Portal",
      },
    ],
  },
  "smart-inventory-dashboard": {
    cover: "/projects/smart-inventory-dashboard/cover.png",
    screenshots: [
      {
        src: "/projects/smart-inventory-dashboard/cover.png",
        title: "Inventory Dashboard",
        alt: "Smart Inventory Dashboard overview",
      },
    ],
  },
  questlytics: {
    cover: "/projects/questlytics/cover.png",
    screenshots: [
      {
        src: "/projects/questlytics/cover.png",
        title: "Landing Page",
        alt: "Questlytics welcome landing page with platform overview and navigation",
      },
      {
        src: "/projects/questlytics/landing.jpeg",
        title: "Upload Page",
        alt: "Questlytics question-paper upload page with multi-file selection",
      },
    ],
  },
};

/** Homepage + featured carousel — all IntervAI screenshots */
export const intervaiTeaserImages: ProjectScreenshot[] =
  PROJECT_IMAGES.intervai!.screenshots;

export function getProjectCover(slug: ProjectSlug): string | undefined {
  return PROJECT_IMAGES[slug]?.cover;
}

export function getProjectScreenshots(slug: ProjectSlug): ProjectScreenshot[] {
  return PROJECT_IMAGES[slug]?.screenshots ?? [];
}

export function getProjectScreenshotGroups(
  slug: ProjectSlug,
): { group: string; screenshots: ProjectScreenshot[] }[] {
  const shots = getProjectScreenshots(slug);
  const groups = [...new Set(shots.map((s) => s.group).filter(Boolean))] as string[];

  if (groups.length === 0) {
    return shots.length > 0 ? [{ group: "Screenshots", screenshots: shots }] : [];
  }

  return groups.map((group) => ({
    group,
    screenshots: shots.filter((s) => s.group === group),
  }));
}
