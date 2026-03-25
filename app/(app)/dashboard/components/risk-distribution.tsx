import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart } from "lucide-react";

export function RiskDistribution() {
  return (
    <Card className="bg-card border-border/60 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <PieChart className="h-4 w-4 text-muted-foreground" />
          Risk Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-6 gap-6">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <path className="text-muted/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
            <path className="text-emerald-500" strokeDasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
            <path className="text-orange-500" strokeDasharray="20, 100" strokeDashoffset="-65" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
            
            <path className="text-red-500" strokeDasharray="15, 100" strokeDashoffset="-85" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">14.2</span>
            <span className="text-[10px] text-muted-foreground">Avg Score</span>
          </div>
        </div>

        <div className="w-full space-y-3 mt-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-sm" /> <span className="text-foreground font-medium">Low Risk (0-30)</span></div>
            <span className="font-bold">65%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-sm" /> <span className="text-foreground font-medium">Med Risk (31-70)</span></div>
            <span className="font-bold">20%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-sm" /> <span className="text-foreground font-medium">High Risk (71+)</span></div>
            <span className="font-bold">15%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}