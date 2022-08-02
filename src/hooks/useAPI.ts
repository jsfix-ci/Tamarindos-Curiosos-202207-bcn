import { useCallback, useContext } from "react";
import { IMeme } from "../interfaces/interfaces";
import generateMemeActionCreator from "../store/actions/memeActionCreator";
import MemeContext from "../store/context/MemeContext";

const urlAPI = "https://meme-api.herokuapp.com/gimme/10";

const useApi = () => {
  const { memes, dispatch } = useContext(MemeContext);

  const generateMemesAPI = useCallback(async () => {
    const response = await fetch(urlAPI);
    const data: IMeme[] = await response.json();
    dispatch(generateMemeActionCreator(data));
  }, [dispatch]);

  return { memes, generateMemesAPI };
};

export default useApi;
