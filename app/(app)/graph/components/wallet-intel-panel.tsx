"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X, AlertCircle, AlertTriangle, FileText, ShieldBan, Skull } from "lucide-react";
import { WalletIntelligence, RiskFactor } from "./trace-data";
import { cn } from "@/lib/utils";

const riskIcon = {
  critical: <AlertCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />,
  warning: <AlertTriangle className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />,
  medium: <AlertTriangle className="w-3.5 h-3.5 text-yellow-400 mt-0.5 shrink-0" />,
};

interface WalletIntelPanelProps {
  data: WalletIntelligence;
  onClose: () => void;
}

export function WalletIntelPanel({ data, onClose }: WalletIntelPanelProps) {
  return (
    <div className="flex flex-col h-full bg-sidebar border-l border-border/60 w-[280px] shrink-0 overflow-hidden">

      <div className="flex items-center justify-between px-4 pt-4 pb-3 shrink-0">
        <h2 className="text-sm font-semibold text-foreground">Wallet Intelligence</h2>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col items-center gap-2 py-3 px-4 shrink-0">
        <div className="w-14 h-14 rounded-full border-2 border-red-500 bg-red-500/10 flex items-center justify-center shadow-[0_0_18px_rgba(239,68,68,0.35)]">
          <Skull className="w-6 h-6 text-red-400" />
        </div>
        <span className="text-sm font-bold text-foreground tracking-wide">{data.address}</span>
        <Badge className="bg-red-500/15 text-red-400 border border-red-500/30 text-xs font-semibold gap-1 hover:bg-red-500/15">
          <AlertCircle className="w-3 h-3" />
          Critical Risk ({data.riskScore}/100)
        </Badge>
      </div>

      <Separator className="bg-border/50 mx-4 shrink-0" />

      <div className="px-4 pt-3 pb-3 shrink-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
          Entity Details
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { label: "Total Volume", value: data.entityDetails.totalVolume },
            { label: "Tx Count", value: data.entityDetails.txCount.toString() },
            { label: "First Seen", value: data.entityDetails.firstSeen },
            { label: "Last Active", value: data.entityDetails.lastActive },
          ].map((item) => (
            <div key={item.label} className="bg-card rounded-md px-3 py-2 border border-border/40">
              <p className="text-[9px] text-muted-foreground uppercase tracking-wide mb-0.5">
                {item.label}
              </p>
              <p className="text-xs font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-border/50 mx-4 shrink-0" />

      <div className="px-4 pt-3 pb-3 shrink-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
          Risk Factors
        </p>
        <div className="flex flex-col gap-2">
          {data.riskFactors.map((factor: RiskFactor, idx: number) => (
            <div key={idx} className="flex items-start gap-2">
              {riskIcon[factor.level]}
              <span className="text-xs text-muted-foreground leading-snug">{factor.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-border/50 mx-4 shrink-0" />

      <div className="px-4 pt-3 flex flex-col flex-1 min-h-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2 shrink-0">
          Recent Transactions
        </p>
        <div className="flex flex-col gap-2 flex-1 justify-evenly">
          {data.recentTxs.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between bg-card rounded-md px-3 py-2.5 border border-border/40"
            >
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold",
                    tx.positive
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-red-500/15 text-red-400"
                  )}
                >
                  {tx.positive ? "↑" : "↓"}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">{tx.txId}</p>
                  <p className="text-[10px] text-muted-foreground">{tx.date}</p>
                </div>
              </div>
              <span
                className={cn(
                  "text-xs font-bold",
                  tx.positive ? "text-emerald-400" : "text-red-400"
                )}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4 py-4 border-t border-border/50 shrink-0">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-xs font-semibold h-9">
          <FileText className="w-3.5 h-3.5" />
          Generate SAR Report
        </Button>
        <Button
          variant="outline"
          className="w-full border-red-500/40 text-red-400 hover:bg-red-500/10 hover:text-red-300 gap-2 text-xs font-semibold h-9"
        >
          <ShieldBan className="w-3.5 h-3.5" />
          Enforce Global Blacklist
        </Button>
      </div>
    </div>
  );
}