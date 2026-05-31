import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, AlertCircle } from "lucide-react";

export function SimulationEngine() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Play className="h-4 w-4 text-muted-foreground" />
          Mesin Simulasi
        </CardTitle>
        <p className="text-xs text-muted-foreground">Uji rule dengan data contoh.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nominal Transaksi (USD)</label>
          <Input defaultValue="12,500.00" className="bg-background" />
        </div>
        
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Skor Reputasi Wallet (0-100)</label>
          <Input defaultValue="42" className="bg-background" />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status Akun</label>
          <Select defaultValue="dormant">
            <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="dormant">Dormant</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" className="w-full mt-2 font-semibold">
          <Play className="mr-2 h-4 w-4" />
          Jalankan Simulasi
        </Button>

        {/* Results */}
        <div className="pt-6 border-t border-border/50 space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Prediksi Keputusan</div>
              <div className="text-lg font-bold text-red-500 mt-1">Transaksi Diblokir</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Skor Risiko</div>
              <div className="text-3xl font-black text-red-500 leading-none mt-1">88</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rule Terpicu</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground bg-background/50 border border-border/40 p-2.5 rounded-md">
                <AlertCircle className="h-4 w-4 text-orange-500" />
                Lonjakan Kecepatan Akun Dormant
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground bg-background/50 border border-border/40 p-2.5 rounded-md">
                <AlertCircle className="h-4 w-4 text-red-500" />
                Transfer Anomali Risiko Tinggi
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
