import {
  ShowErrorAction,
  ShowLoadingActionCreator,
  ShowSuccesAction,
} from "../types/actions";

export const LoadingUIActionCreator = (): ShowLoadingActionCreator => ({
  type: "showLoading",
});

export const ShowErrorActionCreator = (): ShowErrorAction => ({
  type: "showError",
});

export const ShowSuccesActionCreator = (): ShowSuccesAction => ({
  type: "showSucces",
});
