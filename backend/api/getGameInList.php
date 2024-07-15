<?php
require_once '../controllers/ListController.php';

$listId = $_GET['listId'];
$controller = new ListController();
$games = $controller->getGamesInList($listId);

echo json_encode($games);
