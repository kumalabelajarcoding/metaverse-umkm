<?php
session_start();

header('Content-Type: application/json');

if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true) {
    echo json_encode([
        'loggedIn' => true,
        'user' => [
            'id' => $_SESSION['user_id'],
            'nama' => $_SESSION['user_nama'],
            'email' => $_SESSION['user_email']
        ]
    ]);
} else {
    echo json_encode([
        'loggedIn' => false
    ]);
}
?>
