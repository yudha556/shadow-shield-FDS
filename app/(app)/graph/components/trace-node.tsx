"use client";

import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { cn } from "@/lib/utils";
import { ArrowLeftRight, Wallet, Shuffle, Store, HelpCircle } from "lucide-react";
import { NodeType } from "./trace-data";

interface TraceNodeData {
  label: string;
  nodeType: NodeType;
  icon: "exchange" | "wallet" | "mixer" | "merchant" | "unknown";
}

const iconMap = {
  exchange: ArrowLeftRight,
  wallet: Wallet,
  mixer: Shuffle,
  merchant: Store,
  unknown: HelpCircle,
};

const styleMap: Record<NodeType, { ring: string; bg: string; icon: string; glow: string }> = {
  safe: {
    ring: "border-emerald-500",
    bg: "bg-emerald-500/10",
    icon: "text-emerald-400",
    glow: "shadow-[0_0_12px_rgba(16,185,129,0.3)]",
  },
  suspicious: {
    ring: "border-orange-400",
    bg: "bg-orange-500/10",
    icon: "text-orange-400",
    glow: "shadow-[0_0_12px_rgba(251,146,60,0.3)]",
  },
  flagged: {
    ring: "border-red-500",
    bg: "bg-red-500/10",
    icon: "text-red-400",
    glow: "shadow-[0_0_14px_rgba(239,68,68,0.4)]",
  },
};

export const TraceNodeComponent = memo(({ data }: { data: TraceNodeData }) => {
  const Icon = iconMap[data.icon];
  const styles = styleMap[data.nodeType];

  return (
    <div className="flex flex-col items-center gap-1.5 select-none">
      <Handle
        type="target"
        position={Position.Left}
        className="!w-2 !h-2 !border-0 !bg-transparent"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="!w-2 !h-2 !border-0 !bg-transparent"
      />
      <Handle
        type="target"
        position={Position.Top}
        className="!w-2 !h-2 !border-0 !bg-transparent"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-2 !h-2 !border-0 !bg-transparent"
      />

      <div
        className={cn(
          "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
          styles.ring,
          styles.bg,
          styles.glow
        )}
      >
        <Icon className={cn("w-5 h-5", styles.icon)} />
      </div>

      <span className="text-[10px] text-muted-foreground leading-tight text-center max-w-[80px] truncate">
        {data.label}
      </span>
    </div>
  );
});

TraceNodeComponent.displayName = "TraceNodeComponent";