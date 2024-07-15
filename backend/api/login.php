<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once '../controllers/UserController.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$pseudo = $data['pseudo'] ?? '';
$password = $data['password'] ?? '';

$controller = new UserController();
$response = $controller->login($pseudo, $password);

echo json_encode($response);
