import { IMeme } from "../../interfaces/interfaces";
import { GenerateMemes } from "../types/actions";

const generateMemeActionCreator = (memes: IMeme[]): GenerateMemes => {
  return { type: "generateMemes", payload: memes };
};

export default generateMemeActionCreator;
