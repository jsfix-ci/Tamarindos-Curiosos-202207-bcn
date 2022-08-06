import { IMeme } from "../../interfaces/interfaces";
import {
  Action,
  DeleteMemeAction,
  GenerateMemesAction,
  GetFavoriteMemesAction,
  LikeMemeAction,
  UnknownAction,
} from "../types/actions";

const memesReducer = (
  previousMemes: IMeme[],
  action: Action | UnknownAction
): IMeme[] => {
  let newMemes: IMeme[];

  switch ((action as Action).type) {
    case "generateMemes":
      newMemes = [...(action as GenerateMemesAction).payload];
      break;

    case "likeMemes":
      newMemes = previousMemes.map((meme: IMeme) =>
        meme.id === (action as LikeMemeAction).payload
          ? { ...meme, isFavorite: true }
          : { ...meme }
      );
      break;

    case "deleteMeme":
      newMemes = previousMemes.filter(
        (meme) => meme.id !== (action as DeleteMemeAction).payload
      );
      break;

    case "getFavoriteMemes":
      newMemes = [...(action as GetFavoriteMemesAction).payload];
      break;

    default:
      newMemes = [...previousMemes];
  }
  return newMemes;
};

export default memesReducer;
