import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type RiskLevel = "critical" | "warning" | "medium" | "low";

interface AlertBadgeProps {
  level: RiskLevel;
  score: number;
}

const riskConfig: Record<RiskLevel, { label: string; className: string }> = {
  critical: {
    label: "Critical Risk",
    className: "bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/20",
  },
  warning: {
    label: "Warning",
    className: "bg-orange-500/20 text-orange-400 border-orange-500/30 hover:bg-orange-500/20",
  },
  medium: {
    label: "Medium Risk",
    className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/20",
  },
  low: {
    label: "Low Risk",
    className: "bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/20",
  },
};

export function AlertBadge({ level, score }: AlertBadgeProps) {
  const config = riskConfig[level];
  return (
    <Badge
      variant="outline"
      className={cn("text-xs font-semibold px-2 py-0.5 rounded-sm", config.className)}
    >
      {config.label} ({score})
    </Badge>
  );
}