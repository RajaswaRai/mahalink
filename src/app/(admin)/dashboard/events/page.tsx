"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  // State untuk mengontrol Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk mengontrol Toggle Notifikasi
  const [notifications, setNotifications] = useState({
    event1: true,
    event2: false,
  });

  const toggleNotification = (key: "event1" | "event2") => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col pt-20">
      {/* Mobile Top Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin h-20 bg-surface border-b border-outline-variant shadow-sm md:hidden">
        <button className="text-primary active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            menu
          </span>
        </button>
        <div className="font-headline-md text-headline-md font-black uppercase text-primary">
          CAMPUS_ORG
        </div>
        <div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden relative">
          {/* <Image
            alt="User Profile Avatar"
            className="object-cover"
            fill
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0RgE1pTiZAdg6wIC4Yzhx9lqKaiCfi9TudqiWFYwnBnNfB6Dthl2kKT6yyUMfKxAaLliHvCRDiNSoRl1HUOmxiitDO8N1AT452nY8VH9kowq2eYGIqcIGsxhFERKOoxYIIh53rutkS7s33XU1uS1F3tAf_JyXL7LLRW5FyUi8Xm5_CzVy21fgU5NlQKXnHYyT_VJv-xOCtWOrFRs1FD8nczMioXg2yDAQosqzUPvIJx2wDDhgVLPUkA"
          /> */}
        </div>
      </header>

      {/* Desktop Navigation Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full z-[60] flex-col p-md gap-base bg-surface-container w-80 border-r border-outline-variant">
        <div className="mb-lg">
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
            CORE_NAV
          </h2>
        </div>
        <ul className="flex flex-col gap-base font-label-caps text-label-caps uppercase">
          <li>
            <Link
              className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">group</span>
              Members
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">
                account_balance_wallet
              </span>
              Finance
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-sm p-sm bg-primary-container text-on-primary-container rounded-xl transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Events
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">folder_open</span>
              Archives
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">inventory_2</span>
              Inventory
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">article</span>
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="p-margin md:p-xl max-w-[1440px] mx-auto w-full md:ml-80">
        <div className="flex flex-col gap-lg">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md pb-md border-b border-border-subtle">
            <div>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
                EVENTS &amp; AGENDA
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                Manage upcoming organizational activities.
              </p>
            </div>
            <button
              className="bg-primary text-on-primary font-label-caps text-label-caps uppercase px-md py-sm rounded-full shadow-sm hover:bg-academic-blue transition-colors flex items-center gap-xs"
              onClick={() => setIsModalOpen(true)}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                add
              </span>
              Create Event
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column — Calendar & Categories */}
            <div className="lg:col-span-5 flex flex-col gap-md">
              <div className="bg-surface p-md rounded-2xl border border-border-subtle">
                <div className="flex justify-between items-center mb-md border-b border-border-subtle pb-sm">
                  <h2 className="font-headline-md text-headline-md text-on-background">
                    OCTOBER 2024
                  </h2>
                  <div className="flex gap-xs">
                    <button className="p-xs rounded-full hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined">
                        chevron_left
                      </span>
                    </button>
                    <button className="p-xs rounded-full hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-xs text-center font-label-caps text-label-caps mb-sm text-on-surface-variant">
                  <div>S</div>
                  <div>M</div>
                  <div>T</div>
                  <div>W</div>
                  <div>T</div>
                  <div>F</div>
                  <div>S</div>
                </div>
                <div className="grid grid-cols-7 gap-xs font-body-md text-body-md text-center">
                  <div className="aspect-square flex items-center justify-center text-outline">
                    29
                  </div>
                  <div className="aspect-square flex items-center justify-center text-outline">
                    30
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer">
                    1
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer relative">
                    2
                    <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-academic-blue" />
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer">
                    3
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full bg-surface-container-high text-on-background cursor-pointer">
                    4
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer">
                    5
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer relative">
                    6
                    <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-secondary" />
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full bg-primary text-on-primary">
                    7
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer">
                    8
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer">
                    9
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer">
                    10
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer">
                    11
                  </div>
                  <div className="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container-highest transition-colors cursor-pointer">
                    12
                  </div>
                </div>
              </div>

              <div className="bg-surface p-md rounded-2xl border border-border-subtle flex flex-col gap-sm">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase pb-xs">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-sm">
                  <span className="inline-flex items-center gap-xs px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps">
                    <div className="w-2 h-2 rounded-full bg-academic-blue" />
                    Academic
                  </span>
                  <span className="inline-flex items-center gap-xs px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Social
                  </span>
                  <span className="inline-flex items-center gap-xs px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-caps text-label-caps">
                    <div className="w-2 h-2 rounded-full bg-focus-yellow" />
                    Administrative
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column — Upcoming Events */}
            <div className="lg:col-span-7 flex flex-col gap-base">
              <div className="flex justify-between items-center pb-xs border-b border-border-subtle mb-sm">
                <h2 className="font-headline-md text-headline-md">UPCOMING</h2>
                <span className="font-label-caps text-label-caps text-on-surface-variant">
                  4 Events
                </span>
              </div>

              {/* Event Card 1 */}
              <div className="group bg-surface p-md rounded-2xl border border-border-subtle flex flex-col md:flex-row gap-md items-start md:items-center hover:bg-surface-container transition-colors">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-fixed text-on-primary-fixed rounded-xl flex flex-col items-center justify-center">
                  <span className="font-label-caps text-label-caps">OCT</span>
                  <span className="font-headline-md text-headline-md leading-none">
                    07
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-sm mb-xs">
                    <span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-caps text-[10px] uppercase">
                      Academic
                    </span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      14:00 - 16:00
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-xs">
                    Guest Lecture: Modern Architecture
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                    A deep dive into Bauhaus principles and their application in
                    contemporary software design.
                  </p>
                </div>
                <div className="shrink-0 flex md:flex-col gap-sm mt-sm md:mt-0">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        checked={notifications.event1}
                        className="sr-only"
                        onChange={() => toggleNotification("event1")}
                        type="checkbox"
                      />
                      <div className="block w-10 h-6 bg-surface-container-highest rounded-full" />
                      <div
                        className={`dot absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                          notifications.event1
                            ? "translate-x-4 bg-primary"
                            : "bg-outline"
                        }`}
                      />
                    </div>
                    <span className="ml-2 font-label-caps text-label-caps text-on-surface-variant hidden md:block">
                      Notify
                    </span>
                  </label>
                </div>
              </div>

              {/* Event Card 2 */}
              <div className="group bg-surface p-md rounded-2xl border border-border-subtle flex flex-col md:flex-row gap-md items-start md:items-center hover:bg-surface-container transition-colors">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary-fixed text-on-secondary-fixed rounded-xl flex flex-col items-center justify-center">
                  <span className="font-label-caps text-label-caps">OCT</span>
                  <span className="font-headline-md text-headline-md leading-none">
                    12
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-sm mb-xs">
                    <span className="px-2 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full font-label-caps text-[10px] uppercase">
                      Social
                    </span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      19:00 - 23:00
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-xs">
                    End of Midterms Mixer
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                    Celebrate the end of midterms with fellow members at the
                    Student Union.
                  </p>
                </div>
                <div className="flex-shrink-0 flex md:flex-col gap-sm mt-sm md:mt-0">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        checked={notifications.event2}
                        className="sr-only"
                        onChange={() => toggleNotification("event2")}
                        type="checkbox"
                      />
                      <div className="block w-10 h-6 bg-surface-container-highest rounded-full" />
                      <div
                        className={`dot absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                          notifications.event2
                            ? "translate-x-4 bg-primary"
                            : "bg-outline"
                        }`}
                      />
                    </div>
                    <span className="ml-2 font-label-caps text-label-caps text-on-surface-variant hidden md:block">
                      Notify
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Dialog (Controlled via State) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-on-background/50 backdrop-blur-sm flex items-center justify-center p-md">
          <div className="bg-surface w-full max-w-[600px] rounded-2xl shadow-lg flex flex-col max-h-[795px] overflow-y-auto">
            <div className="p-md border-b border-border-subtle flex justify-between items-center bg-surface">
              <h2 className="font-headline-md text-headline-md uppercase">
                CREATE NEW EVENT
              </h2>
              <button
                className="p-xs rounded-full bg-surface text-on-surface hover:bg-surface-container-high transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form
              className="p-md flex flex-col gap-md"
              onSubmit={(e) => {
                e.preventDefault();
                setIsModalOpen(false);
              }}
            >
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  Event Title
                </label>
                <input
                  className="bg-surface-container-low p-sm rounded-lg border border-border-subtle font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  placeholder="e.g. Design Critique"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Date
                  </label>
                  <input
                    className="bg-surface-container-low p-sm rounded-lg border border-border-subtle font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    type="date"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Time
                  </label>
                  <input
                    className="bg-surface-container-low p-sm rounded-lg border border-border-subtle font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    type="time"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                  Category
                </label>
                <select className="bg-surface-container-low p-sm rounded-lg border border-border-subtle font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                  <option>Academic</option>
                  <option>Social</option>
                  <option>Administrative</option>
                </select>
              </div>
              <div className="flex justify-end gap-sm mt-sm">
                <button
                  className="px-md py-sm bg-surface text-on-surface rounded-full font-label-caps text-label-caps uppercase hover:bg-surface-container-highest transition-colors"
                  onClick={() => setIsModalOpen(false)}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="px-md py-sm bg-primary text-on-primary rounded-full shadow-sm hover:bg-academic-blue transition-colors font-label-caps text-label-caps uppercase"
                  type="submit"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 h-16 flex justify-around items-stretch bg-surface border-t border-border-subtle">
        <Link
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 w-full hover:bg-surface-container-highest transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">home</span>
          <span className="font-label-caps text-[10px] uppercase">Home</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 w-full hover:bg-surface-container-highest transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">payments</span>
          <span className="font-label-caps text-[10px] uppercase">Finance</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center text-primary h-full px-4 w-full bg-primary-fixed/20 transition-colors"
          href="#"
        >
          <span
            className="material-symbols-outlined mb-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            event
          </span>
          <span className="font-label-caps text-[10px] uppercase">Events</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 w-full hover:bg-surface-container-highest transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">description</span>
          <span className="font-label-caps text-[10px] uppercase">Docs</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 w-full hover:bg-surface-container-highest transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-label-caps text-[10px] uppercase">Me</span>
        </Link>
      </nav>

      {/* Footer */}
      <footer className="w-full py-xl px-margin flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container-low text-on-background border-t border-border-subtle mt-xl mb-16 md:mb-0 md:ml-80">
        <div className="font-headline-md text-headline-md uppercase text-center md:text-left">
          ©2024 CAMPUS_ORG_SYSTEM
        </div>
        <div className="flex flex-wrap justify-center gap-md font-label-caps text-label-caps text-on-surface-variant">
          <Link
            className="hover:text-primary transition-colors uppercase"
            href="#"
          >
            Privacy
          </Link>
          <Link
            className="hover:text-primary transition-colors uppercase"
            href="#"
          >
            Terms
          </Link>
          <Link
            className="hover:text-primary transition-colors uppercase"
            href="#"
          >
            Support
          </Link>
          <Link
            className="hover:text-primary transition-colors uppercase"
            href="#"
          >
            Archive
          </Link>
        </div>
      </footer>
    </div>
  );
}
