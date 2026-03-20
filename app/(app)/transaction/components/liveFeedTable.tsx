"use client"

import * as React from "react"
import Link from "next/link"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Download, Filter, CalendarDays, ShieldAlert, ChevronDown } from "lucide-react"
import { transactions } from "@/lib/dummy-transactions"
import type { Transaction, Status } from "@/types/transaction"

// --- Helpers ---
function getRiskColor(score: number) {
  if (score >= 75) return "text-red-400"
  if (score >= 40) return "text-amber-400"
  return "text-emerald-400"
}

function getRiskBarColor(score: number) {
  if (score >= 75) return "bg-red-500"
  if (score >= 40) return "bg-amber-400"
  return "bg-emerald-500"
}

function getStatusClass(status: Status): string {
  if (status === "Blocked") return "bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/20"
  if (status === "Held") return "bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/20"
  return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20"
}

function getActionLabel(status: Status): string {
  if (status === "Blocked") return "Review"
  if (status === "Held") return "Verify"
  return "View"
}

function getRowAccent(status: Status): string {
  if (status === "Blocked") return "border-l-2 border-l-red-500"
  if (status === "Held") return "border-l-2 border-l-amber-500"
  return "border-l-2 border-l-transparent"
}

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "time",
    header: "TIME",
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground tabular-nums">
        {row.getValue("time")}
      </span>
    ),
  },
  {
    accessorKey: "txId",
    header: "TRANSACTION ID",
    cell: ({ row }) => (
      <span className="font-mono text-xs font-medium text-foreground">
        {row.getValue("txId")}
      </span>
    ),
  },
  {
    accessorKey: "sender",
    header: "SENDER",
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground">
        {row.getValue("sender")}
      </span>
    ),
  },
  {
    accessorKey: "receiver",
    header: "RECEIVER",
    cell: ({ row }) => (
      <span className="font-mono text-xs text-muted-foreground">
        {row.getValue("receiver")}
      </span>
    ),
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number
      return (
        <span className="font-mono text-sm font-semibold text-foreground">
          ${amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
      )
    },
  },
  {
    accessorKey: "riskScore",
    header: "RISK SCORE",
    cell: ({ row }) => {
      const score = row.getValue("riskScore") as number
      return (
        <div className="flex items-center gap-2">
          <span className={`font-mono text-sm font-bold w-6 tabular-nums ${getRiskColor(score)}`}>
            {String(score).padStart(2, "0")}
          </span>
          <div className="w-20 h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${getRiskBarColor(score)}`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status") as Status
      return (
        <Badge
          variant="outline"
          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getStatusClass(status)}`}
        >
          {status}
        </Badge>
      )
    },
  },
  {
    id: "action",
    header: "ACTION",
    cell: ({ row }) => {
      const { status, id } = row.original
      const label = getActionLabel(status)
      const isReview = label === "Review"
      return (
        <Button
          size="sm"
          variant={isReview ? "default" : "outline"}
          className={`text-xs h-7 px-3 font-medium ${
            isReview
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "border-border text-foreground hover:bg-accent"
          }`}
          asChild
        >
          <Link href={`/transaction/${id}`}>{label}</Link>
        </Button>
      )
    },
  },
]

export function LiveFeedTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [statusFilter, setStatusFilter] = React.useState<string[]>([])

  const filteredData = React.useMemo(() => {
    if (statusFilter.length === 0) return transactions
    return transactions.filter((t) => statusFilter.includes(t.status))
  }, [statusFilter])

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: { pagination: { pageSize: 10 } },
    state: { sorting, columnFilters },
  })

  const toggleStatus = (status: string) => {
    setStatusFilter((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    )
  }

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <Input
            placeholder="Search TX hash, wallet..."
            value={(table.getColumn("txId")?.getFilterValue() as string) ?? ""}
            onChange={(e) => table.getColumn("txId")?.setFilterValue(e.target.value)}
            className="pl-9 h-9 text-sm bg-background border-border"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-9 gap-1.5 text-sm border-border">
              <ShieldAlert className="w-3.5 h-3.5" />
              Risk Level
              <ChevronDown className="w-3 h-3 opacity-60" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-40">
            <DropdownMenuCheckboxItem checked>High (≥75)</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Medium (40–74)</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Low (&lt;40)</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-9 gap-1.5 text-sm border-border">
              <Filter className="w-3.5 h-3.5" />
              Status
              {statusFilter.length > 0 && (
                <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs h-4">
                  {statusFilter.length}
                </Badge>
              )}
              <ChevronDown className="w-3 h-3 opacity-60" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-36">
            {(["Approved", "Blocked", "Held"] as Status[]).map((s) => (
              <DropdownMenuCheckboxItem
                key={s}
                checked={statusFilter.includes(s)}
                onCheckedChange={() => toggleStatus(s)}
              >
                {s}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" size="sm" className="h-9 gap-1.5 text-sm border-border">
          <CalendarDays className="w-3.5 h-3.5" />
          Today
          <ChevronDown className="w-3 h-3 opacity-60" />
        </Button>

        <div className="flex-1" />

        <Button size="sm" className="h-9 gap-1.5 text-sm">
          <Download className="w-3.5 h-3.5" />
          Export CSV
        </Button>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border bg-muted/40 hover:bg-muted/40">
              {table.getHeaderGroups().map((headerGroup) =>
                headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-[11px] font-semibold tracking-widest text-muted-foreground py-3 px-4"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className={`border-border hover:bg-muted/30 transition-colors cursor-pointer ${getRowAccent(row.original.status)}`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-3 px-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground text-sm">
                  No transactions found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between px-1">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-foreground">
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-foreground">
            {table.getFilteredRowModel().rows.length}
          </span>{" "}
          entries
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="h-8 px-4 text-sm border-border"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="h-8 px-4 text-sm border-border"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}