import Link from "next/link";
// ─── Hero Section ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left — text */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Organisasi Kampus Aktif
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground mb-6">
            Satu Platform, <span className="text-primary">Semua Kebutuhan</span>{" "}
            Organisasi
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Kelola anggota, keuangan, agenda, dan dokumen organisasi kampus kamu
            dalam satu sistem yang terintegrasi dan mudah digunakan.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
            >
              Mulai Sekarang
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-background text-foreground font-semibold text-sm hover:bg-muted transition-colors"
            >
              Pelajari Lebih
            </Link>
          </div>

          {/* Stats inline */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-border">
            {[
              { value: "142+", label: "Anggota Aktif" },
              { value: "12", label: "Program Berjalan" },
              { value: "Rp 12M", label: "Kas Terkelola" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual card cluster */}
        {/* Perubahan 1: Tambahkan flex justify-center agar tetap di tengah */}
        <div className="relative hidden lg:flex justify-center items-center">
          {/* Perubahan 2: Buat wrapper khusus image + floating card dengan 'relative w-full max-w-[480px] aspect-square' */}
          <div className="relative w-full max-w-[480px] aspect-square">
            {/* Main Image Frame */}
            <div className="w-full h-full rounded-3xl overflow-hidden relative border border-border/50 shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB770ZgBXaFHTsdz8gRhhvQhl0aV3RXxNy59yfFfBwE2IgXt88-S4D6QmOZEgYdVzOOf1I4_muYlRjyyp2OFWbyeRxxmfqRmqIVPAkQyBSmGOdzq5y6_ZvqsXhfJ_8lzRSkwCFTpwr-SOvfMeOsxzHqugAUY-gmPcYfT2iRIU5EyUnt17azWBGeJ6__iqEn37G_vjjhECBKk7wVhV4PgZy5xjwQvQyj76Ih4RIcrrvo9h0RqoJrOdRaXg"
                alt="Campus organization workspace"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            </div>

            {/* Floating stat card — Sekarang menempel persis ke bingkai gambar */}
            <div className="absolute -bottom-4 -left-6 bg-card/95 backdrop-blur-md rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3 z-10">
              <div className="w-9 h-9 rounded-xl bg-green-100 dark:bg-green-950/50 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-green-600 dark:text-green-400 text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  trending_up
                </span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Anggota Baru</p>
                <p className="font-bold text-sm">+12 bulan ini</p>
              </div>
            </div>

            {/* Floating event card — Sekarang menempel persis ke bingkai gambar */}
            <div className="absolute -top-4 -right-6 bg-card/95 backdrop-blur-md rounded-2xl border border-border shadow-xl p-4 w-44 z-10">
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
                Agenda Berikutnya
              </p>
              <p className="font-semibold text-sm mt-1">General Assembly</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-xs text-muted-foreground">4 hari lagi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About Section ──────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-card border border-border shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxXvu-Q7jI1AejdW4HyJBKgYgiqUFAVJkV7_nFKtKaTezOOnP9JRoDVMx2Bc-DNV7fEEFCoDARtbrpcYKKIGbJch_Cn1KAistVUrFl5trrfYCKXcO_tcZun2BnPkwMvVNufZ66t-oPOfei5oiS0RK8d2HV6KYZuJMjBtTYqDtpp0KEYH37FTMVJ51Ln5vZ8VKE8E0gSXm6HQvlZfMfwdSlaMXgeIemo8ER9lnl_kKKAbbjgRfDI1Av_g"
                alt="Organization members collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-yellow-400 rounded-b-3xl" />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Tentang Kami
            </p>
            <h2 className="text-4xl font-bold tracking-tight leading-[1.15] mb-5">
              Dibangun untuk <span className="text-primary">Efisiensi</span>{" "}
              Nyata
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Kami menolak administrasi yang penuh hiasan tanpa fungsi. Setiap
              pertemuan, setiap acara, dan setiap sumber daya yang dialokasikan
              harus memiliki tujuan yang jelas dan terukur.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: "verified",
                  text: "Manajemen anggota terpusat & terstruktur",
                },
                {
                  icon: "account_balance_wallet",
                  text: "Pencatatan keuangan real-time & transparan",
                },
                {
                  icon: "notifications_active",
                  text: "Notifikasi agenda otomatis ke seluruh anggota",
                },
              ].map(({ icon, text }) => (
                <div key={icon} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-primary text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{text}</p>
                </div>
              ))}
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:underline"
            >
              Baca profil lengkap
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ───────────────────────────────────────────────────────
const features = [
  {
    icon: "group",
    title: "Manajemen Anggota",
    desc: "Kelola data, divisi, peran, dan status keanggotaan dengan mudah.",
    tag: "Members",
  },
  {
    icon: "account_balance_wallet",
    title: "Keuangan Transparan",
    desc: "Pencatatan kas, iuran, dan laporan keuangan yang akurat dan real-time.",
    tag: "Finance",
  },
  {
    icon: "calendar_today",
    title: "Agenda & Acara",
    desc: "Kalender interaktif dengan pengingat otomatis via WhatsApp H-1.",
    tag: "Events",
  },
  {
    icon: "folder_open",
    title: "Arsip Dokumen",
    desc: "Repositori PDF, surat, dan notulen dengan generator template resmi.",
    tag: "Archives",
  },
  {
    icon: "inventory_2",
    title: "Inventaris Aset",
    desc: "Daftar aset dan riwayat peminjaman dengan sistem approval digital.",
    tag: "Inventory",
  },
  {
    icon: "article",
    title: "Blog & Publikasi",
    desc: "Publikasikan berita dan kegiatan organisasi ke publik dengan mudah.",
    tag: "Blog",
  },
];

function FeaturesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Fitur Utama
          </p>
          <h2 className="text-4xl font-bold tracking-tight leading-tight">
            Semua yang Kamu Butuhkan dalam Satu Aplikasi
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon, title, desc, tag }) => (
            <div
              key={title}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-sm transition-all">
                  <span
                    className="material-symbols-outlined text-primary group-hover:text-primary-foreground text-[22px] transition-colors"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2 py-1">
                  {tag}
                </span>
              </div>
              <h3 className="font-semibold text-base mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-5 tracking-tight">
          Siap Digitalisasi Organisasimu?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
          Bergabunglah dengan ratusan anggota yang sudah mengelola organisasi
          secara lebih efisien, transparan, dan terstruktur.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors shadow-md"
          >
            Mulai Gratis
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center px-8 py-3.5 rounded-xl border border-white/30 text-primary-foreground font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            Pelajari Lebih
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        rel="stylesheet"
      />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </>
  );
}
