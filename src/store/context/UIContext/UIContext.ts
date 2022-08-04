import { createContext } from "react";
import { IUIContext } from "../../../interfaces/interfaces";

const UIContext = createContext<IUIContext>({
  ui: {
    isLoading: false,
    type: "loading",
  },
  dispatch: () => {},
});

export default UIContext;
