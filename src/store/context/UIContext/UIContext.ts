import { createContext } from "react";
import { IUIContext } from "../../../interfaces/interfaces";

const UIContext = createContext<IUIContext>({
  isLoading: false,
  feedback: "succes",
  dispatch: () => {},
});

export default UIContext;
