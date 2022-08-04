import { IMeme } from "../../interfaces/interfaces";
import { Action, GenerateMemesAction } from "../types/actions";

const memesReducer = (previousMemes: IMeme[], action: Action): IMeme[] => {
  let newMemes: IMeme[];

  if (action.type === "generateMemes") {
    newMemes = [...(action as GenerateMemesAction).payload];
  } else {
    newMemes = [...previousMemes];
  }
  return newMemes;
};

export default memesReducer;
