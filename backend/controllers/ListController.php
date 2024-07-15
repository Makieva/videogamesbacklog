<?php

require_once '../config/db.php';
require_once '../models/List.php';

class ListController {
    private $listModel;

    public function __construct() {
        $database = new Database();
        $this->listModel = new ListModel($database->pdo);
    }

    public function addList($userId, $name) {
        return $this->listModel->addList($userId, $name);
    }

    public function getLists($userId) {
        return $this->listModel->getLists($userId);
    }

    public function addGameToList($listId, $gameId, $gameName) {
        return $this->listModel->addGameToList($listId, $gameId, $gameName);
    }

    public function getGamesInList($listId) {
        return $this->listModel->getGamesInList($listId);
    }
}
