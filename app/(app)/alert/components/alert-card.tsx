import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AlertBadge } from "./alert-badge";
import { Hash, Copy, ShieldX, Lock, RefreshCw, ShieldCheck, Zap, AlertTriangle } from "lucide-react";

export type RiskLevel = "critical" | "warning" | "medium" | "low";

export interface AlertAction {
  label: string;
  variant?: "default" | "outline" | "destructive";
  icon?: "block" | "hold" | "review" | "reauth" | "safe" | "freeze";
  primary?: boolean;
}

export interface AlertItem {
  id: string;
  txId: string;
  walletAddress: string;
  title: string;
  riskLevel: RiskLevel;
  riskScore: number;
  description: string;
  timeAgo: string;
  icon: "biometrics" | "wallet" | "session" | "velocity";
  actions: AlertAction[];
}

const iconMap = {
  biometrics: { Icon: AlertTriangle, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
  wallet: { Icon: RefreshCw, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  session: { Icon: Lock, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  velocity: { Icon: Zap, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
};

const actionIconMap = {
  block: ShieldX,
  hold: Lock,
  review: ShieldCheck,
  reauth: RefreshCw,
  safe: ShieldCheck,
  freeze: Zap,
};

const borderColorMap: Record<RiskLevel, string> = {
  critical: "border-l-red-500",
  warning: "border-l-orange-500",
  medium: "border-l-yellow-500",
  low: "border-l-blue-500",
};

interface AlertCardProps {
  alert: AlertItem;
}

export function AlertCard({ alert }: AlertCardProps) {
  const { Icon, color, bg } = iconMap[alert.icon];

  return (
    <Card
      className={cn(
        "bg-card border border-border/60 border-l-2 rounded-lg px-5 py-4 transition-all duration-200 hover:border-border hover:bg-card/80",
        borderColorMap[alert.riskLevel]
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          <div className={cn("mt-0.5 flex-shrink-0 w-9 h-9 rounded-md border flex items-center justify-center", bg)}>
            <Icon className={cn("w-4 h-4", color)} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <h3 className="text-sm font-semibold text-foreground leading-snug">{alert.title}</h3>
              <AlertBadge level={alert.riskLevel} score={alert.riskScore} />
            </div>

            <div className="flex items-center gap-3 mb-2.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Hash className="w-3 h-3" />
                {alert.txId}
              </span>
              <Separator orientation="vertical" className="h-3" />
              <span className="flex items-center gap-1">
                <Copy className="w-3 h-3" />
                {alert.walletAddress}
              </span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mb-3 max-w-xl">
              {alert.description}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {alert.actions.map((action, idx) => {
                const ActionIcon = action.icon ? actionIconMap[action.icon] : null;
                return (
                  <Button
                    key={idx}
                    size="sm"
                    variant={action.primary ? "default" : "outline"}
                    className={cn(
                      "h-7 text-xs font-medium gap-1.5 rounded-md cursor-pointer",
                      action.primary && "bg-primary text-primary-foreground hover:bg-primary/90",
                      !action.primary && "border-border/60 text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                      action.variant === "destructive" && "border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                    )}
                  >
                    {ActionIcon && <ActionIcon className="w-3 h-3" />}
                    {action.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <span className="flex-shrink-0 text-xs text-muted-foreground whitespace-nowrap mt-0.5">
          {alert.timeAgo}
        </span>
      </div>
    </Card>
  );
}