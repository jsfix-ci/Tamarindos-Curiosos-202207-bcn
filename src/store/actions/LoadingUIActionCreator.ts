import { ShowLoadingActionCreator } from "../types/actions";

const LoadingUIActionCreator = (): ShowLoadingActionCreator => ({
  type: "showLoading",
});

export default LoadingUIActionCreator;
