// Data sample untuk UMKM dan produk
const umkmData = [
    {
        id: 1,
        name: "Warung Makan Bu Sari",
        category: "kuliner",
        description: "Warung makan tradisional dengan cita rasa autentik",
        location: "Jl. Raya Kerupuk No. 15, Sidoarjo",
        phone: "081234567890",
        instagram: "@warungbusari",
        rating: 4.8,
        image: "fas fa-utensils",
        story: "Sudah berdiri sejak 1995, Bu Sari memulai usaha dari rumah dengan menu gudeg khas Yogyakarta. Kini telah melayani ribuan pelanggan dengan cita rasa yang konsisten.",
        products: [1, 2, 3]
    },
    {
        id: 2,
        name: "Parfum Wangi Original",
        category: "fashion",
        description: "Menyediakan berbagai koleksi parfum original dengan wangi tahan lama",
        location: "Jl. Parfum No. 8, Solo",
        phone: "081234567891",
        instagram: "@parfumwangi_original",
        rating: 4.9,
        image: "fas fa-spray-can",
        story: "Kami berdedikasi menghadirkan keharuman mewah dengan harga terjangkau untuk meningkatkan kepercayaan diri Anda.",
        products: [4, 5, 6]
    },
    {
        id: 3,
        name: "Kerajinan Bambu Kreatif",
        category: "kerajinan",
        description: "Aneka kerajinan bambu ramah lingkungan",
        location: "Desa Bamboo, Bandung",
        phone: "081234567892",
        instagram: "@bambukreatif_id",
        rating: 4.7,
        image: "fas fa-leaf",
        story: "Memanfaatkan bambu lokal untuk menciptakan produk berkualitas sekaligus menjaga kelestarian lingkungan.",
        products: [7, 8, 9]
    },
    {
        id: 4,
        name: "Tani Maju Bersama",
        category: "pertanian",
        description: "Produk pertanian organik segar dari petani lokal",
        location: "Desa Subur, Malang",
        phone: "081234567893",
        instagram: "@tanimaju_organik",
        rating: 4.6,
        image: "fas fa-seedling",
        story: "Kelompok tani yang berkomitmen menghasilkan produk organik berkualitas tanpa pestisida berbahaya.",
        products: [10, 11, 12]
    },
    {
        id: 5,
        name: "Laundry Express Cepat",
        category: "jasa",
        description: "Jasa laundry cepat dan berkualitas",
        location: "Jl. Bersih No. 20, Jakarta",
        phone: "081234567894",
        instagram: "@laundryexpress24",
        rating: 4.5,
        image: "fas fa-tint",
        story: "Melayani kebutuhan laundry masyarakat urban dengan teknologi modern dan pelayanan 24 jam.",
        products: [13, 14, 15]
    },
    {
        id: 6,
        name: "Kopi Arabica Pegunungan",
        category: "unggulan",
        description: "Kopi premium dari pegunungan Jawa",
        location: "Desa Kopi, Jember",
        phone: "081234567895",
        instagram: "@kopiapegunungan",
        rating: 4.9,
        image: "fas fa-coffee",
        story: "Petani kopi generasi ke-3 yang menghasilkan biji kopi premium dengan proses tradisional dan teknologi modern.",
        products: [16, 17, 18]
    }
];

const productsData = [
    // Produk Warung Makan Bu Sari
    {
        id: 1,
        name: "Kerupuk Rambak Sidoarjo",
        price: 25000,
        category: "kuliner",
        umkm_id: 1,
        rating: 4.8,
        image: "assets/img/kerupuk_rambak.png",
        description: "Kerupuk rambak khas Sidoarjo yang renyah dan gurih. Dibuat dari kulit sapi pilihan dengan bumbu tradisional yang telah diracik secara turun-temurun. Cocok sebagai camilan atau pelengkap makanan.",
        stock: "Tersedia",
        isNew: false,
        isPromo: true
    },
    {
        id: 2,
        name: "Soto Ayam Spesial",
        price: 20000,
        category: "kuliner",
        umkm_id: 1,
        rating: 4.7,
        image: "assets/img/soto_ayam.png",
        description: "Soto ayam dengan kuah bening, dilengkapi dengan kerupuk dan sambal",
        stock: "Tersedia",
        isNew: true,
        isPromo: false
    },
    {
        id: 3,
        name: "Nasi Pecel Madiun",
        price: 15000,
        category: "kuliner",
        umkm_id: 1,
        rating: 4.6,
        image: "assets/img/nasi_pecel.png",
        description: "Nasi pecel dengan sayuran segar dan bumbu pecel khas Madiun",
        stock: "Tersedia",
        isNew: false,
        isPromo: false
    },
    {
        id: 19,
        name: "Gudeg Jogja Komplit",
        price: 35000,
        category: "kuliner",
        umkm_id: 1,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1546069901-5ec6a79120b0?auto=format&fit=crop&q=80&w=400",
        description: "Gudeg nangka muda dengan krecek, telur pindang, dan ayam opor.",
        stock: "Tersedia",
        isNew: true,
        isPromo: true
    },
    // Produk Batik Cantik Nusantara
    {
        id: 4,
        name: "Kemeja Batik Pria Parang",
        price: 150000,
        category: "fashion",
        umkm_id: 2,
        rating: 4.9,
        image: "assets/img/batik_pria.png",
        description: "Kemeja batik pria dengan motif parang klasik, bahan katun premium",
        stock: "Terbatas",
        isNew: true,
        isPromo: false
    },
    {
        id: 5,
        name: "Dress Batik Wanita Modern",
        price: 200000,
        category: "fashion",
        umkm_id: 2,
        rating: 4.8,
        image: "assets/img/batik_wanita.png",
        description: "Dress batik dengan cutting modern, cocok untuk acara formal maupun casual",
        stock: "Tersedia",
        isNew: false,
        isPromo: true
    },
    {
        id: 6,
        name: "Parfum",
        price: 85000,
        category: "fashion",
        umkm_id: 2,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=400",
        description: "Parfum dengan aroma alami",
        stock: "Tersedia",
        isNew: false,
        isPromo: false
    },
    // Produk Kerajinan Bambu Kreatif
    {
        id: 7,
        name: "Keranjang Bambu Multifungsi",
        price: 75000,
        category: "kerajinan",
        umkm_id: 3,
        rating: 4.7,
        image: "assets/img/keranjang_bambu.png",
        description: "Keranjang bambu untuk keperluan rumah tangga, ramah lingkungan",
        stock: "Tersedia",
        isNew: true,
        isPromo: false
    },
    {
        id: 8,
        name: "Lampu Hias Bambu",
        price: 120000,
        category: "kerajinan",
        umkm_id: 3,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1507473888900-52e1ad14db88?auto=format&fit=crop&q=80&w=400",
        description: "Lampu hias dari bambu dengan desain artistik untuk dekorasi rumah",
        stock: "Terbatas",
        isNew: false,
        isPromo: true
    },
    {
        id: 9,
        name: "Pot Tanaman Bambu",
        price: 45000,
        category: "kerajinan",
        umkm_id: 3,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400",
        description: "Pot tanaman dari bambu alami, cocok untuk tanaman indoor",
        stock: "Tersedia",
        isNew: false,
        isPromo: false
    },
    // Produk Tani Maju Bersama
    {
        id: 10,
        name: "Beras Organik Premium",
        price: 18000,
        category: "pertanian",
        umkm_id: 4,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
        description: "Beras organik per kg, ditanam tanpa pestisida kimia",
        stock: "Tersedia",
        isNew: false,
        isPromo: false
    },
    {
        id: 11,
        name: "Sayuran Hidroponik Segar",
        price: 12000,
        category: "pertanian",
        umkm_id: 4,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&q=80&w=400",
        description: "Paket sayuran hidroponik segar (selada, kangkung, pakcoy)",
        stock: "Tersedia",
        isNew: true,
        isPromo: true
    },
    {
        id: 12,
        name: "Madu Hutan Murni",
        price: 85000,
        category: "pertanian",
        umkm_id: 4,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1558583055-d7ac00b1adca?auto=format&fit=crop&q=80&w=400",
        description: "Madu hutan murni 500ml, langsung dari peternak lebah lokal",
        stock: "Terbatas",
        isNew: false,
        isPromo: false
    },
    {
        id: 20,
        name: "Pupuk Organik Cair",
        price: 45000,
        category: "pertanian",
        umkm_id: 4,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=400",
        description: "Pupuk cair organik untuk menyuburkan tanaman hias dan sayuran.",
        stock: "Tersedia",
        isNew: true,
        isPromo: false
    },
    // Produk Laundry Express Cepat
    {
        id: 13,
        name: "Cuci Kering Kiloan",
        price: 8000,
        category: "jasa",
        umkm_id: 5,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=400",
        description: "Layanan cuci kering per kg, selesai dalam 24 jam",
        stock: "Tersedia",
        isNew: false,
        isPromo: false
    },
    {
        id: 14,
        name: "Cuci Setrika Express",
        price: 12000,
        category: "jasa",
        umkm_id: 5,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=400",
        description: "Layanan cuci + setrika per kg, selesai dalam 6 jam",
        stock: "Tersedia",
        isNew: false,
        isPromo: true
    },
    {
        id: 15,
        name: "Dry Clean Premium",
        price: 25000,
        category: "jasa",
        umkm_id: 5,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=400",
        description: "Layanan dry cleaning untuk pakaian berbahan khusus",
        stock: "Tersedia",
        isNew: true,
        isPromo: false
    },
    // Produk Kopi Arabica Pegunungan
    {
        id: 16,
        name: "Kopi Arabica Biji Sangrai",
        price: 95000,
        category: "unggulan",
        umkm_id: 6,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=400",
        description: "Biji kopi arabica sangrai 250gr, langsung dari pegunungan Jawa",
        stock: "Tersedia",
        isNew: true,
        isPromo: false
    },
    {
        id: 17,
        name: "Kopi Robusta Premium",
        price: 75000,
        category: "unggulan",
        umkm_id: 6,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=400",
        description: "Kopi robusta premium 250gr dengan cita rasa kuat dan aroma harum",
        stock: "Tersedia",
        isNew: false,
        isPromo: true
    },
    {
        id: 18,
        name: "Kopi Luwak Asli",
        price: 250000,
        category: "unggulan",
        umkm_id: 6,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400",
        description: "Kopi luwak asli 100gr, produk premium dengan cita rasa eksklusif",
        stock: "Terbatas",
        isNew: false,
        isPromo: false
    },
    {
        id: 21,
        name: "Kopi Susu Gula Aren",
        price: 18000,
        category: "kuliner",
        umkm_id: 6,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400",
        description: "Kopi susu kekinian dengan gula aren asli.",
        stock: "Tersedia",
        isNew: true,
        isPromo: false
    },
    {
        id: 22,
        name: "Tas Anyaman Pandan",
        price: 125000,
        category: "fashion",
        umkm_id: 3,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400",
        description: "Tas tangan modis dari anyaman daun pandan alami.",
        stock: "Terbatas",
        isNew: true,
        isPromo: false
    },
    {
        id: 23,
        name: "Sepatu Kanvas Lukis",
        price: 350000,
        category: "fashion",
        umkm_id: 2,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=400",
        description: "Sepatu kanvas dengan lukisan tangan motif etnik yang unik.",
        stock: "Pre-order",
        isNew: true,
        isPromo: false
    },
    {
        id: 24,
        name: "Keripik Tempe Renyah",
        price: 15000,
        category: "kuliner",
        umkm_id: 1,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=400",
        description: "Keripik tempe tipis dengan bumbu gurih tanpa pengawet.",
        stock: "Tersedia",
        isNew: false,
        isPromo: true
    },
    {
        id: 25,
        name: "Sabun Herbal Alami",
        price: 25000,
        category: "unggulan",
        umkm_id: 4,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=400",
        description: "Sabun mandi handmade dari bahan herbal dan minyak esensial.",
        stock: "Tersedia",
        isNew: true,
        isPromo: false
    }
];

const categoriesData = [
    {
        id: "kuliner",
        name: "Kuliner",
        icon: "fas fa-utensils",
        description: "Makanan dan minuman tradisional"
    },
    {
        id: "fashion",
        name: "Fashion",
        icon: "fas fa-tshirt",
        description: "Pakaian dan aksesoris lokal"
    },
    {
        id: "kerajinan",
        name: "Kerajinan",
        icon: "fas fa-palette",
        description: "Produk kerajinan tangan"
    },
    {
        id: "pertanian",
        name: "Pertanian",
        icon: "fas fa-seedling",
        description: "Produk pertanian dan organik"
    },
    {
        id: "jasa",
        name: "Jasa Lokal",
        icon: "fas fa-handshake",
        description: "Layanan jasa masyarakat"
    },
    {
        id: "unggulan",
        name: "Produk Unggulan",
        icon: "fas fa-star",
        description: "Produk unggulan daerah"
    }
];

// Fungsi untuk mendapatkan UMKM of the Day (random setiap hari)
function getUmkmOfTheDay() {
    const today = new Date().getDate();
    const index = today % umkmData.length;
    return umkmData[index];
}

// Fungsi untuk mendapatkan produk berdasarkan kategori
function getProductsByCategory(category) {
    return productsData.filter(product => product.category === category);
}

// Fungsi untuk mendapatkan produk berdasarkan UMKM
function getProductsByUmkm(umkmId) {
    return productsData.filter(product => product.umkm_id === umkmId);
}

// Fungsi untuk mendapatkan UMKM berdasarkan ID
function getUmkmById(id) {
    return umkmData.find(umkm => umkm.id === id);
}

// Fungsi untuk mendapatkan produk berdasarkan ID
function getProductById(id) {
    return productsData.find(product => product.id === id);
}

// Fungsi untuk sorting produk
function sortProducts(products, sortBy) {
    switch (sortBy) {
        case 'price-low':
            return products.sort((a, b) => a.price - b.price);
        case 'price-high':
            return products.sort((a, b) => b.price - a.price);
        case 'rating':
            return products.sort((a, b) => b.rating - a.rating);
        case 'newest':
        default:
            return products.sort((a, b) => b.isNew - a.isNew);
    }
}
