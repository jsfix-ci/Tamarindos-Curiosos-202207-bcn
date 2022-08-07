import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useAPI";
import useLocalApi from "../../hooks/useLocalApi";
import Button from "../Button/Button";
import {
  ButtonContainerStyled,
  SectionContainerStyled,
  TextsContainerStyled,
  TextStyled,
  TitleImageStyled,
  TitleStyled,
  TitleTextStyled,
  TitleTextWordStyled,
  DetailButtonContainerStyled,
  DetailTitleTextStyled,
  NotFoundContainer,
  NotFoundHeader,
} from "./HeaderStyled";
interface HeaderProps {
  currentPage: "mainPage" | "favoritesPage" | "detailsPage" | "notFoundPage";
}
const Header = ({ currentPage }: HeaderProps): JSX.Element => {
  const { generateMemesAPI } = useApi();
  const { getFavoriteMemes } = useLocalApi();

  return (
    <>
      {currentPage === "mainPage" && (
        <div className="header-container">
          <TitleStyled className="header-container__title-container">
            <TitleImageStyled
              src="img/logo.png"
              alt="Awesome meme generator logo, it's a frog"
              className="header-container__title-image"
            />
            <TitleTextStyled className="header-container__title">
              AWESOME <TitleTextWordStyled>MEME </TitleTextWordStyled>GENERATOR
            </TitleTextStyled>
          </TitleStyled>
          <SectionContainerStyled className="header-container__section-container">
            <TextsContainerStyled className="header-container__texts-container">
              <TextStyled className="header-container__text">
                Click the “Generate memes” button to get 10 random memes, if you
                like a meme you can click the{" "}
                <FontAwesomeIcon
                  icon={faStar}
                  className="header-container__text-icon"
                />{" "}
                button to move it into your favourite pages.
              </TextStyled>
              <TextStyled className="header-container__text">
                In your favourite pages you can unlike a meme, edit it and also
                create your own meme.
              </TextStyled>
            </TextsContainerStyled>
            <ButtonContainerStyled className="header-container__buttons-container">
              <Button actionOnClick={generateMemesAPI} text="Generate Memes" />
              <Link to={"/favorites"}>
                <Button actionOnClick={getFavoriteMemes} text="My Favorites" />
              </Link>
            </ButtonContainerStyled>
          </SectionContainerStyled>
        </div>
      )}
      {currentPage === "favoritesPage" && (
        <div className="header-container">
          <TitleStyled className="header-container__title-container">
            <TitleTextStyled className="header-container__title">
              FAVORITE <TitleTextWordStyled>MEMES</TitleTextWordStyled>
            </TitleTextStyled>
          </TitleStyled>
          <SectionContainerStyled className="header-container__section-container">
            <TextsContainerStyled className="header-container__texts-container">
              <TextStyled className="header-container__text">
                Here you can find your selected favorite memes! Click delete to
                remove a meme from your list.
              </TextStyled>
            </TextsContainerStyled>
            <ButtonContainerStyled className="header-container__buttons-container">
              <Link to={"/home"}>
                <Button actionOnClick={generateMemesAPI} text="Main Page" />
              </Link>
            </ButtonContainerStyled>
          </SectionContainerStyled>
        </div>
      )}
      {currentPage === "detailsPage" && (
        <div className="header-container">
          <DetailTitleTextStyled className="header-container__title">
            <TitleTextWordStyled>MEME</TitleTextWordStyled>DETAILS
          </DetailTitleTextStyled>
          <DetailButtonContainerStyled className="header-container__section-container">
            <Link to={"/home"}>
              <Button actionOnClick={generateMemesAPI} text="Main Page" />
            </Link>
            <Link to={"/favorites"}>
              <Button text="My Favorites" />
            </Link>
          </DetailButtonContainerStyled>
        </div>
      )}
      {currentPage === "notFoundPage" && (
        <NotFoundContainer className="header-container">
          <NotFoundHeader className="header-container__title">
            Page Not Found
          </NotFoundHeader>
          <Link to={"/home"}>
            <Button text="Return to Main Page" />
          </Link>
        </NotFoundContainer>
      )}
    </>
  );
};
export default Header;
