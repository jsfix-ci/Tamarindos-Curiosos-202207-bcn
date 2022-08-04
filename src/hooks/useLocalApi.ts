import { useContext } from "react";
import { IMeme } from "../interfaces/interfaces";
import likeMemeActionCreator from "../store/actions/likeMemeActionCreator";
import MemeContext from "../store/context/MemeContext";

const myApiFalse = process.env.REACT_APP_LOCAL_MEMES_API_URL;
const useLocalApi = () => {
  const { favoriteMemes, favoriteMemeDispatch } = useContext(MemeContext);

  const likeAMeme = async (meme: IMeme) => {
    const response = await fetch(`${myApiFalse}memes`, {
      method: "POST",
      body: JSON.stringify(meme),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const newFavoriteMemes = await response.json();
    favoriteMemeDispatch(likeMemeActionCreator(newFavoriteMemes));
  };
  return { favoriteMemes, likeAMeme };
};

export default useLocalApi;
