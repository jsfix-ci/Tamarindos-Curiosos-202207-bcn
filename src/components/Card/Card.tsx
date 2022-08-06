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
  const { dispatch } = useContext(MemeContext);

  const onClickAddToFavorites = async (event: SyntheticEvent) => {
    event.stopPropagation();
    dispatch(likeMemeActionCreator(meme.id));
    await likeAMeme(meme);
  };

  return (
    <>
      {meme.isRendered && (
        <CardStyled>
          <div className="card-container">
            <div className="card-container__meme-container">
              <img src={meme.url} alt={meme.title} />
            </div>
            <div className="card-container__card-footer">
              <Link to={`/meme/${meme.id}`}>
                <FontAwesomeIcon icon={faEye} className="icon-eye" />
              </Link>
              <button
                onClick={meme.isFavorite ? undefined : onClickAddToFavorites}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  className={`star-favourites ${
                    meme.isFavorite ? "star-favourites--selected" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </CardStyled>
      )}
    </>
  );
};

export default Card;
