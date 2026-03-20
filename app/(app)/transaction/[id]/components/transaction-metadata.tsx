import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, FileText } from "lucide-react"
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
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2 text-primary">
          <FileText className="w-4 h-4 text-primary" />
          Transaction Metadata
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <MetaRow label="Amount" value={`$${tx.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}`} />
        <MetaRow label="Asset Type" value={tx.assetType} />
        <MetaRow label="Sender Wallet" value={tx.sender} accent />
        <MetaRow label="Receiver Wallet" value={tx.receiver} accent />
        <MetaRow label="Network Fee (Gas)" value={tx.networkFee} />
        <MetaRow label="Smart Contract" value={tx.smartContract} accent />
      </CardContent>
    </Card>
  )
}