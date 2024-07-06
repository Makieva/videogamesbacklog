import React, { useEffect, useState } from "react";
import "./Home.css";
import CategButton from "./components/CategButton";
import Cards from "./components/Cards";
import { getGamesList } from "../../api/games";
import { getGenreList } from "../../api/games";
import { getGamesFromGenreList } from "../../api/games";
import CardList from "./components/CardList";

const Home = () => {
   const [gameList, setGameList] = useState([]);

   useEffect(() => {
    const fetchGames = async () => {
        const data = await getGamesList();
        if (data) {
            setGameList(data.results);
        }
    };

    fetchGames();
   }, []);

   const [genreList, setGenreList] = useState([]);

   useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenreList();
      if(data){
        setGenreList(data.results);
      }
    };
    fetchGenres();
   }, []);

   const [selectedGenre, setSelectedGenre] = useState(null);

   useEffect(() => {
    if(selectedGenre) {
      const fecthGamesByGenre = async () => {
        const data = await getGamesFromGenreList(selectedGenre);
        if(data) {
          setGameList(data.results);
        }
      };
      fecthGamesByGenre();
    } else {
      const fetchGames = async () => {
        const data = await getGamesList();
        if(data) {
          setGameList(data.results);
        }
      };
      fetchGames();
    }
   }, [selectedGenre]);

   const handleGenreSelect = (genreSlug) => {
    setSelectedGenre(genreSlug);
   };

// console.log(gameList);
    return (
      <section>
        <CategButton genres={genreList} onSelectGenre={handleGenreSelect}></CategButton>
        <CardList games={gameList}></CardList>
      </section>
    );
};
export default Home;
