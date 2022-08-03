import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { IMeme } from "../../interfaces/interfaces";
import CardStyled from "./CardStyled";

interface CardProps {
  meme: IMeme;
}

const Card = ({ meme: { title, url } }: CardProps): JSX.Element => {
  return (
    <>
      <CardStyled>
        <div className="card-container">
          <div className="card-container__meme-container">
            <img src={url} alt={title} />
          </div>
          <div className="card-container__card-footer">
            <Link to="/meme">
              <FontAwesomeIcon icon={faEye} className="icon-eye" />
            </Link>

            <FontAwesomeIcon icon={faStar} className="star-favourites" />
          </div>
        </div>
      </CardStyled>
    </>
  );
};

export default Card;
