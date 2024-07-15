// import React from "react";

// const Formulaire = () => {
//     return (
//     <>
//       <form>
//         <label for="identifiant">Identifiant</label>
//         <input type="text" name="identifiant" id="identifiant"></input>
//         <label for="identifiant">Mot de passe</label>
//         <input type="text" name="mdp" id="mdp"></input>

//         <input type="submit" value='connexion'></input>
//       </form>
//     </>
//     );
// }

// export default Formulaire;

// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
const UserContext = React.createContext();

const Login = () => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost/videogamesbacklog/backend/api/login.php",
        { pseudo, password },
        config
      );
      console.log(data);
      // Store the token and user information in local storage or context
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="pseudo"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
        placeholder="Pseudo"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
