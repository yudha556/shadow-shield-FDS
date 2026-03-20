import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface RiskScoreCardProps {
  score: number
}

function getRiskLabel(score: number) {
  if (score >= 80) return "Critical Risk Assessment"
  if (score >= 60) return "High Risk Assessment"
  if (score >= 40) return "Medium Risk Assessment"
  return "Low Risk Assessment"
}

function getRiskSubtext(score: number) {
  if (score >= 80) return "Immediate review required. High probability of fraudulent activity."
  if (score >= 60) return "Manual review recommended. Several anomalies detected."
  if (score >= 40) return "Elevated risk detected. Monitor closely."
  return "No significant anomalies detected."
}

function getRiskColor(score: number) {
  if (score >= 80) return "text-red-400"
  if (score >= 60) return "text-amber-400"
  if (score >= 40) return "text-yellow-400"
  return "text-emerald-400"
}

function getRiskBorder(score: number) {
  if (score >= 80) return "border-red-500/40"
  if (score >= 60) return "border-amber-500/40"
  if (score >= 40) return "border-yellow-500/40"
  return "border-emerald-500/40"
}

function getRiskGlow(score: number) {
  if (score >= 80) return "shadow-[inset_0_0_40px_rgba(239,68,68,0.08)]"
  if (score >= 60) return "shadow-[inset_0_0_40px_rgba(245,158,11,0.08)]"
  if (score >= 40) return "shadow-[inset_0_0_40px_rgba(234,179,8,0.08)]"
  return "shadow-[inset_0_0_40px_rgba(16,185,129,0.08)]"
}

export function RiskScoreCard({ score }: RiskScoreCardProps) {
  return (
    <Card className={cn("border", getRiskBorder(score), getRiskGlow(score))}>
      <CardContent className="flex flex-col items-center justify-center py-8 gap-3 text-center">
        <span className={cn("text-7xl font-black tabular-nums leading-none", getRiskColor(score))}>
          {score}
        </span>
        <p className="text-sm font-semibold text-foreground">{getRiskLabel(score)}</p>
        <p className="text-xs text-muted-foreground max-w-[180px] leading-relaxed">
          {getRiskSubtext(score)}
        </p>
      </CardContent>
    </Card>
  )
}