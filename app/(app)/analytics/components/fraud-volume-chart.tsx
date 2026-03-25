"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import { Download } from "lucide-react";
import { TooltipProps } from "recharts";

const data = [
    { time: "00:00", value: 28 },
    { time: "02:00", value: 38 },
    { time: "04:00", value: 52 },
    { time: "06:00", value: 45 },
    { time: "08:00", value: 70 },
    { time: "10:00", value: 95, highlight: true },
    { time: "12:00", value: 88, highlight: true },
    { time: "14:00", value: 72 },
    { time: "16:00", value: 60 },
    { time: "18:00", value: 55 },
    { time: "20:00", value: 42 },
    { time: "22:00", value: 35 },
];

const CustomTooltip = ({
    active,
    payload,
    label,
}: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
        const value = payload[0]?.value ?? 0;

        return (
            <div className="bg-popover border border-border/60 rounded-lg px-3 py-2 shadow-xl text-xs">
                <p className="text-muted-foreground">{String(label)}</p>

                <p className="text-foreground font-semibold">
                    {payload?.[0]?.value ?? 0} alerts
                </p>
            </div>
        );
    }
    return null;
};

export function FraudVolumeChart() {
    return (
        <Card className="col-span-2 bg-card border-border/60">
            <CardHeader className="pb-2 pt-5 px-5">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-semibold text-foreground">
                        Fraud Detection Volume
                    </CardTitle>
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs gap-1.5 border-border/60 cursor-pointer"
                    >
                        <Download className="w-3 h-3" />
                        Export
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="px-5 pb-5">
                <ResponsiveContainer width="100%" height={210}>
                    <BarChart
                        data={data}
                        margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
                        barCategoryGap="10%"
                    >
                        <CartesianGrid
                            vertical={false}
                            stroke="rgba(255,255,255,0.05)"
                            strokeDasharray="3 3"
                        />
                        <XAxis
                            dataKey="time"
                            tick={{ fontSize: 10, fill: "rgba(255,255,255,0.35)" }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fontSize: 10, fill: "rgba(255,255,255,0.35)" }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                        <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={entry.highlight ? "#7f1d1d" : "oklch(0.546 0.245 262.881)"}
                                    opacity={entry.highlight ? 0.9 : 0.6}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}