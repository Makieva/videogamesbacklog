import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = () => {
        onSearch(inputValue);
    };

  return (
    <div>
      <input
        type="text"
        className="searchBar"
        onChange={handleInputChange}
        placeholder="Rechercher..."
        value={inputValue}
      ></input>
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchBar;