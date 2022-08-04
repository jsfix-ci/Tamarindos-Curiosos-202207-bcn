import { useReducer } from "react";
import { UIState } from "../../../interfaces/interfaces";
import UIReducer from "../../reducers/UIReducer/UIReducer";
import UIContext from "./UIContext";

interface UIContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UIContextProvider = ({
  children,
}: UIContextProviderProps): JSX.Element => {
  const previousUI: UIState = { isLoading: false, type: "loading" };
  const [ui, dispatch] = useReducer(UIReducer, previousUI);
  return (
    <UIContext.Provider value={{ dispatch, ui }}>{children}</UIContext.Provider>
  );
};

export default UIContextProvider;
