import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export function AlertQueueHeader() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-xl font-bold text-foreground tracking-tight">Alerts Queue</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Manage and resolve detected anomalies and blocked transactions
        </p>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="gap-2 border-border/60 text-muted-foreground hover:text-foreground hover:bg-secondary/60 text-xs"
      >
        <SlidersHorizontal className="w-3.5 h-3.5" />
        Advanced Filters
      </Button>
    </div>
  );
}