import styled from "styled-components";

const TitleStyled = styled.header`
  padding: 10%;
  display: flex;
  align-items: flex-end;
`;
const TitleImageStyled = styled.img`
  width: 160px;
  height: 90px;
`;
const TitleTextStyled = styled.h1`
  font-weight: 900;
  color: white;
  margin: 0;
`;
const TitleTextWordStyled = styled.span`
  color: #ed4202;
`;

const TextsContainerStyled = styled.div`
  padding: 0 10%;
`;
const TextStyled = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
`;

const ButtonContainerStyled = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export {
  ButtonContainerStyled,
  TextStyled,
  TextsContainerStyled,
  TitleStyled,
  TitleImageStyled,
  TitleTextStyled,
  TitleTextWordStyled,
};
