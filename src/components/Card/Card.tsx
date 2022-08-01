import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardStyled from "./CardStyled";

const Card = (): JSX.Element => {
  return (
    <>
      <CardStyled>
        <div className="card-container">
          <div className="card-container__meme-container">
            <img
              src="https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg"
              alt=""
            />
          </div>
          <div className="card-container__card-footer">
            <FontAwesomeIcon icon={faEye} className="icon-eye" />
            <FontAwesomeIcon icon={faStar} className="star-favourites" />
            <span className="r/Subreddit">r/Subreddit</span>
          </div>
        </div>
      </CardStyled>
    </>
  );
};

export default Card;
