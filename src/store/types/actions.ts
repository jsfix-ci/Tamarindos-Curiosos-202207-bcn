import { IMeme } from "../../interfaces/interfaces";
import { ActionType } from "./actionTypes";

export interface Action {
  type: ActionType;
}

export interface Anyaction {
  type: any;
}
export interface UnknownAction extends Anyaction {
  type: string;
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
  payload: string;
}
export interface ShowLoadingAction extends Action {
  type: ActionType;
}

export interface ShowLoadingActionCreator extends Action {}

export interface DeleteMemeAction extends Action {
  payload: string;
}

export interface GetFavoriteMemesAction extends Action {
  payload: IMeme[];
}

export interface ShowErrorActionCreator extends Action {}
export interface ShowErrorAction extends Action {
  type: ActionType;
}

export interface ShowSuccesActionCreator extends Action {}
export interface ShowSuccesAction extends Action {
  type: ActionType;
}
