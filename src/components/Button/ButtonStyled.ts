import styled from "styled-components";

const ButtonStyled = styled.button`
  border: 2px solid white;
  background: 0%;
  color: white;
  border-radius: 10px;
  width: 180px;
  height: 50px;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  transition: 0.3s;
  &:hover {
    color: black;
    cursor: pointer;
    background-color: white;
  }
  @media (min-width: 900px) {
    height: 80px;
    width: 190px;
    font-size: 22px;
  }
`;

export { ButtonStyled };
