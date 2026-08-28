import Image from "next/image";
import Link from "next/link";

export default function ArchivesPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col pt-20">
      <nav className="hidden md:flex flex-col bg-surface-container-lowest border-r border-border-subtle text-on-surface w-80 h-screen fixed left-0 top-0 z-[60] p-md gap-base">
        <div className="mb-lg px-sm">
          <h1 className="font-headline-md text-headline-md text-primary tracking-tight">
            Mahalink
          </h1>
        </div>
        <ul className="flex flex-col gap-xs">
          <li>
            <a
              className="flex items-center gap-sm p-sm rounded-xl font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              Dashboard
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-sm p-sm rounded-xl font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">group</span>
              Members
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-sm p-sm rounded-xl font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">
                account_balance_wallet
              </span>
              Finance
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-sm p-sm rounded-xl font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Events
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-sm p-sm rounded-xl font-label-caps text-label-caps bg-primary-fixed text-on-primary-fixed transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined icon-fill">
                folder_open
              </span>
              Archives
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-sm p-sm rounded-xl font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">inventory_2</span>
              Inventory
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-sm p-sm rounded-xl font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">article</span>
              Blog
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-sm p-sm rounded-xl font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 mt-md"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              Settings
            </a>
          </li>
        </ul>
      </nav>

      <main className="flex-1 md:ml-80 flex flex-col min-h-screen bg-background">
        <header className="md:hidden fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin h-20 bg-surface-container-lowest border-b border-border-subtle">
          <button className="text-on-surface-variant p-sm hover:bg-surface-container-low rounded-xl transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="font-headline-md text-headline-md text-primary">
            Mahalink
          </h1>
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined">person</span>
          </div>
        </header>

        <div className="p-margin mt-20 md:mt-0 flex-1 flex flex-col gap-xl max-w-7xl mx-auto w-full">
          <section className="border-b border-border-subtle pb-md">
            <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-background tracking-tight">
              Archives
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-sm max-w-2xl">
              Repository for organizational documents, meeting minutes, and
              official correspondence.
            </p>
          </section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            <section className="lg:col-span-7 flex flex-col gap-md">
              <div className="flex justify-between items-center pb-sm border-b border-border-subtle">
                <h3 className="font-headline-md text-headline-md text-on-background">
                  Document Repository
                </h3>
                <div className="flex gap-sm">
                  <button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded-xl hover:bg-surface-container">
                    <span className="material-symbols-outlined">
                      filter_list
                    </span>
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded-xl hover:bg-surface-container">
                    <span className="material-symbols-outlined">search</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col border border-border-subtle bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-12 gap-sm p-sm border-b border-border-subtle bg-surface-container-low font-label-caps text-label-caps text-on-surface-variant uppercase">
                  <div className="col-span-1 text-center">Type</div>
                  <div className="col-span-6">Title</div>
                  <div className="col-span-3">Date</div>
                  <div className="col-span-2 text-right">Actions</div>
                </div>

                <div className="grid grid-cols-12 gap-sm p-sm border-b border-border-subtle list-row-hover transition-colors items-center cursor-pointer group">
                  <div className="col-span-1 flex justify-center text-primary-container">
                    <span className="material-symbols-outlined font-light">
                      description
                    </span>
                  </div>
                  <div className="col-span-6 font-body-md text-body-md truncate text-on-background group-hover:text-primary transition-colors">
                    Notulensi_Rapat_Umum_Jan.pdf
                  </div>
                  <div className="col-span-3 font-label-caps text-label-caps text-on-surface-variant">
                    2024-01-15
                  </div>
                  <div className="col-span-2 flex justify-end gap-xs">
                    <button className="p-xs text-on-surface-variant hover:text-primary transition-colors rounded-xl hover:bg-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        download
                      </span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-sm p-sm border-b border-border-subtle list-row-hover transition-colors items-center cursor-pointer group">
                  <div className="col-span-1 flex justify-center text-primary-container">
                    <span className="material-symbols-outlined font-light">
                      mail
                    </span>
                  </div>
                  <div className="col-span-6 font-body-md text-body-md truncate text-on-background group-hover:text-primary transition-colors">
                    Surat_Undangan_Pemateri_TechTalk.pdf
                  </div>
                  <div className="col-span-3 font-label-caps text-label-caps text-on-surface-variant">
                    2024-02-02
                  </div>
                  <div className="col-span-2 flex justify-end gap-xs">
                    <button className="p-xs text-on-surface-variant hover:text-primary transition-colors rounded-xl hover:bg-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        download
                      </span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-sm p-sm border-b border-border-subtle list-row-hover transition-colors items-center cursor-pointer group">
                  <div className="col-span-1 flex justify-center text-primary-container">
                    <span className="material-symbols-outlined font-light">
                      request_quote
                    </span>
                  </div>
                  <div className="col-span-6 font-body-md text-body-md truncate text-on-background group-hover:text-primary transition-colors">
                    Proposal_Dana_Kegiatan_Tahunan.pdf
                  </div>
                  <div className="col-span-3 font-label-caps text-label-caps text-on-surface-variant">
                    2024-03-10
                  </div>
                  <div className="col-span-2 flex justify-end gap-xs">
                    <button className="p-xs text-on-surface-variant hover:text-primary transition-colors rounded-xl hover:bg-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        download
                      </span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-sm p-sm border-b border-border-subtle list-row-hover transition-colors items-center cursor-pointer group">
                  <div className="col-span-1 flex justify-center text-primary-container">
                    <span className="material-symbols-outlined font-light">
                      description
                    </span>
                  </div>
                  <div className="col-span-6 font-body-md text-body-md truncate text-on-background group-hover:text-primary transition-colors">
                    Notulensi_Evaluasi_Kepanitiaan.pdf
                  </div>
                  <div className="col-span-3 font-label-caps text-label-caps text-on-surface-variant">
                    2024-03-25
                  </div>
                  <div className="col-span-2 flex justify-end gap-xs">
                    <button className="p-xs text-on-surface-variant hover:text-primary transition-colors rounded-xl hover:bg-primary-fixed">
                      <span className="material-symbols-outlined text-[20px]">
                        download
                      </span>
                    </button>
                  </div>
                </div>

                <div className="p-sm flex justify-center bg-surface-container-low">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    Showing 1-4 of 42 documents
                  </span>
                </div>
              </div>
            </section>

            <section className="lg:col-span-5 flex flex-col gap-md">
              <div className="flex justify-between items-center pb-sm border-b border-border-subtle">
                <h3 className="font-headline-md text-headline-md text-on-background">
                  Generate Letter
                </h3>
              </div>

              <div className="bg-surface-container-lowest border border-border-subtle rounded-xl p-md shadow-sm flex flex-col gap-lg">
                <div className="flex flex-col gap-sm">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Select Template
                  </label>
                  <div className="grid grid-cols-2 gap-sm">
                    <button className="bg-primary-fixed text-on-primary-fixed border border-primary p-sm rounded-lg font-label-caps text-label-caps uppercase transition-colors text-center">
                      Undangan
                    </button>
                    <button className="bg-surface-container-lowest text-on-surface-variant border border-border-subtle p-sm rounded-lg font-label-caps text-label-caps uppercase hover:bg-surface-container-low transition-colors text-center">
                      Peminjaman
                    </button>
                    <button className="bg-surface-container-lowest text-on-surface-variant border border-border-subtle p-sm rounded-lg font-label-caps text-label-caps uppercase hover:bg-surface-container-low transition-colors text-center">
                      Sertifikat
                    </button>
                    <button className="bg-surface-container-lowest text-on-surface-variant border border-border-subtle p-sm rounded-lg font-label-caps text-label-caps uppercase hover:bg-surface-container-low transition-colors text-center">
                      Custom
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-md">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      Recipient Name
                    </label>
                    <input
                      className="bg-surface-container-lowest border border-border-subtle rounded-lg p-sm font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all w-full text-on-background placeholder:text-outline-variant"
                      placeholder="e.g., Prof. John Doe"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                      Event Date
                    </label>
                    <input
                      className="bg-surface-container-lowest border border-border-subtle rounded-lg p-sm font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all w-full text-on-background"
                      type="date"
                    />
                  </div>
                </div>

                <button className="bg-primary text-on-primary rounded-xl p-sm font-label-caps text-label-caps uppercase hover:bg-on-primary-fixed-variant transition-colors w-full flex justify-center items-center gap-sm mt-sm shadow-sm">
                  <span className="material-symbols-outlined">bolt</span>
                  Generate PDF
                </button>
              </div>
            </section>
          </div>
        </div>

        <footer className="mt-auto w-full py-xl px-margin flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container-lowest text-on-surface-variant border-t border-border-subtle">
          <div className="font-headline-md text-headline-md text-on-background">
            Mahalink
          </div>
          <div className="flex gap-md font-label-caps text-label-caps">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Support
            </a>
            <a
              className="text-primary hover:text-on-primary-fixed-variant transition-colors"
              href="#"
            >
              Archive
            </a>
          </div>
        </footer>
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 h-20 flex justify-around items-stretch bg-surface-container-lowest border-t border-border-subtle pb-safe">
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container-low transition-colors flex-1"
          href="#"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-caps text-label-caps mt-1 text-[10px]">
            Home
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container-low transition-colors flex-1"
          href="#"
        >
          <span className="material-symbols-outlined">payments</span>
          <span className="font-label-caps text-label-caps mt-1 text-[10px]">
            Finance
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container-low transition-colors flex-1"
          href="#"
        >
          <span className="material-symbols-outlined">event</span>
          <span className="font-label-caps text-label-caps mt-1 text-[10px]">
            Events
          </span>
        </a>

        <a
          className="flex flex-col items-center justify-center text-primary bg-primary-fixed/20 h-full px-4 transition-colors flex-1 relative"
          href="#"
        >
          <div className="absolute top-0 w-8 h-1 bg-primary rounded-b-full"></div>
          <span className="material-symbols-outlined icon-fill">
            description
          </span>
          <span className="font-label-caps text-label-caps mt-1 text-[10px]">
            Docs
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant h-full px-4 hover:bg-surface-container-low transition-colors flex-1"
          href="#"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-caps text-label-caps mt-1 text-[10px]">
            Me
          </span>
        </a>
      </nav>
    </div>
  );
}
