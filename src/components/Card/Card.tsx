import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent, useContext } from "react";
import { Link } from "react-router-dom";
import useLocalApi from "../../hooks/useLocalApi";
import { IMeme } from "../../interfaces/interfaces";
import DeleteMemeActionCreator from "../../store/actions/deleteMemeActionCreator";
import likeMemeActionCreator from "../../store/actions/likeMemeActionCreator";
import MemeContext from "../../store/context/MemeContext";
import Button from "../Button/Button";
import CardStyled from "./CardStyled";

interface CardProps {
  meme: IMeme;
}

const Card = ({ meme }: CardProps): JSX.Element => {
  const { likeAMeme } = useLocalApi();
  const { dispatch } = useContext(MemeContext);
  const { deleteMeme } = useLocalApi();

  const onClickAddToFavorites = async (event: SyntheticEvent) => {
    event.stopPropagation();
    dispatch(likeMemeActionCreator(meme));
    await likeAMeme(meme);
  };

  const onClickDeleteMeme = async (event: SyntheticEvent) => {
    event.stopPropagation();
    dispatch(DeleteMemeActionCreator(meme.id));
    console.log("hola");
    await deleteMeme(meme.id);
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
              {meme.isFavorite && (
                <div className="card-container__buttons">
                  <Button
                    text="DELETE"
                    actionOnClick={() => onClickDeleteMeme}
                  />
                  <Button text="MODIFY" actionOnClick={() => {}} />
                </div>
              )}
              <button onClick={onClickAddToFavorites} />
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
