import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent, useContext } from "react";
import { Link } from "react-router-dom";
import useLocalApi from "../../hooks/useLocalApi";
import { IMeme } from "../../interfaces/interfaces";
import DeleteMemeActionCreator from "../../store/actions/deleteMemeActionCreator";
import likeMemeActionCreator from "../../store/actions/likeMemeActionCreator";
import MemeContext from "../../store/context/MemeContext/MemeContext";
import Button from "../Button/Button";
import CardStyled from "./CardStyled";

interface CardProps {
  meme: IMeme;
  currentPage: "mainPage" | "favoritesPage";
}

const Card = ({ meme, currentPage }: CardProps): JSX.Element => {
  const { likeAMeme, deleteMeme } = useLocalApi();
  const { dispatch } = useContext(MemeContext);

  const onClickAddToFavorites = async (event: SyntheticEvent) => {
    event.stopPropagation();
    dispatch(likeMemeActionCreator(meme));
    await likeAMeme(meme);
  };

  const onClickDeleteMeme = async (event: SyntheticEvent) => {
    event.stopPropagation();
    dispatch(DeleteMemeActionCreator(meme));
    await deleteMeme(meme);
  };

  return (
    <>
      {meme.isRendered && (
        <CardStyled>
          <div className="card-container">
            <div className="card-container__meme-container">
              <img src={meme.url} alt={meme.title} />
            </div>
            {currentPage === "mainPage" && (
              <div className="card-container__card-footer">
                <Link to={`/meme/${meme.id}`}>
                  <FontAwesomeIcon icon={faEye} className="icon-eye" />
                </Link>

                <button onClick={onClickAddToFavorites} />
                <button
                  className="card-container__button card-container__button--delete"
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
            )}

            {currentPage === "favoritesPage" && (
              <div className="card-container__card-footer">
                <Button
                  buttonType="delete"
                  text="Delete"
                  actionOnClick={onClickDeleteMeme}
                />
                <Link to={`/meme/${meme.id}`}>
                  <FontAwesomeIcon icon={faEye} className="icon-eye" />
                </Link>
                <Button buttonType="modify" text="Modify" />
              </div>
            )}
          </div>
        </CardStyled>
      )}
    </>
  );
};

export default Card;
