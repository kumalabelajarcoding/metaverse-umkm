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
        name: "Batik Cantik Nusantara",
        category: "fashion",
        description: "Produk batik berkualitas dengan motif tradisional",
        location: "Jl. Batik Indah No. 8, Solo",
        phone: "081234567891",
        instagram: "@batikcantik_nusantara",
        rating: 4.9,
        image: "fas fa-tshirt",
        story: "Keluarga pengrajin batik turun temurun yang mempertahankan teknik tradisional dengan sentuhan modern untuk generasi muda.",
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
        image: "fas fa-cookie-bite",
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
        image: "fas fa-soup",
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
        image: "fas fa-leaf",
        description: "Nasi pecel dengan sayuran segar dan bumbu pecel khas Madiun",
        stock: "Tersedia",
        isNew: false,
        isPromo: false
    },
    // Produk Batik Cantik Nusantara
    {
        id: 4,
        name: "Kemeja Batik Pria Parang",
        price: 150000,
        category: "fashion",
        umkm_id: 2,
        rating: 4.9,
        image: "fas fa-shirt",
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
        image: "fas fa-female",
        description: "Dress batik dengan cutting modern, cocok untuk acara formal maupun casual",
        stock: "Tersedia",
        isNew: false,
        isPromo: true
    },
    {
        id: 6,
        name: "Selendang Batik Sutra",
        price: 85000,
        category: "fashion",
        umkm_id: 2,
        rating: 4.7,
        image: "fas fa-scroll",
        description: "Selendang batik dari bahan sutra asli dengan motif tradisional",
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
        image: "fas fa-shopping-basket",
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
        image: "fas fa-lightbulb",
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
        image: "fas fa-seedling",
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
        image: "fas fa-seedling",
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
        image: "fas fa-leaf",
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
        image: "fas fa-heart",
        description: "Madu hutan murni 500ml, langsung dari peternak lebah lokal",
        stock: "Terbatas",
        isNew: false,
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
        image: "fas fa-tshirt",
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
        image: "fas fa-iron",
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
        image: "fas fa-spray-can",
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
        image: "fas fa-coffee",
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
        image: "fas fa-mug-hot",
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
        image: "fas fa-star",
        description: "Kopi luwak asli 100gr, produk premium dengan cita rasa eksklusif",
        stock: "Terbatas",
        isNew: false,
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
    switch(sortBy) {
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
