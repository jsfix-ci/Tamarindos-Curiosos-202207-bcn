import { useReducer } from "react";
import favoriteMemeReducer from "../reducers/favoriteMemeReducer";
import memesReducer from "../reducers/memesReducer";
import MemeContext from "./MemeContext";

interface MemeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const MemeContextProvider = ({
  children,
}: MemeContextProviderProps): JSX.Element => {
  const [memes, dispatch] = useReducer(memesReducer, []);
  const [favoriteMemes, favoriteMemeDispatch] = useReducer(
    favoriteMemeReducer,
    []
  );

  return (
    <MemeContext.Provider
      value={{ memes, dispatch, favoriteMemes, favoriteMemeDispatch }}
    >
      {children}
    </MemeContext.Provider>
  );
};

export default MemeContextProvider;
