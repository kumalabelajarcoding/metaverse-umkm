<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.html');
    exit();
}

$userName = isset($_SESSION['user_nama']) ? $_SESSION['user_nama'] : 'User';
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pameran Digital UMKM - Galeri Produk Lokal</title>
    <link rel="stylesheet" href="assets/css/style.css?v=2.5">
    <!-- ... check other lines ... -->
    <script src="assets/js/data.js?v=2.8"></script>
    <script src="assets/js/main.js?v=2.8"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .user-menu {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .user-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #8B4513;
            font-weight: 500;
        }
        .user-info i {
            color: #D2691E;
        }
        .btn-logout {
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
        }
        .btn-logout:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
        }
        @media (max-width: 768px) {
            .user-menu {
                display: none;
            }
            .nav-menu.active .user-menu {
                display: flex;
                flex-direction: column;
                width: 100%;
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation Header -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <i class="fas fa-store"></i>
                <span>UMKM Digital</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link">Beranda</a></li>
                <li><a href="#umkm" class="nav-link">UMKM</a></li>
                <li><a href="#produk" class="nav-link">Produk</a></li>
                <li><a href="#tentang" class="nav-link">Tentang</a></li>
            </ul>
            <div class="user-menu">
                <div class="user-info">
                    <i class="fas fa-user-circle"></i>
                    <span><?php echo htmlspecialchars($userName); ?></span>
                </div>
                <a href="api/logout.php" class="btn-logout">
                    <i class="fas fa-sign-out-alt"></i>
                    Keluar
                </a>
            </div>
            <div class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1>Pameran Digital UMKM</h1>
                <p>Temukan produk lokal terbaik dari UMKM di daerahmu. Galeri interaktif yang menampilkan keindahan karya lokal dengan teknologi modern.</p>
                <button class="btn-primary">Jelajahi Sekarang</button>
            </div>
            <div class="hero-image">
                <div class="hero-card">
                    <i class="fas fa-store-alt"></i>
                    <h3>100+ UMKM</h3>
                    <p>Terdaftar</p>
                </div>
            </div>
        </div>
    </section>

    <!-- UMKM of the Day -->
    <section class="umkm-of-day">
        <div class="container">
            <h2>UMKM Hari Ini</h2>
            <div id="umkm-spotlight" class="spotlight-card">
                <!-- Content will be loaded by JavaScript -->
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
        <div class="container">
            <h2>Kategori Produk</h2>
            <div class="category-carousel">
                <div class="category-track" id="categoryTrack">
                    <!-- Categories will be loaded by JavaScript -->
                </div>
                <button class="carousel-btn prev" id="prevBtn"><i class="fas fa-chevron-left"></i></button>
                <button class="carousel-btn next" id="nextBtn"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    </section>

    <!-- Products Gallery -->
    <section id="produk" class="products">
        <div class="container">
            <div class="section-header">
                <h2>Galeri Produk</h2>
                <div class="filter-controls">
                    <select id="sortFilter">
                        <option value="newest">Terbaru</option>
                        <option value="price-low">Harga Terendah</option>
                        <option value="price-high">Harga Tertinggi</option>
                        <option value="rating">Rating Terbaik</option>
                    </select>
                </div>
            </div>
            <div class="products-grid" id="productsGrid">
                <!-- Products will be loaded by JavaScript -->
            </div>
        </div>
    </section>

    <!-- UMKM List -->
    <section id="umkm" class="umkm-list">
        <div class="container">
            <h2>Daftar UMKM</h2>
            <div class="umkm-grid" id="umkmGrid">
                <!-- UMKM cards will be loaded by JavaScript -->
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>UMKM Digital</h3>
                    <p>Platform pameran digital yang menghubungkan UMKM lokal dengan pelanggan di seluruh daerah.</p>
                </div>
                <div class="footer-section">
                    <h4>Tautan Cepat</h4>
                    <ul>
                        <li><a href="#home">Beranda</a></li>
                        <li><a href="#umkm">UMKM</a></li>
                        <li><a href="#produk">Produk</a></li>
                        <li><a href="#tentang">Tentang</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Kontak</h4>
                    <p><i class="fas fa-envelope"></i> IG kumalaes</p>
                    <p><i class="fas fa-phone"></i> +62 123 456 789</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 UMKM Digital. Dibuat untuk pemberdayaan UMKM Indonesia.</p>
            </div>
        </div>
    </footer>

    <!-- Product Detail Modal -->
    <div id="productModal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <div class="product-image-modal">
                    <i id="modalProductIcon" class="fas fa-shopping-basket"></i>
                </div>
                <div class="product-details-modal">
                    <h2 id="modalProductName">Nama Produk</h2>
                    <span id="modalProductCategory" class="product-category-tag">Kategori</span>
                    <div class="product-price-modal" id="modalProductPrice">Rp 0</div>
                    <div class="product-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span id="modalProductLocation">Lokasi</span>
                    </div>
                    <p id="modalProductDescription" class="product-description-modal">
                        Deskripsi produk akan muncul di sini...
                    </p>
                    <div class="modal-actions">
                        <button id="modalChatBtn" class="btn-modal-chat">
                            <i class="fab fa-whatsapp"></i> Chat Seller
                        </button>
                        <button id="modalCheckoutBtn" class="btn-modal-checkout">
                            <i class="fas fa-shopping-cart"></i> Checkout Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- JavaScript -->
    <script src="assets/js/data.js?v=2.8"></script>
    <script src="assets/js/main.js?v=2.8"></script>
</body>
</html>
