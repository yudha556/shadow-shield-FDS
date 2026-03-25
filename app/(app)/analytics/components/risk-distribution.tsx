"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const segments = [
    { label: "High Risk (Flagged)", pct: 15, color: "#ef4444" },
    { label: "Medium Risk (Review)", pct: 25, color: "#f59e0b" },
    { label: "Low Risk (Approved)", pct: 60, color: "#22c55e" },
];

const TOTAL = 8421;

type Arc = {
    label: string;
    pct: number;
    color: string;
    len: number;
    offset: number;
};

function RiskDonutSVG() {
    const r = 60;
    const cx = 80;
    const cy = 80;
    const stroke = 16;
    const circumference = 2 * Math.PI * r;
    const gap = 4;

    let offset: number = 0;

    const arcs: Arc[] = segments.map((s) => {
        const len = Math.max((s.pct / 100) * circumference - gap, 0);

        const arc: Arc = {
            ...s,
            len,
            offset,
        };

        offset += len + gap;
        return arc;
    });

    return (
        <div className="relative w-[160px] h-[160px] flex-shrink-0">
            <svg width="160" height="160" viewBox="0 0 160 160">
                {/* Track */}
                <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth={stroke}
                />
                {arcs.map((arc, i) => (
                    <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill="none"
                        stroke={arc.color}
                        strokeWidth={stroke}
                        strokeDasharray={`${arc.len} ${circumference - arc.len}`}
                        strokeDashoffset={-arc.offset as number}
                        strokeLinecap="butt"
                        style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: `${cx}px ${cy}px`,
                        }}
                    />
                ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-foreground leading-none">
                    {TOTAL.toLocaleString()}
                </span>
                <span className="text-[10px] text-muted-foreground mt-1 tracking-wide">
                    Total Alerts
                </span>
            </div>
        </div>
    );
}

export function RiskDistribution() {
    return (
        <Card className="bg-card border-border/60">
            <CardHeader className="pb-2 pt-5 px-5">
                <CardTitle className="text-sm font-semibold text-foreground">
                    Risk Distribution
                </CardTitle>
            </CardHeader>
            <CardContent className="px-5 pb-5">
                <div className="flex flex-col items-center gap-5">
                    <RiskDonutSVG />
                    <div className="w-full flex flex-col gap-2.5">
                        {segments.map((s) => (
                            <div key={s.label} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-2 h-2 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: s.color }}
                                    />
                                    <span className="text-xs text-muted-foreground">{s.label}</span>
                                </div>
                                <span className="text-xs font-semibold text-foreground">{s.pct}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}