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
    feedback: { isOpen: false, modalType: "error" },
  };

  const [
    {
      isLoading,
      feedback: { isOpen, modalType },
    },
    dispatch,
  ] = useReducer(UIReducer, InitialUI);

  return (
    <UIContext.Provider
      value={{
        dispatch,
        isLoading,
        feedback: { isOpen, modalType },
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
