import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitFork, AlertTriangle } from "lucide-react"
import type { BlockchainNode } from "@/types/transaction"
import { cn } from "@/lib/utils"

interface BlockchainTraceProps {
  nodes: BlockchainNode[]
}

function NodeBox({ node }: { node: BlockchainNode }) {
  const isMixer = node.type === "mixer"
  const isOrigin = node.type === "origin"
  const isReceiver = node.type === "receiver"
  const isDirect = node.type === "direct" || node.type === "bridge"

  if (isDirect) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="h-px w-8 bg-border" />
        <span className="text-[10px] text-muted-foreground mt-1">{node.label}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={cn(
          "rounded-md px-3 py-2 text-center border min-w-[90px]",
          isMixer
            ? "border-red-500/50"
            : isOrigin || isReceiver
            ? "border-border bg-card"
            : "border-border bg-card"
        )}
      >
        <p className={cn("text-[10px] font-semibold tracking-wide", isMixer ? "text-red-400" : "text-muted-foreground")}>
          {node.label}
        </p>
        <p className={cn("text-[11px] font-mono font-medium mt-0.5", isMixer ? "text-red-300" : "text-foreground")}>
          {node.address}
        </p>
        {isMixer && node.flagLabel && (
          <div className="flex items-center justify-center gap-1 mt-1">
            <AlertTriangle className="w-2.5 h-2.5 text-red-400" />
            <span className="text-[9px] text-red-400 font-medium">{node.flagLabel}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export function BlockchainTrace({ nodes }: BlockchainTraceProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2 text-primary">
          <GitFork className="w-4 h-4 " />
          Blockchain Trace Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between overflow-x-auto py-2 gap-1">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex items-center gap-1">
              <NodeBox node={node} />
              {i < nodes.length - 1 && node.type !== "direct" && node.type !== "bridge" && (
                <div className="flex items-center">
                  <div className="h-px w-4 bg-border" />
                  <div className="w-1.5 h-1.5 rounded-full bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}