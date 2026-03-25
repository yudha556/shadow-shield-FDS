import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export function RiskThresholds() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Risk Engine Thresholds</CardTitle>
        <p className="text-xs text-muted-foreground mt-1">Configure baseline sensitivity and automated actions for the AI scoring engine.</p>
      </CardHeader>
      
      <CardContent className="space-y-8">
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-foreground">High Risk Action Trigger</span>
            <span className="text-[10px] font-bold text-red-500 uppercase">Critical</span>
          </div>
          <div className="flex gap-4 items-center">
            <Slider defaultValue={[85]} max={100} step={1} className="[&_[role=slider]]:border-cyan-500 [&_.bg-primary]:bg-cyan-500 flex-1" />
            <div className="w-10 h-8 rounded-md bg-background border border-border/60 flex items-center justify-center text-xs font-bold">85</div>
          </div>
          <p className="text-[10px] text-muted-foreground">Transactions scoring above this threshold will be flagged as High Risk.</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-foreground">Medium Risk Review Trigger</span>
            <span className="text-[10px] font-bold text-orange-500 uppercase">Warning</span>
          </div>
          <div className="flex gap-4 items-center">
            <Slider defaultValue={[65]} max={100} step={1} className="[&_[role=slider]]:border-orange-500 [&_.bg-primary]:bg-orange-500 flex-1" />
            <div className="w-10 h-8 rounded-md bg-background border border-border/60 flex items-center justify-center text-xs font-bold">65</div>
          </div>
          <p className="text-[10px] text-muted-foreground">Transactions scoring above this threshold require manual analyst review.</p>
        </div>

        <hr className="border-border/50" />

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-sm font-semibold text-foreground">Auto-Block High Risk Entities</span>
              <p className="text-[10px] text-muted-foreground">Automatically halt transaction execution if sender wallet matches known OFAC sanctions list or scores 95+.</p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-sm font-semibold text-foreground">Velocity Anomaly Detection</span>
              <p className="text-[10px] text-muted-foreground">Flag clusters of rapid micro-transactions originating from new wallets within a 5-minute window.</p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
          </div>
        </div>

      </CardContent>
    </Card>
  );
}