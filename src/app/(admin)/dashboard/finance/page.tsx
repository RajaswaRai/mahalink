"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FinancePage() {
  // 1. Menggunakan React state untuk mengelola jenis transaksi (Income / Expense)
  const [transactionType, setTransactionType] = useState<"income" | "expense">(
    "income",
  );

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col pt-20">
      {/* Top Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin h-20 bg-surface border-b border-border-subtle hidden md:flex">
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-primary cursor-pointer hover:bg-surface-container-high transition-all p-sm rounded-DEFAULT">
            menu
          </span>
          <span className="font-headline-md text-headline-md font-semibold text-primary">
            CAMPUS_ORG
          </span>
        </div>
        <div className="flex items-center gap-md">
          <nav className="flex gap-md">
            <Link
              className="font-label-caps text-label-caps text-on-surface hover:bg-surface-container-high transition-all p-sm rounded-DEFAULT"
              href="#"
            >
              Home
            </Link>
            <Link
              className="font-label-caps text-label-caps text-primary underline decoration-2 hover:bg-surface-container-high transition-all p-sm rounded-DEFAULT"
              href="#"
            >
              Finance
            </Link>
            <Link
              className="font-label-caps text-label-caps text-on-surface hover:bg-surface-container-high transition-all p-sm rounded-DEFAULT"
              href="#"
            >
              Events
            </Link>
          </nav>
          <div className="w-10 h-10 rounded-full border border-border-subtle bg-surface-container overflow-hidden ml-md relative">
            {/* <Image
              alt="User Profile"
              className="object-cover"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC29-hRiPnPELGlxJunj5L-AjGOw_cBS-JrEbFBCi1x4whHqUcg9GPEck0hSvi4sksP1P2IulttDCkzU8b6B_ApmIrjjaBov8K2SZB6_BJjY0qKezqhXk1eUy9xJDTxNcYx1a8Th26PP-eidAOAMUkLfA_TEG8LtCAdiwxT9LeFHfEajfAajbVTkji6SVcDWO1aH4UJcWNne3_oeedPXdo0QnnBBx7EIihYrftL7N6TbHpbBkApFWoSKA"
            /> */}
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full z-[60] flex-col p-md gap-base bg-surface text-on-surface border-r border-border-subtle w-80 hidden md:flex pt-24">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-md">
          CORE_NAV
        </h2>
        <nav className="flex flex-col gap-base">
          <Link
            className="flex items-center gap-sm p-sm font-label-caps text-label-caps uppercase text-on-surface-variant hover:bg-surface-container transition-colors rounded-DEFAULT"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </Link>
          <Link
            className="flex items-center gap-sm p-sm font-label-caps text-label-caps uppercase text-on-surface-variant hover:bg-surface-container transition-colors rounded-DEFAULT"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            Members
          </Link>
          <Link
            className="flex items-center gap-sm p-sm font-label-caps text-label-caps uppercase bg-primary-container text-on-primary-container rounded-DEFAULT transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">
              account_balance_wallet
            </span>
            Finance
          </Link>
          <Link
            className="flex items-center gap-sm p-sm font-label-caps text-label-caps uppercase text-on-surface-variant hover:bg-surface-container transition-colors rounded-DEFAULT"
            href="#"
          >
            <span className="material-symbols-outlined">calendar_today</span>
            Events
          </Link>
          <Link
            className="flex items-center gap-sm p-sm font-label-caps text-label-caps uppercase text-on-surface-variant hover:bg-surface-container transition-colors rounded-DEFAULT"
            href="#"
          >
            <span className="material-symbols-outlined">folder_open</span>
            Archives
          </Link>
          <Link
            className="flex items-center gap-sm p-sm font-label-caps text-label-caps uppercase text-on-surface-variant hover:bg-surface-container transition-colors rounded-DEFAULT"
            href="#"
          >
            <span className="material-symbols-outlined">inventory_2</span>
            Inventory
          </Link>
          <Link
            className="flex items-center gap-sm p-sm font-label-caps text-label-caps uppercase text-on-surface-variant hover:bg-surface-container transition-colors rounded-DEFAULT"
            href="#"
          >
            <span className="material-symbols-outlined">article</span>
            Blog
          </Link>
          <Link
            className="flex items-center gap-sm p-sm font-label-caps text-label-caps uppercase text-on-surface-variant hover:bg-surface-container transition-colors rounded-DEFAULT mt-auto"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-80 pt-16 md:pt-24 pb-32 px-sm md:px-lg min-h-screen relative">
        <div className="max-w-6xl mx-auto flex flex-col gap-lg">
          {/* Section Heading */}
          <section className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border-subtle pb-md gap-md">
            <div>
              <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary">
                Cash Tracking
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">
                Manage organizational income and expenses with geometric
                precision.
              </p>
            </div>
            <div className="flex gap-sm">
              <button className="bg-primary text-on-primary font-label-caps text-label-caps px-md py-sm rounded-DEFAULT hover:bg-primary-fixed-variant transition-colors flex items-center gap-xs">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  add
                </span>{" "}
                New Entry
              </button>
              <button className="bg-surface text-primary border border-primary font-label-caps text-label-caps px-md py-sm rounded-DEFAULT hover:bg-surface-container-high transition-colors flex items-center gap-xs">
                <span className="material-symbols-outlined">download</span>{" "}
                Export
              </button>
            </div>
          </section>

          {/* Metric Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface border border-border-subtle rounded-DEFAULT p-md flex flex-col justify-between aspect-video md:aspect-auto">
              <div className="flex justify-between items-start pb-xs mb-sm">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant">
                  TOTAL BALANCE
                </h3>
                <span className="material-symbols-outlined text-primary">
                  account_balance
                </span>
              </div>
              <div>
                <p className="font-headline-xl text-headline-xl text-on-surface">
                  $14,250.00
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                  +12% vs last month
                </p>
              </div>
            </div>
            <div className="bg-surface border border-border-subtle rounded-DEFAULT p-md flex flex-col justify-between aspect-video md:aspect-auto">
              <div className="flex justify-between items-start pb-xs mb-sm">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant">
                  TOTAL INCOME
                </h3>
                <span className="material-symbols-outlined text-primary">
                  arrow_upward
                </span>
              </div>
              <div>
                <p className="font-headline-xl text-headline-xl text-primary">
                  $5,400.00
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                  Current period
                </p>
              </div>
            </div>
            <div className="bg-surface border border-border-subtle rounded-DEFAULT p-md flex flex-col justify-between aspect-video md:aspect-auto">
              <div className="flex justify-between items-start pb-xs mb-sm">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant">
                  TOTAL EXPENSE
                </h3>
                <span className="material-symbols-outlined text-alert-red">
                  arrow_downward
                </span>
              </div>
              <div>
                <p className="font-headline-xl text-headline-xl text-alert-red">
                  $1,150.00
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                  Current period
                </p>
              </div>
            </div>
          </section>

          {/* Form & Table Cluster */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Record Form */}
            <section className="lg:col-span-4 bg-surface border border-border-subtle rounded-DEFAULT p-md flex flex-col gap-md h-full">
              <div className="pb-sm border-b border-border-subtle">
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Record Transaction
                </h2>
              </div>
              <form
                className="flex flex-col gap-md grow"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Dynamic Radio Buttons using React State */}
                <div className="flex gap-sm">
                  <label
                    className={`flex-1 border p-sm flex items-center justify-center gap-xs cursor-pointer rounded-DEFAULT transition-colors ${
                      transactionType === "income"
                        ? "border-primary bg-primary-container text-on-primary-container"
                        : "border-border-subtle bg-surface text-on-surface-variant hover:bg-surface-container"
                    }`}
                  >
                    <input
                      checked={transactionType === "income"}
                      className="sr-only"
                      name="type"
                      onChange={() => setTransactionType("income")}
                      type="radio"
                      value="income"
                    />
                    <span className="material-symbols-outlined text-sm">
                      add
                    </span>
                    <span className="font-label-caps text-label-caps">
                      Income
                    </span>
                  </label>

                  <label
                    className={`flex-1 border p-sm flex items-center justify-center gap-xs cursor-pointer rounded-DEFAULT transition-colors ${
                      transactionType === "expense"
                        ? "border-primary bg-primary-container text-on-primary-container"
                        : "border-border-subtle bg-surface text-on-surface-variant hover:bg-surface-container"
                    }`}
                  >
                    <input
                      checked={transactionType === "expense"}
                      className="sr-only"
                      name="type"
                      onChange={() => setTransactionType("expense")}
                      type="radio"
                      value="expense"
                    />
                    <span className="material-symbols-outlined text-sm">
                      remove
                    </span>
                    <span className="font-label-caps text-label-caps">
                      Expense
                    </span>
                  </label>
                </div>

                <div className="flex flex-col gap-xs mt-sm">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">
                    AMOUNT ($)
                  </label>
                  <input
                    className="border border-border-subtle rounded-DEFAULT p-sm font-headline-md text-headline-md w-full bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="0.00"
                    type="number"
                  />
                </div>

                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">
                    DESCRIPTION
                  </label>
                  <input
                    className="border border-border-subtle rounded-DEFAULT p-sm font-body-md text-body-md w-full bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="e.g. Venue Booking"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">
                    CATEGORY
                  </label>
                  <select className="border border-border-subtle rounded-DEFAULT p-sm font-body-md text-body-md w-full bg-surface cursor-pointer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                    <option>Operational</option>
                    <option>Events</option>
                    <option>Marketing</option>
                    <option>Miscellaneous</option>
                  </select>
                </div>

                <div className="mt-sm grow">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-xs">
                    PROOF OF TRANSFER
                  </label>
                  <div className="border border-dashed border-border-subtle rounded-DEFAULT p-md flex flex-col items-center justify-center h-32 bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
                    <span className="material-symbols-outlined text-on-surface-variant text-3xl mb-xs group-hover:-translate-y-1 transition-transform">
                      upload_file
                    </span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant text-center">
                      Drag &amp; drop
                      <br />
                      or click to browse
                    </span>
                    <input className="hidden" type="file" />
                  </div>
                </div>

                <button
                  className="w-full bg-primary text-on-primary font-label-caps text-label-caps p-md rounded-DEFAULT hover:bg-primary-fixed-variant transition-colors mt-sm flex justify-center items-center gap-sm"
                  type="submit"
                >
                  <span className="material-symbols-outlined">save</span>
                  Submit Entry
                </button>
              </form>
            </section>

            {/* Recent Ledger Table */}
            <section className="lg:col-span-8 bg-surface border border-border-subtle rounded-DEFAULT h-full flex flex-col">
              <div className="p-md border-b border-border-subtle flex justify-between items-center bg-surface">
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Recent Ledger
                </h2>
                <span className="font-label-caps text-label-caps text-primary cursor-pointer hover:bg-surface-container p-xs rounded-DEFAULT transition-colors">
                  View All
                </span>
              </div>
              <div className="overflow-x-auto flex-grow">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border-subtle bg-surface-container-low">
                      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant font-semibold whitespace-nowrap w-32">
                        Date
                      </th>
                      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant font-semibold">
                        Description
                      </th>
                      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant font-semibold w-32">
                        Category
                      </th>
                      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant font-semibold w-24 text-center">
                        Proof
                      </th>
                      <th className="p-sm font-label-caps text-label-caps text-on-surface-variant font-semibold text-right w-32">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body-md text-body-md text-on-surface">
                    <tr className="border-b border-border-subtle hover:bg-surface-container-low transition-colors group cursor-pointer">
                      <td className="p-sm whitespace-nowrap text-on-surface-variant">
                        2024-10-24
                      </td>
                      <td className="p-sm flex items-center gap-sm font-medium">
                        <span className="material-symbols-outlined text-primary text-sm">
                          arrow_upward
                        </span>
                        Fall Gala Sponsorship
                      </td>
                      <td className="p-sm text-on-surface-variant">Events</td>
                      <td className="p-sm text-center">
                        <span className="material-symbols-outlined text-outline hover:text-primary transition-colors text-sm">
                          description
                        </span>
                      </td>
                      <td className="p-sm text-right font-headline-md text-headline-md text-primary font-semibold">
                        +$2,500.00
                      </td>
                    </tr>

                    <tr className="border-b border-border-subtle hover:bg-surface-container-low transition-colors group cursor-pointer">
                      <td className="p-sm whitespace-nowrap text-on-surface-variant">
                        2024-10-23
                      </td>
                      <td className="p-sm flex items-center gap-sm font-medium">
                        <span className="material-symbols-outlined text-alert-red text-sm">
                          arrow_downward
                        </span>
                        Catering Services
                      </td>
                      <td className="p-sm text-on-surface-variant">Events</td>
                      <td className="p-sm text-center">
                        <span className="material-symbols-outlined text-outline hover:text-primary transition-colors text-sm">
                          description
                        </span>
                      </td>
                      <td className="p-sm text-right font-headline-md text-headline-md font-semibold text-alert-red">
                        -$850.00
                      </td>
                    </tr>

                    <tr className="border-b border-border-subtle hover:bg-surface-container-low transition-colors group cursor-pointer">
                      <td className="p-sm whitespace-nowrap text-on-surface-variant">
                        2024-10-21
                      </td>
                      <td className="p-sm flex items-center gap-sm font-medium">
                        <span className="material-symbols-outlined text-alert-red text-sm">
                          arrow_downward
                        </span>
                        Office Supplies
                      </td>
                      <td className="p-sm text-on-surface-variant">
                        Operational
                      </td>
                      <td className="p-sm text-center">
                        <span className="material-symbols-outlined text-border-subtle text-sm">
                          minimize
                        </span>
                      </td>
                      <td className="p-sm text-right font-headline-md text-headline-md font-semibold text-alert-red">
                        -$120.00
                      </td>
                    </tr>

                    <tr className="border-b border-border-subtle hover:bg-surface-container-low transition-colors group cursor-pointer">
                      <td className="p-sm whitespace-nowrap text-on-surface-variant">
                        2024-10-18
                      </td>
                      <td className="p-sm flex items-center gap-sm font-medium">
                        <span className="material-symbols-outlined text-primary text-sm">
                          arrow_upward
                        </span>
                        Member Dues Q4
                      </td>
                      <td className="p-sm text-on-surface-variant">
                        Operational
                      </td>
                      <td className="p-sm text-center">
                        <span className="material-symbols-outlined text-outline hover:text-primary transition-colors text-sm">
                          description
                        </span>
                      </td>
                      <td className="p-sm text-right font-headline-md text-headline-md text-primary font-semibold">
                        +$1,200.00
                      </td>
                    </tr>

                    <tr className="hover:bg-surface-container-low transition-colors group cursor-pointer">
                      <td className="p-sm whitespace-nowrap text-on-surface-variant">
                        2024-10-15
                      </td>
                      <td className="p-sm flex items-center gap-sm font-medium">
                        <span className="material-symbols-outlined text-alert-red text-sm">
                          arrow_downward
                        </span>
                        Social Media Ads
                      </td>
                      <td className="p-sm text-on-surface-variant">
                        Marketing
                      </td>
                      <td className="p-sm text-center">
                        <span className="material-symbols-outlined text-outline hover:text-primary transition-colors text-sm">
                          description
                        </span>
                      </td>
                      <td className="p-sm text-right font-headline-md text-headline-md font-semibold text-alert-red">
                        -$180.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 h-16 flex justify-around items-stretch bg-surface border-t border-border-subtle md:hidden">
        <Link
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container-high transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-caps text-label-caps">Home</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container h-full px-4 transition-colors w-24"
          href="#"
        >
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label-caps text-label-caps">Finance</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container-high transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">event</span>
          <span className="font-label-caps text-label-caps">Events</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container-high transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">description</span>
          <span className="font-label-caps text-label-caps">Docs</span>
        </Link>
        <Link
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container-high transition-colors"
          href="#"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-caps text-label-caps">Me</span>
        </Link>
      </nav>
    </div>
  );
}
