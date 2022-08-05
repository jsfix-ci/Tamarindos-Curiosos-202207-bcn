import styled from "styled-components";

const TitleStyled = styled.header`
  padding: 10%;
  display: flex;
  align-items: flex-end;
  @media (min-width: 900px) {
    width: 60%;
    align-items: center;
    padding: 5% 10% 2% 10%;
  }
`;
const TitleImageStyled = styled.img`
  width: auto;
  height: 90px;
  @media (min-width: 900px) {
    width: auto;
    height: 160px;
  }
`;
const TitleTextStyled = styled.h1`
  font-weight: 900;
  color: white;
  margin: 0;
  @media (min-width: 900px) {
    font-size: 80px;
  }
`;

const SectionContainerStyled = styled.section`
  @media (min-width: 900px) {
    display: flex;
    margin-bottom: 80px;
  }
`;
const TextsContainerStyled = styled.div`
  padding: 0 10%;
  @media (min-width: 900px) {
    flex: 3;
    padding-right: 0;
  }
`;
const TextStyled = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
  @media (min-width: 900px) {
    font-size: 28px;
    text-align: start;
  }
`;
const TitleTextWordStyled = styled.span`
  color: #ed4202;
`;
const ButtonContainerStyled = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  gap: 10px;

  flex-direction: column;
  @media (min-width: 900px) {
    flex: 1;
    align-items: flex-end;
    margin: 0;
    justify-content: space-evenly;
    padding-right: 10%;
  }
`;
const DetailTitleTextStyled = styled.header`
  font-weight: 900;
  color: white;
  margin: 0;
  display: flex;
  justify-content: center;
  font-size: 2em;
  padding: 30px 0;
  @media (min-width: 900px) {
    font-size: 80px;
  }
`;
const DetailButtonContainerStyled = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 50px;
  margin: 0;
  @media (min-width: 900px) {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;
const NotFoundContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  margin: 20px;
`;
const NotFoundHeader = styled.h1`
  font-weight: normal;
  color: white;

  @media (min-width: 900px) {
    font-size: 50px;
  }
`;
export {
  NotFoundHeader,
  NotFoundContainer,
  DetailTitleTextStyled,
  DetailButtonContainerStyled,
  SectionContainerStyled,
  ButtonContainerStyled,
  TextStyled,
  TextsContainerStyled,
  TitleStyled,
  TitleImageStyled,
  TitleTextStyled,
  TitleTextWordStyled,
};
