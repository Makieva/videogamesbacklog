import React, { useState, useEffect } from "react";
import Header from "../../componentsShared/Header";
import GameList from "./GameList";
import { getGamesBySearch } from "../../api/games";
import "./Home.css";

const Home = () => {
   const [searchValue, setSearchValue] = useState("");
   const [gameList, setGameList] = useState([]);

   console.log(searchValue);
   useEffect(() => {
     const fetchGamesBySearch = async () => {
       if (searchValue) {
         const data = await getGamesBySearch(searchValue);
         if (data && data.results) {
           setGameList(data.results);
         }
       }
     };
     fetchGamesBySearch();
   }, [searchValue]);

   return (
    <section>
      <Header onSearch={setSearchValue}></Header>
      <GameList searchResults={gameList}></GameList>
    </section>
   );
};

export default Home;