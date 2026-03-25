import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Search, GripVertical, Edit2 } from "lucide-react";

const policies = [
  { id: 1, name: "OFAC Sanction Match", condition: "Receiver Wallet IN (Sanctioned_List)", action: "Block", actionColor: "bg-red-500/10 text-red-500 border-red-500/20", priority: "Critical", active: true },
  { id: 2, name: "High Risk Anomalous Transfer", condition: "Risk Score > 85 AND Amount > $10,000", action: "Hold", actionColor: "bg-orange-500/10 text-orange-500 border-orange-500/20", priority: "High", active: true },
  { id: 3, name: "New Device High Value", condition: "Device = New AND Amount > $5,000", action: "Verify", actionColor: "bg-blue-500/10 text-blue-500 border-blue-500/20", priority: "Medium", active: true },
  { id: 4, name: "Trusted Whitelist Override", condition: "Sender Wallet IN (Whitelist)", action: "Approve", actionColor: "bg-green-500/10 text-green-500 border-green-500/20", priority: "Low", active: false },
];

export function ActivePolicies() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Active Policies</h2>
          <p className="text-xs text-muted-foreground mt-1">Manage and reorder existing rules. Rules execute top-down.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Filter rules..." className="pl-9 h-9 bg-card border-border/60 text-sm" />
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border/60 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-border/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <div className="col-span-6 pl-8">Rule Specification</div>
          <div className="col-span-2">Action</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-1 text-center">Status</div>
          <div className="col-span-1 text-center">Actions</div>
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