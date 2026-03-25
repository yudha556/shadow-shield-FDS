"use client";

import { useState } from "react";
import { StatCards } from "./components/stat-cards";
import { FraudVolumeChart } from "./components/fraud-volume-chart";
import { RiskDistribution } from "./components/risk-distribution";
import { AIIntelligenceFeed } from "./components/ai-intelligence-feed";
import { ThreatActorsTable } from "./components/threat-actors-table";
import dynamic from "next/dynamic";
const ThreatHeatmap = dynamic(
  () => import("./components/threat-heatmap").then((mod) => mod.ThreatHeatmap),
  { 
    ssr: false,
    loading: () => <div className="h-[300px] w-full bg-muted animate-pulse rounded-lg border border-border/30" /> 
  }
);

const TIME_RANGES = ["24h", "7d", "30d", "YTD"] as const;

export default function AnalyticPage() {
  const [activeRange, setActiveRange] = useState<string>("7d");

  return (
    <div className="min-h-screen bg-background p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Risk Analytics
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Real-time fraud intelligence overview
          </p>
        </div>

        <div className="flex items-center gap-1 bg-card border border-border/60 rounded-lg p-1">
          {TIME_RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setActiveRange(r)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                activeRange === r
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <StatCards />

      <div className="grid grid-cols-3 gap-4">
        <FraudVolumeChart />   
        <RiskDistribution />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ThreatHeatmap />
        <AIIntelligenceFeed />
      </div>

      <ThreatActorsTable />

    </div>
  );
}