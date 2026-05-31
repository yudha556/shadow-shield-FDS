import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"
import type { TransactionDetail } from "@/types/transaction"

interface TransactionMetadataProps {
  tx: TransactionDetail
}

function MetaRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className={`text-xs font-mono font-medium ${accent ? "text-primary" : "text-foreground"}`}>
        {value}
      </span>
    </div>
  )
}

export function TransactionMetadata({ tx }: TransactionMetadataProps) {
  const rupiahAmount = `Rp${tx.amount.toLocaleString("id-ID", { minimumFractionDigits: 0 })}`

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2 text-primary">
          <FileText className="w-4 h-4 text-primary" />
          Metadata Transaksi
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <MetaRow label="Nominal Asal" value={rupiahAmount} />
        <MetaRow label="Tipe Aset" value={tx.assetType} />
        <MetaRow label="Pengirim" value={tx.sender} accent />
        <MetaRow label="Tujuan On-Ramp" value={tx.receiver} accent />
        <MetaRow label="Biaya Jaringan" value={tx.networkFee} />
        <MetaRow label="Smart Contract" value={tx.smartContract} accent />
      </CardContent>
    </Card>
  )
}
