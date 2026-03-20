import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit, AlertOctagon, AlertTriangle, Info } from "lucide-react"
import type { AiInsight } from "@/types/transaction"
import { cn } from "@/lib/utils"

interface AiInsightsProps {
  insights: AiInsight[]
}

function getSeverityStyles(severity: AiInsight["severity"]) {
  switch (severity) {
    case "critical":
      return {
        border: "border-red-500/30",
        bg: "bg-red-500/5",
        icon: <AlertOctagon className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />,
        titleColor: "text-red-400",
      }
    case "warning":
      return {
        border: "border-amber-500/30",
        bg: "bg-amber-500/5",
        icon: <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />,
        titleColor: "text-amber-400",
      }
    default:
      return {
        border: "border-primary/30",
        bg: "bg-primary/5",
        icon: <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />,
        titleColor: "text-primary",
      }
  }
}

export function AiInsights({ insights }: AiInsightsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <BrainCircuit className="w-4 h-4 text-primary" />
          AI Anomaly Detection Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        {insights.map((insight) => {
          const styles = getSeverityStyles(insight.severity)
          return (
            <div
              key={insight.id}
              className={cn("rounded-lg border p-3 flex gap-3", styles.border, styles.bg)}
            >
              {styles.icon}
              <div className="space-y-1">
                <p className={cn("text-xs font-semibold", styles.titleColor)}>{insight.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{insight.description}</p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}