import { useCallback, useContext } from "react";
import { IData, IDataMemes, IMeme } from "../interfaces/interfaces";
import generateMemeActionCreator from "../store/actions/generateMemeActionCreator";
import MemeContext from "../store/context/MemeContext";

const urlAPI = "https://meme-api.herokuapp.com/gimme/10";

const useApi = () => {
  const { memes, dispatch } = useContext(MemeContext);

  const generateMemesAPI = useCallback(async () => {
    const response: Response = await fetch(urlAPI);
    const data: IData = await response.json();
    const dataMemes: IDataMemes[] = data.memes;
    const memesArray: IMeme[] = dataMemes.map((meme: any) => {
      return {
        author: meme.author,
        likes: meme.ups,
        postLink: meme.postLink,
        title: meme.title,
        url: meme.url,
        subreddit: `r/${meme.subreddit}`,
      };
    });
    dispatch(generateMemeActionCreator(memesArray));
  }, [dispatch]);

  return { memes, generateMemesAPI };
};

export default useApi;
