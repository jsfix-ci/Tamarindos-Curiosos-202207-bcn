import { IMeme } from "../../interfaces/interfaces";
import DetailsStyled from "./DetailsStyled";
interface DetailsProps {
  meme: IMeme;
}

const Details = ({ meme }: DetailsProps): JSX.Element => {
  return (
    <DetailsStyled className="details">
      <div className="details__image-container">
        <img className="meme-img" src={`${meme.url}`} alt={`${meme.title}`} />
      </div>
      <section className="details__info">
        <span className="info__item">
          <strong>Title: </strong>
          {` ${meme.title}`}
        </span>
        <span className="info__item">
          <strong>Author: </strong>
          <a
            target="_blank"
            href={`https://www.reddit.com/user/${meme.author}`}
            rel="noreferrer"
          >
            {` ${meme.author}`}
          </a>
        </span>
        <span className="info__item">
          <strong>Url: </strong>{" "}
          <a target="_blank" href={`${meme.postLink}`} rel="noreferrer">
            {" "}
            {`${meme.postLink.slice(8)}`}
          </a>
        </span>
        <span className="info__item">
          <strong>Likes: </strong>
          {` ${meme.likes}`}
        </span>
        <span className="info__item">
          <strong>Subreddit: </strong>
          <a
            target="_blank"
            href={`https://reddit.com/${meme.subreddit}`}
            rel="noreferrer"
          >{` ${meme.subreddit}`}</a>
        </span>
      </section>
    </DetailsStyled>
  );
};

export default Details;
