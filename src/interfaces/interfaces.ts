import { Dispatch } from "react";
import { Action } from "../store/types/actions";

export interface IMeme {
  url: string;
  title: string;
  author: string;
  likes: number;
  postLink: string;
  subreddit: string;
  isFavorite: boolean;
}

export interface IMemeContext {
  memes: IMeme[];
  dispatch: Dispatch<Action>;
}

export interface IData {
  count: number;
  memes: [
    {
      url: string;
      title: string;
      author: string;
      ups: number;
      postLink: string;
      subreddit: string;
    }
  ];
}

export interface IDataMemes {
  url: string;
  title: string;
  author: string;
  ups: number;
  postLink: string;
  subreddit: string;
}
