import { UIState } from "../../../interfaces/interfaces";
import { Action, UnknownAction } from "../../types/actions";

const UIReducer = (
  previousUI: UIState,
  action: Action | UnknownAction
): UIState => {
  let newUI: UIState;

  switch ((action as Action).type) {
    case "showLoading":
      newUI = { ...previousUI, isLoading: !previousUI.isLoading };
      break;

    case "showError":
      newUI = {
        ...previousUI,
        feedback: { isOpen: !previousUI.feedback.isOpen, modalType: "error" },
      };
      break;

    case "showSucces":
      newUI = {
        ...previousUI,
        feedback: { isOpen: !previousUI.feedback.isOpen, modalType: "succes" },
      };
      break;

    default:
      newUI = { ...previousUI };
  }

  return newUI;
};

export default UIReducer;
