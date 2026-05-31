import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export function RiskThresholds() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Ambang Risk Engine</CardTitle>
        <p className="text-xs text-muted-foreground mt-1">Atur sensitivitas baseline dan aksi otomatis untuk mesin skoring AI.</p>
      </CardHeader>
      
      <CardContent className="space-y-8">
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-foreground">Pemicu Aksi Risiko Tinggi</span>
            <span className="text-[10px] font-bold text-red-500 uppercase">Kritis</span>
          </div>
          <div className="flex gap-4 items-center">
            <Slider defaultValue={[85]} max={100} step={1} className="[&_[role=slider]]:border-cyan-500 [&_.bg-primary]:bg-cyan-500 flex-1" />
            <div className="w-10 h-8 rounded-md bg-background border border-border/60 flex items-center justify-center text-xs font-bold">85</div>
          </div>
          <p className="text-[10px] text-muted-foreground">Transaksi dengan skor di atas ambang ini akan ditandai Risiko Tinggi.</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-foreground">Pemicu Review Risiko Sedang</span>
            <span className="text-[10px] font-bold text-orange-500 uppercase">Peringatan</span>
          </div>
          <div className="flex gap-4 items-center">
            <Slider defaultValue={[65]} max={100} step={1} className="[&_[role=slider]]:border-orange-500 [&_.bg-primary]:bg-orange-500 flex-1" />
            <div className="w-10 h-8 rounded-md bg-background border border-border/60 flex items-center justify-center text-xs font-bold">65</div>
          </div>
          <p className="text-[10px] text-muted-foreground">Transaksi dengan skor di atas ambang ini perlu review manual analis.</p>
        </div>

        <hr className="border-border/50" />

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-sm font-semibold text-foreground">Auto-Blokir Entitas Berisiko Tinggi</span>
              <p className="text-[10px] text-muted-foreground">Hentikan otomatis transaksi jika wallet pengirim cocok daftar sanksi OFAC atau skornya 95+.</p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-sm font-semibold text-foreground">Deteksi Anomali Velocity</span>
              <p className="text-[10px] text-muted-foreground">Tandai klaster transaksi mikro cepat dari wallet baru dalam jendela 5 menit.</p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-cyan-500" />
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
