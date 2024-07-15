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

    public function register($pseudo, $profilePicture, $email, $password)
    {
        if (!$pseudo || !$password || !$email) {
            return ['success' => false, 'message' => 'pseudo, password and email are required'];
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $profilePicturePath = '';

        if ($profilePicture) {
            $targetDir = "../uploads/";
            $profilePicturePath = $targetDir . basename($profilePicture['name']);

            if (!move_uploaded_file($profilePicture['tmp_name'], $profilePicturePath)) {
                return ['success' => false, 'message' => 'Failed to upload profile picture'];
            }
        }

        try {
            $stmt = $this->pdo->prepare('SELECT * FROM users WHERE mail = ?');
            $stmt->execute([$email]);
            $emailExisting = $stmt->fetch();

            if ($emailExisting) {
                return ['success' => false, 'message' => 'This email is already used for an account'];
            }

            $stmt = $this->pdo->prepare('INSERT INTO users (pseudo, profile_picture, mail, password) VALUES (?, ?, ?, ?)');
            $stmt->execute([$pseudo, $profilePicture, $email, $hashedPassword]);

            return ['success' => true, 'message' => 'User registered successfully'];
        } catch (Exception $e) {
            // Journalise l'erreur exacte pour le débogage
            error_log($e->getMessage());
            return ['success' => false, 'message' => 'An error occurred', 'error' => $e->getMessage()];
        }
    }

}
