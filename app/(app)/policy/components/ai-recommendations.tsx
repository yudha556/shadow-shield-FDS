import { Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AIRecommendations() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-purple-400" />
          AI Recommendations
        </h2>
        <p className="text-xs text-muted-foreground mt-1">Suggested policy optimizations.</p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-5">
        <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
        
        <TrendingUp className="h-5 w-5 text-purple-400 mb-3" />
        
        <h3 className="text-sm font-bold text-foreground mb-1.5">Emerging Anomaly Detected</h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          We detected a 34% increase in fraudulent micro-transactions originating from Southeast Asia VPNs.
        </p>

        <div className="bg-background/80 border border-purple-500/20 rounded-md p-3 mb-4 font-mono text-[10px] text-purple-200">
          <span className="text-muted-foreground">Suggested Condition:</span><br />
          VPN = True AND Region = SEA AND Amount &lt; $50
        </div>

        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
          Review & Implement Rule
        </Button>
      </div>
    </div>
  );
}