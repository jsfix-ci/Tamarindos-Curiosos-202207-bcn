import { UIState } from "../../../interfaces/interfaces";
import { Action } from "../../types/actions";

const UIReducer = (previousUI: UIState, action: Action): UIState => {
  let newUI: UIState;
  if (action.type === "showLoading") {
    newUI = { ...previousUI, isLoading: true };
  } else {
    newUI = { ...previousUI };
  }

  return newUI;
};

export default UIReducer;
