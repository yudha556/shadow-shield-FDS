import { RuleBuilder } from "./components/rule-builder";
import { ActivePolicies } from "./components/active-policies";
import { SimulationEngine } from "./components/simulation-engine";
import { AIRecommendations } from "./components/ai-recommendations";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function PolicyEnginePage() {
  return (
    <div className="min-h-screen bg-background  space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">
          Policy Engine
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Configure and simulate automated fraud detection rules.
        </p>
      </div>
      <Button className="font-semibold">
        <Plus className="mr-2 h-4 w-4" />
        Create New Rule
      </Button>
    </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        <div className="xl:col-span-2 space-y-6">
          <RuleBuilder />
          <ActivePolicies />
        </div>

        <div className="xl:col-span-1 space-y-6">
          <SimulationEngine />
          <AIRecommendations />
        </div>
      </div>
    </div>
  );
}