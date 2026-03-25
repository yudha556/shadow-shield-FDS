import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { SettingsSidebar } from "./components/settings-sidebar";
import { RiskThresholds } from "./components/risk-thresholds";
import { ApiKeys } from "./components/api-keys";
import { NotificationRules } from "./components/notification-rules";
import { TeamManagement } from "./components/team-management";

export default function Setting() {
  return (
    <div className="min-h-screen bg-background ">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold text-foreground tracking-tight">
          System Settings
        </h1>
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        <div className="w-full md:w-64 shrink-0 sticky top-6">
          <SettingsSidebar />
        </div>

        <div className="flex-1 space-y-6 min-w-0">
          <RiskThresholds />
          <ApiKeys />
          <NotificationRules />
          <TeamManagement />
        </div>
        
      </div>
    </div>
  );
}