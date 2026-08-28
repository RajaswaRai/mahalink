"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/dashboard/member", icon: "group", label: "Members" },
  {
    href: "/dashboard/finance",
    icon: "account_balance_wallet",
    label: "Finance",
  },
  { href: "/dashboard/events", icon: "calendar_today", label: "Events" },
  { href: "/dashboard/archives", icon: "folder_open", label: "Archives" },
  { href: "/dashboard/inventory", icon: "inventory_2", label: "Inventory" },
  { href: "/dashboard/blog", icon: "article", label: "Blog" },
];

const bottomNavItems = [
  { href: "/dashboard", icon: "home", label: "Home" },
  { href: "/dashboard/finance", icon: "payments", label: "Finance" },
  { href: "/dashboard/events", icon: "event", label: "Events" },
  { href: "/dashboard/member", icon: "group", label: "Members" },
];

function NavItem({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: string;
  label: string;
  active: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group",
          active
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <span
          className={cn(
            "material-symbols-outlined text-[20px] transition-all",
            active ? "filled" : "",
          )}
          style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
        >
          {icon}
        </span>
        <span>{label}</span>
      </Link>
    </li>
  );
}

export function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 z-40 flex-col bg-card border-r border-border">
        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-border flex-shrink-0">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-foreground text-[16px]">
                hub
              </span>
            </div>
            <span className="font-semibold text-sm tracking-tight">
              Mahalink
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-3">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-3 mb-2">
            Menu
          </p>
          <ul className="space-y-0.5">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} active={isActive(item.href)} />
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-border">
            <ul className="space-y-0.5">
              <NavItem
                href="/dashboard/settings"
                icon="settings"
                label="Settings"
                active={pathname.startsWith("/dashboard/settings")}
              />
            </ul>
          </div>
        </nav>

        {/* User section */}
        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[16px] text-muted-foreground">
                person
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">User Profile</p>
              <p className="text-[10px] text-muted-foreground truncate">
                admin@mahalink.id
              </p>
            </div>
            <span className="material-symbols-outlined text-[16px] text-muted-foreground">
              more_vert
            </span>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 h-16 flex justify-around items-stretch bg-card border-t border-border safe-area-inset-bottom">
        {bottomNavItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center h-full px-4 transition-colors w-full gap-0.5",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={{
                  fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
