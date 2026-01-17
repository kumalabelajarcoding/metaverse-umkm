-- Database UMKM Digital
-- Jalankan script ini di phpMyAdmin atau MySQL CLI

-- Create database
CREATE DATABASE IF NOT EXISTS umkm_digital;
USE umkm_digital;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create index for faster email lookup
CREATE INDEX idx_users_email ON users(email);

-- Insert sample users
-- Password untuk semua user seed adalah: password123 (PLAIN TEXT)
INSERT INTO users (nama, email, password) VALUES 
('Admin User', 'admin@example.com', 'password123'),
('Budi Santoso', 'budi@example.com', 'password123'),
('Siti Aminah', 'siti@example.com', 'password123');
