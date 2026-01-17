// Authentication JavaScript

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.parentElement.querySelector('.toggle-password i');

    if (input.type === 'password') {
        input.type = 'text';
        button.classList.remove('fa-eye');
        button.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        button.classList.remove('fa-eye-slash');
        button.classList.add('fa-eye');
    }
}

// Show message function
function showMessage(elementId, message, type) {
    const messageEl = document.getElementById(elementId);
    messageEl.textContent = message;
    messageEl.className = 'auth-message ' + type;
}

// Hide message function
function hideMessage(elementId) {
    const messageEl = document.getElementById(elementId);
    messageEl.className = 'auth-message';
    messageEl.textContent = '';
}

// Check if running on file protocol
if (window.location.protocol === 'file:') {
    alert('PERINGATAN: Website ini menggunakan PHP dan HARUS dijalankan menggunakan Web Server (XAMPP/WAMP).\n\nJangan buka file langsung (file:///...), tapi gunakan localhost (http://localhost/...).');
}

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const btn = document.getElementById('loginBtn');
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Disable button and show loading
        btn.disabled = true;
        btn.innerHTML = '<div class="spinner"></div> <span>Memproses...</span>';
        hideMessage('loginMessage');

        try {
            console.log('Attempting login for:', email);
            const response = await fetch('api/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            console.log('Response status:', response.status);
            const textHTML = await response.text(); // Get raw text first to debug PHP errors
            console.log('Raw response:', textHTML);

            let data;
            try {
                data = JSON.parse(textHTML);
            } catch (e) {
                throw new Error('Server Return Error (Bukan JSON): ' + textHTML.substring(0, 100));
            }

            if (data.success) {
                showMessage('loginMessage', 'Login berhasil! Mengalihkan...', 'success');
                setTimeout(() => {
                    window.location.href = 'index.php';
                }, 1000);
            } else {
                showMessage('loginMessage', data.message || 'Login gagal.', 'error');
                btn.disabled = false;
                btn.innerHTML = '<span>Masuk</span> <i class="fas fa-arrow-right"></i>';
            }
        } catch (error) {
            console.error('Login Error:', error);
            showMessage('loginMessage', 'Error: ' + error.message, 'error');
            btn.disabled = false;
            btn.innerHTML = '<span>Masuk</span> <i class="fas fa-arrow-right"></i>';
        }
    });
}

// Register Form Handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const btn = document.getElementById('registerBtn');
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;

        // Validate password match
        if (password !== confirmPassword) {
            showMessage('registerMessage', 'Password dan konfirmasi password tidak cocok!', 'error');
            return;
        }

        // Validate password length
        if (password.length < 6) {
            showMessage('registerMessage', 'Password minimal 6 karakter!', 'error');
            return;
        }

        // Disable button and show loading
        btn.disabled = true;
        btn.innerHTML = '<div class="spinner"></div> <span>Memproses...</span>';
        hideMessage('registerMessage');

        try {
            console.log('Attempting register for:', email);
            const response = await fetch('api/register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nama, email, password })
            });

            console.log('Response status:', response.status);
            const textHTML = await response.text(); // Get raw text first
            console.log('Raw response:', textHTML);

            let data;
            try {
                data = JSON.parse(textHTML);
            } catch (e) {
                throw new Error('Server Return Error (Bukan JSON): ' + textHTML.substring(0, 100));
            }

            if (data.success) {
                showMessage('registerMessage', 'Registrasi berhasil! Mengalihkan ke login...', 'success');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1500);
            } else {
                showMessage('registerMessage', data.message || 'Registrasi gagal.', 'error');
                btn.disabled = false;
                btn.innerHTML = '<span>Daftar</span> <i class="fas fa-arrow-right"></i>';
            }
        } catch (error) {
            console.error('Register Error:', error);
            showMessage('registerMessage', 'Error: ' + error.message, 'error');
            btn.disabled = false;
            btn.innerHTML = '<span>Daftar</span> <i class="fas fa-arrow-right"></i>';
        }
    });
}

// Check if user is already logged in (for login/register pages)
async function checkAuthStatus() {
    try {
        const response = await fetch('api/check-auth.php');
        const data = await response.json();

        if (data.loggedIn) {
            window.location.href = 'index.php';
        }
    } catch (error) {
        // Not logged in or error, stay on current page
    }
}

// Run auth check on page load for login/register pages
if (loginForm || registerForm) {
    checkAuthStatus();
}
