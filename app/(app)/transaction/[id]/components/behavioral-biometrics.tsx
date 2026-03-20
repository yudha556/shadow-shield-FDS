import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Fingerprint } from "lucide-react"
import type { BiometricItem } from "@/types/transaction"
import { cn } from "@/lib/utils"

interface BehavioralBiometricsProps {
  items: BiometricItem[]
}

function getBarColor(value: number, threshold: number) {
  const ratio = value / threshold
  if (ratio >= 1) return "bg-emerald-500"
  if (ratio >= 0.6) return "bg-amber-400"
  return "bg-red-500"
}

function getValueColor(value: number, threshold: number) {
  const ratio = value / threshold
  if (ratio >= 1) return "text-emerald-400"
  if (ratio >= 0.6) return "text-amber-400"
  return "text-red-400"
}

export function BehavioralBiometrics({ items }: BehavioralBiometricsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2 text-primary">
          <Fingerprint className="w-4 h-4 " />
          Behavioral Biometrics
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        {items.map((item) => (
          <div key={item.label} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{item.label}</span>
              <span className={cn("text-xs font-bold tabular-nums", getValueColor(item.value, item.threshold))}>
                {item.value}%
              </span>
            </div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <div
                className={cn("h-full rounded-full transition-all", getBarColor(item.value, item.threshold))}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}