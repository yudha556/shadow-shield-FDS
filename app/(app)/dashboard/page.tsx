import { StatCards } from "./components/stat-cards";
import { ThreatActivity } from "./components/threat-activity";
import { RiskDistribution } from "./components/risk-distribution";
import { LiveTrace } from "./components/live-trace";
import { NeuralEngine } from "./components/neural-engine";
import { LiveFeed } from "./components/live-feed";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background space-y-6">
          <div>
      <h1 className="text-2xl font-bold text-foreground tracking-tight">
        Security Operations Center
      </h1>
      <p className="text-sm text-muted-foreground mt-1">
        Real-time AI Fraud Detection & Network Intelligence
      </p>
    </div>
      <StatCards />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <ThreatActivity />
        </div>
        <div className="xl:col-span-1">
          <RiskDistribution />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <LiveTrace />
        </div>
        <div className="xl:col-span-1">
          <NeuralEngine />
        </div>
      </div>

      <LiveFeed />
    </div>
  );
}