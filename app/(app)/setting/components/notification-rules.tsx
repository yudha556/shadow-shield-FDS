import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

export function NotificationRules() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Notification Rules</CardTitle>
        <p className="text-xs text-muted-foreground mt-1">Configure routing paths for critical alerts and daily reporting summaries.</p>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-sm font-semibold text-foreground">Critical Incident PagerDuty Sync</span>
            <p className="text-[10px] text-muted-foreground">Push alerts scoring 90+ directly to active PagerDuty on-call schedules.</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-sm font-semibold text-foreground">Slack Channel Stream</span>
            <p className="text-[10px] text-muted-foreground">Post medium and high risk flags to #soc-fraud-alerts channel.</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-sm font-semibold text-foreground">Daily Executive Digest</span>
            <p className="text-[10px] text-muted-foreground">Send a 24h performance summary to selected admin emails at 00:00 UTC.</p>
          </div>
          <Switch />
        </div>

        <div className="pt-2">
          <label className="text-xs font-semibold text-foreground mb-2 block">Custom Webhook Target URL</label>
          <Input placeholder="https://your-domain.com/webhooks/fraud-alerts" className="bg-background text-xs" />
        </div>

      </CardContent>
    </Card>
  );
}