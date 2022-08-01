import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (): JSX.Element => {
  return (
    <>
      <div className="header-container">
        <header className="header-container__title-container">
          <img
            src="img/logo.png"
            alt="Awesome meme generator logo, it's a frog"
            height="200px"
            className="header-container__title-image"
          />
          <h1 className="header-container__title">AWESOME MEME GENERATOR</h1>
        </header>
        <section className="header-container__section-container">
          <div className="header-container__texts-container">
            <p className="header-container__text">
              Click the “Generate meme” button to get a random meme, if you like
              a meme you can click the{" "}
              <FontAwesomeIcon
                icon={faStar}
                className="header-container__text-icon"
              />{" "}
              button to move it into your favourite pages.
            </p>
            <p className="header-container__text">
              In your favourite pages you can unlike a meme, edit it and also
              create your own meme.
            </p>
          </div>
          <div className="header-container__buttons-container">
            <button className="header-container__button">Generate Meme</button>
            <button className="header-container__button">My Favourites</button>
          </div>
        </section>
      </div>
    </>
  );
};
export default Header;
