// import axios from "axios";
import axiosInstance from "../api/axiosConfig";
import { Games } from "../models/Games";

export const getGamesList = async () => {
  const urlCall = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}`;
  console.log(urlCall);

  try {
    const response = await axiosInstance.get(urlCall);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des jeux:", error);
  }
};

export const getAGame = async (gameId) => {
  if (gameId == null) return;

  const urlCall = `${process.env.REACT_APP_API_URL}/games/${gameId}?key=${process.env.REACT_APP_API_KEY}`;

  try {
    const response = await axiosInstance.get(urlCall);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du jeu:", error);
  }
};

export const getGenreList = async () => {
  const urlCall = `${process.env.REACT_APP_API_URL}/genres?key=${process.env.REACT_APP_API_KEY}`;
  try {
    const response = await axiosInstance.get(urlCall);
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la recuperation de la liste de genre de jeux:",
      error
    );
  }
};

export const getGamesFromGenreList = async (genreId) => {
  if (genreId == null) return;

  const urlCall = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&genres=${genreId}`;
  console.log("games from list");
  console.log(urlCall);
  try {
    const response = await axiosInstance.get(urlCall);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la recuperation de la liste de genre de jeux:",
      error
    );
  }
};

export const getGamesBySearch = async (search) => {
  const urlCall = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&search=${search}`;
  try{
    const response = await axiosInstance.get(urlCall);
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la recherche:", error
    );
  }
}

/////////API de ma BDD

export const addGameToList = async (listId, gameId, gameName) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost/videogamesbacklog/backend/api/addGameToList.php",
      {
        listId,
        gameId,
        gameName,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding game to list", error);
  }
};
