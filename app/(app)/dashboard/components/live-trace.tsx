'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitCommit } from "lucide-react";
import { 
  ReactFlow, 
  Handle, 
  Position, 
  Edge, 
  Node, 
  MarkerType 
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

function CustomTraceNode({ data }: { data: any }) {
  const borderColors: Record<string, string> = {
    cyan: "border-cyan-500",
    orange: "border-orange-500",
    red: "border-red-500",
    muted: "border-muted-foreground",
  };

  const borderColor = borderColors[data.color] || borderColors.muted;
  const sizeClass = data.size === "small" ? "w-5 h-5" : "w-8 h-8";

  return (
    <div className="flex flex-col items-center justify-center relative">
      <Handle type="target" position={Position.Left} className="opacity-0" />
      
      {data.labelTop && (
        <div className={`absolute -top-6 text-xs whitespace-nowrap ${data.textClass || 'font-semibold text-foreground'}`}>
          {data.label}
        </div>
      )}

      <div className={`${sizeClass} rounded-full border-2 bg-background ${borderColor} z-10`} />

      {!data.labelTop && (
        <div className="absolute top-full mt-2 flex flex-col items-center whitespace-nowrap">
          <span className={`text-xs ${data.textClass || 'font-semibold text-foreground'}`}>
            {data.label}
          </span>
          {data.subLabel && (
            <span className="text-[10px] text-muted-foreground">{data.subLabel}</span>
          )}
        </div>
      )}

      <Handle type="source" position={Position.Right} className="opacity-0" />
    </div>
  );
}

const nodeTypes = {
  customTrace: CustomTraceNode,
};


const initialNodes: Node[] = [
  { 
    id: 'sender', 
    position: { x: 0, y: 70 }, 
    type: 'customTrace',
    data: { label: 'Sender', subLabel: '0xBA2...', color: 'cyan', size: 'small' } 
  },
  { 
    id: 'mixer', 
    position: { x: 180, y: 70 }, 
    type: 'customTrace',
    data: { label: 'Mixer Contract', color: 'orange', textClass: 'text-orange-500 font-bold' } 
  },
  { 
    id: 'flagged', 
    position: { x: 380, y: 20 }, 
    type: 'customTrace',
    data: { label: 'Flagged Wallet', color: 'red' } 
  },
  { 
    id: 'darknet', 
    position: { x: 580, y: 20 }, 
    type: 'customTrace',
    data: { label: 'Darknet Market', color: 'red', textClass: 'text-red-500 font-bold', labelTop: true } 
  },
  { 
    id: 'unknown', 
    position: { x: 380, y: 120 }, 
    type: 'customTrace',
    data: { label: 'Unknown', color: 'muted', size: 'small' } 
  },
];

const initialEdges: Edge[] = [
  { 
    id: 'e-sender-mixer', 
    source: 'sender', 
    target: 'mixer', 
    animated: true, 
    type: 'straight',
    style: { stroke: 'hsl(var(--muted-foreground))', opacity: 0.5, strokeWidth: 2, strokeDasharray: '4 4' } 
  },
  { 
    id: 'e-mixer-flagged', 
    source: 'mixer', 
    target: 'flagged', 
    animated: true, 
    type: 'straight',
    style: { stroke: '#ef4444', strokeWidth: 2 } 
  },
  { 
    id: 'e-flagged-darknet', 
    source: 'flagged', 
    target: 'darknet', 
    animated: true, 
    type: 'straight',
    style: { stroke: '#ef4444', strokeWidth: 2 } 
  },
  { 
    id: 'e-mixer-unknown', 
    source: 'mixer', 
    target: 'unknown', 
    type: 'straight',
    style: { stroke: 'hsl(var(--muted-foreground))', opacity: 0.5, strokeWidth: 2, strokeDasharray: '4 4' } 
  },
];


export function LiveTrace() {
  return (
    <Card className="bg-card border-border/60 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <GitCommit className="h-4 w-4 text-cyan-500" />
          Live Trace Route: TX-992A
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="relative w-full h-[220px] mt-2 bg-background/50 border border-border/40 rounded-lg overflow-hidden">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            colorMode="dark"
            fitView
            fitViewOptions={{ padding: 0.5 }}
            nodesDraggable={false}
            panOnDrag={false}
            zoomOnScroll={false}
            zoomOnDoubleClick={false}
            preventScrolling={false}
          />
        </div>
      </CardContent>
    </Card>
  );
}