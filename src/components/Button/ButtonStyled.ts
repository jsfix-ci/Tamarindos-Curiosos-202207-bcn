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
  transition: 0.15s;
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
  &.delete {
    height: 50px;
    width: 100px;
    border: 2px solid #f44336;
    background-color: #f44336;
    margin: 0 5px;
    &:hover {
      color: #f44336;
      border: 2px solid #f44336;
      background-color: white;
      color: #f44336;
    }
  }
  &.modify {
    height: 50px;
    width: 100px;
    border: 2px solid #0478ff;
    background-color: #0478ff;
    margin: 0 5px;
    &:hover {
      color: #0478ff;
      background-color: white;
      color: #0478ff;
      border: 2px solid #0478ff;
    }
  }
`;

export { ButtonStyled };
