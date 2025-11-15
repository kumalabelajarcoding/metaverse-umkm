# 🏪 Website Pameran Digital UMKM

Sebuah website interaktif yang menampilkan produk UMKM lokal dalam format galeri digital yang menarik, dibuat khusus untuk lomba web development.

## 🎯 Konsep Utama

Website ini adalah **pameran digital interaktif** untuk UMKM, bukan sekadar marketplace biasa. Setiap UMKM memiliki "booth digital" lengkap dengan profil, produk, cerita, dan lokasi yang ditata dengan estetik modern.

## ✨ Fitur Utama

### 1. **UMKM of the Day** 
- Highlight satu UMKM setiap hari
- Rotasi otomatis berdasarkan tanggal
- Animasi glow effect yang menarik

### 2. **Smart Category Navigator**
- 6 kategori: Kuliner, Fashion, Kerajinan, Pertanian, Jasa, Produk Unggulan
- Carousel interaktif dengan animasi smooth
- Filter produk berdasarkan kategori

### 3. **Galeri Interaktif Produk**
- Kartu produk dengan hover effect
- Badge "Baru" dan "Promo"
- Rating dengan bintang
- Sorting berdasarkan harga, rating, dan waktu

### 4. **Booth UMKM Digital**
- Profil lengkap setiap UMKM
- Cerita dan sejarah usaha
- Daftar produk per UMKM
- Kontak langsung via WhatsApp

### 5. **Integrasi WhatsApp**
- Checkout langsung tanpa sistem pembayaran rumit
- Pesan otomatis terformat
- Mudah untuk UMKM yang belum digital

## 🎨 Desain & Tema

- **Tema**: Modern Minimalist Local Culture
- **Warna**: Earth tone (coklat, krem, hijau)
- **Font**: Poppins untuk readability
- **Animasi**: Subtle dan elegant
- **Layout**: Grid responsif dengan shadow effects

## 📁 Struktur Proyek

```
coba/
├── index.html              # Homepage utama
├── assets/
│   ├── css/
│   │   └── style.css       # Styling utama
│   └── js/
│       ├── data.js         # Data UMKM & produk
│       └── main.js         # JavaScript interaktif
└── README.md              # Dokumentasi
```

## 🛠️ Teknologi yang Digunakan

### Wajib (Sesuai Ketentuan Lomba):
- **HTML5**: Structure semantik
- **CSS3**: Styling dengan flexbox & grid
- **JavaScript**: Interaktivity (Vanilla JS)

### Library Pendukung:
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Poppins)

## 🚀 Cara Menjalankan

### Metode 1: Langsung Buka File
1. Buka `index.html` di browser
2. Website akan berjalan langsung

### Metode 2: Local Server (Recommended)
1. Buka terminal di folder project
2. Jalankan server lokal:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Atau Node.js
   npx serve .
   ```
3. Buka browser: `http://localhost:8000`

## 📋 Step-by-Step Development

### ✅ **Phase 1: Foundation (Completed)**
1. ✅ Struktur folder dan file dasar
2. ✅ HTML template dengan navigasi
3. ✅ CSS styling tema Local Culture
4. ✅ Data sample UMKM dan produk

### 🔄 **Phase 2: Core Features (In Progress)**
5. 🔄 Homepage dengan UMKM of the Day
6. 📋 Smart Category Navigator carousel
7. 📋 Galeri Interaktif Produk
8. 📋 Halaman Booth UMKM detail

### 📋 **Phase 3: Enhancement (Planned)**
9. 📋 Sistem filter dan pencarian
10. 📋 Integrasi WhatsApp checkout
11. 📋 Animasi dan interaksi lanjutan
12. 📋 Testing responsif semua device

## 🎯 Keunggulan untuk Lomba

### ✨ **Aspek Inovatif**:
- Konsep pameran digital (bukan marketplace biasa)
- UI/UX modern dengan sentuhan budaya lokal
- Interaktivitas tinggi dengan animasi smooth

### 🏆 **Nilai Sosial**:
- Pemberdayaan UMKM lokal
- Digitalisasi ekonomi rakyat
- Pelestarian produk budaya

### 💻 **Aspek Teknis**:
- Code clean dan terstruktur
- Responsive design
- Performance optimal
- Cross-browser compatibility

## 🔧 Customization

### Menambah UMKM Baru:
Edit `assets/js/data.js` pada array `umkmData`

### Menambah Produk:
Edit `assets/js/data.js` pada array `productsData`

### Mengubah Tema Warna:
Edit CSS variables di `assets/css/style.css`

## 📱 Responsif Design

Website telah dioptimasi untuk:
- 📱 Mobile (320px+)
- 📟 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Screen (1200px+)

## 🎪 Demo Features

Website sudah include 6 UMKM sample:
1. **Warung Makan Bu Sari** - Kuliner tradisional
2. **Batik Cantik Nusantara** - Fashion batik
3. **Kerajinan Bambu Kreatif** - Kerajinan ramah lingkungan
4. **Tani Maju Bersama** - Produk pertanian organik
5. **Laundry Express Cepat** - Jasa laundry
6. **Kopi Arabica Pegunungan** - Produk unggulan kopi

Total: **18 produk sample** dengan berbagai kategori dan harga.

## 🏁 Status Pengembangan

**Current Progress: 60%** 
- ✅ Core structure & design
- ✅ Data management system  
- 🔄 Interactive features
- 📋 Modal & detail pages
- 📋 Advanced animations

**Next Steps:**
1. Implementasi modal untuk detail produk
2. Halaman detail UMKM yang lengkap
3. Fitur pencarian dan filter lanjutan
4. Optimasi SEO dan performance
5. Testing cross-browser

---

*Website ini dibuat sebagai solusi digitalisasi UMKM Indonesia dengan teknologi web modern namun tetap mudah diakses dan digunakan.*
