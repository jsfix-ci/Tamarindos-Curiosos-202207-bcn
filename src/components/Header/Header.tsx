import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import {
  ButtonContainerStyle,
  TextsContainerStyle,
  TextStyle,
  TitleImageStyle,
  TitleStyle,
  TitleTextStyle,
  TitleTextWordStyle,
} from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <>
      <div className="header-container">
        <TitleStyle className="header-container__title-container">
          <TitleImageStyle
            src="img/logo.png"
            alt="Awesome meme generator logo, it's a frog"
            className="header-container__title-image"
          />
          <TitleTextStyle className="header-container__title">
            AWESOME <TitleTextWordStyle>MEME</TitleTextWordStyle> GENERATOR
          </TitleTextStyle>
        </TitleStyle>
        <section className="header-container__section-container">
          <TextsContainerStyle className="header-container__texts-container">
            <TextStyle className="header-container__text">
              Click the “Generate meme” button to get a random meme, if you like
              a meme you can click the{" "}
              <FontAwesomeIcon
                icon={faStar}
                className="header-container__text-icon"
              />{" "}
              button to move it into your favourite pages.
            </TextStyle>
            <TextStyle className="header-container__text">
              In your favourite pages you can unlike a meme, edit it and also
              create your own meme.
            </TextStyle>
          </TextsContainerStyle>
          <ButtonContainerStyle className="header-container__buttons-container">
            <Button actionOnClick={() => {}} text="Generate Meme" />
            <Button actionOnClick={() => {}} text="My Favorites" />
          </ButtonContainerStyle>
        </section>
      </div>
    </>
  );
};
export default Header;
