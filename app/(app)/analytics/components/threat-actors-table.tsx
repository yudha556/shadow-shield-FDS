"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Actor = {
  address: string;
  threat: string;
  volume: string;
  score: number;
  action: string;
  actionDanger: boolean;
  dotColor: string;
};

const actors: Actor[] = [
  {
    address: "0x7a9...1B1",
    threat: "Darknet Mixer Interaction",
    volume: "$1.24M",
    score: 91,
    action: "Enforce Block",
    actionDanger: true,
    dotColor: "#ef4444",
  },
  {
    address: "0x3B2...8C4",
    threat: "Sanctioned IP Origin",
    volume: "$450k",
    score: 68,
    action: "Hold Funds",
    actionDanger: false,
    dotColor: "#f59e0b",
  },
  {
    address: "0x9F1...3E6",
    threat: "Velocity Alert (Micro-tx)",
    volume: "$89k",
    score: 35,
    action: "Hold Funds",
    actionDanger: false,
    dotColor: "#22c55e",
  },
];

function scoreColor(score: number) {
  if (score > 80) return "#ef4444";
  if (score > 50) return "#f59e0b";
  return "#22c55e";
}

const COLS = [
  "ENTITY ADDRESS",
  "PRIMARY THREAT VECTOR",
  "VOLUME FLAGGED",
  "RISK SCORE",
  "SUGGESTED ACTION",
];

export function ThreatActorsTable() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader className="pb-0 pt-5 px-5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-foreground">
            Top Active Threat Actors
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs border-primary/40 text-primary hover:bg-primary/10 hover:text-primary cursor-pointer"
          >
            View Full Directory
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-5 mt-4">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 px-3 pb-2.5 border-b border-border/40">
          {COLS.map((h) => (
            <span
              key={h}
              className="text-[10px] font-semibold text-muted-foreground tracking-widest uppercase"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        <div className="divide-y divide-border/20">
          {actors.map((actor) => {
            const sc = scoreColor(actor.score);
            return (
              <div
                key={actor.address}
                className="grid grid-cols-5 gap-4 items-center px-3 py-3.5 hover:bg-muted/15 transition-colors rounded-lg"
              >
                {/* Address */}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${actor.dotColor}18`,
                      border: `1px solid ${actor.dotColor}35`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: actor.dotColor }}
                    />
                  </div>
                  <span className="text-xs font-mono text-foreground">{actor.address}</span>
                </div>

                {/* Threat */}
                <span className="text-xs text-muted-foreground">{actor.threat}</span>

                {/* Volume */}
                <span className="text-xs font-semibold text-foreground">{actor.volume}</span>

                {/* Score */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-muted/30 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${actor.score}%`, backgroundColor: sc }}
                    />
                  </div>
                  <span
                    className="text-xs font-bold tabular-nums w-6 text-right"
                    style={{ color: sc }}
                  >
                    {actor.score}
                  </span>
                  <span className="text-[10px] text-muted-foreground">/100</span>
                </div>

                {/* Action */}
                <div>
                  {actor.actionDanger ? (
                    <Badge
                      className="text-[10px] font-semibold px-2.5 py-0.5 bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/20 cursor-pointer"
                      variant="outline"
                    >
                      {actor.action}
                    </Badge>
                  ) : (
                    <Badge
                      className="text-[10px] font-semibold px-2.5 py-0.5 bg-muted/30 text-muted-foreground border border-border/50 cursor-pointer"
                      variant="outline"
                    >
                      {actor.action}
                    </Badge>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}