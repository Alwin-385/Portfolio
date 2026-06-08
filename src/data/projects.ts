export type ProjectSlug =
  | "intervai"
  | "civic-pulse"
  | "smart-inventory-dashboard"
  | "questlytics";

export type ProjectStatus = "live" | "beta" | "coming-soon";

export type ProjectPreviewScreen = {
  id: string;
  title: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectTheme = "civic" | "inventory" | "questlytics";

export type ProjectCaseStudy = {
  slug: ProjectSlug;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  story: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  theme?: ProjectTheme;
  techStack: string[];
  features: ProjectFeature[];
  challenges: string[];
  learnings: string[];
  previewScreens?: ProjectPreviewScreen[];
  /** Optional solo/team role blurb for case study Role section */
  roleSummary?: string;
  /** Case study Role section heading — e.g. "Frontend contribution" */
  roleSectionTitle?: string;
  /** Honest scope badge on project cards — e.g. "Frontend Contribution" */
  scopeLabel?: string;
  /** Main upstream repo when this is a fork/contribution */
  upstreamGithubUrl?: string;
  /** Broader product context (team backend, LLM pipeline, etc.) */
  platformContext?: string;
  /** Optional "what's next" items — honest roadmap, not shipped yet */
  roadmapItems?: string[];
};

export const PROJECT_ROUTES: Record<ProjectSlug, string> = {
  intervai: "/projects/intervai",
  "civic-pulse": "/projects/civic-pulse",
  "smart-inventory-dashboard": "/projects/smart-inventory-dashboard",
  questlytics: "/projects/questlytics",
};

export const projects: ProjectCaseStudy[] = [
  {
    slug: "intervai",
    name: "IntervAI",
    tagline: "AI Interview Intelligence Platform",
    description:
      "Full-stack AI interview prep with voice mock interviews, resume analysis, rubric scoring, weak-area detection, analytics, and personalized roadmaps — solo-built and production-deployed.",
    overview:
      "IntervAI is a production-deployed interview preparation platform I designed and built end to end. It turns practice into a measurable loop: role-specific mock interviews, scored feedback on answers and communication, resume intelligence, recurring weak-area detection, and AI-generated improvement roadmaps — orchestrated with LangGraph and running on Vercel, Render, and Supabase.",
    roleSummary:
      "Solo full-stack developer — designed, built, and deployed the entire product: frontend, backend, database, AI workflows, auth, CI, and production hosting. Scope includes 15+ API modules, 14+ frontend routes, Alembic migrations, and 70+ backend unit tests with GitHub Actions on every push.",
    story: [
      "Most candidates practice interviews without structured feedback. They rarely know which skills are weak, how answers score against real rubrics, or how to improve over time. IntervAI addresses that gap with a closed-loop system: practice, measure, learn, and repeat.",
      "As solo full-stack developer, I owned every layer — Next.js frontend, FastAPI backend, PostgreSQL on Supabase, Clerk auth, file storage, LangGraph orchestration, background jobs, CI, and production hosting. The architecture includes dual-mode AI: fast heuristic engines on the free tier, with optional GPT, Whisper, and RAG when API keys are available.",
      "Weak areas detected across sessions feed back into future question generation. Analytics surfaces trends and role readiness. Roadmaps translate performance data into phased prep plans — product thinking beyond one-off AI features.",
    ],
    liveUrl: "https://interv-ai-zeta.vercel.app",
    githubUrl: "https://github.com/Alwin-385/IntervAI",
    status: "live",
    featured: true,
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "LangGraph",
      "Clerk",
      "Supabase",
      "Vercel",
      "Render",
    ],
    features: [
      {
        title: "Mock Interviews",
        description:
          "Role, difficulty, and category-based sessions with AI-generated questions tailored to the candidate profile.",
      },
      {
        title: "Live Voice Sessions",
        description:
          "Timed Q&A with browser speech-to-text, transcript capture, and end-to-end session tracking.",
      },
      {
        title: "Resume Intelligence",
        description:
          "PDF upload, cloud storage, text extraction, and structured analysis with skill-gap scoring.",
      },
      {
        title: "Answer Evaluation",
        description:
          "Rubric-based scoring on technical depth, communication, and correctness with per-question feedback.",
      },
      {
        title: "Analytics & Weak Areas",
        description:
          "Score trends, role readiness, recurring gap detection, and insights folded into future questions.",
      },
      {
        title: "Improvement Roadmaps",
        description:
          "AI-generated phased prep plans built from interview performance and practice history.",
      },
    ],
    challenges: [
      "Clerk JWTs expire quickly (~60s). Reusing stale tokens caused frequent 401s — solved with a unified API client that refreshes tokens and retries on auth failure across all feature modules.",
      "Shipping AI on a $0 production budget required dual-mode architecture: heuristic engines for free-tier reliability, with optional GPT, Whisper, and RAG when API keys are available.",
      "Render's 512MB limit and cold starts caused timeouts on heavy analytics queries — optimized SQL, reduced concurrent calls, and tuned worker memory settings for stable production.",
      "Background jobs initially broke on async DB in worker threads — refactored to sync sessions in job workers and fixed polling edge cases for reliable question generation.",
    ],
    learnings: [
      "Production AI is not demo AI — heuristic scoring, template generation, and graceful fallbacks matter as much as calling an LLM.",
      "Solo full-stack ownership means tracing bugs across React query retries, FastAPI endpoints, SQL aggregation, and shared utilities in one flow.",
      "Vercel + Render + Supabase is viable for real apps when you design for cold starts, memory limits, and background job modes from day one.",
      "Centralizing auth refresh, network retries, and error handling in one API client prevented the same bug from reappearing across 10+ modules.",
    ],
    previewScreens: [
      { id: "landing", title: "Landing Page" },
      { id: "dashboard", title: "Dashboard" },
      { id: "interview", title: "Interview Session" },
      { id: "resume", title: "Resume Analyzer" },
      { id: "analytics", title: "Analytics" },
      { id: "roadmap", title: "Roadmap" },
    ],
  },
  {
    slug: "civic-pulse",
    name: "CivicPulse",
    tagline: "Smart Civic Issue Reporting for KSEB & PWD",
    description:
      "Full-stack civic complaint platform connecting citizens with government infrastructure departments — geotagged reports, official triage, staff dispatch, analytics, and PDF exports.",
    overview:
      "CivicPulse is a production-deployed web application I built solo for real civic workflows in Kerala. Citizens report infrastructure issues — power outages, road damage, damaged poles — to the correct department (KSEB or PWD) with photos and location, then track resolution in real time. Officials get a command center to triage complaints, dispatch field staff, monitor workload, and export records — replacing informal calls and WhatsApp with a structured, auditable pipeline.",
    roleSummary:
      "Solo full-stack developer — designed, built, and deployed the entire application end to end: React citizen and official portals, Express REST API, PostgreSQL with Prisma, JWT and Google OAuth, Cloudinary uploads with EXIF geotagging, Gmail notifications, and production hosting on Vercel, Render, and Supabase.",
    story: [
      "Citizens in Kerala often struggle to report infrastructure problems to the right department and have no clear way to track whether anything was done. CivicPulse gives citizens one place to file complaints with geotagged photos and live status updates, while officials manage department-scoped queues, dispatch staff, and monitor resolution through analytics dashboards.",
      "The platform runs dual portals — Citizen and Official — with role-based access, department filtering by official email, status workflows from Reported through Resolved, in-app and email notifications, complaint heatmaps on Kerala bounds, and per-complaint PDF export for official records.",
      "Production hardening was part of the build: Supabase session pooler configuration, Prisma schema sync in the Render pipeline, cross-origin Google OAuth with JWT instant login after callback, fetch timeouts and API wake-up pings for Render cold starts, and fire-and-forget email so status updates respond in seconds instead of waiting on SMTP.",
    ],
    liveUrl: "https://civic-pulse-platform.vercel.app",
    githubUrl: "https://github.com/Alwin-385/Civic-Pulse",
    status: "live",
    featured: false,
    theme: "civic",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "Google OAuth",
      "JWT",
      "Cloudinary",
      "Leaflet",
      "Recharts",
      "Vercel",
      "Render",
      "Supabase",
    ],
    features: [
      {
        title: "Citizen Portal",
        description:
          "Register with email or Google OAuth, file KSEB/PWD complaints with up to 3 photos, auto GPS from EXIF or manual location, track status history, map view, and post-resolution feedback.",
      },
      {
        title: "Official Command Center",
        description:
          "Department-scoped dashboards, search and filter complaints, review citizen details and photos, dispatch staff with workload limits, and advance status through the full resolution workflow.",
      },
      {
        title: "Geotagging & Heatmaps",
        description:
          "EXIF GPS extraction from uploaded images plus Leaflet maps and complaint density heatmaps bounded to Kerala for operational visibility.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Recharts-powered stats and charts for department workload, complaint trends, and resolution metrics at a glance.",
      },
      {
        title: "PDF Export",
        description:
          "Officials generate per-complaint PDF reports with jsPDF and AutoTable for audit-ready records.",
      },
      {
        title: "Production Auth & Notifications",
        description:
          "JWT with httpOnly cookies, Google OAuth 2.0, password reset via email, async Gmail SMTP, and in-app notifications on every status change.",
      },
    ],
    challenges: [
      "Supabase direct host connectivity failed in production — switched to the session pooler and fixed schema drift (missing passwordResetOtpHash) with prisma db push integrated into the Render build pipeline.",
      "Google OAuth broke across Vercel and Render domains — resolved with encoded OAuth state, trust proxy settings, correct cookie options, and updated Google Cloud redirect URIs.",
      "Render free-tier cold starts left the frontend stuck on session checks for 30–60 seconds — implemented JWT instant login after OAuth, fetch timeouts, retries, and background API health pings.",
      "Status updates and staff dispatch timed out waiting on Gmail SMTP — moved email to fire-and-forget with mutation retries and 60s timeouts so the UI responds in 1–3 seconds.",
    ],
    learnings: [
      "Production debugging means env vars, CORS, OAuth redirects, and database connection strings must match exactly across Vercel, Render, Supabase, and Google Cloud.",
      "Prisma on Supabase requires understanding session vs transaction poolers — schema drift can surface as misleading connection errors without clear root cause.",
      "Never block the UI on /api/auth/me when the backend may be cold — JWT claims enable instant auth with background validation.",
      "Email and notifications are side effects — separate the critical path (database writes) from nice-to-have delivery (SMTP) for responsive HTTP responses.",
    ],
  },
  {
    slug: "smart-inventory-dashboard",
    name: "Smart Inventory Dashboard",
    tagline: "Real-Time Inventory & Low-Stock Alerts",
    description:
      "Full-stack inventory dashboard with real-time stock control, per-product low-stock thresholds, and automatic Critical Low alerts — React + Express, deployed on Vercel and Render.",
    overview:
      "Smart Inventory Dashboard is a solo full-stack MVP I designed and built end to end. Small teams and retailers often track stock in spreadsheets, which makes it easy to miss low items until it is too late. This app gives a single visual view of product inventory, instant +/- stock updates, and automatic low-stock flags — reducing manual checking and stockouts without enterprise software overhead.",
    roleSummary:
      "Solo full-stack developer — designed and built the entire application: React frontend, Express REST API, low-stock alert logic, responsive custom UI, dual-platform deployment on Vercel and Render, and project documentation with setup guide and API reference.",
    story: [
      "Spreadsheets and manual lists break down quickly when stock changes often. Smart Inventory Dashboard replaces that with a responsive product grid showing name, price, and current stock — with one-click updates and immediate visual feedback when items fall below their reorder threshold.",
      "The architecture follows a clean separation: a thin API client layer, component-driven UI (App → ProductGrid → ProductCard), and a focused Express backend with two REST endpoints. Low-stock detection uses per-product thresholds returned by the API — when stock falls below lowStockThreshold, the card enters a Critical Low state with red styling and a badge.",
      "Deployed cross-origin with the React app on Vercel and the API on Render, the project practices real production concerns: CORS configuration, VITE_API_URL for environment-based API routing, server-side validation for negative stock, per-card loading states, and handling Render free-tier cold starts on the first API call.",
    ],
    liveUrl: "https://smart-inventory-dashboard-rho.vercel.app",
    githubUrl: "https://github.com/Alwin-385/smart-inventory-dashboard",
    status: "live",
    featured: false,
    theme: "inventory",
    techStack: [
      "React 19",
      "Vite 7",
      "JavaScript",
      "Express 5",
      "Node.js",
      "REST API",
      "Vercel",
      "Render",
    ],
    features: [
      {
        title: "Responsive Product Grid",
        description:
          "Custom CSS card layout — no UI library — showing product name, price, and current stock across mobile and desktop.",
      },
      {
        title: "Real-Time Stock Controls",
        description:
          "+ / − buttons POST updates to the API; UI reflects server truth only after a successful response with per-card loading states.",
      },
      {
        title: "Critical Low Alerts",
        description:
          "Per-product reorder thresholds — when stock falls below lowStockThreshold, cards show a red border and Critical Low badge automatically.",
      },
      {
        title: "Validated REST API",
        description:
          "GET /products and POST /update-stock with 400 for negative quantities and 404 for missing products; decrement disabled at zero on the frontend.",
      },
      {
        title: "Dual-Platform Deployment",
        description:
          "Frontend on Vercel, Express API on Render, with CORS and environment-based VITE_API_URL for local and production builds.",
      },
      {
        title: "Documented MVP",
        description:
          "Professional README with setup instructions, API reference, architecture overview, and live demo links.",
      },
    ],
    challenges: [
      "Cross-origin deployment required CORS setup and correct VITE_API_URL in production builds — frontend on Vercel and API on Render run on different domains.",
      "Stock updates must reflect API responses, not optimistic local clicks — state updates only after successful server confirmation to prevent UI drift.",
      "Render free-tier cold starts spin down after inactivity; the first GET /products call can be slow, affecting perceived dashboard load time.",
      "Negative stock blocked on both layers — frontend disables decrement at zero and backend returns 400 — keeping data consistent even if the API is called directly.",
    ],
    learnings: [
      "Separating api.js, ProductCard, and ProductGrid kept the React app readable and easier to extend as features grow.",
      "VITE_API_URL let the same codebase target localhost:5000 locally and the Render URL in production without code changes.",
      "Low-stock business logic lives in the UI from threshold data returned by the API — keeping the backend focused on data and validation.",
      "End-to-end ownership — building, deploying, and documenting the full stack strengthened how frontend, API, and hosting fit together.",
    ],
  },
  {
    slug: "questlytics",
    name: "Questlytics",
    tagline: "Question Paper Upload · LLM EdTech Platform",
    description:
      "Frontend contributor to an open-source, LLM-powered exam-prep platform — responsive upload page with multi-file selection, mobile nav, and Vercel deployment (vanilla HTML/CSS/JS).",
    overview:
      "Questlytics uses LLMs to analyze past question papers and surface topic weightage so exam prep is data-driven, not guesswork. I contributed the upload page UI — the first step students take before papers enter the analysis pipeline. The core product (FastAPI backend, PyMuPDF text extraction, OpenAI topic analysis) is built by the main team; my shipped work is the responsive, student-focused entry point deployed on Vercel.",
    roleSummary:
      "Frontend contributor — designed and built the question-paper upload page in HTML, CSS, and vanilla JavaScript. Delivered responsive layout, click-to-browse multi-file upload (PDF, DOCX, JPEG), per-file remove controls, hamburger navigation, and static deployment on Vercel. Part of the broader Questlytics open-source project led by the main team.",
    roleSectionTitle: "Frontend contribution",
    scopeLabel: "Frontend Contribution",
    story: [
      "Students preparing for exams often have years of past question papers but no clear way to see which topics matter most. Questlytics addresses that with LLM-driven topic weightage — and the first friction point is getting papers into the system quickly from any device.",
      "I built the upload UX that students see first: a clean, mobile-first page where they select multiple files, review the list, remove mistakes, and proceed toward analysis. The layout uses Flexbox with breakpoints at 768px and 480px, a collapsible hamburger nav linking Home, Overview, and GitHub, and vanilla JavaScript for dynamic file list management — no React on this surface.",
      "Upload UX is live on Vercel; the analysis pipeline (backend text extraction and LLM weightage results) is part of the broader Questlytics platform maintained upstream. That honest split — my UI as the on-ramp, the team's backend as the engine — is how the product is structured today.",
    ],
    platformContext:
      "The broader Questlytics platform uses React 19, Vite, Tailwind CSS on the frontend and FastAPI, Uvicorn, SQLAlchemy, PyMuPDF, and the OpenAI API on the backend. My contribution is the static upload entry page; full drag-and-drop wiring, Start Analysis API integration, and LLM results screens are planned as part of the main product roadmap.",
    liveUrl: "https://questlytics-beta.vercel.app",
    githubUrl: "https://github.com/Alwin-385/Questlytics",
    upstreamGithubUrl: "https://github.com/NivinLouis/Questlytics",
    status: "live",
    featured: false,
    theme: "questlytics",
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    features: [
      {
        title: "Responsive Upload Page",
        description:
          "Mobile-first layout with Flexbox breakpoints at 768px and 480px — built for students on phones as much as laptops.",
      },
      {
        title: "Multi-File Selection",
        description:
          "Click-to-browse upload for PDF, DOCX, and JPEG with a dynamic file list and per-file remove controls in vanilla JavaScript.",
      },
      {
        title: "Student-Focused Navigation",
        description:
          "Hamburger menu with Home, Overview, and GitHub links — clean entry point into the broader Questlytics platform.",
      },
      {
        title: "Live Vercel Deployment",
        description:
          "Static frontend deployed on Vercel — no backend cold starts; upload UX is immediately accessible.",
      },
    ],
    challenges: [
      "Building a polished upload experience without React — pure HTML, CSS, and JavaScript with responsive layout and mobile navigation.",
      "Designing for touch targets, typography, and collapsible menus so the flow works on phones, not just desktops.",
      "Multi-file handling in vanilla JS — dynamic DOM updates, remove buttons, and clean state without a component framework.",
      "Contributing to a larger open-source product where the upload UI must fit the platform vision and link coherently to the main app.",
    ],
    learnings: [
      "Upload flows are high-impact UX — friction at step one undermines the entire product, even when the backend AI is strong.",
      "Mobile-first layout is not optional for student tools; most users will reach for their phone first.",
      "Vanilla DOM APIs, CSS layout, and event handling remain essential skills alongside framework work.",
      "Clear scope in a team project — my upload page versus the team's LLM backend — makes portfolio storytelling sharper and more credible.",
    ],
    roadmapItems: [
      "Wire drag-and-drop event handlers (UI copy is in place; JS integration is the next step).",
      "Connect Start Analysis to the FastAPI backend.",
      "Add client-side validation for file size (10 MB) and accepted types.",
    ],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;

export const otherProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): ProjectSlug[] {
  return projects.map((p) => p.slug);
}
