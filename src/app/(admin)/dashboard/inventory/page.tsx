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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function StatCard({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardDescription className="text-xs uppercase tracking-widest">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold tracking-tight">{value}</p>
      </CardContent>
    </Card>
  );
}

const stats = [
  { title: "Total Assets", value: "142" },
  { title: "Available", value: "89", className: "text-emerald-600 dark:text-emerald-400" },
  { title: "Borrowed", value: "45", className: "text-amber-600 dark:text-amber-400" },
  { title: "Maintenance", value: "8", className: "text-red-600 dark:text-red-400" },
];

const assets = [
  {
    id: "EQ-042",
    name: "Sony A7III Camera Kit",
    category: "A/V Equipment",
    status: "Available",
  },
  {
    id: "CH-118",
    name: "Folding Chair (Black)",
    category: "Furniture",
    status: "Borrowed",
  },
  {
    id: "PA-005",
    name: "Yamaha Stagepas 400BT",
    category: "A/V Equipment",
    status: "Available",
  },
  {
    id: "PR-012",
    name: "Epson 1080p Projector",
    category: "A/V Equipment",
    status: "Repair",
  },
  {
    id: "CH-119",
    name: "Folding Chair (Black)",
    category: "Furniture",
    status: "Borrowed",
  },
];

const statusBadge: Record<string, { label: string; className: string }> = {
  Available: {
    label: "Available",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900",
  },
  Borrowed: {
    label: "Borrowed",
    className: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-900",
  },
  Repair: {
    label: "Repair",
    className: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-900",
  },
};

const logs = [
  {
    name: "Sarah Jenkins",
    status: "Out",
    statusClassName: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    desc: "Borrowed CH-118, CH-119",
    time: "Oct 24, 09:30 AM",
  },
  {
    name: "David Chen",
    status: "In",
    statusClassName: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    desc: "Returned PA-005",
    time: "Oct 23, 16:45 PM",
  },
  {
    name: "Admin Ops",
    status: "Alert",
    statusClassName: "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300",
    desc: "Flagged PR-012 for repair",
    time: "Oct 22, 11:15 AM",
  },
];

export default function InventoryPage() {
  return (
    <div className="p-5 md:p-8 max-w-6xl mx-auto space-y-6">
      {/* Page header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Inventory &amp; Assets
          </h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            Manage campus organization equipment, view real-time availability
            status, and track borrowing history.
          </p>
        </div>
        <div className="flex gap-3">
          <Button size="lg" variant="outline">
            <span className="material-symbols-outlined text-[16px]">
              filter_list
            </span>
            Filter
          </Button>
          <Button size="lg">
            <span className="material-symbols-outlined text-[16px]">add</span>
            New Asset
          </Button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.title} title={s.title} value={s.value} className={s.className} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        {/* Asset Roster */}
        <Card className="lg:col-span-2 overflow-hidden">
          <CardHeader className="flex-row items-center justify-between border-b">
            <CardTitle>Asset Roster</CardTitle>
            <CardAction className="col-start-auto row-start-auto justify-self-auto">
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-muted-foreground">
                  search
                </span>
                <Input
                  placeholder="Search assets..."
                  className="pl-8 h-8 w-48"
                />
              </div>
            </CardAction>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/40 hover:bg-muted/40">
                  <TableHead className="pl-5">ID</TableHead>
                  <TableHead>Item Name</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead className="pr-5 text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell className="pl-5">
                      <span className="text-xs font-semibold text-muted-foreground">
                        {asset.id}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-sm">{asset.name}</span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <span className="text-sm text-muted-foreground">
                        {asset.category}
                      </span>
                    </TableCell>
                    <TableCell className="pr-5 text-right">
                      <Badge
                        variant="outline"
                        className={statusBadge[asset.status].className}
                      >
                        {statusBadge[asset.status].label}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="px-5 py-3 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Showing 1-5 of 142
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_back
                  </span>
                </Button>
                <Button variant="outline" size="icon-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Logs */}
        <Card className="overflow-hidden">
          <CardHeader className="flex-row items-center justify-between border-b">
            <CardTitle>Recent Logs</CardTitle>
            <CardAction className="col-start-auto row-start-auto justify-self-auto">
              <span className="material-symbols-outlined text-[18px] text-muted-foreground">
                history
              </span>
            </CardAction>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            {logs.map((log) => (
              <div
                key={log.name + log.time}
                className="p-4 hover:bg-muted/50 transition-colors border-b border-border last:border-0"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-semibold">{log.name}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase ${log.statusClassName}`}
                  >
                    {log.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{log.desc}</p>
                <p className="text-xs text-muted-foreground mt-2">{log.time}</p>
              </div>
            ))}
            <div className="p-3 border-t border-border">
              <Button variant="ghost" size="sm" className="w-full">
                View Full Log
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}