import { UIState } from "../../../interfaces/interfaces";
import { Action } from "../../types/actions";

const UIReducer = (previousUI: UIState, action: Action): UIState => {
  let newUI: UIState;
  switch ((action as Action).type) {
    case "showLoading":
      newUI = { ...previousUI, isLoading: true };
      break;

    default:
      newUI = { ...previousUI };
  }
  return newUI;
};

export default UIReducer;
