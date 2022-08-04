import { IMeme } from "../../interfaces/interfaces";
import { LikeMemeAction } from "../types/actions";

const likeMemeActionCreator = (meme: IMeme): LikeMemeAction => ({
  type: "likeMemes",
  payload: meme,
});

export default likeMemeActionCreator;
