<?php
require_once '../controllers/ListController.php';

$data = json_decode(file_get_contents('php://input'), true);
$controller = new ListController();
$result = $controller->addList($data['userId'], $data['name']);

echo json_encode(['success' => $result]);
