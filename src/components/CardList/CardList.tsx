import { useContext, useEffect } from "react";
import useApi from "../../hooks/useAPI";
import { IMeme } from "../../interfaces/interfaces";
import MemeContext from "../../store/context/MemeContext";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const { memes, generateMemesAPI } = useApi();
  console.log(memes);

  useEffect(() => {
    generateMemesAPI();
  }, [generateMemesAPI]);

  return (
    <CardListStyled>
      <ul className="meme-list">
        {memes.map((meme: any) => {
          console.log(meme);
          return (
            <li>
              <Card meme={{ meme }} />
            </li>
          );
        })}
      </ul>
    </CardListStyled>
  );
};

export default CardList;
