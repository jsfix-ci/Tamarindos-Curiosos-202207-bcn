import { IMeme } from "../../interfaces/interfaces";
import DetailsStyled from "./DetailsStyled";
interface DetailsProps {
  meme: IMeme;
}

const Details = ({
  meme: { title, author, url, postLink, likes, subreddit },
}: DetailsProps): JSX.Element => {
  return (
    <DetailsStyled className="details">
      <div className="details__image-container">
        <img className="meme-img" src={`${url}`} alt={`${title}`} />
      </div>
      <section className="details__info">
        <span className="info__item">Title: {`${title}`}</span>
        <span className="info__item">Author: {`${author}`}</span>
        <span className="info__item">Meme url: {`${postLink}`}</span>
        <span className="info__item">Likes: {`${likes}`}</span>
        <span className="info__item">Subreddit: {`${subreddit}`}</span>
      </section>
    </DetailsStyled>
  );
};

export default Details;
