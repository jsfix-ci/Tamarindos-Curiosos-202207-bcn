import { IMeme } from "../../interfaces/interfaces";
import { Action, LikeMemeAction } from "../types/actions";

const favoriteMemeReducer = (
  previousFavoriteMemes: IMeme[],
  action: Action
): IMeme[] => {
  let newFavoriteMemes: IMeme[];
  if (action.type === "likeMemes") {
    newFavoriteMemes = [
      ...previousFavoriteMemes,
      (action as LikeMemeAction).payload,
    ];
  } else {
    newFavoriteMemes = [...previousFavoriteMemes];
  }

  return newFavoriteMemes;
};

export default favoriteMemeReducer;
