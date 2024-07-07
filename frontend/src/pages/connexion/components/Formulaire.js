import React from "react";

const Formulaire = () => {
    return (
    <>
      <form>
        <label for="identifiant">Identifiant</label>
        <input type="text" name="identifiant" id="identifiant"></input>
        <label for="identifiant">Mot de passe</label>
        <input type="text" name="mdp" id="mdp"></input>

        <input type="submit" value='connexion'></input>
      </form>
    </>
    );
}

export default Formulaire;