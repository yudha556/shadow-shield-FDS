"use client"

import { Button } from "@/components/ui/button"
import { ThumbsUp, PauseCircle, ScanFace, FileWarning } from "lucide-react"
import type { Status } from "@/types/transaction"

interface ResolutionActionsProps {
  status: Status
  txId: string
}

export function ResolutionActions({ status, txId }: ResolutionActionsProps) {
  return (
    <div className="sticky bottom-0 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 px-6 py-3">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex-1">
          <p className="text-xs font-semibold text-foreground">Resolution Actions</p>
          <p className="text-[11px] text-muted-foreground">Select the next step for this transaction</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            size="sm"
            className="h-9 gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            Force Approve
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-9 gap-2 border-amber-500/40 text-amber-400 hover:bg-amber-500/10 text-xs font-semibold"
          >
            <PauseCircle className="w-3.5 h-3.5" />
            Extend Hold
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-9 gap-2 border-primary/40 text-primary hover:bg-primary/10 text-xs font-semibold"
          >
            <ScanFace className="w-3.5 h-3.5" />
            Trigger Face Verification
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-9 gap-2 border-red-500/40 text-red-400 hover:bg-red-500/10 text-xs font-semibold"
          >
            <FileWarning className="w-3.5 h-3.5" />
            Confirm Block &amp; Report
          </Button>
        </div>
      </div>
    </div>
  )
}