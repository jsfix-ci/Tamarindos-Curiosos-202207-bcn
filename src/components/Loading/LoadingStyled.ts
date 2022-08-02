import styled from "styled-components";

const LoadingContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #36393f;
  padding: 20px 50px;
  border: 2px solid green;
  border-radius: 20px;
  align-items: center;
  @media (min-width: 900px) {
    width: 80%;
    height: 100%;
  }
`;
const ImageStyled = styled.img`
  width: 100%;
  padding-bottom: 10px;
  @media (min-width: 900px) {
    padding: 80px 0 40px 0;
    width: 40%;
  }
`;
const SpanStyled = styled.span`
  color: white;
  @media (min-width: 900px) {
    font-size: 35px;
    padding-bottom: 80px;
  }
`;

export { LoadingContainerStyled, ImageStyled, SpanStyled };
