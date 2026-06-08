import { Clock } from "lucide-react";

import { liveDemoColdStartNote } from "@/data/project-deployment";
import { cn } from "@/lib/utils";

type LiveDemoColdStartNoteProps = {
  className?: string;
};

export function LiveDemoColdStartNote({ className }: LiveDemoColdStartNoteProps) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-[var(--radius-button-token)] border border-accent-blue/25 bg-accent-blue-muted/40 px-4 py-3",
        className,
      )}
      role="note"
    >
      <Clock className="mt-0.5 size-4 shrink-0 text-accent-blue" aria-hidden />
      <p className="text-left text-sm leading-relaxed text-pretty text-muted-foreground">
        <span className="font-medium text-foreground">First load may be slow.</span>{" "}
        {liveDemoColdStartNote}
      </p>
    </div>
  );
}
