import { useContext } from "react";
import { IMeme } from "../interfaces/interfaces";
import likeMemeActionCreator from "../store/actions/likeMemeActionCreator";
import MemeContext from "../store/context/MemeContext";
import UIContext from "../store/context/UIContext/UIContext";
import LoadingUIActionCreator from "../store/actions/LoadingUIActionCreator";

const useLocalApi = () => {
  const { memes, dispatch } = useContext(MemeContext);
  const { dispatch: UiDispatch } = useContext(UIContext);

  const likeAMeme = async (meme: IMeme) => {
    try {
      UiDispatch(LoadingUIActionCreator());
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
      UiDispatch(LoadingUIActionCreator());
    } catch (error) {
      UiDispatch(LoadingUIActionCreator());
    }
  };
  return { memes, likeAMeme };
};
export default useLocalApi;
