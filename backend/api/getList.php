<?php
require_once '../controllers/ListController.php';

$userId = $_GET['userId'];
$controller = new ListController();
$lists = $controller->getLists($userId);

echo json_encode($lists);
