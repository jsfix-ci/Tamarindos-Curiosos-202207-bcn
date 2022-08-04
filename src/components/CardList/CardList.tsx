import { useContext } from "react";
import { IMeme } from "../../interfaces/interfaces";
import MemeContext from "../../store/context/MemeContext";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const { memes } = useContext(MemeContext);

  return (
    <CardListStyled>
      <ul className="meme-list">
        {memes.map((meme: IMeme) => {
          const key = meme.id;
          return (
            <li key={key}>
              <Card meme={meme} key={key} />
            </li>
          );
        })}
      </ul>
    </CardListStyled>
  );
};

export default CardList;
