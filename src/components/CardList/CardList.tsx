import { useContext } from "react";
import { IMeme } from "../../interfaces/interfaces";
import MemeContext from "../../store/context/MemeContext/MemeContext";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

interface CardListProps {
  currentPage: "mainPage" | "favoritesPage";
}

const CardList = ({ currentPage }: CardListProps): JSX.Element => {
  const { memes } = useContext(MemeContext);

  return (
    <>
      {currentPage === "mainPage" && (
        <CardListStyled>
          <ul className="meme-list">
            {memes.map((meme: IMeme) => {
              return (
                <li key={meme.id}>
                  <Card meme={meme} currentPage={currentPage} />
                </li>
              );
            })}
          </ul>
        </CardListStyled>
      )}
      {currentPage === "favoritesPage" && (
        <CardListStyled>
          <ul className="meme-list">
            {memes.map((meme) => (
              <li key={meme.id}>
                <Card meme={meme} currentPage={currentPage} />
              </li>
            ))}
          </ul>
        </CardListStyled>
      )}
    </>
  );
};

export default CardList;
