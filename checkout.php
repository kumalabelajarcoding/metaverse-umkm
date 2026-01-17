<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.html');
    exit();
}

$productId = isset($_GET['id']) ? intval($_GET['id']) : 0;
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Checkout - UMKM Digital</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --shopee-orange: #ee4d2d;
            --shopee-orange-light: #ff5722;
            --bg-gray: #f5f5f5;
            --text-gray: #757575;
            --border-color: #e8e8e8;
            --success-green: #26aa99;
        }

        body {
            background-color: var(--bg-gray);
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            overflow-x: hidden;
        }

        /* Slide In Animation */
        .checkout-page {
            animation: slideIn 0.3s ease-out forwards;
        }

        @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }

        /* Header */
        .checkout-header {
            background-color: white;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }

        .back-btn {
            font-size: 20px;
            color: var(--shopee-orange);
            margin-right: 16px;
            cursor: pointer;
            text-decoration: none;
        }

        .header-title {
            font-size: 18px;
            font-weight: 500;
            flex-grow: 1;
        }

        .shop-logo-mini {
            width: 30px;
            height: 30px;
            background: #fdf0ed;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--shopee-orange);
        }

        /* Progress Steps */
        .progress-container {
            background: white;
            padding: 15px 0;
            margin-bottom: 8px;
        }

        .progress-steps {
            display: flex;
            justify-content: space-around;
            position: relative;
            max-width: 400px;
            margin: 0 auto;
        }

        .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1;
            font-size: 10px;
            color: var(--text-gray);
            gap: 4px;
        }

        .step.active {
            color: var(--shopee-orange);
        }

        .step-circle {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            color: white;
        }

        .step.active .step-circle {
            background: var(--shopee-orange);
        }

        .progress-line {
            position: absolute;
            top: 9px;
            left: 15%;
            right: 15%;
            height: 2px;
            background: #e0e0e0;
            z-index: 0;
        }

        .progress-fill {
            height: 100%;
            background: var(--shopee-orange);
            width: 33%;
        }

        /* Section Cards */
        .section-card {
            background: white;
            margin-bottom: 8px;
            padding: 16px;
            box-shadow: 0 1px 2px rgba(0,0,0,0.02);
        }

        .section-title {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Address Section */
        .address-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 8px;
        }

        .address-info {
            flex-grow: 1;
        }

        .receiver-name {
            font-weight: 600;
            font-size: 14px;
        }

        .receiver-phone {
            color: var(--text-gray);
            font-size: 14px;
        }

        .address-detail {
            font-size: 13px;
            line-height: 1.4;
            color: #555;
            margin-top: 4px;
        }

        .btn-change {
            color: var(--shopee-orange);
            background: none;
            border: none;
            font-weight: 500;
            font-size: 13px;
            cursor: pointer;
        }

        /* Shop Section */
        .shop-info-card {
            display: flex;
            align-items: center;
            gap: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border-color);
            margin-bottom: 12px;
        }

        .shop-img {
            width: 40px;
            height: 40px;
            background: #f5f5f5;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--shopee-orange);
            font-size: 20px;
        }

        .shop-meta h3 {
            font-size: 14px;
            margin: 0;
        }

        .badge-umkm {
            background: #fff0ed;
            color: var(--shopee-orange);
            font-size: 10px;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            margin-top: 2px;
        }

        .shop-location {
            font-size: 12px;
            color: var(--text-gray);
            margin-top: 2px;
        }

        /* Product Detail Section */
        .product-item {
            display: flex;
            gap: 12px;
            margin-bottom: 15px;
        }

        .product-img {
            width: 80px;
            height: 80px;
            background: #f9f9f9;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: #888;
            flex-shrink: 0;
        }

        .product-meta {
            flex-grow: 1;
        }

        .product-name {
            font-size: 14px;
            margin-bottom: 4px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .product-variant {
            font-size: 12px;
            color: var(--text-gray);
            margin-bottom: 4px;
        }

        .product-price-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 8px;
        }

        .price {
            font-size: 14px;
            color: var(--shopee-orange);
            font-weight: 500;
        }

        .quantity-control {
            display: flex;
            align-items: center;
            border: 1px solid var(--border-color);
            border-radius: 4px;
        }

        .qty-btn {
            width: 28px;
            height: 28px;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #qty-value {
            width: 35px;
            text-align: center;
            font-size: 13px;
            border-left: 1px solid var(--border-color);
            border-right: 1px solid var(--border-color);
        }

        .order-note {
            margin-top: 12px;
        }

        .order-note input {
            width: 100%;
            padding: 10px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            font-size: 13px;
            outline: none;
        }

        /* Shipping & Payment Row */
        .selection-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }

        .selection-label {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 13px;
        }

        .selection-value {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: var(--text-gray);
        }

        .selection-value i {
            font-size: 12px;
        }

        .shipping-est {
            font-size: 11px;
            color: var(--text-gray);
            margin-left: 33px;
            margin-top: 2px;
        }

        /* Payment Summary */
        .summary-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 13px;
        }

        .total-row {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px dashed var(--border-color);
            font-weight: 700;
            font-size: 16px;
        }

        .total-price {
            color: var(--shopee-orange);
        }

        /* Footer */
        .checkout-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
            z-index: 100;
        }

        .footer-total-info {
            display: flex;
            flex-direction: column;
        }

        .footer-total-label {
            font-size: 12px;
            color: var(--text-gray);
        }

        .footer-total-amount {
            font-size: 18px;
            font-weight: 700;
            color: var(--shopee-orange);
        }

        .btn-order {
            background: var(--shopee-orange);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(238, 77, 45, 0.3);
            transition: transform 0.2s;
        }

        .btn-order:active {
            transform: scale(0.95);
        }

        /* Support Message */
        .support-msg {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: var(--text-gray);
            margin-bottom: 80px;
        }

        /* Modal / Sheets for selection */
        .bottom-sheet {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            border-radius: 20px 20px 0 0;
            z-index: 200;
            transform: translateY(100%);
            transition: transform 0.3s ease-out;
            padding: 20px;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
        }

        .bottom-sheet.show {
            transform: translateY(0);
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 150;
            display: none;
        }

        .overlay.show {
            display: block;
        }

        .option-item {
            padding: 15px;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
        }

        .option-item:last-child {
            border-bottom: none;
        }

        /* Loading */
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255,255,255,0.8);
            z-index: 300;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid var(--shopee-orange);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Success Message */
        .success-modal {
            background: white;
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            max-width: 80%;
            display: none;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .success-icon {
            width: 60px;
            height: 60px;
            background: var(--success-green);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body class="checkout-page">
    <!-- Header -->
    <header class="checkout-header">
        <a href="index.php" class="back-btn"><i class="fas fa-arrow-left"></i></a>
        <div class="header-title">Checkout</div>
        <div class="shop-logo-mini" id="headerShopLogo">
            <i class="fas fa-store"></i>
        </div>
    </header>

    <!-- Progress Steps -->
    <div class="progress-container">
        <div class="progress-steps">
            <div class="progress-line">
                <div class="progress-fill"></div>
            </div>
            <div class="step active">
                <div class="step-circle">1</div>
                <span>Produk</span>
            </div>
            <div class="step active">
                <div class="step-circle">2</div>
                <span>Checkout</span>
            </div>
            <div class="step">
                <div class="step-circle">3</div>
                <span>Pembayaran</span>
            </div>
            <div class="step">
                <div class="step-circle">4</div>
                <span>Selesai</span>
            </div>
        </div>
    </div>

    <!-- Shipping Address -->
    <div class="section-card">
        <div class="section-title">
            <i class="fas fa-map-marker-alt" style="color: var(--shopee-orange);"></i>
            Alamat Pengiriman
        </div>
        <div class="address-header">
            <div class="address-info">
                <div class="receiver-name"><?php echo htmlspecialchars($_SESSION['user_nama'] ?? 'Pengguna'); ?></div>
                <div class="receiver-phone">0812-3456-7890</div>
                <div class="address-detail">
                    Perumahan Griya Asri Blok C2 No. 12, Kel. Sari, Kec. Maju, Kota Surabaya, Jawa Timur 60111
                </div>
            </div>
            <button class="btn-change">Ubah</button>
        </div>
    </div>

    <!-- Shop Info & Product -->
    <div class="section-card">
        <div class="shop-info-card">
            <div class="shop-img" id="shopIcon">
                <i class="fas fa-store"></i>
            </div>
            <div class="shop-meta">
                <h3 id="shopName">Nama Toko UMKM</h3>
                <div class="badge-umkm">
                    <i class="fas fa-check-circle"></i> UMKM Lokal Terverifikasi
                </div>
                <div class="shop-location" id="shopLocation">Kota Surabaya</div>
            </div>
            <a href="index.php#umkm" class="btn-change" style="margin-left: auto; text-decoration: none;">Lihat Profil</a>
        </div>

        <div class="product-item">
            <div class="product-img" id="productImage">
                <i class="fas fa-shopping-basket"></i>
            </div>
            <div class="product-meta">
                <div class="product-name" id="productName">Nama Produk UMKM</div>
                <div class="product-variant">Varian: Default</div>
                <div class="product-price-row">
                    <div class="price" id="productPrice">Rp 0</div>
                    <div class="quantity-control">
                        <button class="qty-btn" id="btn-minus">-</button>
                        <div id="qty-value">1</div>
                        <button class="qty-btn" id="btn-plus">+</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="order-note">
            <input type="text" placeholder="Catatan untuk penjual (opsional)...">
        </div>
    </div>

    <!-- Shipping Method -->
    <div class="section-card">
        <div class="selection-row" onclick="showShippingOptions()">
            <div class="selection-label">
                <i class="fas fa-truck" style="color: var(--success-green);"></i>
                <span>Metode Pengiriman</span>
            </div>
            <div class="selection-value">
                <span id="selectedShipping">Kurir Lokal (Hemat)</span>
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
        <div class="shipping-est" id="shippingEst">Estimasi tiba: 1-2 hari</div>
    </div>

    <!-- Payment Method -->
    <div class="section-card">
        <div class="selection-row" onclick="showPaymentOptions()">
            <div class="selection-label">
                <i class="fas fa-wallet" style="color: var(--shopee-orange);"></i>
                <span>Metode Pembayaran</span>
            </div>
            <div class="selection-value">
                <span id="selectedPayment">QRIS (Gopay/OVO/DANA)</span>
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    </div>

    <!-- Payment Summary -->
    <div class="section-card">
        <div class="section-title">Ringkasan Pembayaran</div>
        <div class="summary-row">
            <span>Subtotal Produk</span>
            <span id="sumSubtotal">Rp 0</span>
        </div>
        <div class="summary-row">
            <span>Subtotal Pengiriman</span>
            <span id="sumShipping">Rp 10.000</span>
        </div>
        <div class="summary-row">
            <span>Biaya Layanan</span>
            <span>Rp 1.000</span>
        </div>
        <div class="summary-row" style="color: var(--success-green);">
            <span>Diskon UMKM</span>
            <span>-Rp 5.000</span>
        </div>
        <div class="summary-row total-row">
            <span>Total Pembayaran</span>
            <span class="total-price" id="sumTotal">Rp 0</span>
        </div>
    </div>

    <!-- Support Message -->
    <div class="support-msg">
        “Dengan membeli produk ini, Anda mendukung UMKM Lokal 🇮🇩”
    </div>

    <!-- Sticky Footer -->
    <div class="checkout-footer">
        <div class="footer-total-info">
            <div class="footer-total-label">Total Pembayaran</div>
            <div class="footer-total-amount" id="footerTotal">Rp 0</div>
        </div>
        <button class="btn-order" onclick="processOrder()">Buat Pesanan</button>
    </div>

    <!-- Overlays & Modals -->
    <div class="overlay" id="overlay" onclick="closeAllSheets()"></div>

    <!-- Shipping Sheet -->
    <div class="bottom-sheet" id="shippingSheet">
        <div class="section-title">Pilih Kurir</div>
        <div class="option-item" onclick="selectShipping('Kurir Lokal', 5000, 'Tiba hari ini')">
            <i class="fas fa-motorcycle" style="color: #2196F3;"></i>
            <div>
                <strong>Kurir Lokal (Sidoarjo)</strong>
                <div style="font-size: 12px; color: var(--text-gray);">Rp 5.000 - Tiba hari ini</div>
            </div>
        </div>
        <div class="option-item" onclick="selectShipping('J&T Express', 12000, '2-3 hari')">
            <i class="fas fa-truck-fast" style="color: #f44336;"></i>
            <div>
                <strong>J&T Express</strong>
                <div style="font-size: 12px; color: var(--text-gray);">Rp 12.000 - 2-3 hari</div>
            </div>
        </div>
        <div class="option-item" onclick="selectShipping('GrabExpress', 15000, 'Instan')">
            <i class="fab fa-grab" style="color: #00b14f;"></i>
            <div>
                <strong>GrabExpress / GoSend</strong>
                <div style="font-size: 12px; color: var(--text-gray);">Rp 15.000 - Instan</div>
            </div>
        </div>
    </div>

    <!-- Payment Sheet -->
    <div class="bottom-sheet" id="paymentSheet">
        <div class="section-title">Pilih Metode Pembayaran</div>
        <div class="option-item" onclick="selectPayment('QRIS (All In One)')">
            <i class="fas fa-qrcode" style="color: #000;"></i>
            <div>
                <strong>QRIS</strong>
                <div style="font-size: 12px; color: var(--text-gray);">Gopay, OVO, DANA, LinkAja</div>
            </div>
        </div>
        <div class="option-item" onclick="selectPayment('Transfer Bank')">
            <i class="fas fa-university" style="color: #1a73e8;"></i>
            <div>
                <strong>Transfer Bank</strong>
                <div style="font-size: 12px; color: var(--text-gray);">BCA, Mandiri, BNI, BRI</div>
            </div>
        </div>
        <div class="option-item" onclick="selectPayment('COD (Bayar di Tempat)')">
            <i class="fas fa-hand-holding-dollar" style="color: #ffa000;"></i>
            <div>
                <strong>COD</strong>
                <div style="font-size: 12px; color: var(--text-gray);">Bayar saat barang sampai</div>
            </div>
        </div>
    </div>

    <!-- Loading Overlay -->
    <div class="loading-overlay" id="loadingOverlay">
        <div class="spinner"></div>
        <p style="margin-top: 15px; font-weight: 500;">Memproses Pesanan...</p>
    </div>

    <!-- Success Modal -->
    <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: none; align-items: center; justify-content: center; z-index: 400;" id="successContainer">
        <div class="success-modal" id="successModal">
            <div class="success-icon">
                <i class="fas fa-check"></i>
            </div>
            <h3>Pesanan Behasil!</h3>
            <p>Terima kasih telah mendukung UMKM Lokal. Penjual akan segera memproses pesanan Anda.</p>
            <button class="btn-order" onclick="window.location.href='index.php'" style="width: 100%;">Kembali ke Beranda</button>
        </div>
    </div>

    <script src="assets/js/data.js"></script>
    <script>
        const productId = <?php echo $productId; ?>;
        let product = null;
        let umkm = null;
        let quantity = 1;
        let shippingCost = 10000;
        let serviceFee = 1000;
        let discount = 5000;

        function initCheckout() {
            if (productId === 0) {
                window.location.href = 'index.php';
                return;
            }

            product = getProductById(productId);
            if (!product) {
                window.location.href = 'index.php';
                return;
            }

            umkm = getUmkmById(product.umkm_id);
            
            // Populate UI
            document.getElementById('shopName').textContent = umkm.name;
            document.getElementById('shopLocation').textContent = umkm.location.split(',')[1]?.trim() || umkm.location;
            document.getElementById('shopIcon').innerHTML = `<i class="${umkm.image}"></i>`;
            document.getElementById('headerShopLogo').innerHTML = `<i class="${umkm.image}"></i>`;
            
            document.getElementById('productName').textContent = product.name;
            document.getElementById('productPrice').textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
            document.getElementById('productImage').innerHTML = `<i class="${product.image}"></i>`;
            
            updateCalculation();
        }

        function updateCalculation() {
            const subtotal = product.price * quantity;
            const total = subtotal + shippingCost + serviceFee - discount;
            
            document.getElementById('qty-value').textContent = quantity;
            document.getElementById('sumSubtotal').textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
            document.getElementById('sumShipping').textContent = `Rp ${shippingCost.toLocaleString('id-ID')}`;
            document.getElementById('sumTotal').textContent = `Rp ${total.toLocaleString('id-ID')}`;
            document.getElementById('footerTotal').textContent = `Rp ${total.toLocaleString('id-ID')}`;
        }

        // Qty Controls
        document.getElementById('btn-plus').onclick = () => {
            quantity++;
            updateCalculation();
        };

        document.getElementById('btn-minus').onclick = () => {
            if (quantity > 1) {
                quantity--;
                updateCalculation();
            }
        };

        // UI Interactions
        function showShippingOptions() {
            document.getElementById('overlay').classList.add('show');
            document.getElementById('shippingSheet').classList.add('show');
        }

        function showPaymentOptions() {
            document.getElementById('overlay').classList.add('show');
            document.getElementById('paymentSheet').classList.add('show');
        }

        function closeAllSheets() {
            document.getElementById('overlay').classList.remove('show');
            document.getElementById('shippingSheet').classList.remove('show');
            document.getElementById('paymentSheet').classList.remove('show');
        }

        function selectShipping(name, cost, est) {
            shippingCost = cost;
            document.getElementById('selectedShipping').textContent = name;
            document.getElementById('shippingEst').textContent = `Estimasi tiba: ${est}`;
            updateCalculation();
            closeAllSheets();
        }

        function selectPayment(name) {
            document.getElementById('selectedPayment').textContent = name;
            closeAllSheets();
        }

        function processOrder() {
            document.getElementById('loadingOverlay').style.display = 'flex';
            
            // Simulate API call
            setTimeout(() => {
                document.getElementById('loadingOverlay').style.display = 'none';
                document.getElementById('successContainer').style.display = 'flex';
                document.getElementById('successModal').style.display = 'flex';
            }, 2000);
        }

        document.addEventListener('DOMContentLoaded', initCheckout);
    </script>
</body>
</html>
