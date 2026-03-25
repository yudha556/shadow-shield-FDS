import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical, UserPlus } from "lucide-react";

export function TeamManagement() {
  const team = [
    { name: "Sarah Jenkins", email: "sarah.j@shadowshield.io", role: "Administrator", roleColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20", status: "Active", login: "Online", avatar: "SJ" },
    { name: "Marcus Chen", email: "m.chen@shadowshield.io", role: "SOC Analyst", roleColor: "text-foreground bg-background border-border", status: "Active", login: "2 hours ago", avatar: "MC" },
    { name: "Elena Rostova", email: "elena.r@shadowshield.io", role: "Investigator", roleColor: "text-foreground bg-background border-border", status: "Away", login: "Yesterday", avatar: "ER" },
  ];

  return (
    <Card className="bg-card border-border/60">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle className="text-base font-semibold">Team Management</CardTitle>
          <p className="text-xs text-muted-foreground">Manage platform access for analysts, investigators, and administrators.</p>
        </div>
        <Button size="sm" className="h-8 text-xs font-semibold bg-cyan-500 hover:bg-cyan-600 text-black">
          <UserPlus className="mr-2 h-3 w-3" /> Invite Member
        </Button>
      </CardHeader>
      <CardContent>
        
        <div className="w-full overflow-x-auto">
          <div className="min-w-[600px] grid grid-cols-12 gap-4 pb-4 border-b border-border/50 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
            <div className="col-span-5">User Name</div>
            <div className="col-span-3">Role Level</div>
            <div className="col-span-2">Account Status</div>
            <div className="col-span-2 text-right pr-6">Last Login</div>
          </div>

          <div className="min-w-[600px] divide-y divide-border/50">
            {team.map((member, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-4 items-center">
                
                <div className="col-span-5 flex items-center gap-3">
                  <Avatar className="h-8 w-8 rounded-md">
                    <AvatarFallback className="bg-muted text-xs rounded-md">{member.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{member.name}</div>
                    <div className="text-[10px] text-muted-foreground">{member.email}</div>
                  </div>
                </div>

                <div className="col-span-3">
                  <Badge variant="outline" className={`rounded-sm px-2.5 py-0.5 text-[10px] font-semibold ${member.roleColor}`}>
                    {member.role}
                  </Badge>
                </div>

                <div className="col-span-2">
                  <span className={`text-xs font-medium ${member.status === "Active" ? "text-emerald-500" : "text-muted-foreground"}`}>
                    {member.status}
                  </span>
                </div>

                <div className="col-span-2 flex items-center justify-end gap-4">
                  <span className="text-xs text-muted-foreground">{member.login}</span>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground">
                    <MoreVertical className="h-4 w-4" />
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