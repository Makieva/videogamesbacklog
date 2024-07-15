<?php


// appel des requêtes cors
require_once '../config/cors.php';

// gestion des requêtes options
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once '../controllers/UserController.php';

header('Content-Type: application/json');

$pseudo = $_POST['pseudo'] ?? '';
$profilePicture = $_FILES['profilePicture'] ?? null;
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

$controller = new UserController();
$response = $controller->register($pseudo, $profilePicture, $email, $password);

echo json_encode($response);
