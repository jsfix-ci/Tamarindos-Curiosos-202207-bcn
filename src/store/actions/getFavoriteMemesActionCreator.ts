import { IMeme } from "../../interfaces/interfaces";
import { GetFavoriteMemesAction } from "../types/actions";

const getFavoriteMemesActionCreator = (
  memes: IMeme[]
): GetFavoriteMemesAction => ({
  type: "getFavoriteMemes",
  payload: memes,
});

export default getFavoriteMemesActionCreator;
