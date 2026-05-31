export function GraphLegend() {
  return (
    <div className="flex flex-col gap-1.5 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2.5 text-xs">
      {[
        { color: "bg-emerald-500", label: "Entitas Aman" },
        { color: "bg-orange-400", label: "Aktivitas Mencurigakan" },
        { color: "bg-red-500", label: "Ditandai / Diblokir" },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
          <span className="text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
