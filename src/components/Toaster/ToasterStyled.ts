import styled from "styled-components";

const DeleteContainerStyled = styled.div`
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
const ImageStyled = styled.img`
  height: 160px;
`;
const SpanStyled = styled.span`
  color: red;
  text-align: center;
  font-size: 25px;
  margin: 20px 0;
  font-weight: normal;
`;
const CreateContainerStyled = styled.div`
  @media screen and (min-width: 700px) {
    width: 500px;
  }
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: white;
  border: 3px solid #49c100;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  justify-content: center;
`;
const CreateSpanStyled = styled.span`
  color: #49c100;
  text-align: center;
  font-size: 25px;
  margin: 20px 5px;
  font-weight: normal;
`;
export {
  CreateSpanStyled,
  CreateContainerStyled,
  DeleteContainerStyled,
  ImageStyled,
  SpanStyled,
};
