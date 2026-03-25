import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type FilterTab = {
  label: string;
  value: string;
  count?: number;
};

const tabs: FilterTab[] = [
  { label: "All Alerts", value: "all", count: 24 },
  { label: "Critical", value: "critical", count: 3 },
  { label: "Under Review", value: "review", count: 8 },
  { label: "Resolved", value: "resolved" },
];

interface AlertFilterTabsProps {
  active: string;
  onChange: (value: string) => void;
}

export function AlertFilterTabs({ active, onChange }: AlertFilterTabsProps) {
  return (
    <div className="flex items-center gap-1">
      {tabs.map((tab) => {
        const isActive = active === tab.value;
        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={cn(
              "cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150",
              isActive
                ? "bg-primary/15 text-primary border border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent"
            )}
          >
            {tab.label}
            {tab.count !== undefined && (
              <Badge
                className={cn(
                  "text-[10px] font-bold px-1.5 py-0 min-w-[18px] h-[18px] rounded-sm",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                )}
              >
                {tab.count}
              </Badge>
            )}
          </button>
        );
      })}
    </div>
  );
}