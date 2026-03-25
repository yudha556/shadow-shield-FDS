"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
import { TraceIncident } from "./trace-data";

interface IncidentSelectorProps {
  incidents: TraceIncident[];
  activeId: string;
  onChange: (id: string) => void;
}

export function IncidentSelector({ incidents, activeId, onChange }: IncidentSelectorProps) {
//   const active = incidents.find((i) => i.id === activeId);

  return (
    <div className="flex items-center gap-3">
      <h1 className="text-xl font-bold text-foreground tracking-tight whitespace-nowrap">
        Transaction Trace
      </h1>
      <Select value={activeId} onValueChange={onChange}>
        <SelectTrigger className="h-6 w-auto border-primary/40 bg-primary/10 text-primary text-xs font-medium px-2 gap-1.5 rounded-md focus:ring-0 focus:ring-offset-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-popover border-border/60">
          {incidents.map((incident) => (
            <SelectItem key={incident.id} value={incident.id} className="text-xs cursor-pointer">
              {incident.incidentLabel}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}