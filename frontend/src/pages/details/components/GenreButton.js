import React from "react";
import "./GenreButton.css";

const GenreButton = ({game}) => {
  console.log(game.genres);
  return (
    <div>
      {game.genres.map((genre, index) => (
        <div className="genreButton" key={index}>
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default GenreButton;