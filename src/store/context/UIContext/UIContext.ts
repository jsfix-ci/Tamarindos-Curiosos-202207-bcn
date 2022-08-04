import { createContext } from "react";
import { UIContext } from "../../../interfaces/interfaces";

const UIContext = createContext<UIContext>({
  ui: {
    isLoading: false,
    type: "loading",
  },
  dispatch: () => {},
});

export default UIContext;
