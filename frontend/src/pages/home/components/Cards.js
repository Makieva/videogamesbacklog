import React from "react";
import {Link} from "react-router-dom";
import './Cards.css';

const Cards = ({dataGame}) => {
  return (
    <div className="cards">
      <div className="cardContent">
        <div className="gameImg"><img src={dataGame.background_image} alt="illustration du jeu"></img></div>
      
        <Link to={`games/${dataGame.id}`}><h3>{dataGame.name}</h3></Link>
        <p>{dataGame.released}</p>
      </div>
    </div>
  );
}

export default Cards;