"use client";

import { 
    // useCallback, 
    useMemo 
} from "react";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
//   addEdge,
  BackgroundVariant,
  Node,
  Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { TraceIncident } from "./trace-data";
import { TraceNodeComponent } from "./trace-node";

const nodeTypes = {
  traceNode: TraceNodeComponent,
};

// const edgeStyleMap = {
//   safe: { stroke: "#10b981", strokeWidth: 1.5 },
//   suspicious: { stroke: "#f97316", strokeWidth: 2, strokeDasharray: "5 4" },
//   flagged: { stroke: "#ef4444", strokeWidth: 2 },
//   flaggedAnimated: { stroke: "#ef4444", strokeWidth: 2 },
// };

function buildNodes(incident: TraceIncident): Node[] {
  return incident.nodes.map((n) => ({
    id: n.id,
    type: "traceNode",
    position: n.position,
    data: { label: n.label, nodeType: n.type, icon: n.icon },
    draggable: true,
  }));
}

function buildEdges(incident: TraceIncident): Edge[] {
  return incident.edges.map((e) => {
    const sourceNode = incident.nodes.find((n) => n.id === e.source);
    const targetNode = incident.nodes.find((n) => n.id === e.target);

    let strokeColor = "#10b981";
    if (
      sourceNode?.type === "flagged" ||
      targetNode?.type === "flagged" ||
      e.animated
    ) {
      strokeColor = "#ef4444";
    } else if (
      sourceNode?.type === "suspicious" ||
      targetNode?.type === "suspicious"
    ) {
      strokeColor = "#f97316";
    }

    return {
      id: e.id,
      source: e.source,
      target: e.target,
      animated: e.animated ?? false,
      label: e.amount || undefined,
      labelStyle: {
        fill: "#e2e8f0",
        fontSize: 10,
        fontWeight: 600,
        background: "transparent",
      },
      labelBgStyle: {
        fill: "#0f1520",
        fillOpacity: 0.85,
      },
      labelBgPadding: [4, 3] as [number, number],
      labelBgBorderRadius: 3,
      style: {
        stroke: strokeColor,
        strokeWidth: e.animated ? 2 : 1.5,
        strokeDasharray: e.style === "dashed" ? "5 4" : undefined,
      },
      markerEnd:
        e.style !== "dashed"
          ? {
              type: MarkerType.ArrowClosed,
              color: strokeColor,
              width: 14,
              height: 14,
            }
          : undefined,
    };
  });
}

interface TraceGraphCanvasProps {
  incident: TraceIncident;
}

export function TraceGraphCanvas({ incident }: TraceGraphCanvasProps) {
  const initialNodes = useMemo(() => buildNodes(incident), [incident]);
  const initialEdges = useMemo(() => buildEdges(incident), [incident]);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        minZoom={0.4}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
        style={{ background: "transparent" }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="rgba(255,255,255,0.04)"
        />
        <Controls
          className="!bg-card !border-border/60 !rounded-lg overflow-hidden [&>button]:!bg-card [&>button]:!border-border/40 [&>button]:!text-muted-foreground [&>button:hover]:!bg-secondary [&>button:hover]:!text-foreground"
          showInteractive={false}
        />
      </ReactFlow>
    </div>
  );
}