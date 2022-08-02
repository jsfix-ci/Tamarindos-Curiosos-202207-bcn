import { IMeme } from "../../interfaces/interfaces";
import { GenerateMemesAction } from "../types/actions";

const generateMemeActionCreator = (memes: IMeme[]): GenerateMemesAction => {
  return { type: "generateMemes", payload: memes };
};

export default generateMemeActionCreator;
