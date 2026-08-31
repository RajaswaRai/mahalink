"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendarCells = [
  { day: "29", variant: "outside" },
  { day: "30", variant: "outside" },
  { day: "1", variant: "default" },
  { day: "2", variant: "dot" },
  { day: "3", variant: "default" },
  { day: "4", variant: "selected" },
  { day: "5", variant: "default" },
  { day: "6", variant: "dot-red" },
  { day: "7", variant: "today" },
  { day: "8", variant: "default" },
  { day: "9", variant: "default" },
  { day: "10", variant: "default" },
  { day: "11", variant: "default" },
  { day: "12", variant: "default" },
] as const;

const categories = [
  { name: "Academic", dot: "bg-blue-600" },
  { name: "Social", dot: "bg-red-500" },
  { name: "Administrative", dot: "bg-yellow-500" },
];

const eventCategories = {
  Academic:
    "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/50 dark:text-blue-300",
  Social:
    "bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/50 dark:text-rose-300",
  Administrative:
    "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/50 dark:text-amber-300",
} as const;

type EventCategory = keyof typeof eventCategories;

const upcomingEvents = [
  {
    id: "event1",
    day: "07",
    category: "Academic" as EventCategory,
    time: "14:00 - 16:00",
    title: "Guest Lecture: Modern Architecture",
    desc: "A deep dive into Bauhaus principles and their application in contemporary software design.",
    dateColor:
      "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
  },
  {
    id: "event2",
    day: "12",
    category: "Social" as EventCategory,
    time: "19:00 - 23:00",
    title: "End of Midterms Mixer",
    desc: "Celebrate the end of midterms with fellow members at the Student Union.",
    dateColor:
      "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
  },
];

const emptyForm = {
  title: "",
  date: "",
  time: "",
  category: "Academic",
  description: "",
};

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [notifications, setNotifications] = useState<Record<string, boolean>>({
    event1: true,
    event2: false,
  });

  const openModal = () => {
    setForm(emptyForm);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setForm(emptyForm);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  const setField =
    (key: keyof typeof emptyForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const toggleNotification = (key: string) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-5 md:p-8 max-w-6xl mx-auto space-y-6">
      {/* Page header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Events &amp; Agenda
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage upcoming organizational activities.
          </p>
        </div>
        <Button size="lg" onClick={openModal}>
          <span className="material-symbols-outlined text-[16px]">add</span>
          Create Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left — Calendar & Categories */}
        <div className="lg:col-span-5 space-y-4">
          <Card>
            <CardHeader className="flex-row items-center justify-between border-b">
              <CardTitle>OCTOBER 2024</CardTitle>
              <CardAction className="col-start-auto row-start-auto justify-self-auto flex gap-1">
                <Button variant="ghost" size="icon-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    chevron_left
                  </span>
                </Button>
                <Button variant="ghost" size="icon-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    chevron_right
                  </span>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-muted-foreground mb-2">
                {weekdays.map((d) => (
                  <div key={d} className="py-1">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {calendarCells.map((cell) => (
                  <button
                    key={cell.day}
                    type="button"
                    className={cn(
                      "aspect-square flex items-center justify-center rounded-full transition-colors relative",
                      cell.variant === "outside" && "text-muted-foreground/50",
                      cell.variant === "default" && "hover:bg-muted",
                      cell.variant === "selected" && "bg-muted font-medium",
                      cell.variant === "today" &&
                        "bg-primary text-primary-foreground font-semibold",
                    )}
                  >
                    {cell.day}
                    {(cell.variant === "dot" || cell.variant === "dot-red") && (
                      <span
                        className={cn(
                          "absolute bottom-1 w-1.5 h-1.5 rounded-full",
                          cell.variant === "dot" ? "bg-blue-600" : "bg-red-500",
                        )}
                      />
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Categories
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Badge key={cat.name} variant="secondary" className="gap-1.5">
                    <span className={cn("w-2 h-2 rounded-full", cat.dot)} />
                    {cat.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right — Upcoming */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between pb-1">
            <h2 className="font-semibold text-sm uppercase tracking-wide">
              Upcoming
            </h2>
            <span className="text-xs text-muted-foreground">4 Events</span>
          </div>

          {upcomingEvents.map((ev) => (
            <Card key={ev.id}>
              <CardContent className="pt-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div
                  className={cn(
                    "flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center",
                    ev.dateColor,
                  )}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-widest">
                    OCT
                  </span>
                  <span className="text-xl font-bold leading-none mt-0.5">
                    {ev.day}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase",
                        eventCategories[ev.category],
                      )}
                    >
                      {ev.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {ev.time}
                    </span>
                  </div>
                  <h3 className="font-semibold">{ev.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {ev.desc}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={notifications[ev.id]}
                      onClick={() => toggleNotification(ev.id)}
                      className={cn(
                        "relative w-10 h-6 rounded-full transition-colors",
                        notifications[ev.id] ? "bg-primary" : "bg-muted",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform",
                          notifications[ev.id] && "translate-x-4",
                        )}
                      />
                    </button>
                    <span className="text-xs text-muted-foreground hidden md:block">
                      Notify
                    </span>
                  </label>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Create Event Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="create-event-title"
            className="w-full max-w-2xl bg-card rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between p-5 border-b border-border shrink-0">
              <h2 id="create-event-title" className="font-semibold">
                Create New Event
              </h2>
              <Button variant="ghost" size="icon-sm" onClick={closeModal}>
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </Button>
            </div>
            <form
              className="p-5 space-y-4 overflow-y-auto"
              onSubmit={(e) => {
                e.preventDefault();
                closeModal();
              }}
            >
              <div className="space-y-1.5">
                <Label htmlFor="event-title">Event Title</Label>
                <Input
                  id="event-title"
                  placeholder="e.g. Design Critique"
                  className="h-9"
                  required
                  value={form.title}
                  onChange={setField("title")}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="event-date">Date</Label>
                  <Input
                    id="event-date"
                    type="date"
                    className="h-9"
                    required
                    value={form.date}
                    onChange={setField("date")}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="event-time">Time</Label>
                  <Input
                    id="event-time"
                    type="time"
                    className="h-9"
                    required
                    value={form.time}
                    onChange={setField("time")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="event-category">Category</Label>
                  <select
                    id="event-category"
                    value={form.category}
                    onChange={setField("category")}
                    className="h-9 w-full rounded-2xl border border-transparent bg-input/50 px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                  >
                    <option>Academic</option>
                    <option>Social</option>
                    <option>Administrative</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="event-description">Description</Label>
                <textarea
                  id="event-description"
                  rows={3}
                  placeholder="e.g. Rapat pleno kuartal ketiga..."
                  value={form.description}
                  onChange={setField("description")}
                  className="w-full rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2 flex-shrink-0">
                <Button variant="outline" type="button" onClick={closeModal}>
                  Cancel
                </Button>
                <Button type="submit">Save Event</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
