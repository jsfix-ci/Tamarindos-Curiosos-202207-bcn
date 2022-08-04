import { createContext } from "react";
import { IMemeContext } from "../../interfaces/interfaces";

const MemeContext = createContext<IMemeContext>({
  memes: [],
  dispatch: () => {},
  favoriteMemes: [],
  favoriteMemeDispatch: () => {},
});

export default MemeContext;
