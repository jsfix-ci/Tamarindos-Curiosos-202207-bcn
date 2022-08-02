import { IMeme } from "../../interfaces/interfaces";
import { ActionType } from "./actionTypes";

export interface Action {
  type: ActionType;
}

export interface GenerateMemesAction extends Action {
  payload: IMeme[];
}
