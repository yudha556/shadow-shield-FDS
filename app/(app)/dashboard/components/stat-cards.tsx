import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Clock, CheckCircle2 } from "lucide-react";

export function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-card border-border/60">
        <CardContent className="p-5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Volume 24 Jam Dicek</p>
          <h3 className="text-3xl font-bold text-foreground mb-2">Rp2,2T</h3>
          <p className="text-xs font-medium text-emerald-500 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> +12,4% dari kemarin
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border/60 border-t-red-500/50">
        <CardContent className="p-5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Fraud Terdeteksi</p>
          <h3 className="text-3xl font-bold text-foreground mb-2">Rp66,7M</h3>
          <p className="text-xs font-medium text-red-500 flex items-center gap-1">
            <TrendingDown className="h-3 w-3" /> 1,8% dari total volume
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border/60">
        <CardContent className="p-5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Transaksi Ditahan</p>
          <h3 className="text-3xl font-bold text-foreground mb-2">428</h3>
          <p className="text-xs font-medium text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" /> Menunggu cek analis
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border/60">
        <CardContent className="p-5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Rata-rata Skor Risiko</p>
          <h3 className="text-3xl font-bold text-foreground mb-2">14.2 <span className="text-lg text-muted-foreground">/ 100</span></h3>
          <p className="text-xs font-medium text-emerald-500 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" /> Baseline masih normal
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
