import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollText, Info, AlertTriangle, AlertOctagon, CheckCircle2 } from "lucide-react"
import type { AuditEntry } from "@/types/transaction"
import { cn } from "@/lib/utils"

interface AuditLogProps {
  entries: AuditEntry[]
}

function getEntryStyles(type: AuditEntry["type"]) {
  switch (type) {
    case "critical":
      return {
        icon: <AlertOctagon className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />,
        dotColor: "bg-red-500",
        textColor: "text-red-300",
      }
    case "warning":
      return {
        icon: <AlertTriangle className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />,
        dotColor: "bg-amber-400",
        textColor: "text-amber-200",
      }
    case "success":
      return {
        icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />,
        dotColor: "bg-emerald-500",
        textColor: "text-emerald-200",
      }
    default:
      return {
        icon: <Info className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />,
        dotColor: "bg-muted-foreground",
        textColor: "text-foreground",
      }
  }
}

export function AuditLog({ entries }: AuditLogProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2 text-primary">
          <ScrollText className="w-4 h-4 " />
          Audit Log &amp; Timeline
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-0">
          {entries.map((entry, i) => {
            const styles = getEntryStyles(entry.type)
            return (
              <div key={entry.id} className="flex gap-3 relative">
                {i < entries.length - 1 && (
                  <div className="absolute left-[5px] top-5 bottom-0 w-px bg-border" />
                )}
                <div className={cn("w-3 h-3 rounded-full mt-1 shrink-0 z-10 ring-2 ring-background", styles.dotColor)} />
                <div className="pb-4 flex-1">
                  <p className="text-[10px] font-mono text-muted-foreground mb-0.5">{entry.timestamp}</p>
                  <p className={cn("text-xs leading-relaxed", styles.textColor)}>{entry.message}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}