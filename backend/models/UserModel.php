<?php 

namespace Models;

use PDO;
use Models\Model;

class UserModel extends Model{

    static function chercherUserParEmail($email){
        $requete = Model::connexionBDD();
        $resultat = $requete->prepare("SELECT * FROM `users` WHERE mail = :email");
        $resultat->bindParam(':id', $id, PDO::PARAM_INT);
        $resultat->execute();
        return $resultat->fetch(PDO::FETCH_OBJ);
    }

    static function modificationUser($id, $email, $password, $pseudo, $profilePicture){
        $requete = Model::connexionBDD();
        $resultat = $requete->prepare("UPDATE `users` SET mail = :email, password = :password, pseudo = :pseudo, profilePicture = :profilePicture");
        $resultat->execute(
            array(
                ":email" => $email,
                ":password" => $password,
                ":pseudo" => $pseudo,
                ":profilePicture" => $profilePicture,
                ":id" => $id
            )
        );
        return $resultat->fetchAll(PDO::FETCH_OBJ);
    }

    static function creerUser($email, $password, $pseudo, $profilePicture){
        $requete = Model::connexionBDD();
        $requete->query("INSERT INTO `users` VALUE (NULL, $email, $password, $pseudo, $profilePicture)" );
    }
}