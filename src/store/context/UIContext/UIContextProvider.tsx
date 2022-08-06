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
  const InitialUI: UIState = {
    isLoading: false,
    feedback: "succes",
  };

  const [{ feedback, isLoading }, dispatch] = useReducer(UIReducer, InitialUI);

  return (
    <UIContext.Provider value={{ dispatch, feedback, isLoading }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
