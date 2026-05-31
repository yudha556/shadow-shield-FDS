import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

export function NotificationRules() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Rule Notifikasi</CardTitle>
        <p className="text-xs text-muted-foreground mt-1">Atur jalur distribusi untuk alert kritis dan ringkasan laporan harian.</p>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-sm font-semibold text-foreground">Sinkron PagerDuty Insiden Kritis</span>
            <p className="text-[10px] text-muted-foreground">Kirim alert dengan skor 90+ langsung ke jadwal on-call PagerDuty aktif.</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-sm font-semibold text-foreground">Stream Channel Slack</span>
            <p className="text-[10px] text-muted-foreground">Kirim flag risiko sedang dan tinggi ke channel #soc-fraud-alerts.</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-sm font-semibold text-foreground">Ringkasan Eksekutif Harian</span>
            <p className="text-[10px] text-muted-foreground">Kirim ringkasan performa 24 jam ke email admin terpilih pada 00:00 UTC.</p>
          </div>
          <Switch />
        </div>

        <div className="pt-2">
          <label className="text-xs font-semibold text-foreground mb-2 block">URL Tujuan Webhook Kustom</label>
          <Input placeholder="https://domain-kamu.com/webhooks/fraud-alerts" className="bg-background text-xs" />
        </div>

      </CardContent>
    </Card>
  );
}
