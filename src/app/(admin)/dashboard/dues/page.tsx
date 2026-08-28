import Image from "next/image";
import Link from "next/link";

export default function DuesPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col pt-20">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin h-20 bg-surface border-b border-border-subtle shadow-sm">
        <div className="flex items-center gap-sm">
          <button className="md:hidden text-on-surface hover:bg-surface-variant p-2 rounded border border-transparent active:scale-95 transition-all">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              menu
            </span>
          </button>
          <span className="font-headline-md text-headline-md font-semibold text-primary">
            Mahalink
          </span>
        </div>
        <div className="flex items-center">
          <div className="font-label-caps text-label-caps flex items-center gap-sm hover:bg-surface-variant p-2 rounded border border-transparent active:scale-95 transition-all cursor-pointer text-on-surface-variant">
            <span className="hidden sm:inline">User Profile</span>
            <div className="w-8 h-8 bg-surface-container-high rounded-full flex items-center justify-center text-on-surface">
              <span className="material-symbols-outlined text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="flex pt-20 min-h-screen">
        <nav className="hidden md:flex fixed left-0 top-0 h-full z-[40] flex-col p-md gap-base w-64 bg-surface-cream border-r border-border-subtle pt-24">
          <div className="font-label-caps text-label-caps text-on-surface-variant mb-sm uppercase tracking-wider">
            Navigation
          </div>
          <a
            className="flex items-center gap-sm p-sm text-on-surface-variant rounded hover:bg-surface-variant font-label-caps text-label-caps transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              dashboard
            </span>
            <span>Dashboard</span>
          </a>
          <a
            className="flex items-center gap-sm p-sm text-on-surface-variant rounded hover:bg-surface-variant font-label-caps text-label-caps transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">group</span>
            <span>Members</span>
          </a>

          <a
            className="flex items-center gap-sm p-sm bg-primary-container text-on-primary rounded font-label-caps text-label-caps transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              account_balance_wallet
            </span>
            <span>Finance</span>
          </a>
          <a
            className="flex items-center gap-sm p-sm text-on-surface-variant rounded hover:bg-surface-variant font-label-caps text-label-caps transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              calendar_today
            </span>
            <span>Events</span>
          </a>
          <a
            className="flex items-center gap-sm p-sm text-on-surface-variant rounded hover:bg-surface-variant font-label-caps text-label-caps transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              folder_open
            </span>
            <span>Archives</span>
          </a>
          <a
            className="flex items-center gap-sm p-sm text-on-surface-variant rounded hover:bg-surface-variant font-label-caps text-label-caps transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              inventory_2
            </span>
            <span>Inventory</span>
          </a>
          <a
            className="flex items-center gap-sm p-sm text-on-surface-variant rounded hover:bg-surface-variant font-label-caps text-label-caps transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              article
            </span>
            <span>Blog</span>
          </a>
          <a
            className="flex items-center gap-sm p-sm text-on-surface-variant rounded hover:bg-surface-variant font-label-caps text-label-caps transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              settings
            </span>
            <span>Settings</span>
          </a>
        </nav>

        <main className="flex-1 md:ml-64 p-margin pb-32 md:pb-margin flex flex-col gap-xl bg-background">
          <div className="max-w-5xl mx-auto w-full space-y-xl">
            <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md border-b border-border-subtle pb-md">
              <div>
                <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-background tracking-tight">
                  Dues Tracking
                </h2>
                <p className="font-body-lg text-body-lg mt-xs text-on-surface-variant">
                  FY 2024 Payment Status Matrix
                </p>
              </div>
              <div className="flex gap-sm">
                <div className="flex items-center gap-xs font-label-caps text-label-caps text-on-surface-variant">
                  <div className="w-3 h-3 bg-academic-blue rounded-full"></div>{" "}
                  PAID
                </div>
                <div className="flex items-center gap-xs font-label-caps text-label-caps text-on-surface-variant">
                  <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full"></div>{" "}
                  UNPAID
                </div>
              </div>
            </section>

            <section className="overflow-x-auto bg-surface-container-lowest border border-border-subtle rounded-lg shadow-sm">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-surface-container-low text-on-surface font-label-caps text-label-caps uppercase border-b border-border-subtle">
                    <th className="p-md w-48 sticky left-0 z-10 bg-surface-container-low font-semibold border-b border-border-subtle">
                      Member
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      J
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      F
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      M
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      A
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      M
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      J
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      J
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      A
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      S
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      O
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      N
                    </th>
                    <th className="p-md text-center font-semibold text-on-surface-variant border-b border-border-subtle">
                      D
                    </th>
                    <th className="p-md text-center w-32 font-semibold border-b border-border-subtle">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md">
                  <tr className="border-b border-border-subtle hover:bg-surface-container-low transition-colors group bg-surface-container-lowest">
                    <td className="p-md sticky left-0 z-10 bg-surface-container-lowest group-hover:bg-surface-container-low font-semibold text-on-surface border-b border-border-subtle">
                      A. Einstein
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-academic-blue rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-academic-blue rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-academic-blue rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <button className="font-label-caps text-[12px] bg-surface text-primary border border-border-subtle rounded-md px-3 py-1.5 uppercase hover:bg-surface-variant transition-colors">
                        Cetak Resi
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b border-border-subtle hover:bg-surface-container-low transition-colors group bg-surface-container-lowest">
                    <td className="p-md sticky left-0 z-10 bg-surface-container-lowest group-hover:bg-surface-container-low font-semibold text-on-surface border-b border-border-subtle">
                      M. Curie
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-academic-blue rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-academic-blue rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-academic-blue rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-academic-blue rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-academic-blue rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-academic-blue rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <div className="w-3 h-3 bg-surface-variant border border-border-subtle rounded-full mx-auto"></div>
                    </td>
                    <td className="p-md text-center border-b border-border-subtle">
                      <button className="font-label-caps text-[12px] bg-surface text-primary border border-border-subtle rounded-md px-3 py-1.5 uppercase hover:bg-surface-variant transition-colors">
                        Cetak Resi
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 h-16 flex justify-around items-stretch bg-surface border-t border-border-subtle">
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 active:scale-95 transition-transform hover:bg-surface-variant w-full"
          href="#"
        >
          <span className="material-symbols-outlined text-[24px]">home</span>
          <span className="font-label-caps text-[10px] mt-1">Home</span>
        </a>

        <a
          className="flex flex-col items-center justify-center text-primary bg-primary-fixed bg-opacity-20 h-full px-4 active:scale-95 transition-transform w-full"
          href="#"
        >
          <span className="material-symbols-outlined text-[24px]">
            payments
          </span>
          <span className="font-label-caps text-[10px] mt-1">Finance</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 active:scale-95 transition-transform hover:bg-surface-variant w-full"
          href="#"
        >
          <span className="material-symbols-outlined text-[24px]">event</span>
          <span className="font-label-caps text-[10px] mt-1">Events</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 active:scale-95 transition-transform hover:bg-surface-variant w-full"
          href="#"
        >
          <span className="material-symbols-outlined text-[24px]">
            description
          </span>
          <span className="font-label-caps text-[10px] mt-1">Docs</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 active:scale-95 transition-transform hover:bg-surface-variant w-full"
          href="#"
        >
          <span className="material-symbols-outlined text-[24px]">person</span>
          <span className="font-label-caps text-[10px] mt-1">Me</span>
        </a>
      </nav>
    </div>
  );
}
