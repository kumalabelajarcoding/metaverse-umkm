<?php
require_once 'config.php';

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!isset($input['email']) || !isset($input['password'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Email dan password harus diisi!'
    ]);
    exit();
}

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

$conn = getConnection();

// Find user by email
$stmt = $conn->prepare("SELECT id, nama, email, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode([
        'success' => false,
        'message' => 'Email tidak ditemukan!'
    ]);
    $stmt->close();
    $conn->close();
    exit();
}

$user = $result->fetch_assoc();
$stmt->close();
$conn->close();

// Verify password (Plain text comparison)
if ($password === $user['password']) {
    // Set session
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_nama'] = $user['nama'];
    $_SESSION['user_email'] = $user['email'];
    $_SESSION['logged_in'] = true;
    
    echo json_encode([
        'success' => true,
        'message' => 'Login berhasil!',
        'user' => [
            'id' => $user['id'],
            'nama' => $user['nama'],
            'email' => $user['email']
        ]
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Password salah!'
    ]);
}
?>
