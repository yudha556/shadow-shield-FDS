'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "12:00", value: 20 },
  { time: "12:03", value: 15 },
  { time: "12:15", value: 40 },
  { time: "12:18", value: 35 },
  { time: "12:30", value: 90 },
  { time: "12:33", value: 70 },
  { time: "12:45", value: 100, isAnomaly: true },
  { time: "12:48", value: 75 },
  { time: "12:54", value: 105 },
  { time: "12:57", value: 80 },
  { time: "13:00", value: 120 },
];

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;

  if (payload.isAnomaly) {
    return (
      <g>
        <circle 
          cx={cx} cy={cy} r={6} 
          fill="#1e293b" stroke="#ef4444" strokeWidth={3} 
          className="animate-pulse" 
        />
        <text 
          x={cx} y={cy - 16} 
          fill="#ef4444" fontSize={10} fontWeight="bold" 
          textAnchor="middle" className="tracking-wider"
        >
          ANOMALY
        </text>
      </g>
    );
  }
  return null;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 border border-border/60 p-3 rounded-lg shadow-xl">
        <p className="text-xs text-muted-foreground mb-1">{label}</p>
        <p className="text-sm font-bold text-cyan-500">
          Threat Level: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export function ThreatActivity() {
  return (
    <Card className="bg-card border-border/60 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <Activity className="h-4 w-4 text-cyan-500" />
          Real-time Threat Activity
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="relative w-full h-[220px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data} 
              margin={{ top: 25, right: 10, left: 10, bottom: 0 }}
            >
              <CartesianGrid 
                vertical={false} 
                stroke="currentColor" 
                strokeOpacity={0.1} 
              />
              
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                dy={10} 
                tickFormatter={(value) => {
                  const allowedLabels = ["12:00", "12:15", "12:30", "12:45", "13:00"];
                  return allowedLabels.includes(value) ? value : "";
                }}
              />
              
              <YAxis hide domain={['dataMin - 10', 'dataMax + 20']} />
              
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "hsl(var(--muted-foreground))", strokeWidth: 1, strokeDasharray: "4 4" }} />
              
              <Line
                type="linear"
                dataKey="value"
                stroke="#06b6d4"
                strokeWidth={3}
                dot={<CustomDot />} 
                activeDot={{ r: 6, fill: "#06b6d4", stroke: "#background", strokeWidth: 2 }} // Efek pas di hover
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}