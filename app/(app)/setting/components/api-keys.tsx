import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Copy, Plus } from "lucide-react";

export function ApiKeys() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="text-base font-semibold">API Key & Endpoint</CardTitle>
          <p className="text-xs text-muted-foreground">Kelola akses terprogram untuk ingest data transaksi ke ShadowShield.</p>
        </div>
        <Button variant="outline" size="sm" className="h-8 text-xs font-semibold">
          <Plus className="mr-2 h-3 w-3" /> Buat Key
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        
        <div className="space-y-2">
          <label className="text-xs font-semibold text-foreground">Base URL Endpoint Ingestion</label>
          <div className="relative">
            <Input readOnly value="https://api.shadowshield.io/v1/ingest" className="bg-background font-mono text-xs pr-16" />
            <Button variant="ghost" size="sm" className="absolute right-1 top-1 h-7 text-[10px] text-muted-foreground hover:text-foreground">
              Salin
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-xs font-semibold text-foreground">Secret Key Aktif</label>
          
          <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/40">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-foreground">Key Produksi</span>
                <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-0 text-[9px] px-1.5 py-0">AKTIF</Badge>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                sk_live_****************b8Xa
                <Copy className="h-3 w-3 cursor-pointer hover:text-foreground" />
              </div>
            </div>
            <div className="text-right space-y-1.5">
              <div className="text-[10px] text-muted-foreground">Dibuat 12 Okt 2023</div>
              <button className="text-[10px] font-semibold text-red-500 hover:text-red-400">Cabut</button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/40">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-foreground">Key Lingkungan Staging</span>
                <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-0 text-[9px] px-1.5 py-0">AKTIF</Badge>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                sk_test_****************9c21
                <Copy className="h-3 w-3 cursor-pointer hover:text-foreground" />
              </div>
            </div>
            <div className="text-right space-y-1.5">
              <div className="text-[10px] text-muted-foreground">Dibuat 05 Nov 2023</div>
              <button className="text-[10px] font-semibold text-red-500 hover:text-red-400">Cabut</button>
            </div>
          </div>

        </div>

      </CardContent>
    </Card>
  );
}
