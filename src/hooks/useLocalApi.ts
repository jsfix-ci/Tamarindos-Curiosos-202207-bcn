import { useContext } from "react";
import { IMeme } from "../interfaces/interfaces";
import likeMemeActionCreator from "../store/actions/likeMemeActionCreator";
import MemeContext from "../store/context/MemeContext";

const useLocalApi = () => {
  const { memes, dispatch } = useContext(MemeContext);

  const likeAMeme = async (meme: IMeme) => {
    meme.isFavorite = true;
    const response = await fetch(
      "https://tamarindos-curiosos.herokuapp.com/memes" as string,
      {
        method: "POST",
        body: JSON.stringify(meme),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const newFavoriteMemes = await response.json();
    dispatch(likeMemeActionCreator(newFavoriteMemes));
  };
  return { memes, likeAMeme };
};

export default useLocalApi;
