"use client";

import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface AdminHeaderProps {
  title?: string;
}

export function AdminHeader({ title }: AdminHeaderProps) {
  return (
    <header className="md:ml-64 fixed top-0 left-0 right-0 z-30 h-16 bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-between px-5">
      {/* Left — mobile brand + hamburger */}
      <div className="flex items-center gap-3">
        {/* Mobile brand */}
        <Link href="/" className="md:hidden flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-primary-foreground text-[16px]">
              hub
            </span>
          </div>
          <span className="font-semibold text-sm">Mahalink</span>
        </Link>

        {/* Page title on desktop */}
        {title && (
          <span className="hidden md:block text-sm text-muted-foreground font-medium">
            {title}
          </span>
        )}
      </div>

      {/* Right — actions + avatar */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <span className="material-symbols-outlined text-[20px]">
            notifications
          </span>
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-destructive" />
        </Button>

        <div className="flex items-center gap-2.5 pl-2 border-l border-border cursor-pointer hover:bg-muted rounded-lg px-2 py-1.5 transition-colors">
          <Avatar size="sm">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="hidden sm:block text-xs font-medium">Admin</span>
          <span className="material-symbols-outlined text-[16px] text-muted-foreground">
            expand_more
          </span>
        </div>
      </div>
    </header>
  );
}
