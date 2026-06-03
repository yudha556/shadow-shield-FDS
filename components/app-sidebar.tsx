"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Activity, AlertTriangle, GitFork, BrainCircuit, ChartPie, ShieldCheck, LucideLayoutDashboard } from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "ShadowShield",
      logo: (
        <ShieldCheck
          className="size-4"
        />
      ),
      // plan: "Enterprise",
    },
    {
      name: "ShadowShield",
      logo: (
        <ShieldCheck
          className="size-4"
        />
      ),
      plan: "Rintisan",
    },
    {
      name: "Evil Corp.",
      logo: (
        <ShieldCheck
          className="size-4"
        />
      ),
      plan: "Gratis",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: (
        <LucideLayoutDashboard 
        />
      ),
      // isActive: true,
      // items: [
      //   {
      //     title: "History",
      //     url: "#",
      //   },
      //   {
      //     title: "Starred",
      //     url: "#",
      //   },
      //   {
      //     title: "Settings",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Live Feed",
      url: "/transaction",
      icon: (
        <Activity
        />
      ),
      // items: [
      //   {
      //     title: "Genesis",
      //     url: "#",
      //   },
      //   {
      //     title: "Explorer",
      //     url: "#",
      //   },
      //   {
      //     title: "Quantum",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Antrean Alert",
      url: "/alert",
      icon: (
        <AlertTriangle
        />
      ),
      // items: [
      //   {
      //     title: "Introduction",
      //     url: "#",
      //   },
      //   {
      //     title: "Get Started",
      //     url: "#",
      //   },
      //   {
      //     title: "Tutorials",
      //     url: "#",
      //   },
      //   {
      //     title: "Changelog",
      //     url: "#",
      //   },
      // ],
    },
  ],
  projects: [
    {
      name: "Trace Graph",
      url: "/graph",
      icon: (
        <GitFork
        />
      ),
    },
    {
      name: "Policy Engine",
      url: "/policy",
      icon: (
        <BrainCircuit
        />
      ),
    },
    {
      name: "Analytics",
      url: "/analytics",
      icon: (
        <ChartPie
        />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
