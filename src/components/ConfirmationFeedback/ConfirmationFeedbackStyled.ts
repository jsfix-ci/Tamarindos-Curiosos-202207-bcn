import styled from "styled-components";

const ConfirmationContainerStyled = styled.div`
  @media screen and (min-width: 700px) {
    width: 500px;
  }
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: white;
  border: 3px solid red;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  justify-content: center;
`;
const ConfirmationTextStyled = styled.span`
  color: red;
  text-align: center;
  font-size: 25px;
  margin: 20px 0;
  font-weight: normal;
`;
const ConfirmationButtonContainerStyled = styled.div`
  display: flex;
  gap: 10px;
`;
const ConfirmationButtonStyled = styled.button`
  border: 2px solid red;
  background: 0%;
  color: red;
  border-radius: 10px;
  width: 120px;
  height: 50px;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  transition: 0.3s;
  &:hover {
    color: white;
    cursor: pointer;
    background-color: red;
  }
`;

export {
  ConfirmationButtonContainerStyled,
  ConfirmationContainerStyled,
  ConfirmationTextStyled,
  ConfirmationButtonStyled,
};
