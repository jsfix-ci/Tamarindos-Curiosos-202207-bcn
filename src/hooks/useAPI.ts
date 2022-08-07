import { useCallback, useContext } from "react";
import { IData, IDataMemes, IMeme } from "../interfaces/interfaces";
import generateMemeActionCreator from "../store/actions/generateMemeActionCreator";
import {
  LoadingUIActionCreator,
  ShowErrorActionCreator,
  ShowSuccesActionCreator,
} from "../store/actions/UIActionCreators";
import MemeContext from "../store/context/MemeContext/MemeContext";
import UIContext from "../store/context/UIContext/UIContext";

const useApi = () => {
  const { memes, dispatch } = useContext(MemeContext);
  const { dispatch: UiDispatch } = useContext(UIContext);

  const generateMemesAPI = useCallback(async () => {
    try {
      UiDispatch(LoadingUIActionCreator());
      const response: Response = await fetch(
        process.env.REACT_APP_API_URL as string
      );
      const data: IData = await response.json();
      const dataMemes: IDataMemes[] = data.memes;
      const memesArray: IMeme[] = dataMemes.map((meme: IDataMemes) => {
        let id = meme.postLink.slice(16);
        return {
          author: meme.author,
          likes: meme.ups,
          postLink: meme.postLink,
          title: meme.title,
          url: meme.url,
          subreddit: `r/${meme.subreddit}`,
          isFavorite: false,
          id: id,
          isRendered: true,
        };
      });
      UiDispatch(LoadingUIActionCreator());
      dispatch(generateMemeActionCreator(memesArray));
      setTimeout(() => {
        UiDispatch(ShowSuccesActionCreator());
      }, 1000);

      UiDispatch(ShowSuccesActionCreator());
    } catch (error) {
      UiDispatch(LoadingUIActionCreator());
      setTimeout(() => {
        UiDispatch(ShowErrorActionCreator());
      }, 1000);
      ShowErrorActionCreator();
    }
  }, [dispatch, UiDispatch]);

  return { memes, generateMemesAPI };
};
export default useApi;
