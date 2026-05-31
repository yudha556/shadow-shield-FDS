import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Webhook, Bell, Users, ShieldCheck } from "lucide-react";

export function SettingsSidebar() {
  const navItems = [
    { icon: SlidersHorizontal, label: "Ambang Risiko", active: true },
    { icon: Webhook, label: "API & Integrasi", active: false },
    { icon: Bell, label: "Notifikasi", active: false },
    { icon: Users, label: "Manajemen Tim", active: false },
    { icon: ShieldCheck, label: "Keamanan & Audit", active: false },
  ];

  return (
    <nav className="flex flex-col space-y-1">
      {navItems.map((item) => (
        <Button
          key={item.label}
          variant={item.active ? "secondary" : "ghost"}
          className={`justify-start h-10 px-4 ${
            item.active 
              ? "bg-muted/50 font-semibold text-foreground border-l-2 border-cyan-500 rounded-none rounded-r-md" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <item.icon className={`mr-3 h-4 w-4 ${item.active ? "text-cyan-500" : ""}`} />
          {item.label}
        </Button>
      ))}
    </nav>
  );
}
