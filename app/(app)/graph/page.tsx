"use client";

import { useState } from "react";
import { ReactFlowProvider } from "@xyflow/react";
import { TRACE_INCIDENTS } from "./components/trace-data";
import { IncidentSelector } from "./components//incident-selector";
import { TraceGraphCanvas } from "./components//trace-graph-canvas";
import { WalletIntelPanel } from "./components//wallet-intel-panel";
import { GraphLegend } from "./components//graph-legend";

export default function TraceGraphPage() {
  const [activeIncidentId, setActiveIncidentId] = useState(TRACE_INCIDENTS[0].id);
  const [panelOpen, setPanelOpen] = useState(true);

  const activeIncident = TRACE_INCIDENTS.find((i) => i.id === activeIncidentId)!;

  return (
    <div className="flex h-full overflow-hidden">
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center justify-between  shrink-0">
          <IncidentSelector
            incidents={TRACE_INCIDENTS}
            activeId={activeIncidentId}
            onChange={(id) => {
              setActiveIncidentId(id);
              setPanelOpen(true);
            }}
          />
          {!panelOpen && (
            <button
              onClick={() => setPanelOpen(true)}
              className="text-xs text-primary border border-primary/30 bg-primary/10 px-3 py-1 rounded-md hover:bg-primary/20 transition-colors"
            >
              Show Intelligence
            </button>
          )}
        </div>

        <div className="flex-1 relative overflow-hidden">
          <ReactFlowProvider>
            <TraceGraphCanvas incident={activeIncident} />
          </ReactFlowProvider>

          <div className="absolute bottom-4 right-4 z-10">
            <GraphLegend />
          </div>
        </div>
      </div>

      {panelOpen && (
        <WalletIntelPanel
          data={activeIncident.walletIntelligence}
          onClose={() => setPanelOpen(false)}
        />
      )}
    </div>
  );
}