import { useContext } from "react";
import { IMeme } from "../interfaces/interfaces";
import DeleteMemeActionCreator from "../store/actions/deleteMemeActionCreator";
import likeMemeActionCreator from "../store/actions/likeMemeActionCreator";
import MemeContext from "../store/context/MemeContext";

const localApi = process.env.REACT_APP_LOCAL_MEMES_API_URL as string;

const useLocalApi = () => {
  const { memes, dispatch } = useContext(MemeContext);

  const likeAMeme = async (meme: IMeme) => {
    meme.isFavorite = true;
    const response = await fetch(
      process.env.REACT_APP_LOCAL_MEMES_API_URL as string,
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

  const deleteMeme = async (id: string) => {
    await fetch(`${localApi}/${id}`, {
      method: "DELETE",
    });

    dispatch(DeleteMemeActionCreator(id));
  };

  return { memes, likeAMeme, deleteMeme };
};
export default useLocalApi;
