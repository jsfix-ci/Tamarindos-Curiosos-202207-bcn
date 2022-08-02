import { IMeme } from "../../interfaces/interfaces";
import { Action, GenerateMemesAction } from "../types/actions";

const memesReducer = (previousMemes: IMeme[], action: Action): IMeme[] => {
  let newMemes: IMeme[];
  switch ((action as Action).type) {
    case "generateMemes":
      newMemes = [...(action as GenerateMemesAction).payload];
      break;

    default:
      newMemes = [...previousMemes];
  }
  return newMemes;
};

export default memesReducer;
