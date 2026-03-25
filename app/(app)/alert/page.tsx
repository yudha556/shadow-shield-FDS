"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { AlertFilterTabs } from "@/app/(app)/alert/components/alert-filter-tabs";
import { AlertList } from "@/app/(app)/alert/components/alert-list";
import { DUMMY_ALERTS } from "@/app/(app)/alert/data/alert-data";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function AlertPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="flex flex-col gap-5  w-full mx-auto">
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

      <div className="flex flex-col gap-3">
        <AlertFilterTabs active={activeFilter} onChange={setActiveFilter} />
        <Separator className="bg-border/50" />
      </div>

      <AlertList alerts={DUMMY_ALERTS} activeFilter={activeFilter} />
    </div>
  );
}