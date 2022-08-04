import { IMeme } from "../../interfaces/interfaces";
import { Action, LikeMemeAction } from "../types/actions";

const favoriteMemeReducer = (
  previousFavoriteMemes: IMeme[],
  action: Action
): IMeme[] => {
  let newFavoriteMemes: IMeme[];
  switch ((action as Action).type) {
    case "likeMemes":
      newFavoriteMemes = [
        ...previousFavoriteMemes,
        (action as LikeMemeAction).payload,
      ];
      break;
    default:
      newFavoriteMemes = [...previousFavoriteMemes];
  }

  return newFavoriteMemes;
};

export default favoriteMemeReducer;
