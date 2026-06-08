import type { IntervaiScreenId } from "@/data/intervai";
import { cn } from "@/lib/utils";

type ScreenPreviewProps = {
  screenId: IntervaiScreenId;
  className?: string;
};

export function IntervaiScreenPreview({ screenId, className }: ScreenPreviewProps) {
  return (
    <div
      className={cn(
        "intervai-mock-ui relative h-full w-full overflow-hidden bg-[oklch(0.07_0.015_260)] text-[oklch(0.92_0.01_260)]",
        className,
      )}
    >
      {screenId === "landing" ? <LandingPreview /> : null}
      {screenId === "dashboard" ? <DashboardPreview /> : null}
      {screenId === "interview" ? <InterviewPreview /> : null}
      {screenId === "resume" ? <ResumePreview /> : null}
      {screenId === "analytics" ? <AnalyticsPreview /> : null}
      {screenId === "roadmap" ? <RoadmapPreview /> : null}
    </div>
  );
}

function LandingPreview() {
  return (
    <div className="flex h-full flex-col p-4 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded-md bg-gradient-to-br from-[oklch(0.55_0.2_255)] to-[oklch(0.52_0.22_295)]" />
          <span className="font-semibold text-white">IntervAI</span>
        </div>
        <div className="flex gap-2">
          <span className="rounded-md bg-white/5 px-2 py-1 text-[9px] text-white/60">Sign in</span>
          <span className="rounded-md bg-[oklch(0.55_0.2_255)] px-2 py-1 text-[9px] font-medium text-white">
            Get Started
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
        <span className="rounded-full border border-[oklch(0.55_0.2_255/40)] bg-[oklch(0.55_0.2_255/10%)] px-2.5 py-0.5 text-[8px] uppercase tracking-wider text-[oklch(0.75_0.15_255)]">
          AI Interview Intelligence
        </span>
        <p className="max-w-[85%] text-sm font-semibold leading-tight text-white md:text-base">
          Ace your next interview with adaptive AI mock sessions
        </p>
        <p className="max-w-[75%] text-[9px] text-white/50">
          Resume analysis · Speech feedback · Personalized roadmaps
        </p>
        <div className="mt-1 flex gap-2">
          <span className="rounded-lg bg-white px-3 py-1.5 text-[9px] font-medium text-black">
            Start Free Trial
          </span>
          <span className="rounded-lg border border-white/15 px-3 py-1.5 text-[9px] text-white/70">
            View Demo
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Resume AI", "Mock Interviews", "Analytics"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-white/8 bg-white/3 p-2 text-center text-[8px] text-white/60"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="flex h-full">
      <aside className="hidden w-[28%] border-r border-white/8 bg-black/20 p-3 sm:block">
        <div className="mb-4 flex items-center gap-1.5">
          <div className="size-4 rounded bg-gradient-to-br from-[oklch(0.55_0.2_255)] to-[oklch(0.52_0.22_295)]" />
          <span className="font-semibold text-white">IntervAI</span>
        </div>
        {["Dashboard", "Interviews", "Resume", "Analytics", "Roadmap"].map((item, i) => (
          <div
            key={item}
            className={cn(
              "mb-1 rounded-md px-2 py-1 text-[9px]",
              i === 0 ? "bg-white/10 text-white" : "text-white/45",
            )}
          >
            {item}
          </div>
        ))}
      </aside>
      <div className="flex flex-1 flex-col gap-3 p-3 md:p-4">
        <p className="text-[10px] font-medium text-white">Welcome back, Alwin</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Readiness", value: "78%" },
            { label: "Sessions", value: "12" },
            { label: "Streak", value: "5d" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border border-white/8 bg-white/4 p-2">
              <p className="text-[8px] text-white/45">{label}</p>
              <p className="text-sm font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg border border-white/8 bg-white/3 p-2">
          <p className="mb-2 text-[8px] text-white/45">Recent Sessions</p>
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="mb-1.5 flex items-center justify-between rounded-md bg-black/20 px-2 py-1.5"
            >
              <span className="text-[9px] text-white/70">Frontend Mock #{n}</span>
              <span className="text-[8px] text-[oklch(0.65_0.18_255)]">Score {82 - n * 3}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InterviewPreview() {
  return (
    <div className="flex h-full flex-col p-3 md:p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium text-white">Frontend Developer Mock</p>
          <p className="text-[8px] text-white/45">Question 4 of 8 · Behavioral</p>
        </div>
        <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[8px] text-red-300">
          ● REC
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-hidden">
        <div className="rounded-lg border border-white/8 bg-white/4 p-2.5">
          <p className="mb-1 text-[8px] text-[oklch(0.65_0.18_255)]">Interviewer</p>
          <p className="text-[9px] leading-relaxed text-white/80">
            Tell me about a time you had to optimize a React application for performance.
            What metrics did you track?
          </p>
        </div>
        <div className="rounded-lg border border-[oklch(0.55_0.2_255/30%)] bg-[oklch(0.55_0.2_255/8%)] p-2.5">
          <p className="mb-1 text-[8px] text-white/45">Your response</p>
          <p className="text-[9px] leading-relaxed text-white/60">
            I profiled bundle size with webpack analyzer and reduced LCP from 3.2s to 1.4s...
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[oklch(0.55_0.2_255)]">
          <div className="size-3 rounded-sm bg-white" />
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-0.5 rounded-full bg-[oklch(0.55_0.2_255)]"
              style={{ height: `${8 + Math.sin(i) * 6}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ResumePreview() {
  return (
    <div className="flex h-full gap-3 p-3 md:p-4">
      <div className="flex w-[40%] flex-col gap-2">
        <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/3 p-3">
          <div className="mb-2 size-8 rounded-lg bg-white/8" />
          <p className="text-[9px] font-medium text-white">resume.pdf</p>
          <p className="text-[8px] text-white/40">Parsed successfully</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <p className="text-[10px] font-medium text-white">Analysis Results</p>
        {[
          { skill: "React / Next.js", score: 92 },
          { skill: "System Design", score: 68 },
          { skill: "Communication", score: 74 },
          { skill: "Algorithms", score: 61 },
        ].map(({ skill, score }) => (
          <div key={skill}>
            <div className="mb-0.5 flex justify-between text-[8px]">
              <span className="text-white/70">{skill}</span>
              <span className="text-[oklch(0.65_0.18_255)]">{score}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[oklch(0.55_0.2_255)] to-[oklch(0.52_0.22_295)]"
                style={{ width: `${score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  const bars = [45, 62, 58, 71, 68, 78, 82];
  return (
    <div className="flex h-full flex-col p-3 md:p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[10px] font-medium text-white">Performance Analytics</p>
        <span className="rounded-md bg-white/8 px-2 py-0.5 text-[8px] text-white/50">Last 7 sessions</span>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-2">
        {[
          { label: "Avg Score", value: "76.4" },
          { label: "Improvement", value: "+12%" },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg border border-white/8 bg-white/4 p-2">
            <p className="text-[8px] text-white/45">{label}</p>
            <p className="text-sm font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-white/8 bg-white/3 p-3">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-t-sm bg-gradient-to-t from-[oklch(0.55_0.2_255)] to-[oklch(0.52_0.22_295/60%)]"
              style={{ height: `${h}%` }}
            />
            <span className="text-[7px] text-white/30">S{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RoadmapPreview() {
  const steps = [
    { title: "System Design Basics", status: "done" },
    { title: "Behavioral STAR Method", status: "active" },
    { title: "Advanced React Patterns", status: "upcoming" },
    { title: "Mock Interview Sprint", status: "upcoming" },
  ];

  return (
    <div className="flex h-full flex-col p-3 md:p-4">
      <p className="mb-1 text-[10px] font-medium text-white">Your Improvement Roadmap</p>
      <p className="mb-3 text-[8px] text-white/45">Based on weak areas detected in last 3 sessions</p>
      <div className="flex flex-1 flex-col gap-0">
        {steps.map((step, i) => (
          <div key={step.title} className="flex gap-2">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "size-3 rounded-full border-2",
                  step.status === "done" && "border-[oklch(0.55_0.2_255)] bg-[oklch(0.55_0.2_255)]",
                  step.status === "active" &&
                    "border-[oklch(0.55_0.2_255)] bg-[oklch(0.55_0.2_255/30%)]",
                  step.status === "upcoming" && "border-white/20 bg-transparent",
                )}
              />
              {i < steps.length - 1 ? (
                <div className="intervai-arch-connector w-px flex-1 min-h-4" />
              ) : null}
            </div>
            <div className="mb-3 flex-1 rounded-lg border border-white/8 bg-white/3 p-2">
              <p className="text-[9px] font-medium text-white">{step.title}</p>
              <p className="text-[8px] text-white/40">
                {step.status === "done"
                  ? "Completed"
                  : step.status === "active"
                    ? "In progress · 2 of 5 modules"
                    : "Up next"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
