// app/(app)/transaction/[id]/page.tsx

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Ban } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getTransactionDetail, transactions } from "@/lib/dummy-transactions"

import { RiskScoreCard } from "./components/risk-score-card"
import { TransactionMetadata } from "./components/transaction-metadata"
import { AiInsights } from "./components/ai-insights"
import { BehavioralBiometrics } from "./components/behavioral-biometrics"
import { BlockchainTrace } from "./components/blockchain-trace"
import { EntityReputationCard } from "./components/entity-reputation"
import { AuditLog } from "./components/audit-log"
import { ResolutionActions } from "./components/resolution-actions"

interface PageProps {
  params: { id: string }
}

export function generateStaticParams() {
  return transactions.map((t) => ({ id: t.id }))
}

export default function TransactionDetailPage({ params }: PageProps) {
  const tx = getTransactionDetail(params.id)

  if (!tx) notFound()

  const isHeld = tx.status === "Held"

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-auto pb-20">
        <div className=" mx-auto space-y-6">

          <div className="space-y-3">
            <Link
              href="/transaction"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Live Feed
            </Link>

            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-xl font-bold tracking-tight">Transaction Details</h1>
                  {tx.blockedBy && (
                    <Badge
                      variant="outline"
                      className="text-[10px] font-bold tracking-widest px-2 py-0.5 border-red-500/40 text-red-400 bg-red-500/10"
                    >
                      <Ban /> {tx.blockedBy}
                    </Badge>
                  )}
                  {isHeld && (
                    <Badge
                      variant="outline"
                      className="text-[10px] font-bold tracking-widest px-2 py-0.5 border-amber-500/40 text-amber-400 bg-amber-500/10"
                    >
                      ⏸ ON HOLD
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-mono">
                  {tx.txId} • {tx.sender} • {tx.receiver}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground tracking-wide uppercase">Time of Interception</p>
                <p className="text-sm font-mono font-medium text-foreground">
                  {tx.date} • {tx.timeOfInterception}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            <div className="space-y-4">
              <RiskScoreCard score={tx.riskScore} />
              <TransactionMetadata tx={tx} />
              <BehavioralBiometrics items={tx.behavioralBiometrics} />
            </div>

            <div className="lg:col-span-2 space-y-4">
              <AiInsights insights={tx.aiInsights} />
              <BlockchainTrace nodes={tx.blockchainTrace} />
              <EntityReputationCard reputation={tx.entityReputation} />
              <AuditLog entries={tx.auditLog} />
            </div>

          </div>
        </div>
      </div>

      <ResolutionActions status={tx.status} txId={tx.txId} />
    </div>
  )
}