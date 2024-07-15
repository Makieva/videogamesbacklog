<?php

static function traiterFormulaireConnexion(){
    if (empty($_POST['login']) || empty($_POST['password'])) {
        //rediriger vers le formulaire de connexion
    }

    $user = UserModel::chercherUtilisateurParEmail($_POST['login']);

    if (
        $user === false
        || !password_verify($_POST['password'], $user->password)
    ) {
        // L'utilisateur s'est trompé d'identifiant
        // ou de mot de passe
        //rediriger vers le formulaire de connexion
    }

    $_SESSION['user'] = $user;

        //on redirige vers l'accueil/homepage
}