import { ShowErrorAction, ShowLoadingActionCreator } from "../types/actions";

export const LoadingUIActionCreator = (): ShowLoadingActionCreator => ({
  type: "showLoading",
});

export const ShowErrorActionCreator = (): ShowErrorAction => ({
  type: "showError",
});
