import MemeContext from "./MemeContext";

interface MemeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const MemeContextProvider = ({
  children,
}: MemeContextProviderProps): JSX.Element => {
  const memes: any = [];

  return (
    <MemeContext.Provider value={{ memes }}>{children}</MemeContext.Provider>
  );
};

export default MemeContextProvider;
