import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (): JSX.Element => {
  return (
    <>
      <div>
        <div className="card">
          <img
            src="https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg"
            alt=""
          />
          <FontAwesomeIcon icon={faStar} className="star-favourites" />
        </div>
        <span className="card-footer">
          <FontAwesomeIcon icon={faEye} className="icon-eye" />
          <p className="r/Subreddit">r/Subreddit</p>
        </span>
      </div>
    </>
  );
};

export default Card;
