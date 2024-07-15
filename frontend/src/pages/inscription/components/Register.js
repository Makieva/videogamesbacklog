import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("pseudo", pseudo);
    formData.append("password", password);
    formData.append("profilePicture", profilePicture);
    formData.append("email", email);

    try {
      const { data } = await axios.post(
        "http://localhost/videogamesbacklog/backend/api/register.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.error("Error register in:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulaire">
      <input
        type="text"
        placeholder="Pseudo"
        name="pseudo"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
        required
      ></input>
      <input
        type="file"
        name="profilePicture"
        onChange={(e) => setProfilePicture(e.target.files[0])}
      ></input>
      <input
        type="email"
        placeholder="Email"
        // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      ></input>
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Register;
