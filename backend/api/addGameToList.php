<?php
require_once '../controllers/ListController.php';

$data = json_decode(file_get_contents('php://input'), true);
$controller = new ListController();
$result = $controller->addGameToList($data['listId'], $data['gameId'], $data['gameName']);

echo json_encode(['success' => $result]);
