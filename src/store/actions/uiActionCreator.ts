import { ShowLoadingActionCreator } from "../types/actions";

const uiActionCreator = (): ShowLoadingActionCreator => ({
  type: "showLoading",
});

export default uiActionCreator;
