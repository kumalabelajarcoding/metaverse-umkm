// Main JavaScript untuk interaktivitas website
let currentCategory = null; // Global variable to track active category

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
            <div class="category-card" onclick="filterByCategory('${category.id}')" data-id="${category.id}">
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
function loadProducts(filter = undefined) {
    // Update global category if filter is passed (and strict check to avoid null overriding if not intended)
    if (filter !== undefined) {
        currentCategory = filter;
    }

    // If filter is explicitly null, use currentCategory (for sorting trigger)
    const activeFilter = filter !== undefined ? filter : currentCategory;

    const productsGrid = document.getElementById('productsGrid');
    let products = [...productsData];

    // Handle Category Filter
    if (activeFilter && activeFilter !== 'all') {
        products = products.filter(p => p.category === activeFilter);
    }

    // Handle Sort/Special Filter
    const sortFilter = document.querySelector('.filter-controls select');
    if (sortFilter) {
        const value = sortFilter.value;
        if (products.length > 0) { // Only filter if there are products
            if (value === 'price-low') {
                // Filter products between 8,000 and 50,000
                products = products.filter(p => p.price >= 8000 && p.price <= 50000);
                // Optional: sort them by price low to high within this range
                products.sort((a, b) => a.price - b.price);
            } else if (value === 'price-high') {
                // Filter products between 50,000 and 250,000
                products = products.filter(p => p.price > 50000 && p.price <= 250000);
                // Optional: sort them by price high to low within this range
                products.sort((a, b) => b.price - a.price);
            } else if (value === 'rating') {
                // Only show the product with the absolute highest rating
                const maxRating = Math.max(...products.map(p => p.rating));
                products = products.filter(p => p.rating === maxRating);
            } else if (value === 'newest') {
                products = products.sort((a, b) => (b.isNew === a.isNew) ? 0 : b.isNew ? 1 : -1);
            }
        }
    }

    if (productsGrid) {
        productsGrid.innerHTML = products.map(product => {
            const umkm = getUmkmById(product.umkm_id);
            const isImageIcon = !product.image.includes('/') && !product.image.includes('.');
            return `
                <div class="product-card" onclick="openProductDetail(${product.id})">
                    <div class="product-image" style="aspect-ratio: 1/1; width: 100%;">
                        ${isImageIcon ?
                    `<i class="${product.image}"></i>` :
                    `<img src="${product.image}" alt="${product.name}" onerror="handleImageError(this, '${product.category}')" style="width: 100%; height: 100%; object-fit: contain;">`
                }
                        <div class="product-badges">
                            ${product.isNew ? '<div class="product-badge new">Baru</div>' : ''}
                            ${product.isPromo ? '<div class="product-badge promo">Promo</div>' : ''}
                        </div>
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
                        <button class="btn-detail">Lihat Detail Produk</button>
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
function filterByCategory(categoryId) {
    currentCategory = categoryId;

    // Update active state in UI
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        if (card.getAttribute('data-id') === categoryId) {
            card.classList.add('active'); // You might need CSS for .category-card.active
        } else {
            card.classList.remove('active');
        }
    });

    loadProducts(categoryId);
    // Scroll to products section
    document.getElementById('produk').scrollIntoView({ behavior: 'smooth' });
}

function initFilters() {
    const sortSelect = document.querySelector('.filter-controls select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            // Trigger loadProducts without changing category (uses global currentCategory)
            loadProducts();
        });
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

function handleImageError(img, category) {
    const parent = img.parentElement;
    const icons = {
        'kuliner': 'fas fa-utensils',
        'fashion': 'fas fa-tshirt',
        'kerajinan': 'fas fa-palette',
        'pertanian': 'fas fa-seedling',
        'jasa': 'fas fa-handshake',
        'unggulan': 'fas fa-star'
    };
    const iconClass = icons[category] || 'fas fa-shopping-basket';
    parent.innerHTML = `<i class="${iconClass}"></i>`;
}

// ===== MODAL FUNCTIONS =====
function openProductDetail(productId) {
    const product = getProductById(productId);
    const umkm = getUmkmById(product.umkm_id);
    const modal = document.getElementById('productModal');

    if (product && modal) {
        // Populate modal data
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductCategory').textContent = getCategoryName(product.category);
        document.getElementById('modalProductPrice').textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
        document.getElementById('modalProductLocation').textContent = umkm.location;
        document.getElementById('modalProductDescription').textContent = product.description;

        const modalImageContainer = document.querySelector('.product-image-modal');
        if (modalImageContainer) {
            const isImageIcon = !product.image.includes('/') && !product.image.includes('.');
            if (isImageIcon) {
                modalImageContainer.innerHTML = `<i id="modalProductIcon" class="${product.image}"></i>`;
            } else {
                modalImageContainer.innerHTML = `<img id="modalProductImage" src="${product.image}" alt="${product.name}" onerror="handleImageError(this, '${product.category}')" style="width: 100%; height: 100%; object-fit: contain; border-radius: 15px;">`;
            }
        }

        // Setup checkout button
        const checkoutBtn = document.getElementById('modalCheckoutBtn');
        if (checkoutBtn) {
            checkoutBtn.onclick = () => {
                window.location.href = `checkout.php?id=${productId}`;
            };
        }

        // Setup chat button
        const chatBtn = document.getElementById('modalChatBtn');
        if (chatBtn) {
            chatBtn.onclick = () => {
                // Redirect to internal chat page
                window.location.href = `chat.php?product_id=${productId}`;
            };
        }

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scroll
    }
}

function getCategoryName(categoryId) {
    const category = categoriesData.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
}

// Event listeners untuk modal
document.addEventListener('DOMContentLoaded', function () {
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
    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Close modal dengan ESC key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Handle chat page if we are on it
    if (window.location.pathname.includes('chat.php')) {
        initChatPage();
    }

    // Handle reopening product modal if param exists (returning from chat)
    const urlParams = new URLSearchParams(window.location.search);
    const openProductId = urlParams.get('open_product');
    if (openProductId) {
        openProductDetail(parseInt(openProductId));
    }
});

function openUmkmDetail(umkmId) {
    const umkm = getUmkmById(umkmId);

    // Untuk sementara, buka WhatsApp langsung
    const message = `Halo ${umkm.name}! Saya ingin tahu lebih lanjut tentang produk-produk Anda.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${umkm.phone}&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
}

// ===== CHAT PAGE FUNCTIONS =====
function initChatPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product_id');
    const umkmId = urlParams.get('umkm_id');

    const container = document.getElementById('chat-container');
    if (!container) return;

    if (!productId && !umkmId) {
        container.innerHTML = '<div class="error-message">Data tidak ditemukan</div>';
        return;
    }

    let product, umkm;

    if (productId) {
        product = getProductById(parseInt(productId));
        if (product) umkm = getUmkmById(product.umkm_id);
    } else if (umkmId) {
        umkm = getUmkmById(parseInt(umkmId));
    }

    if (!umkm) {
        container.innerHTML = '<div class="error-message">UMKM tidak ditemukan</div>';
        return;
    }

    // Default message based on context
    let initialMessage = '';
    if (product) {
        initialMessage = `Halo ${umkm.name}, saya tertarik dengan produk ${product.name}. Apakah stok masih tersedia?`;
    } else {
        initialMessage = `Halo ${umkm.name}, saya ingin bertanya seputar produk Anda.`;
    }

    container.innerHTML = `
        <div class="chat-wrapper">
            <header class="chat-header">
                <a href="${product ? `index.php?open_product=${product.id}` : 'index.php'}" class="back-btn"><i class="fas fa-arrow-left"></i></a>
                <div class="chat-header-info">
                    <div class="chat-avatar">
                        <i class="${umkm.image}"></i>
                    </div>
                    <div class="chat-meta">
                        <h3>${umkm.name}</h3>
                        <span class="status">Online</span>
                    </div>
                </div>
                <div class="chat-actions">
                    <button><i class="fas fa-phone"></i></button>
                    <button><i class="fas fa-ellipsis-v"></i></button>
                </div>
            </header>
            
            <div class="chat-messages" id="chatMessages">
                <div class="message-date-divider">Hari Ini</div>
                <div class="message received">
                    <p>Halo! Selamat datang di ${umkm.name}. Ada yang bisa kami bantu?</p>
                    <span class="time">08:00</span>
                </div>
                ${product ? `
                <div class="product-preview-bubble">
                    <div class="preview-img">
                         ${!product.image.includes('/') && !product.image.includes('.') ?
                `<i class="${product.image}"></i>` :
                `<img src="${product.image}" alt="${product.name}">`
            }
                    </div>
                    <div class="preview-info">
                        <h4>${product.name}</h4>
                        <p>Rp ${product.price.toLocaleString('id-ID')}</p>
                    </div>
                </div>
                ` : ''}
            </div>

            <div class="chat-input-area">
                <button class="attach-btn"><i class="fas fa-plus"></i></button>
                <div class="input-wrapper">
                    <input type="text" id="messageInput" placeholder="Tulis pesan..." value="${initialMessage}">
                    <button class="emoji-btn"><i class="far fa-smile"></i></button>
                </div>
                <button class="send-btn" id="sendMessageBtn"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;

    // Handle sending message logic with AI
    const sendBtn = document.getElementById('sendMessageBtn');
    const input = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('chatMessages');
    const chatHistory = []; // Track conversation history for AI context

    // Initial system prompt to set the persona
    const systemPrompt = `Kamu adalah pemilik UMKM ${umkm.name} yang ramah dan membantu. 
    Kamu menjual produk-produk seperti ${umkm.category}. 
    Jawablah pertanyaan pelanggan dengan sopan dalam Bahasa Indonesia. 
    Jika ada pertanyaan tentang stok, jawablah bahwa stok tersedia kecuali dikatakan sebaliknya.`;

    chatHistory.push({ role: 'system', content: systemPrompt });

    function addMessageToUI(text, isSender) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const checkIcon = isSender ? '<i class="fas fa-check-double"></i>' : '';
        const msgHtml = `
            <div class="message ${isSender ? 'sent' : 'received'}">
                <p>${text}</p>
                <span class="time">${time} ${checkIcon}</span>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', msgHtml);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async function sendMessage() {
        const text = input.value.trim();
        if (text) {
            // Add user message to UI
            addMessageToUI(text, true);
            input.value = '';

            // Add to history
            chatHistory.push({ role: 'user', content: text });

            // Show typing indicator (optional but good for UX)
            const loadingId = 'loading-' + Date.now();
            const loadingHtml = `
                <div class="message received" id="${loadingId}">
                    <p><em>Sedang mengetik...</em></p>
                </div>
            `;
            messagesContainer.insertAdjacentHTML('beforeend', loadingHtml);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            try {
                // Call Puter.js AI
                const response = await puter.ai.chat(chatHistory);

                // Remove typing indicator
                const loadingElement = document.getElementById(loadingId);
                if (loadingElement) loadingElement.remove();

                // Add AI response to UI
                const aiText = response.message.content; // Adjust based on Puter response structure, usually response or response.message.content
                addMessageToUI(aiText, false);

                // Add to history
                chatHistory.push(response.message);

            } catch (error) {
                console.error("AI Error:", error);
                const loadingElement = document.getElementById(loadingId);
                if (loadingElement) loadingElement.remove();
                addMessageToUI("Maaf, terjadi kesalahan koneksi.", false);
            }
        }
    }

    sendBtn.onclick = sendMessage;
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}
