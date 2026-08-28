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

function StatCard({
  title,
  value,
  subtitle,
  icon,
  badge,
  badgeVariant = "secondary",
  className,
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "outline" | "destructive" | "ghost";
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardDescription className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px]">{icon}</span>
          {title}
        </CardDescription>
        <CardAction>
          {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold tracking-tight">{value}</p>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}

function AnnouncementItem({
  icon,
  iconBg,
  title,
  time,
}: {
  icon: string;
  iconBg: string;
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors cursor-pointer border-b border-border last:border-0">
      <div
        className={`w-9 h-9 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}
      >
        <span className="material-symbols-outlined text-[18px]">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{time}</p>
      </div>
      <span className="material-symbols-outlined text-[16px] text-muted-foreground">
        chevron_right
      </span>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="p-5 md:p-8 max-w-6xl mx-auto space-y-6">
      {/* Page header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <p className="text-sm text-muted-foreground">System Status: Nominal</p>
          </div>
        </div>
        <Button size="sm">
          <span className="material-symbols-outlined text-[16px]">add</span>
          New Entry
        </Button>
      </div>

      {/* Stat cards — top row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          title="Total Kas"
          value="Rp 12.450.000"
          subtitle="Saldo saat ini"
          icon="account_balance_wallet"
          badge="Live"
          badgeVariant="default"
          className="lg:col-span-2"
        />
        <StatCard
          title="Anggota Aktif"
          value="142"
          subtitle="+12 bulan ini"
          icon="group"
          badge="+12"
          badgeVariant="secondary"
        />
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Upcoming Event */}
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-muted-foreground">
                  event
                </span>
                Agenda Mendatang
              </div>
            </CardTitle>
            <CardAction>
              <Badge variant="outline">Q3 Plan</Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold">General Assembly</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Rapat pleno kuartal ketiga
              </p>
            </div>
            <div className="flex gap-2">
              {[
                { value: "04", label: "HARI" },
                { value: "12", label: "JAM" },
                { value: "30", label: "MENIT" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex-1 bg-muted rounded-lg p-2.5 text-center"
                >
                  <p className="text-lg font-bold leading-none">{value}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 font-medium">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Lihat Detail
            </Button>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-muted-foreground">
                  campaign
                </span>
                Pengumuman
              </div>
            </CardTitle>
            <CardAction>
              <Badge variant="secondary">2 baru</Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <AnnouncementItem
              icon="warning"
              iconBg="bg-destructive/10 text-destructive"
              title="Jadwal Pemeliharaan Server"
              time="2 jam yang lalu"
            />
            <AnnouncementItem
              icon="description"
              iconBg="bg-blue-100 text-blue-600"
              title="Laporan Keuangan Q2 Tersedia"
              time="Kemarin"
            />
            <AnnouncementItem
              icon="event"
              iconBg="bg-green-100 text-green-600"
              title="Pengingat: Rapat Koordinasi Besok"
              time="3 hari yang lalu"
            />
          </CardContent>
        </Card>
      </div>

      {/* Quick links row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: "group", label: "Manajemen Anggota", href: "/dashboard/member" },
          { icon: "account_balance_wallet", label: "Keuangan", href: "/dashboard/finance" },
          { icon: "calendar_today", label: "Agenda & Acara", href: "/dashboard/events" },
          { icon: "folder_open", label: "Arsip Dokumen", href: "/dashboard/archives" },
        ].map(({ icon, label, href }) => (
          <a
            key={href}
            href={href}
            className="flex flex-col items-center gap-2 p-4 bg-card rounded-2xl border border-border hover:bg-muted transition-colors text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-[20px] text-muted-foreground group-hover:text-primary transition-colors">
                {icon}
              </span>
            </div>
            <span className="text-xs font-medium text-muted-foreground leading-tight">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
