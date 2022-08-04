import { IMeme } from "../../interfaces/interfaces";
import { ActionType } from "./actionTypes";

export interface Action {
  type: ActionType;
}

export interface GenerateMemesAction extends Action {
  payload: IMeme[];
}

export interface ActionTest {
  type: ActionType;
  payload: IMeme[];
}

export interface ActionTestDefault {
  type: ActionType;
  payload: IMeme[];
}

export interface LikeMemeAction extends Action {
  payload: IMeme;
}
export interface ShowLoadingAction extends Action {
  type: ActionType;
}
