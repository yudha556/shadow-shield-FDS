"use client";

import { AlertCard, AlertItem, RiskLevel } from "./alert-card";

interface AlertListProps {
  alerts: AlertItem[];
  activeFilter: string;
}

const filterMap: Record<string, RiskLevel[]> = {
  all: ["critical", "warning", "medium", "low"],
  critical: ["critical"],
  review: ["warning", "medium"],
  resolved: [],
};

export function AlertList({ alerts, activeFilter }: AlertListProps) {
  const allowedLevels = filterMap[activeFilter] ?? [];

  const filtered =
    activeFilter === "resolved"
      ? []
      : alerts.filter((a) => allowedLevels.includes(a.riskLevel));

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-muted-foreground text-sm">No alerts found for this filter.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {filtered.map((alert) => (
        <AlertCard key={alert.id} alert={alert} />
      ))}
    </div>
  );
}