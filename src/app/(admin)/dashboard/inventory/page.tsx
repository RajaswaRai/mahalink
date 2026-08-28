import Image from "next/image";
import Link from "next/link";

export default function InventoryPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col pt-20">


      <nav className="hidden md:flex flex-col p-md gap-base bg-surface-container-low dark:bg-surface-container border-r border-outline-variant fixed left-0 h-full w-80 z-[60]">
        <div className="font-headline-md text-headline-md text-on-surface mb-xl uppercase tracking-tighter font-black pb-4">CAMPUS_ORG</div>
        <a className="font-label-caps text-label-caps uppercase flex items-center gap-sm p-3 text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors duration-200" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </a>
        <a className="font-label-caps text-label-caps uppercase flex items-center gap-sm p-3 text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors duration-200" href="#">
          <span className="material-symbols-outlined">group</span>
          Members
        </a>
        <a className="font-label-caps text-label-caps uppercase flex items-center gap-sm p-3 text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors duration-200" href="#">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          Finance
        </a>
        <a className="font-label-caps text-label-caps uppercase flex items-center gap-sm p-3 text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors duration-200" href="#">
          <span className="material-symbols-outlined">calendar_today</span>
          Events
        </a>
        <a className="font-label-caps text-label-caps uppercase flex items-center gap-sm p-3 text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors duration-200" href="#">
          <span className="material-symbols-outlined">folder_open</span>
          Archives
        </a>

        <a className="font-label-caps text-label-caps uppercase flex items-center gap-sm p-3 bg-primary-container text-on-primary-container rounded-lg transition-colors duration-200" href="#">
          <span className="material-symbols-outlined">inventory_2</span>
          Inventory
        </a>
        <a className="font-label-caps text-label-caps uppercase flex items-center gap-sm p-3 text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors duration-200" href="#">
          <span className="material-symbols-outlined">article</span>
          Blog
        </a>
        <a className="font-label-caps text-label-caps uppercase flex items-center gap-sm p-3 text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors duration-200 mt-auto" href="#">
          <span className="material-symbols-outlined">settings</span>
          Settings
        </a>
      </nav>

      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin h-20 bg-surface dark:bg-background border-b border-outline-variant md:hidden">
        <button className="text-on-surface hover:bg-surface-container p-2 rounded-lg transition-all">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="font-headline-md text-headline-md font-black uppercase text-on-surface tracking-tighter">CAMPUS_ORG</div>
        <div className="font-label-caps text-label-caps border border-outline-variant p-2 rounded-lg bg-surface-container-lowest">User Profile</div>
      </header>

      <main className="flex-1 md:ml-80 pt-24 md:pt-margin px-margin pb-32 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto space-y-xl">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-outline-variant pb-md gap-md">
            <div>
              <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl font-black uppercase tracking-tighter text-on-surface">Inventory &amp; Assets</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">Manage campus organization equipment, view real-time availability status, and track borrowing history.</p>
            </div>
            <div className="flex gap-sm">
              <button className="bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-caps text-label-caps px-6 py-3 rounded-lg uppercase flex items-center gap-2">
                <span className="material-symbols-outlined">filter_list</span>
                Filter
              </button>
              <button className="bg-primary text-on-primary hover:bg-primary/90 transition-colors font-label-caps text-label-caps px-6 py-3 rounded-lg uppercase flex items-center gap-2">
                <span className="material-symbols-outlined">add</span>
                New Asset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col justify-between h-36">
              <div className="font-label-caps text-label-caps uppercase text-on-surface-variant">Total Assets</div>
              <div className="font-headline-xl text-headline-xl font-black text-on-surface">142</div>
            </div>
            <div className="bg-primary-fixed border border-outline-variant rounded-xl p-6 flex flex-col justify-between h-36">
              <div className="font-label-caps text-label-caps uppercase text-on-primary-fixed">Available</div>
              <div className="font-headline-xl text-headline-xl font-black text-on-primary-fixed">89</div>
            </div>
            <div className="bg-tertiary-fixed border border-outline-variant rounded-xl p-6 flex flex-col justify-between h-36">
              <div className="font-label-caps text-label-caps uppercase text-on-tertiary-fixed">Borrowed</div>
              <div className="font-headline-xl text-headline-xl font-black text-on-tertiary-fixed">45</div>
            </div>
            <div className="bg-error-container border border-error-container rounded-xl p-6 flex flex-col justify-between h-36">
              <div className="font-label-caps text-label-caps uppercase text-on-error-container">Maintenance</div>
              <div className="font-headline-xl text-headline-xl font-black text-on-error-container">8</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">

            <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
              <div className="border-b border-outline-variant p-4 bg-surface-container-lowest flex justify-between items-center">
                <h2 className="font-headline-md text-headline-md font-bold uppercase text-on-surface">Asset Roster</h2>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                  <input className="font-body-md text-body-md bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-primary transition-colors text-on-surface" placeholder="Search assets..." type="text" />
                </div>
              </div>
              <div className="divide-y divide-outline-variant">

                <div className="grid grid-cols-12 gap-4 p-4 font-label-caps text-label-caps uppercase text-on-surface-variant bg-surface-container-lowest">
                  <div className="col-span-2">ID</div>
                  <div className="col-span-4">Item Name</div>
                  <div className="col-span-3">Category</div>
                  <div className="col-span-3 text-right">Status</div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-4 items-center list-row-hover transition-colors font-body-md text-body-md cursor-pointer text-on-surface">
                  <div className="col-span-2 font-label-caps font-bold text-on-surface-variant">EQ-042</div>
                  <div className="col-span-4 font-semibold">Sony A7III Camera Kit</div>
                  <div className="col-span-3 text-on-surface-variant">A/V Equipment</div>
                  <div className="col-span-3 flex justify-end">
                    <span className="bg-primary-fixed text-on-primary-fixed rounded-full font-label-caps text-[10px] px-3 py-1 uppercase tracking-wide">Available</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-4 items-center list-row-hover transition-colors font-body-md text-body-md cursor-pointer text-on-surface">
                  <div className="col-span-2 font-label-caps font-bold text-on-surface-variant">CH-118</div>
                  <div className="col-span-4 font-semibold">Folding Chair (Black)</div>
                  <div className="col-span-3 text-on-surface-variant">Furniture</div>
                  <div className="col-span-3 flex justify-end">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-caps text-[10px] px-3 py-1 uppercase tracking-wide">Borrowed</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-4 items-center list-row-hover transition-colors font-body-md text-body-md cursor-pointer text-on-surface">
                  <div className="col-span-2 font-label-caps font-bold text-on-surface-variant">PA-005</div>
                  <div className="col-span-4 font-semibold">Yamaha Stagepas 400BT</div>
                  <div className="col-span-3 text-on-surface-variant">A/V Equipment</div>
                  <div className="col-span-3 flex justify-end">
                    <span className="bg-primary-fixed text-on-primary-fixed rounded-full font-label-caps text-[10px] px-3 py-1 uppercase tracking-wide">Available</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-4 items-center list-row-hover transition-colors font-body-md text-body-md cursor-pointer text-on-surface">
                  <div className="col-span-2 font-label-caps font-bold text-on-surface-variant">PR-012</div>
                  <div className="col-span-4 font-semibold">Epson 1080p Projector</div>
                  <div className="col-span-3 text-on-surface-variant">A/V Equipment</div>
                  <div className="col-span-3 flex justify-end">
                    <span className="bg-error-container text-on-error-container rounded-full font-label-caps text-[10px] px-3 py-1 uppercase tracking-wide">Repair</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 p-4 items-center list-row-hover transition-colors font-body-md text-body-md cursor-pointer text-on-surface">
                  <div className="col-span-2 font-label-caps font-bold text-on-surface-variant">CH-119</div>
                  <div className="col-span-4 font-semibold">Folding Chair (Black)</div>
                  <div className="col-span-3 text-on-surface-variant">Furniture</div>
                  <div className="col-span-3 flex justify-end">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-caps text-[10px] px-3 py-1 uppercase tracking-wide">Borrowed</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-outline-variant p-4 flex justify-between items-center bg-surface-container-lowest">
                <span className="font-label-caps text-label-caps text-on-surface-variant">Showing 1-5 of 142</span>
                <div className="flex gap-2">
                  <button className="border border-outline-variant rounded-lg px-3 py-1 bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-sm">arrow_back</span></button>
                  <button className="border border-outline-variant rounded-lg px-3 py-1 bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
              <div className="border-b border-outline-variant p-4 bg-surface-container-low text-on-surface flex justify-between items-center">
                <h2 className="font-headline-md text-headline-md font-bold uppercase">Recent Logs</h2>
                <span className="material-symbols-outlined text-on-surface-variant">history</span>
              </div>
              <div className="divide-y divide-outline-variant">

                <div className="p-4 hover:bg-surface-container-lowest transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-caps text-label-caps font-bold text-on-surface">Sarah Jenkins</span>
                    <span className="font-label-caps text-[10px] rounded px-2 uppercase bg-tertiary-fixed text-on-tertiary-fixed">Out</span>
                  </div>
                  <div className="font-body-md text-body-md text-on-surface-variant">Borrowed CH-118, CH-119</div>
                  <div className="font-label-caps text-[11px] text-on-surface-variant mt-2">Oct 24, 09:30 AM</div>
                </div>

                <div className="p-4 hover:bg-surface-container-lowest transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-caps text-label-caps font-bold text-on-surface">David Chen</span>
                    <span className="font-label-caps text-[10px] rounded px-2 uppercase bg-primary-fixed text-on-primary-fixed">In</span>
                  </div>
                  <div className="font-body-md text-body-md text-on-surface-variant">Returned PA-005</div>
                  <div className="font-label-caps text-[11px] text-on-surface-variant mt-2">Oct 23, 16:45 PM</div>
                </div>

                <div className="p-4 hover:bg-surface-container-lowest transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label-caps text-label-caps font-bold text-on-surface">Admin Ops</span>
                    <span className="font-label-caps text-[10px] rounded px-2 uppercase bg-error-container text-on-error-container">Alert</span>
                  </div>
                  <div className="font-body-md text-body-md text-on-surface-variant">Flagged PR-012 for repair</div>
                  <div className="font-label-caps text-[11px] text-on-surface-variant mt-2">Oct 22, 11:15 AM</div>
                </div>
              </div>
              <div className="border-t border-outline-variant p-4 bg-surface-container-lowest">
                <button className="w-full font-label-caps text-label-caps uppercase text-center text-primary hover:underline py-2">View Full Log</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 h-16 flex justify-around items-stretch bg-surface border-t border-outline-variant">
        <a className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container active:scale-95 transition-transform w-full" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-caps text-[10px] uppercase mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container active:scale-95 transition-transform w-full" href="#">
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label-caps text-[10px] uppercase mt-1">Finance</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container h-full px-4 active:scale-95 transition-transform w-full" href="#">
          <span className="material-symbols-outlined" >inventory_2</span>
          <span className="font-label-caps text-[10px] uppercase mt-1">Assets</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container active:scale-95 transition-transform w-full" href="#">
          <span className="material-symbols-outlined">description</span>
          <span className="font-label-caps text-[10px] uppercase mt-1">Docs</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container active:scale-95 transition-transform w-full" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-caps text-[10px] uppercase mt-1">Me</span>
        </a>
      </nav>

      <footer className="w-full py-xl px-margin flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container border-t border-outline-variant text-on-surface md:ml-80" style={{ width: 'calc(100% - 20rem)' }}>
        <div className="font-headline-md text-headline-md text-on-surface uppercase font-black tracking-tighter">CAMPUS_ORG</div>
        <div className="flex gap-4 font-label-caps text-label-caps uppercase">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Archive</a>
        </div>
        <div className="font-label-caps text-label-caps uppercase text-on-surface-variant">©2024 CAMPUS_ORG_SYSTEM // FORM_FOLLOWS_FUNCTION</div>
      </footer>

    </div>
  );
}
