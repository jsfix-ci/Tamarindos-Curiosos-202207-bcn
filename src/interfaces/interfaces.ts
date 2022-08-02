import { Dispatch } from "react";
import { Action } from "../store/types/actions";

export interface IMeme {
  url: string;
  title: string;
  author: string;
  likes: number;
  postlink: string;
}

export interface IMemeContext {
  memes: IMeme[];
  dispatch: Dispatch<Action>;
}
