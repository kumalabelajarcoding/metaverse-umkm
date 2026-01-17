<?php
require_once 'config.php';

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!isset($input['nama']) || !isset($input['email']) || !isset($input['password'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Semua field harus diisi!'
    ]);
    exit();
}

$nama = trim($input['nama']);
$email = trim($input['email']);
$password = $input['password'];

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Format email tidak valid!'
    ]);
    exit();
}

// Validate password length
if (strlen($password) < 6) {
    echo json_encode([
        'success' => false,
        'message' => 'Password minimal 6 karakter!'
    ]);
    exit();
}

// Validate name length
if (strlen($nama) < 2) {
    echo json_encode([
        'success' => false,
        'message' => 'Nama minimal 2 karakter!'
    ]);
    exit();
}

$conn = getConnection();

// Check if email already exists
$checkStmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
$checkStmt->bind_param("s", $email);
$checkStmt->execute();
$checkResult = $checkStmt->get_result();

if ($checkResult->num_rows > 0) {
    echo json_encode([
        'success' => false,
        'message' => 'Email sudah terdaftar! Silakan gunakan email lain.'
    ]);
    $checkStmt->close();
    $conn->close();
    exit();
}
$checkStmt->close();

// Store plain password (NOT SECURE - as requested)
$hashedPassword = $password;

// Insert new user
$stmt = $conn->prepare("INSERT INTO users (nama, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nama, $email, $hashedPassword);

if ($stmt->execute()) {
    echo json_encode([
        'success' => true,
        'message' => 'Registrasi berhasil! Silakan login.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Gagal menyimpan data. Silakan coba lagi.'
    ]);
}

$stmt->close();
$conn->close();
?>
