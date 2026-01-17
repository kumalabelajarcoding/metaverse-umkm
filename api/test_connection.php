<?php
// Script untuk mengecek koneksi database
header('Content-Type: text/plain');

$host = 'localhost';
$user = 'root';
$pass = ''; // Default XAMPP password is empty
$db   = 'umkm_digital';

echo "=== DIAGNOSTIC START ===\n";
echo "Testing MySQL Connection...\n";
echo "Host: $host\n";
echo "User: $user\n";
echo "DB:   $db\n\n";

// 1. Test Raw Connection
$conn = new mysqli($host, $user, $pass);

if ($conn->connect_error) {
    echo "[ERROR] Koneksi ke MySQL GAGAL: " . $conn->connect_error . "\n";
    echo "Saran: Pastikan XAMPP/MySQL sudah berjalan. Cek username/password database.\n";
    exit();
} else {
    echo "[OK] Koneksi ke Server MySQL BERHASIL.\n";
}

// 2. Test Database Selection
if (!$conn->select_db($db)) {
    echo "[ERROR] Database '$db' TIDAK DITEMUKAN.\n";
    echo "Error: " . $conn->error . "\n";
    echo "Saran: Anda perlu membuat database dan import file SQL via phpMyAdmin.\n";
} else {
    echo "[OK] Database '$db' DITEMUKAN.\n";
    
    // 3. Test Table Existence
    $result = $conn->query("SHOW TABLES LIKE 'users'");
    if ($result->num_rows > 0) {
        echo "[OK] Tabel 'users' DITEMUKAN.\n";
        
        // 4. Test User Data
        $count = $conn->query("SELECT COUNT(*) as total FROM users")->fetch_assoc()['total'];
        echo "[OK] Jumlah user terdaftar: $count\n";
    } else {
        echo "[ERROR] Tabel 'users' TIDAK DITEMUKAN dalam database.\n";
        echo "Saran: Import ulang file 'database/umkm_digital.sql'.\n";
    }
}

$conn->close();
echo "\n=== DIAGNOSTIC END ===";
?>
