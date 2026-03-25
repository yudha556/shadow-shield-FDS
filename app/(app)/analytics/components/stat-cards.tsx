"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Eye, BarChart2 } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ElementType;
};

const stats: StatCardProps[] = [
  {
    label: "Fraud Rate",
    value: "0.84%",
    change: "+0.12% vs last 7d",
    positive: false,
    icon: AlertTriangle,
  },
  {
    label: "Detection Accuracy",
    value: "99.2%",
    change: "-0.18% vs last 7d",
    positive: false,
    icon: CheckCircle,
  },
  {
    label: "False Positives",
    value: "1.20%",
    change: "-0.45% vs last 7d",
    positive: true,
    icon: Eye,
  },
  {
    label: "Flagged Volume",
    value: "$14.2M",
    change: "+12.4% vs last 7d",
    positive: false,
    icon: BarChart2,
  },
];

function StatCard({ label, value, change, positive, icon: Icon }: StatCardProps) {
  return (
    <Card className="bg-card border-border/60 relative overflow-hidden group hover:border-primary/30 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            {label}
          </span>
          <div className="w-7 h-7 rounded-md bg-muted/60 flex items-center justify-center">
            <Icon className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>
        <div className="text-[1.6rem] font-bold text-foreground tracking-tight mb-2">
          {value}
        </div>
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            positive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {positive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{change}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}