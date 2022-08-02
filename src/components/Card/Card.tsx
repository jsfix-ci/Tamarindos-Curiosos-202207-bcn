import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMeme } from "../../interfaces/interfaces";
import CardStyled from "./CardStyled";

interface CardProps {
  meme: any;
}

const Card = ({ meme: { subreddit, title, url } }: CardProps): JSX.Element => {
  return (
    <>
      <CardStyled>
        <div className="card-container">
          <div className="card-container__meme-container">
            <img src={url} alt={title} />
          </div>
          <div className="card-container__card-footer">
            <FontAwesomeIcon icon={faEye} className="icon-eye" />
            <FontAwesomeIcon icon={faStar} className="star-favourites" />
            <span className="r/Subreddit">{`${subreddit}`}</span>
          </div>
        </div>
      </CardStyled>
    </>
  );
};

export default Card;
