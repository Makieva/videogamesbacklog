<?php

// namespace Models;

// use PDO;
// use Models\Model;

// class Lists extends Model{

//     static function chercherListParId($id){
//         $requete = Model::connexionBDD();
//         $resultat = $requete->prepare("SELECT * FROM `lists` WHERE id = :id");
//         $resultat->bindParam(':id', $id, PDO::PARAM_INT);
//         $resultat->execute();
//         return $resultat->fetch(PDO::FETCH_OBJ);
//     }

//     static function ajouterList($userId, $label){
//         $requete = Model::connexionBDD();
//         $requete->query("INSERT INTO `lists` VALUE (?, $label)");
        

//     }
// }


class ListModel {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function addList($userId, $name) {
        $stmt = $this->pdo->prepare('INSERT INTO lists (user_id, name) VALUES (?, ?)');
        return $stmt->execute([$userId, $name]);
    }

    public function getLists($userId) {
        $stmt = $this->pdo->prepare('SELECT * FROM lists WHERE user_id = ?');
        $stmt->execute([$userId]);
        return $stmt->fetchAll();
    }

    public function addGameToList($listId, $gameId, $gameName) {
        $stmt = $this->pdo->prepare('INSERT INTO list_games (list_id, game_id, game_name) VALUES (?, ?, ?)');
        return $stmt->execute([$listId, $gameId, $gameName]);
    }

    public function getGamesInList($listId) {
        $stmt = $this->pdo->prepare('SELECT * FROM list_games WHERE list_id = ?');
        $stmt->execute([$listId]);
        return $stmt->fetchAll();
    }
}
