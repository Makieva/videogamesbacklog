import React, { useEffect, useState } from "react";
import './DetailedCards.css';
import Platform from "./PlatformButton";
import DateInfo from "./DateInfo";
import GenreButton from "./GenreButton";
import { useParams } from "react-router-dom";
import { getAGame } from "../../../api/games";

const DetailedCard = () => {
  const {gameId} = useParams();
  const [game, setGame] = useState();

  useEffect(() => {
    const getGame = async () => {
      const result = await getAGame(gameId);
      setGame(result ?? null);
    }
    getGame();

  }, [gameId]);

  if(game == null) {
    return <p>Loading...</p>
  }
    return (
      <>
        <div className="detailedPage">
          <div className="firstColumn">
            <div>
              <img src={game.background_image} alt="jaquette du jeu"></img>
            </div>
            <DateInfo game = {game}></DateInfo>
            <div className="platformSection">
              <Platform game = {game}></Platform>
            </div>
          </div>
          <div className="secondColumn">
            <h2>{game.name}</h2>
            <div className="genreSection">
              <GenreButton game = {game}></GenreButton>
            </div>

            <div>
              <p className="summary">{game.description}</p>
            </div>
          </div>
          <div className="thirdColumn">
            <div>
              <h3>Ajout Liste</h3>
            </div>
          </div>
        </div>
      </>
    );
}

export default DetailedCard;