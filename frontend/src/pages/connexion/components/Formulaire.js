
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const UserContext = React.createContext();

const Login = () => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const navigate  = useNavigate();
  const {login} = useAuth();

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
      // Par exemple, localStorage.setItem('token', data.token);

      login(data.login); //mettre à jour l'etat d'authentification

      // Rediriger vers la page Dashboard après une connexion réussie
      navigate("/myAccount");
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
        placeholder="Pseudo"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
        required
      />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Login;
