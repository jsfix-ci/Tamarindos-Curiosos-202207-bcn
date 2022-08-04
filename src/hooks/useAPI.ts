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
      const url = meme.url;
      let key = "";
      for (let i = 20; i < url.length - 4; i += 1) {
        key += url[i];
      }

      return {
        author: meme.author,
        likes: meme.ups,
        postLink: meme.postLink,
        title: meme.title,
        url: meme.url,
        subreddit: `r/${meme.subreddit}`,
        isFavorite: false,
        id: key,
      };
    });
    dispatch(generateMemeActionCreator(memesArray));
  }, [dispatch]);

  return { memes, generateMemesAPI };
};
export default useApi;
