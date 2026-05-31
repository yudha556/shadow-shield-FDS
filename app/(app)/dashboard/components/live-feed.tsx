import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ListFilter } from "lucide-react";

const feeds = [
  { id: "TX-992A", sender: "Bank Jambi", receiver: "VA Pintu", amount: "Rp143 jt", risk: 94, status: "Diblokir", statusColor: "border-red-500/30 text-red-500 bg-red-500/10", action: "Tinjau", actionVariant: "default", barColor: "bg-red-500" },
  { id: "TX-992B", sender: "Bank DKI", receiver: "0x4A1...9C9", amount: "Rp62 jt", risk: 68, status: "Ditahan", statusColor: "border-orange-500/30 text-orange-500 bg-orange-500/10", action: "Verifikasi", actionVariant: "outline", barColor: "bg-orange-500" },
  { id: "TX-992C", sender: "0x3C4...1A1", receiver: "0x9D2...8F4", amount: "Rp2,3 jt", risk: 12, status: "Disetujui", statusColor: "border-emerald-500/30 text-emerald-500 bg-emerald-500/10", action: "Lihat", actionVariant: "ghost", barColor: "bg-emerald-500" },
  { id: "TX-992D", sender: "0x1B2...4D4", receiver: "0x5C3...1E1", amount: "Rp13,8 jt", risk: 24, status: "Disetujui", statusColor: "border-emerald-500/30 text-emerald-500 bg-emerald-500/10", action: "Lihat", actionVariant: "ghost", barColor: "bg-emerald-500" },
];

type FeedActionVariant = "default" | "outline" | "ghost";

export function LiveFeed() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <ListFilter className="h-4 w-4 text-muted-foreground" />
          Feed Pencegatan Live
        </CardTitle>
        <Button variant="outline" size="sm" className="h-8 text-xs font-semibold">
          Lihat Semua
        </Button>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[800px] grid grid-cols-7 gap-4 pb-4 border-b border-border/50 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
            <div>ID Transaksi</div>
            <div>Pengirim</div>
            <div>Penerima</div>
            <div>Nominal</div>
            <div>Skor Risiko</div>
            <div className="text-center">Status</div>
            <div className="text-center">Aksi</div>
          </div>

          <div className="min-w-[800px] divide-y divide-border/50">
            {feeds.map((item, i) => (
              <div key={i} className="grid grid-cols-7 gap-4 py-4 items-center text-xs font-medium text-foreground hover:bg-muted/20 transition-colors">
                <div className="text-muted-foreground">{item.id}</div>
                <div className="font-mono">{item.sender}</div>
                <div className="font-mono">{item.receiver}</div>
                <div className="font-bold">{item.amount}</div>
                
                <div className="flex items-center gap-2">
                  <span className={`w-6 font-bold ${item.risk > 70 ? 'text-red-500' : item.risk > 40 ? 'text-orange-500' : 'text-emerald-500'}`}>{item.risk}</span>
                  <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full ${item.barColor}`} style={{ width: `${item.risk}%` }} />
                  </div>
                </div>

                <div className="flex justify-center">
                  <Badge variant="outline" className={`${item.statusColor} rounded-sm px-2 py-0`}>
                    {item.status}
                  </Badge>
                </div>
                
                <div className="flex justify-center">
                  <Button variant={item.actionVariant as FeedActionVariant} size="sm" className={`h-7 px-3 text-[10px] ${item.actionVariant === 'default' ? 'bg-cyan-500 hover:bg-cyan-600 text-black' : ''}`}>
                    {item.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
