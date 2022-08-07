import { createContext } from "react";
import { IUIContext } from "../../../interfaces/interfaces";

const UIContext = createContext<IUIContext>({
  isLoading: false,
  feedback: { isOpen: false, modalType: "error" },
  dispatch: () => {},
});

export default UIContext;
