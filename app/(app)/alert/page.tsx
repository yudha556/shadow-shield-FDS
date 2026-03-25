"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { AlertQueueHeader } from "@/app/(app)/alert/components/alert-queue-header";
import { AlertFilterTabs } from "@/app/(app)/alert/components/alert-filter-tabs";
import { AlertList } from "@/app/(app)/alert/components/alert-list";
import { DUMMY_ALERTS } from "@/app/(app)/alert/components/alert-data";

export default function AlertPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="flex flex-col gap-5  w-full mx-auto">
      <AlertQueueHeader />

      <div className="flex flex-col gap-3">
        <AlertFilterTabs active={activeFilter} onChange={setActiveFilter} />
        <Separator className="bg-border/50" />
      </div>

      <AlertList alerts={DUMMY_ALERTS} activeFilter={activeFilter} />
    </div>
  );
}