import React from "react";
import jaquette from '../../../assets/images/exemple.jpg';
import './DetailedCards.css';
import Platform from "./PlatformButton";
import DateInfo from "./DateInfo";
import GenreButton from "./GenreButton";

const DetailedCard = () => {
    return (
      <>
        <div className="detailedPage">
          <div className="firstColumn">
            <div>
              <img src={jaquette} alt="jaquette du jeu"></img>
            </div>
            <DateInfo></DateInfo>
            <div className="platformSection">
                <Platform></Platform>
                <div>platforme 2</div>
                <div>platforme 3</div>
            </div>
            
          </div>
          <div className="secondColumn">
            <h2>The Legend of Zelda Breath of The Wild</h2>
            <div className="genreSection">
                <GenreButton></GenreButton>
                <div>genre 2</div>
                <div>genre 3</div>
            </div>
            
            <div>
              <p className="summary">
                The Legend of Zelda: Breath of the Wild is the first 3D
                open-world game in the Zelda series. Link can travel anywhere
                and be equipped with weapons and armor found throughout the
                world to grant him various bonuses. Unlike many games in the
                series, Breath of the Wild does not impose a specific order in
                which quests or dungeons must be completed. While the game still
                has environmental obstacles such as weather effects,
                inhospitable lands, or powerful enemies, many of them can be
                overcome using the right method. A lot of critics ranked Breath
                of the Wild as one of the best video games of all time
              </p>
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