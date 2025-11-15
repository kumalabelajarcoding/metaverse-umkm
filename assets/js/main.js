// Main JavaScript untuk interaktivitas website

// ===== NAVIGATION =====
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling untuk navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== UMKM OF THE DAY =====
function loadUmkmOfTheDay() {
    const spotlight = document.getElementById('umkm-spotlight');
    const umkm = getUmkmOfTheDay();
    
    if (spotlight && umkm) {
        spotlight.innerHTML = `
            <div class="spotlight-content">
                <div class="spotlight-header">
                    <div class="spotlight-logo">
                        <i class="${umkm.image}"></i>
                    </div>
                    <div class="spotlight-info">
                        <h3>${umkm.name}</h3>
                        <p><i class="fas fa-map-marker-alt"></i> ${umkm.location}</p>
                        <div class="rating">
                            ${generateStars(umkm.rating)}
                            <span>(${umkm.rating})</span>
                        </div>
                    </div>
                </div>
                <p class="spotlight-story">${umkm.story}</p>
                <button class="btn-primary" onclick="openUmkmDetail(${umkm.id})">
                    Kunjungi Booth Digital
                </button>
            </div>
        `;
    }
}

// ===== CATEGORIES CAROUSEL =====
function loadCategories() {
    const categoryTrack = document.getElementById('categoryTrack');
    
    if (categoryTrack) {
        categoryTrack.innerHTML = categoriesData.map(category => `
            <div class="category-card" onclick="filterByCategory('${category.id}')">
                <i class="${category.icon}"></i>
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </div>
        `).join('');
        
        initCategoryCarousel();
    }
}

function initCategoryCarousel() {
    const track = document.getElementById('categoryTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentPosition = 0;
    const cardWidth = 220; // width + gap
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const maxPosition = -(categoriesData.length - 4) * cardWidth;
            if (currentPosition > maxPosition) {
                currentPosition -= cardWidth;
                track.style.transform = `translateX(${currentPosition}px)`;
            }
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPosition < 0) {
                currentPosition += cardWidth;
                track.style.transform = `translateX(${currentPosition}px)`;
            }
        });
    }
}

// ===== PRODUCTS GALLERY =====
function loadProducts(filter = null) {
    const productsGrid = document.getElementById('productsGrid');
    let products = filter ? getProductsByCategory(filter) : [...productsData];
    
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => {
            const umkm = getUmkmById(product.umkm_id);
            return `
                <div class="product-card" onclick="openProductDetail(${product.id})">
                    <div class="product-image">
                        <i class="${product.image}"></i>
                        ${product.isNew ? '<div class="product-badge new">Baru</div>' : ''}
                        ${product.isPromo ? '<div class="product-badge promo">Promo</div>' : ''}
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-umkm">oleh ${umkm.name}</p>
                        <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                        <div class="product-rating">
                            ${generateStars(product.rating)}
                            <span>(${product.rating})</span>
                        </div>
                        <div class="product-stock ${product.stock.toLowerCase()}">${product.stock}</div>
                        <button class="btn-detail">Lihat Detail</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ===== UMKM LIST =====
function loadUmkmList() {
    const umkmGrid = document.getElementById('umkmGrid');
    
    if (umkmGrid) {
        umkmGrid.innerHTML = umkmData.map(umkm => {
            const productCount = getProductsByUmkm(umkm.id).length;
            return `
                <div class="umkm-card" onclick="openUmkmDetail(${umkm.id})">
                    <div class="umkm-header">
                        <div class="umkm-logo">
                            <i class="${umkm.image}"></i>
                        </div>
                        <div class="umkm-info">
                            <h3>${umkm.name}</h3>
                            <p>${umkm.category} • ${productCount} produk</p>
                        </div>
                    </div>
                    <p class="umkm-description">${umkm.description}</p>
                    <div class="umkm-details">
                        <p><i class="fas fa-map-marker-alt"></i> ${umkm.location}</p>
                        <div class="umkm-rating">
                            ${generateStars(umkm.rating)}
                            <span>(${umkm.rating})</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ===== FILTERS =====
function initFilters() {
    const sortFilter = document.getElementById('sortFilter');
    
    if (sortFilter) {
        sortFilter.addEventListener('change', (e) => {
            const sortedProducts = sortProducts([...productsData], e.target.value);
            displayProducts(sortedProducts);
        });
    }
}

function filterByCategory(categoryId) {
    const products = getProductsByCategory(categoryId);
    displayProducts(products);
    
    // Scroll to products section
    document.getElementById('produk').scrollIntoView({ behavior: 'smooth' });
}

function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => {
            const umkm = getUmkmById(product.umkm_id);
            return `
                <div class="product-card" onclick="openProductDetail(${product.id})">
                    <div class="product-image">
                        <i class="${product.image}"></i>
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-umkm">oleh ${umkm.name}</p>
                        <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                        <div class="product-rating">
                            ${generateStars(product.rating)}
                            <span>(${product.rating})</span>
                        </div>
                        <button class="btn-detail">Lihat Detail</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ===== UTILITY FUNCTIONS =====
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star stars"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt stars"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star stars"></i>';
    }
    
    return stars;
}

// ===== MODAL FUNCTIONS =====
function openProductDetail(productId) {
    const product = getProductById(productId);
    const umkm = getUmkmById(product.umkm_id);
    
    // Populate modal dengan data produk
    document.getElementById('modalProductIcon').className = product.image;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductCategory').textContent = getCategoryName(product.category);
    document.getElementById('modalProductPrice').textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
    document.getElementById('modalProductLocation').textContent = umkm.location.split(',')[1]?.trim() || umkm.location;
    document.getElementById('modalProductDescription').textContent = product.description;
    
    // Setup tombol WhatsApp dan Instagram
    const whatsappBtn = document.getElementById('whatsappBtn');
    const instagramBtn = document.getElementById('instagramBtn');
    
    whatsappBtn.onclick = () => {
        const message = `Halo ${umkm.name}! Saya tertarik dengan produk ${product.name} (Rp ${product.price.toLocaleString('id-ID')}). Apakah masih tersedia?`;
        const whatsappUrl = `https://wa.me/${umkm.phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    
    instagramBtn.onclick = () => {
        const instagramUrl = `https://instagram.com/${umkm.instagram.replace('@', '')}`;
        window.open(instagramUrl, '_blank');
    };
    
    // Tampilkan modal
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function getCategoryName(categoryId) {
    const category = categoriesData.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
}

// Event listeners untuk modal
document.addEventListener('DOMContentLoaded', function() {
    // Initialize semua komponen yang sudah ada
    initNavigation();
    loadUmkmOfTheDay();
    loadCategories();
    loadProducts();
    loadUmkmList();
    initFilters();
    
    // Modal event listeners
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Close modal ketika klik X
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    // Close modal ketika klik di luar modal
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
    
    // Close modal dengan ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

function openUmkmDetail(umkmId) {
    const umkm = getUmkmById(umkmId);
    const products = getProductsByUmkm(umkmId);
    
    // Untuk sementara, buka WhatsApp langsung
    const message = `Halo ${umkm.name}! Saya ingin tahu lebih lanjut tentang produk-produk Anda.`;
    const whatsappUrl = `https://wa.me/${umkm.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
