import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gavel, Trash2, Plus } from "lucide-react";

export function RuleBuilder() {
  return (
    <Card className="bg-card border-border/60">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div className="space-y-1">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <Gavel className="h-4 w-4 text-muted-foreground" />
            Rule Builder
          </CardTitle>
          <p className="text-xs text-muted-foreground">Drafting a new policy rule.</p>
        </div>
        <Button variant="outline" size="sm" className="h-8 text-xs">
          Discard Draft
        </Button>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Rule Name */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Rule Name
          </label>
          <Input defaultValue="High Velocity Dormant Account Spikes" className="bg-background" />
        </div>

        {/* Conditions */}
        <div className="space-y-4 bg-background/50 p-4 rounded-lg border border-border/40">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            If all of the following conditions are met:
          </label>
          
          <div className="space-y-3">
            {/* Condition 1 */}
            <div className="flex items-center gap-3">
              <Select defaultValue="status">
                <SelectTrigger className="w-[180px] bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="status">Account Status</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="equals">
                <SelectTrigger className="w-[120px] bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="equals">Equals</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="dormant">
                <SelectTrigger className="flex-1 bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="dormant">Dormant (&gt; 90 days)</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-xs font-bold text-muted-foreground px-2">AND</div>

            {/* Condition 2 */}
            <div className="flex items-center gap-3">
              <Select defaultValue="volume">
                <SelectTrigger className="w-[180px] bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="volume">Transaction Volume (1h)</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="greater">
                <SelectTrigger className="w-[120px] bg-background"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="greater">Greater Than</SelectItem>
                </SelectContent>
              </Select>
              <Input defaultValue="5" className="flex-1 bg-background" />
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button variant="secondary" size="sm" className="mt-2 text-xs h-8">
            <Plus className="mr-2 h-3 w-3" />
            Add Condition
          </Button>
        </div>

        {/* Action Trigger */}
        <div className="flex items-center gap-4 pt-2">
          <span className="text-sm font-medium">Then trigger:</span>
          <Select defaultValue="hold">
            <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="hold">Hold Transaction</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="high">
            <SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="high">Priority: High</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex-1" />
          <Button className="font-semibold">Save Rule</Button>
        </div>
      </CardContent>
    </Card>
  );
}