import React, { useEffect, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';

import Home from "./pages/home/Home";
import Header from "./componentsShared/Header";
import DetailedPage from "./pages/details/DetailedPage";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/test" element={<DetailedPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
