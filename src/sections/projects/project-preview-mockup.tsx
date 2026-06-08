import type { ProjectTheme } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectPreviewMockupProps = {
  theme: ProjectTheme;
  projectName: string;
  className?: string;
};

export function ProjectPreviewMockup({
  theme,
  projectName,
  className,
}: ProjectPreviewMockupProps) {
  return (
    <div
      className={cn(
        "project-preview relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-card-token)]",
        "border border-default shadow-elevation-md",
        className,
      )}
      aria-hidden
    >
      {theme === "civic" ? <CivicPulsePreview /> : null}
      {theme === "inventory" ? <InventoryPreview /> : null}
      {theme === "questlytics" ? <QuestlyticsPreview /> : null}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      <span className="absolute bottom-3 left-4 text-[10px] font-medium text-white/50">
        {projectName}
      </span>
    </div>
  );
}

function CivicPulsePreview() {
  return (
    <div className="flex h-full bg-[oklch(0.1_0.02_240)]">
      <div className="hidden w-[35%] border-r border-white/8 bg-black/30 p-3 sm:block">
        <div className="mb-3 flex items-center gap-1.5">
          <div className="size-3 rounded bg-emerald-500/80" />
          <span className="text-[9px] font-semibold text-white">CivicPulse</span>
        </div>
        {["Report Issue", "My Reports", "Map View", "Analytics"].map((item, i) => (
          <div
            key={item}
            className={cn(
              "mb-1 rounded px-2 py-1 text-[8px]",
              i === 0 ? "bg-emerald-500/20 text-emerald-300" : "text-white/40",
            )}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[9px] font-medium text-white">Report an Issue</span>
          <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[7px] text-emerald-300">
            Live
          </span>
        </div>
        <div className="mb-2 flex-1 rounded-lg border border-white/10 bg-[oklch(0.15_0.03_200)] p-2">
          <div className="mb-1.5 h-16 rounded bg-emerald-900/30">
            <div className="flex h-full items-center justify-center">
              <div className="size-4 rounded-full border-2 border-emerald-400 bg-emerald-400/30" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-3/4 rounded bg-white/15" />
            <div className="h-1.5 w-1/2 rounded bg-white/10" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {["Open", "In Progress", "Resolved"].map((s, i) => (
            <div key={s} className="rounded bg-white/5 p-1.5 text-center">
              <p className="text-[10px] font-semibold text-white">{12 - i * 3}</p>
              <p className="text-[7px] text-white/40">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InventoryPreview() {
  return (
    <div className="flex h-full flex-col bg-[oklch(0.09_0.015_260)] p-3">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[9px] font-semibold text-white">Inventory Dashboard</span>
        <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[7px] text-amber-300">
          3 alerts
        </span>
      </div>
      <div className="mb-2 grid grid-cols-3 gap-1.5">
        {[
          { label: "Total SKUs", value: "248" },
          { label: "Low Stock", value: "12" },
          { label: "Critical", value: "3" },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg border border-white/8 bg-white/5 p-2">
            <p className="text-[7px] text-white/40">{label}</p>
            <p className="text-sm font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-1 overflow-hidden rounded-lg border border-white/8 bg-white/3 p-2">
        <p className="text-[8px] text-white/40">Stock levels</p>
        {[
          { name: "Widget A", pct: 85 },
          { name: "Widget B", pct: 22 },
          { name: "Widget C", pct: 8 },
        ].map(({ name, pct }) => (
          <div key={name} className="flex items-center gap-2">
            <span className="w-12 truncate text-[8px] text-white/60">{name}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
              <div
                className={cn(
                  "h-full rounded-full",
                  pct < 15 ? "bg-red-400" : pct < 30 ? "bg-amber-400" : "bg-blue-400",
                )}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuestlyticsPreview() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[oklch(0.08_0.02_290)] p-4">
      <div className="mb-3 text-center">
        <span className="text-[10px] font-semibold text-white">Questlytics</span>
        <p className="text-[8px] text-white/40">Upload question papers</p>
      </div>
      <div className="w-full max-w-[200px] rounded-xl border-2 border-dashed border-purple-400/40 bg-purple-500/10 p-4 text-center">
        <div className="mx-auto mb-2 flex size-8 items-center justify-center rounded-lg bg-purple-500/20">
          <div className="size-4 rounded border-2 border-purple-300/60" />
        </div>
        <p className="text-[9px] font-medium text-purple-200">Drop files here</p>
        <p className="mt-0.5 text-[7px] text-white/35">or click to browse</p>
      </div>
      <div className="mt-3 flex w-full max-w-[200px] flex-col gap-1">
        {["Midterm_2024.pdf", "Final_Paper.pdf"].map((file) => (
          <div
            key={file}
            className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/5 px-2 py-1.5"
          >
            <div className="size-3 rounded bg-purple-400/30" />
            <span className="truncate text-[8px] text-white/70">{file}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
