"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const tabs = ["Profile", "Notifications", "Security"] as const;
type Tab = (typeof tabs)[number];

const notificationOptions = [
  {
    key: "emailDigest",
    title: "Email Digest",
    desc: "Ringkasan aktivitas organisasi ke email setiap hari.",
  },
  {
    key: "eventReminders",
    title: "Pengingat Agenda",
    desc: "Notifikasi H-1 dan H-2 sebelum acara berjalan.",
  },
  {
    key: "financeReports",
    title: "Laporan Keuangan",
    desc: "Pemberitahuan saat laporan kas baru dipublikasikan.",
  },
  {
    key: "weeklySummary",
    title: "Ringkasan Mingguan",
    desc: "Ringkasan semua aktivitas organisasi tiap Senin.",
  },
] as const;

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Profile");
  const [notifications, setNotifications] = useState<Record<string, boolean>>({
    emailDigest: true,
    eventReminders: true,
    financeReports: false,
    weeklySummary: false,
  });

  const toggleNotification = (key: string) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-5 md:p-8 max-w-4xl mx-auto space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Kelola profil, notifikasi, dan keamanan akun organisasi.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeTab === tab
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Profile" && (
        <Card>
          <CardHeader>
            <CardTitle>Informasi Profil</CardTitle>
            <CardDescription>
              Identitas yang ditampilkan di seluruh modul Mahalink.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="profile-name">Nama Lengkap</Label>
                <Input id="profile-name" defaultValue="User Profile" className="h-9" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="profile-email">Email</Label>
                <Input
                  id="profile-email"
                  type="email"
                  defaultValue="admin@mahalink.id"
                  className="h-9"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="profile-role">Peran</Label>
              <select
                id="profile-role"
                defaultValue="Administrator"
                className="h-9 w-full rounded-2xl border border-transparent bg-input/50 px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
              >
                <option>Administrator</option>
                <option>Bendahara</option>
                <option>Sekretaris</option>
                <option>Anggota</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="profile-bio">Bio</Label>
              <textarea
                id="profile-bio"
                rows={3}
                placeholder="Ceritakan singkat tentang organisasi..."
                className="w-full rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex justify-end pt-2">
              <Button className="w-full sm:w-auto">Simpan Perubahan</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "Notifications" && (
        <Card>
          <CardHeader>
            <CardTitle>Preferensi Notifikasi</CardTitle>
            <CardDescription>
              Atur pemberitahuan yang ingin Anda terima.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 px-0 pb-0">
            {notificationOptions.map((opt) => (
              <div
                key={opt.key}
                className="flex items-center justify-between gap-4 px-6 py-4 border-b border-border last:border-0"
              >
                <div>
                  <p className="text-sm font-medium">{opt.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {opt.desc}
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={notifications[opt.key]}
                  onClick={() => toggleNotification(opt.key)}
                  className={cn(
                    "relative w-10 h-6 rounded-full transition-colors flex-shrink-0",
                    notifications[opt.key] ? "bg-primary" : "bg-muted",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform",
                      notifications[opt.key] && "translate-x-4",
                    )}
                  />
                </button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {activeTab === "Security" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ubah Kata Sandi</CardTitle>
              <CardDescription>
                Gunakan kombinasi huruf, angka, dan simbol yang kuat.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="pwd-current">Kata Sandi Saat Ini</Label>
                <Input id="pwd-current" type="password" className="h-9" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="pwd-new">Kata Sandi Baru</Label>
                  <Input id="pwd-new" type="password" className="h-9" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="pwd-confirm">Konfirmasi Kata Sandi</Label>
                  <Input id="pwd-confirm" type="password" className="h-9" />
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Button className="w-full sm:w-auto">Perbarui Kata Sandi</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-600 dark:text-red-400">
                Zona Bahaya
              </CardTitle>
              <CardDescription>
                Tindakan ini bersifat permanen dan tidak dapat dibatalkan.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium">Hapus Akun</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Hapus permanen akun dan seluruh data organisasi.
                </p>
              </div>
              <Button variant="destructive" className="w-full sm:w-auto">
                <span className="material-symbols-outlined text-[16px]">
                  delete_forever
                </span>
                Hapus Akun
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}