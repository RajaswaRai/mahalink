import Link from "next/link";

// ─── Hero / Header ───────────────────────────────────────────────────────────
function BlogHeader() {
  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Berita & Publikasi
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              Blog Kampus
            </h1>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Sorotan kegiatan, agenda, dan kabar terbaru dari organisasi kampus
              kami
              <br />
              semua terdokumentasi di satu tempat.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#articles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
            >
              Berlangganan
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mail
              </span>
            </Link>
            <Link
              href="#articles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-background text-foreground font-semibold text-sm hover:bg-muted transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                search
              </span>
              Cari Artikel
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Featured Article ────────────────────────────────────────────────────────
function FeaturedArticle() {
  return (
    <section className="py-24 bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Artikel Utama
          </p>
        </div>

        <Link
          href="/blog/deconstructing-the-new-student-union-building"
          className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-card rounded-3xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200"
        >
          {/* Image */}
          <div className="lg:col-span-7 overflow-hidden max-h-[420px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtSVWbOZe3INP1gUt7PQNzmpez3bKuetYndWNSHFDAAU4uDb0D8_10xHIHk0585ogJGXq2BgNHaBP4cy6iWn0WBZhV1dyDdHrC8TsCtK_ILTrNoCRXKa606ytQdWk_baqLxN8Xks6165z-UvKaT9myrhVspBGyrUkJXD1P_PXHi9BlYEEO5APgtJmXmaFbAsXuk4-0is8eocbfu1eLb2jeeGZ7cwXYb-5MoBBnpYCDALqZxEf_AqNUjw"
              alt="Deconstructing the New Student Union Building"
              className="w-full h-full object-cover aspect-[16/10] lg:aspect-auto group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-5 flex flex-col justify-center p-8 lg:p-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-secondary border border-secondary/20 bg-secondary/5 rounded-full px-2.5 py-1">
                Architecture
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                Okt 2024
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight leading-snug text-foreground mb-3 group-hover:text-primary transition-colors">
              Deconstructing the New Student Union Building
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 mb-6">
              Sebuah analisis pengaruh brutalisme dan bentuk geometris yang
              mendefinisikan pencapaian arsitektural terbaru kampus — bagaimana
              bentuk mengikuti fungsi di ruang-ruang mahasiswa.
            </p>
            <span className="inline-flex items-center text-primary font-semibold text-sm">
              Baca Artikel
              <span className="material-symbols-outlined ml-1.5 text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

// ─── Articles Grid ───────────────────────────────────────────────────────────
const articles = [
  {
    slug: "5-digital-skills-every-organization",
    tag: "Skill",
    date: "Sep 2024",
    title: "5 Digital Skills yang Wajib Dikuasai Pengurus Organisasi",
    desc: "Dari manajemen anggaran hingga koordinasi acara — keterampilan digital yang mempercepat kerja tim dan mengurangi administrasi ganda.",
    icon: "school",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtSVWbOZe3INP1gUt7PQNzmpez3bKuetYndWNSHFDAAU4uDb0D8_10xHIHk0585ogJGXq2BgNHaBP4cy6iWn0WBZhV1dyDdHrC8TsCtK_ILTrNoCRXKa606ytQdWk_baqLxN8Xks6165z-UvKaT9myrhVspBGyrUkJXD1P_PXHi9BlYEEO5APgtJmXmaFbAsXuk4-0is8eocbfu1eLb2jeeGZ7cwXYb-5MoBBnpYCDALqZxEf_AqNUjw",
  },
  {
    slug: "planning-a-stress-free-general-assembly",
    tag: "Events",
    date: "Agu 2024",
    title: "Panduan Merancang General Assembly yang Tak Bikin Stres",
    desc: "Langkah-langkah menyusun agenda, pembagian peran, dan pengingat otomatis agar rapat umum berjalan lancar tanpa lembur di hari-H.",
    icon: "map",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxXvu-Q7jI1AejdW4HyJBKgYgiqUFAVJkV7_nFKtKaTezOOnP9JRoDVMx2Bc-DNV7fEEFCoDARtbrpcYKKIGbJch_Cn1KAistVUrFl5trrfYCKXcO_tcZun2BnPkwMvVNufZ66t-oPOfei5oiS0RK8d2HV6KYZuJMjBtTYqDtpp0KEYH37FTMVJ51Ln5vZ8VKE8E0gSXm6HQvlZfMfwdSlaMXgeIemo8ER9lnl_kKKAbbjgRfDI1Av_g",
  },
  {
    slug: "transparent-finance-builds-trust",
    tag: "Finance",
    date: "Jul 2024",
    title: "Keuangan Transparan: Kunci Kepercayaan Anggota",
    desc: "Bagaimana pencatatan kas yang terbuka dan laporan real-time membangun kepercayaan, sekaligus memudahkan audit internal organisasi.",
    icon: "account_balance_wallet",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB770ZgBXaFHTsdz8gRhhvQhl0aV3RXxNy59yfFfBwE2IgXt88-S4D6QmOZEgYdVzOOf1I4_muYlRjyyp2OFWbyeRxxmfqRmqIVPAkQyBSmGOdzq5y6_ZvqsXhfJ_8lzRSkwCFTpwr-SOvfMeOsxzHqugAUY-gmPcYfT2iRIU5EyUnt17azWBGeJ6__iqEn37G_vjjhECBKk7wVhV4PgZy5xjwQvQyj76Ih4RIcrrvo9h0RqoJrOdRaXg",
  },
];

function ArticlesGrid() {
  return (
    <section id="articles" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Semua Artikel
          </p>
          <h2 className="text-4xl font-bold tracking-tight leading-tight">
            Tulisan Terbaru dari Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map(({ slug, tag, date, title, desc, image }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-secondary border border-secondary/20 bg-secondary/5 rounded-full px-2.5 py-1">
                    {tag}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {date}
                  </span>
                </div>
                <h3 className="font-semibold text-base mb-2 text-foreground leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function BlogPage() {
  return (
    <main className="pt-16 bg-background">
      <BlogHeader />
      <FeaturedArticle />
      <ArticlesGrid />
    </main>
  );
}
