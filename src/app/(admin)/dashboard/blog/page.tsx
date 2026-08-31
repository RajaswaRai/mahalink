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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type PostStatus = "Published" | "Draft" | "Scheduled";

type Post = {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  status: PostStatus;
};

const posts: Post[] = [
  {
    id: "1",
    title: "Deconstructing the New Student Union Building",
    category: "Architecture",
    author: "A. Turnad",
    date: "2024-10-24",
    status: "Published",
  },
  {
    id: "2",
    title: "End of Midterms Mixer Recap",
    category: "Social",
    author: "H. Lamarr",
    date: "2024-10-19",
    status: "Published",
  },
  {
    id: "3",
    title: "Bauhaus Principles in Software Design",
    category: "Academic",
    author: "A. Turing",
    date: "2024-10-12",
    status: "Published",
  },
  {
    id: "4",
    title: "Q4 Budget Planning Notes",
    category: "Administrative",
    author: "N. Tesla",
    date: "2024-10-30",
    status: "Scheduled",
  },
  {
    id: "5",
    title: "Interview: Campus Organization Lead",
    category: "Social",
    author: "A. Lovelace",
    date: "—",
    status: "Draft",
  },
];

const statusFilters = ["All", "Published", "Draft", "Scheduled"] as const;

const statusBadge: Record<PostStatus, { className: string }> = {
  Published: {
    className:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900",
  },
  Draft: {
    className: "bg-muted text-muted-foreground",
  },
  Scheduled: {
    className:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-900",
  },
};

const postStats = [
  { title: "Total Posts", value: "12" },
  { title: "Published", value: "8", className: "text-emerald-600 dark:text-emerald-400" },
  { title: "Drafts", value: "3", className: "text-muted-foreground" },
  { title: "Scheduled", value: "1", className: "text-amber-600 dark:text-amber-400" },
];

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
    <Card>
      <CardHeader>
        <CardDescription className="text-xs uppercase tracking-widest">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className={cn("text-3xl font-bold tracking-tight", className)}>
          {value}
        </p>
      </CardContent>
    </Card>
  );
}

export default function BlogManagerPage() {
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] =
    useState<(typeof statusFilters)[number]>("All");

  const filtered = posts.filter((post) => {
    const matchStatus =
      activeStatus === "All" || post.status === activeStatus;
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="p-5 md:p-8 max-w-6xl mx-auto space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Blog Management</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Publish and manage organizational news and articles.
          </p>
        </div>
        <Button size="lg">
          <span className="material-symbols-outlined text-[16px]">add</span>
          New Post
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {postStats.map((s) => (
          <StatCard
            key={s.title}
            title={s.title}
            value={s.value}
            className={s.className}
          />
        ))}
      </div>

      {/* Filters + Search */}
      <Card>
        <CardContent className="pt-5 flex flex-col sm:flex-row gap-3">
          <div className="flex flex-wrap gap-2 flex-1">
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                  activeStatus === status
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80",
                )}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="relative sm:w-56 flex-shrink-0">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-muted-foreground">
              search
            </span>
            <Input
              placeholder="Cari judul / penulis..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 h-8 text-xs"
            />
          </div>
        </CardContent>
      </Card>

      {/* Post table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Semua Post</CardTitle>
          <CardAction>
            <Badge variant="outline">{filtered.length} post</Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-5">Judul</TableHead>
                <TableHead className="hidden sm:table-cell">Kategori</TableHead>
                <TableHead className="hidden md:table-cell">Penulis</TableHead>
                <TableHead className="hidden md:table-cell">Tanggal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="pr-5 text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-12 text-muted-foreground text-sm"
                  >
                    Tidak ada post yang cocok.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="pl-5">
                      <p className="font-medium text-sm max-w-[280px] truncate">
                        {post.title}
                      </p>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <span className="text-sm text-muted-foreground">
                        {post.category}
                      </span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <span className="text-sm text-muted-foreground">
                        {post.author}
                      </span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={statusBadge[post.status].className}>
                        {post.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="pr-5">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon-sm">
                          <span className="material-symbols-outlined text-[18px]">
                            edit
                          </span>
                        </Button>
                        <Button variant="ghost" size="icon-sm">
                          <span className="material-symbols-outlined text-[18px]">
                            delete
                          </span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}