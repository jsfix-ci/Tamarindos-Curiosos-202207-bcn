import IMeme from "../../interfaces/interfaces";

interface DetailsProps {
  meme: IMeme;
}

const Details = ({
  meme: { title, author, url, postlink, likes },
}: DetailsProps): JSX.Element => {
  return (
    <>
      <div className="details__image-container">
        <img className="" src={`${url}`} alt={`${title}`} />
      </div>
      <section className="details__info">
        <span className="info__item">Title: {`${title}`}</span>
        <span className="info__item">Author: {`${author}`}</span>
        <span className="info__item">Postlink: {`${postlink}`}</span>
        <span className="info__item">Likes: {`${likes}`}</span>
      </section>
    </>
  );
};

export default Details;
