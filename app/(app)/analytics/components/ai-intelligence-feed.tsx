"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Activity, ShieldAlert } from "lucide-react";

const feeds = [
  {
    Icon: AlertTriangle,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/10 border-orange-400/20",
    title: "Anomaly Detected: High Velocity Cluster",
    body: `AI Engine detected a coordinated burst of 142 transactions originating from 3 newly created wallets within a 5-minute window. Patterns strongly match known "peel chain" laundering techniques.`,
  },
  {
    Icon: Activity,
    iconColor: "text-primary",
    iconBg: "bg-primary/10 border-primary/20",
    title: "Model Performance Update",
    body: "False positive rate has decreased by 0.4% following the latest heuristic weight adjustments. Model confidence remains stable at 99.2% accuracy for tier-1 alerts.",
  },
  {
    Icon: ShieldAlert,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-400/10 border-sky-400/20",
    title: "New Sanctions List Synchronized",
    body: "OFAC SDN list has been re-ingested with 38 new wallet addresses flagged. Real-time screening rules updated across all active transaction monitors.",
  },
];

export function AIIntelligenceFeed() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader className="pb-2 pt-5 px-5">
        <CardTitle className="text-sm font-semibold text-foreground">
          AI Intelligence Feed
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 space-y-3">
        {feeds.map((feed, i) => (
          <div
            key={i}
            className="flex gap-3 p-3 rounded-lg border border-border/40 bg-muted/10 hover:bg-muted/20 transition-colors cursor-default"
          >
            <div
              className={`w-8 h-8 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 ${feed.iconBg}`}
            >
              <feed.Icon className={`w-4 h-4 ${feed.iconColor}`} />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground mb-1 leading-snug">
                {feed.title}
              </p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {feed.body}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}