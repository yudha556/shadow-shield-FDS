import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu } from "lucide-react";

export function NeuralEngine() {
  return (
    <Card className="bg-card border-border/60 h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <Cpu className="h-4 w-4 text-cyan-500" />
          Neural Engine Sentinel
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="flex items-center justify-between bg-background/50 border border-border/40 p-2.5 rounded-md">
          <div className="flex items-center gap-2 text-xs font-bold">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Semua Sistem Normal
          </div>
          <div className="text-[10px] text-muted-foreground">Latensi: 12ms</div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-foreground">Biometrik Perilaku</span>
              <span className="font-bold">94%</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-[94%]" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-foreground">Matriks Reputasi IP</span>
              <span className="font-bold">100%</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[100%]" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-foreground">Kecepatan & Cek Lokasi</span>
              <span className="font-bold text-orange-500">82%</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[82%]" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-foreground">Sidik Perangkat</span>
              <span className="font-bold text-red-500">41%</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-[41%]" />
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
