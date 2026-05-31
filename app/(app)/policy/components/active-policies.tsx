import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Search, GripVertical, Edit2 } from "lucide-react";

const policies = [
  { id: 1, name: "Cocok Daftar Sanksi OFAC", condition: "Wallet Penerima IN (Daftar_Sanksi)", action: "Blokir", actionColor: "bg-red-500/10 text-red-500 border-red-500/20", priority: "Kritis", active: true },
  { id: 2, name: "Transfer Anomali Risiko Tinggi", condition: "Skor Risiko > 85 DAN Nominal > $10,000", action: "Tahan", actionColor: "bg-orange-500/10 text-orange-500 border-orange-500/20", priority: "Tinggi", active: true },
  { id: 3, name: "Perangkat Baru Nilai Besar", condition: "Perangkat = Baru DAN Nominal > $5,000", action: "Verifikasi", actionColor: "bg-blue-500/10 text-blue-500 border-blue-500/20", priority: "Sedang", active: true },
  { id: 4, name: "Override Whitelist Tepercaya", condition: "Wallet Pengirim IN (Whitelist)", action: "Setujui", actionColor: "bg-green-500/10 text-green-500 border-green-500/20", priority: "Rendah", active: false },
];

export function ActivePolicies() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Policy Aktif</h2>
          <p className="text-xs text-muted-foreground mt-1">Kelola dan urutkan rule yang ada. Eksekusi rule berjalan dari atas ke bawah.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Filter rule..." className="pl-9 h-9 bg-card border-border/60 text-sm" />
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border/60 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-border/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <div className="col-span-6 pl-8">Spesifikasi Rule</div>
          <div className="col-span-2">Aksi</div>
          <div className="col-span-2">Prioritas</div>
          <div className="col-span-1 text-center">Status</div>
          <div className="col-span-1 text-center">Aksi</div>
        </div>

        <div className="divide-y divide-border/50">
          {policies.map((policy) => (
            <div key={policy.id} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/30 transition-colors group">
              <div className="col-span-6 flex items-center gap-3">
                <GripVertical className="h-4 w-4 text-muted-foreground/50 cursor-grab hover:text-foreground" />
                <div>
                  <div className="font-semibold text-sm text-foreground">{policy.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{policy.condition}</div>
                </div>
              </div>
              <div className="col-span-2">
                <Badge variant="outline" className={`${policy.actionColor} text-[10px] px-2 py-0.5 rounded-sm`}>
                  {policy.action}
                </Badge>
              </div>
              <div className="col-span-2">
                <Badge variant="secondary" className="bg-background text-foreground text-[10px] px-2 py-0.5 rounded-sm">
                  {policy.priority}
                </Badge>
              </div>
              <div className="col-span-1 flex justify-center">
                <Switch checked={policy.active} />
              </div>
              <div className="col-span-1 flex justify-center">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Edit2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
