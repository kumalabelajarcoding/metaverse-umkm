<?php
session_start();

// Destroy session
$_SESSION = array();

if (isset($_COOKIE[session_name()])) {
    setcookie(session_name(), '', time() - 42000, '/');
}

session_destroy();

// Check if it's an AJAX request
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => true,
        'message' => 'Logout berhasil!'
    ]);
} else {
    // Redirect to login page
    header('Location: ../login.html');
}
exit();
?>
