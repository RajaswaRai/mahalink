# Site Vision
A modern, comprehensive application for a Campus Organization (Aplikasi Organisasi Kampus). It serves both as a public face for the organization and a robust internal management system for its members, administrators, and treasurers.

# Sitemap

## Public Pages
- `[ ]` **Landing Page**: Hero section, organization profile, activities, and blog highlights.
- `[ ]` **Blog Listing**: List of blog posts.
- `[ ]` **Blog Detail**: Full blog post view.
- `[ ]` **Login/Reset Password**: Authentication pages.

## Internal Pages (Admin/Members)
- `[ ]` **Dashboard**: Summary statistics (total cash, active members, upcoming events, internal announcements).
- `[ ]` **Member Management**: Table of members, membership status, division filtering, role assignment.
- `[ ]` **Financial Management**: Cash Recording, Dues Tracking, Petty Cash, Cash on Hand, Cash in Bank, Cash Flow.
- `[ ]` **Event & Agenda Management**: Interactive calendar, event creation form, automated reminders.
- `[ ]` **Archives & Documents**: PDF file repository (letters/minutes), official letter template generator.
- `[ ]` **Inventory & Assets**: Organization's item list and borrowing history log.

# Roadmap
- `[ ]` Landing Page
- `[ ]` Login/Auth Pages
- `[ ]` Dashboard
- `[ ]` Member Management
- `[ ]` Financial Management
- `[ ]` Event & Agenda Management
- `[ ]` Archives & Documents
- `[ ]` Inventory & Assets

# Core User Flows
1. **Flow Pencatatan Kas & Iuran (Bendahara)**
   Login → Masuk Menu Keuangan → Pilih "Tambah Transaksi" / "Update Iuran Anggota" → Unggah Bukti Bayar → Submit → System memperbarui grafik kas & mencatat ke Audit Log.
2. **Flow Manajemen Agenda & Notifikasi (Sekretaris/Admin)**
   Buat Agenda Baru di Kalender → Set Tanggal & Jam → Aktifkan "Kirim Pengingat WA H-1" → Sistem menjadwalkan notifikasi otomatis ke seluruh anggota terkoneksi.
3. **Flow Peminjaman Aset (Anggota)**
   Pilih barang di Menu Inventaris → Klik "Ajukan Peminjaman" → Isi tanggal pinjam & kembali → Notifikasi ke Admin → Admin Approve → Status barang berubah jadi Dipinjam.
