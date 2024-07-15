import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/home/Home";
import Dashboard from "./pages/user/Dashboard";
import DetailedPage from "./pages/details/DetailedPage";
import Connexion from "./pages/connexion/Connexion";
import Login from "./pages/connexion/components/Formulaire";
import ProtectedRoute from "./contexts/ProtectedRoute";
import Register from "./pages/inscription/components/Register";
import Inscription from "./pages/inscription/Inscription";

function App() {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("/api/hello")
  //     .then((response) => {
  //       setMessage(response.data.message);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the data!", error);
  //     });
  // }, []);

  return (
    <BrowserRouter>
        <AuthProvider>
      <Routes>
        <Route path="/connexion" element={<Connexion />} />
        {/* <Route path="/myAccount" element={<Dashboard />} /> */}
        <Route path="/myAccount" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:gameId" element={<DetailedPage />} />
        <Route path="/inscription" element={<Inscription/>} />
      </Routes>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
