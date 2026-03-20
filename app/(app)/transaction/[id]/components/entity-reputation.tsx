import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck } from "lucide-react"
import type { EntityReputation as EntityReputationType } from "@/types/transaction"

interface EntityReputationCardProps {
  reputation: EntityReputationType
}

function ProfileColumn({
  title,
  data,
}: {
  title: string
  data: EntityReputationType["sender"] | EntityReputationType["receiver"]
}) {
  const isVerified = data.kycTier === "verified"

  return (
    <div className="flex-1 space-y-2">
      <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">{title}</p>
      <div className="space-y-2">
        <Row label="Wallet Age" value={data.walletAge} />
        <Row label="Current Balance" value={data.currentBalance} />
        <Row
          label="Previous Flags"
          value={data.previousFlags}
          danger={data.previousFlags !== "None"}
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">KYC Status</span>
          <Badge
            variant="outline"
            className={
              isVerified
                ? "text-[10px] px-2 py-0 border-primary/40 text-primary bg-primary/10"
                : "text-[10px] px-2 py-0 border-muted-foreground/40 text-muted-foreground"
            }
          >
            {data.kycStatus}
          </Badge>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value, danger }: { label: string; value: string; danger?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className={`text-xs font-medium ${danger ? "text-red-400" : "text-foreground"}`}>
        {value}
      </span>
    </div>
  )
}

export function EntityReputationCard({ reputation }: EntityReputationCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex text-primary items-center gap-2">
          <ShieldCheck className="w-4 h-4 " />
          Entity Reputation
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex gap-6">
          <ProfileColumn title="Sender Profile" data={reputation.sender} />
          <div className="w-px bg-border" />
          <ProfileColumn title="Receiver Profile" data={reputation.receiver} />
        </div>
      </CardContent>
    </Card>
  )
}