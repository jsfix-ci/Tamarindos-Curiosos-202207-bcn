import { useEffect } from "react";
import useApi from "../../hooks/useAPI";
import { IMeme } from "../../interfaces/interfaces";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const { memes, generateMemesAPI } = useApi();

  useEffect(() => {
    generateMemesAPI();
  }, [generateMemesAPI]);

  return (
    <CardListStyled>
      <ul className="meme-list">
        {memes.map((meme: IMeme) => {
          const url = meme.url;
          let key = "";
          for (let i = 19; i < url.length - 4; i += 1) {
            key += url[i];
          }
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
