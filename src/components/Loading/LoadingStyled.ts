import styled from "styled-components";

const LoadingContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 30%;
  background-color: #36393f;
  padding: 20px 50px;
  border: 2px solid green;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;
  @media (min-width: 900px) {
    width: 500px;
    height: 300px;
  }
`;
const ImageStyled = styled.img`
  max-width: 100%;
  max-height: 80%;

  @media (min-width: 900px) {
    padding: 80px 0 40px 0;
    width: 40%;
  }
`;
const SpanStyled = styled.span`
  color: white;
  @media (min-width: 900px) {
    font-size: 25px;
    padding-bottom: 80px;
  }
`;

export { LoadingContainerStyled, ImageStyled, SpanStyled };
