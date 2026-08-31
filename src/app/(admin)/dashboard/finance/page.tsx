"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

function StatCard({
  title,
  value,
  subtitle,
  icon,
  badge,
  badgeVariant = "secondary",
  valueClassName,
  className,
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "outline" | "destructive" | "ghost";
  valueClassName?: string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardDescription className="flex items-center gap-1.5 uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-[16px]">{icon}</span>
          {title}
        </CardDescription>
        <CardAction>
          {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className={cn("text-3xl font-bold tracking-tight", valueClassName)}>
          {value}
        </p>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}

const ledgerRows = [
  { date: "2024-10-24", description: "Fall Gala Sponsorship", category: "Events", type: "income" as const, amount: "+$2,500.00", proof: true },
  { date: "2024-10-23", description: "Catering Services", category: "Events", type: "expense" as const, amount: "-$850.00", proof: true },
  { date: "2024-10-21", description: "Office Supplies", category: "Operational", type: "expense" as const, amount: "-$120.00", proof: false },
  { date: "2024-10-18", description: "Member Dues Q4", category: "Operational", type: "income" as const, amount: "+$1,200.00", proof: true },
  { date: "2024-10-15", description: "Social Media Ads", category: "Marketing", type: "expense" as const, amount: "-$180.00", proof: true },
];

export default function FinancePage() {
  const [transactionType, setTransactionType] = useState<"income" | "expense">(
    "income",
  );

  return (
    <div className="p-5 md:p-8 max-w-6xl mx-auto space-y-6">
      {/* Page header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Cash Tracking</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage organizational income and expenses with geometric precision.
          </p>
        </div>
        <div className="flex gap-3">
          <Button size="lg">
            <span className="material-symbols-outlined text-[16px]">add</span>
            New Entry
          </Button>
          <Button size="lg" variant="outline">
            <span className="material-symbols-outlined text-[16px]">
              download
            </span>
            Export
          </Button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Total Balance"
          value="$14,250.00"
          subtitle="+12% vs last month"
          icon="account_balance"
          badge="Live"
          badgeVariant="default"
        />
        <StatCard
          title="Total Income"
          value="$5,400.00"
          subtitle="Current period"
          icon="arrow_upward"
          badge="+12%"
          badgeVariant="secondary"
          valueClassName="text-emerald-600 dark:text-emerald-400"
        />
        <StatCard
          title="Total Expense"
          value="$1,150.00"
          subtitle="Current period"
          icon="arrow_downward"
          badge="+12%"
          badgeVariant="outline"
          valueClassName="text-red-600 dark:text-red-400"
        />
      </div>

      {/* Form & table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Record Transaction */}
        <Card className="lg:col-span-4">
          <CardHeader className="border-b">
            <CardTitle>Record Transaction</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Type toggle */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  aria-pressed={transactionType === "income"}
                  onClick={() => setTransactionType("income")}
                  className={cn(
                    "flex items-center justify-center gap-1.5 h-9 rounded-xl border text-sm font-medium transition-colors",
                    transactionType === "income"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:bg-muted",
                  )}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    add
                  </span>
                  Income
                </button>
                <button
                  type="button"
                  aria-pressed={transactionType === "expense"}
                  onClick={() => setTransactionType("expense")}
                  className={cn(
                    "flex items-center justify-center gap-1.5 h-9 rounded-xl border text-sm font-medium transition-colors",
                    transactionType === "expense"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:bg-muted",
                  )}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    remove
                  </span>
                  Expense
                </button>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="amount">Amount ($)</Label>
                <Input
                  id="amount"
                  placeholder="0.00"
                  type="number"
                  className="h-9 text-base"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="e.g. Venue Booking"
                  type="text"
                  className="h-9"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  defaultValue="Operational"
                  className="h-9 w-full rounded-2xl border border-transparent bg-input/50 px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                >
                  <option>Operational</option>
                  <option>Events</option>
                  <option>Marketing</option>
                  <option>Miscellaneous</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <Label>Proof of Transfer</Label>
                <label
                  htmlFor="proof"
                  className="flex flex-col items-center justify-center gap-1.5 h-28 rounded-2xl border border-dashed border-border bg-muted/40 hover:bg-muted cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px] text-muted-foreground">
                    upload_file
                  </span>
                  <span className="text-xs text-muted-foreground text-center">
                    Drag &amp; drop
                    <br />
                    or click to browse
                  </span>
                  <input id="proof" className="hidden" type="file" />
                </label>
              </div>

              <Button size="lg" className="w-full" type="submit">
                <span className="material-symbols-outlined text-[16px]">
                  save
                </span>
                Submit Entry
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Ledger */}
        <Card className="lg:col-span-8 overflow-hidden">
          <CardHeader className="border-b flex-row items-center justify-between">
            <CardTitle>Recent Ledger</CardTitle>
            <CardAction className="col-start-auto row-start-auto justify-self-auto">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-muted-foreground">
                    <th className="px-4 py-3 font-medium whitespace-nowrap w-32">
                      Date
                    </th>
                    <th className="px-4 py-3 font-medium">Description</th>
                    <th className="px-4 py-3 font-medium w-32">Category</th>
                    <th className="px-4 py-3 font-medium w-24 text-center">
                      Proof
                    </th>
                    <th className="px-4 py-3 font-medium text-right w-32">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ledgerRows.map((row) => (
                    <tr
                      key={row.date + row.description}
                      className="border-b border-border last:border-0 hover:bg-muted/40 transition-colors cursor-pointer"
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                        {row.date}
                      </td>
                      <td className="px-4 py-3 flex items-center gap-2 font-medium">
                        <span
                          className={cn(
                            "material-symbols-outlined text-[16px]",
                            row.type === "income"
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-red-600 dark:text-red-400",
                          )}
                        >
                          {row.type === "income" ? "arrow_upward" : "arrow_downward"}
                        </span>
                        {row.description}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {row.category}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.proof ? (
                          <span className="material-symbols-outlined text-[16px] text-muted-foreground hover:text-foreground transition-colors">
                            description
                          </span>
                        ) : (
                          <span className="material-symbols-outlined text-[16px] text-border">
                            minimize
                          </span>
                        )}
                      </td>
                      <td
                        className={cn(
                          "px-4 py-3 text-right font-semibold",
                          row.type === "income"
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-red-600 dark:text-red-400",
                        )}
                      >
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}