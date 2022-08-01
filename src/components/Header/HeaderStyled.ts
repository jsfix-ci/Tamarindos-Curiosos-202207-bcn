import styled from "styled-components";

const TitleStyle = styled.header`
  padding: 10%;
  display: flex;
  align-items: flex-end;
`;
const TitleImageStyle = styled.img`
  width: 160px;
  height: 90px;
`;
const TitleTextStyle = styled.h1`
  font-weight: 900;
  color: white;
  margin: 0;
`;
const TitleTextWordStyle = styled.span`
  color: #ed4202;
`;

const TextsContainerStyle = styled.div`
  padding: 0 10%;
`;
const TextStyle = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
`;

const ButtonContainerStyle = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`;

export {
  ButtonContainerStyle,
  TextStyle,
  TextsContainerStyle,
  TitleStyle,
  TitleImageStyle,
  TitleTextStyle,
  TitleTextWordStyle,
};
