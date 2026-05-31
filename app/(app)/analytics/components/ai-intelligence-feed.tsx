"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Activity, ShieldAlert } from "lucide-react";

const feeds = [
  {
    Icon: AlertTriangle,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/10 border-orange-400/20",
    title: "Anomali Terdeteksi: Klaster Velocity Tinggi",
    body: `Mesin AI mendeteksi lonjakan terkoordinasi 142 transaksi dari 3 wallet baru dalam jendela 5 menit. Polanya sangat mirip teknik pencucian uang "peel chain".`,
  },
  {
    Icon: Activity,
    iconColor: "text-primary",
    iconBg: "bg-primary/10 border-primary/20",
    title: "Update Performa Model",
    body: "Rasio false positive turun 0.4% setelah penyesuaian bobot heuristik terbaru. Kepercayaan model tetap stabil dengan akurasi 99.2% untuk alert tier-1.",
  },
  {
    Icon: ShieldAlert,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-400/10 border-sky-400/20",
    title: "Daftar Sanksi Baru Tersinkron",
    body: "Daftar OFAC SDN sudah di-ingest ulang dengan 38 alamat wallet baru yang ditandai. Rule screening real-time diperbarui di seluruh monitor transaksi aktif.",
  },
];

export function AIIntelligenceFeed() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader className="pb-2 pt-5 px-5">
        <CardTitle className="text-sm font-semibold text-foreground">
          Feed Intel AI
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-5 space-y-3">
        {feeds.map((feed, i) => (
          <div
            key={i}
            className="flex gap-3 p-3 rounded-lg border border-border/40 bg-muted/10 hover:bg-muted/20 transition-colors cursor-default"
          >
            <div
              className={`w-8 h-8 rounded-md border flex items-center justify-center flex-shrink-0 mt-0.5 ${feed.iconBg}`}
            >
              <feed.Icon className={`w-4 h-4 ${feed.iconColor}`} />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground mb-1 leading-snug">
                {feed.title}
              </p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {feed.body}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
