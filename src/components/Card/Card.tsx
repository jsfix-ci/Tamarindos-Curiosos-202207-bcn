import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent, useContext } from "react";
import { Link } from "react-router-dom";
import useLocalApi from "../../hooks/useLocalApi";

import { IMeme } from "../../interfaces/interfaces";
import likeMemeActionCreator from "../../store/actions/likeMemeActionCreator";
import MemeContext from "../../store/context/MemeContext";
import CardStyled from "./CardStyled";

interface CardProps {
  meme: IMeme;
}

const Card = ({ meme }: CardProps): JSX.Element => {
  const { likeAMeme } = useLocalApi();
  const { favoriteMemeDispatch } = useContext(MemeContext);

  const onClickAddToFavorites = (event: SyntheticEvent) => {
    event.stopPropagation();
    likeAMeme(meme);

    favoriteMemeDispatch(likeMemeActionCreator(meme));
  };
  return (
    <>
      <CardStyled>
        <div className="card-container">
          <div className="card-container__meme-container">
            <img src={meme.url} alt={meme.title} />
          </div>
          <div className="card-container__card-footer">
            <Link to={`/meme/${meme.id}`}>
              <FontAwesomeIcon icon={faEye} className="icon-eye" />
            </Link>
            <button onClick={onClickAddToFavorites}>
              <FontAwesomeIcon icon={faStar} className="star-favourites" />
            </button>
          </div>
        </div>
      </CardStyled>
    </>
  );
};

export default Card;
