import React from "react";
import './CategButton.css';
import { Link } from "react-router-dom";

const CategButton = ({genres, onSelectGenre}) => {
  console.log({genres});
  return (
    <div className="categContainer">
      {genres.map(genre => <button className="categButton" key={genre.id} onClick={() => onSelectGenre(genre.slug)}>{genre.name}</button>
      )}
    </div>
  );
};

export default CategButton;
