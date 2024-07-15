<?php
require_once '../config/db.php';

class UserController
{
    private $pdo;

    public function __construct()
    {
        $database = new Database();
        $this->pdo = $database->pdo;
    }

    public function login($pseudo, $password)
    {
        if (!$pseudo || !$password) {
            return ['success' => false, 'message' => 'pseudo and password are required'];
        }

        try {
            $stmt = $this->pdo->prepare('SELECT * FROM users WHERE pseudo = ?');
            $stmt->execute([$pseudo]);
            $user = $stmt->fetch();

            if ($user && password_verify($password, $user['password'])) {
                return ['success' => true, 'message' => 'Login successful'];
            } else {
                return ['success' => false, 'message' => 'Invalid pseudo or password'];
            }
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'An error occurred'];
        }
    }

    public function register($pseudo, $password)
    {
        if (!$pseudo || !$password) {
            return ['success' => false, 'message' => 'pseudo and password are required'];
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        try {
            $stmt = $this->pdo->prepare('INSERT INTO users (pseudo, password) VALUES (?, ?)');
            $stmt->execute([$pseudo, $hashedPassword]);

            return ['success' => true, 'message' => 'User registered successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => 'An error occurred'];
        }
    }

}
