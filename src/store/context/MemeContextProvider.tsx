import { useReducer } from "react";
import memesReducer from "../reducers/memesReducer";
import MemeContext from "./MemeContext";

interface MemeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const MemeContextProvider = ({
  children,
}: MemeContextProviderProps): JSX.Element => {
  const [memes, dispatch] = useReducer(memesReducer, []);
  return (
    <MemeContext.Provider value={{ memes, dispatch }}>
      {children}
    </MemeContext.Provider>
  );
};

export default MemeContextProvider;
