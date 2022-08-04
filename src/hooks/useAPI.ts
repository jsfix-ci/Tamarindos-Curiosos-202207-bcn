import { useCallback, useContext } from "react";
import { IData, IDataMemes, IMeme } from "../interfaces/interfaces";
import generateMemeActionCreator from "../store/actions/generateMemeActionCreator";
import MemeContext from "../store/context/MemeContext";

const useApi = () => {
  const { memes, dispatch } = useContext(MemeContext);

  const generateMemesAPI = useCallback(async () => {
    const response: Response = await fetch(
      process.env.REACT_APP_API_URL as string
    );
    const data: IData = await response.json();
    const dataMemes: IDataMemes[] = data.memes;
    const memesArray: IMeme[] = dataMemes.map((meme: IDataMemes) => {
      return {
        author: meme.author,
        likes: meme.ups,
        postLink: meme.postLink,
        title: meme.title,
        url: meme.url,
        subreddit: `r/${meme.subreddit}`,
        isFavorite: false,
      };
    });
    dispatch(generateMemeActionCreator(memesArray));
  }, [dispatch]);

  return { memes, generateMemesAPI };
};
export default useApi;
