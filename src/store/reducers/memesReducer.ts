import { IMeme } from "../../interfaces/interfaces";
import {
  Action,
  GenerateMemesAction,
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

    default:
      newMemes = [...previousMemes];
  }
  return newMemes;
};

export default memesReducer;
