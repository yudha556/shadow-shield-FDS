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
        <Row label="Usia Akun" value={data.walletAge} />
        <Row label="Saldo Saat Ini" value={data.currentBalance} />
        <Row
          label="Temuan Sebelumnya"
          value={data.previousFlags}
          danger={data.previousFlags !== "Tidak ada"}
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Status KYC</span>
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
          Reputasi Entitas
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex gap-6">
          <ProfileColumn title="Profil Pengirim" data={reputation.sender} />
          <div className="w-px bg-border" />
          <ProfileColumn title="Profil Penerima" data={reputation.receiver} />
        </div>
      </CardContent>
    </Card>
  )
}
