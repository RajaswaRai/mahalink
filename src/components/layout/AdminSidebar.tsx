"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  const [isSheetMounted, setIsSheetMounted] = useState(false);
  const [sheetVisible, setSheetVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const menuSheetItems = [
    ...navItems,
    { href: "/dashboard/settings", icon: "settings", label: "Settings" },
  ];

  const openSheet = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsSheetMounted(true);
    setTimeout(() => setSheetVisible(true), 30);
  };

  const closeSheet = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setSheetVisible(false);
    closeTimer.current = setTimeout(() => setIsSheetMounted(false), 300);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!isSheetMounted) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSheet();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isSheetMounted]);

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
        {bottomNavItems.slice(0, 2).map((item) => (
          <MobileNavLink key={item.href} item={item} active={isActive(item.href)} />
        ))}

        {/* Center — Menu sheet trigger */}
        <button
          onClick={openSheet}
          className={cn(
            "flex flex-col items-center justify-center h-full px-4 transition-colors w-full gap-0.5",
            isSheetMounted ? "text-primary" : "text-muted-foreground hover:text-foreground",
          )}
        >
          <span className="material-symbols-outlined text-[22px]">menu</span>
          <span className="text-[10px] font-medium">Menu</span>
        </button>

        {bottomNavItems.slice(2).map((item) => (
          <MobileNavLink key={item.href} item={item} active={isActive(item.href)} />
        ))}
      </nav>

      {/* Mobile More Sheet */}
      {isSheetMounted && (
        <div className="md:hidden fixed inset-0 z-[60] flex flex-col justify-end">
          <div
            onClick={closeSheet}
            className={cn(
              "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
              sheetVisible ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            className={cn(
              "relative bg-card border-t border-border rounded-t-3xl shadow-2xl max-h-[75vh] overflow-y-auto safe-area-inset-bottom transition-transform duration-300 ease-out",
              sheetVisible ? "translate-y-0" : "translate-y-full",
            )}
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <p id="mobile-menu-title" className="text-sm font-semibold">
                Menu
              </p>
              <Button variant="ghost" size="icon-sm" onClick={closeSheet}>
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </Button>
            </div>
            <ul className="p-4 grid grid-cols-3 gap-2 pb-8">
              {menuSheetItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeSheet}
                      className={cn(
                        "flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-colors text-center",
                        active
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "hover:bg-muted text-muted-foreground",
                      )}
                    >
                      <span
                        className="material-symbols-outlined text-[24px]"
                        style={{
                          fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0",
                        }}
                      >
                        {item.icon}
                      </span>
                      <span className="text-[10px] font-medium leading-tight">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

function MobileNavLink({
  item,
  active,
}: {
  item: { href: string; icon: string; label: string };
  active: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex flex-col items-center justify-center h-full px-4 transition-colors w-full gap-0.5",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground",
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
}
