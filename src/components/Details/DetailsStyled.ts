import styled from "styled-components";

const DetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1b;

  .meme-img {
    max-width: 100%;
    max-height: 100%;
    @media (min-width: 900px) {
      max-width: 80%;
      max-height: 100%;
    }
  }
  .details {
    &__image-container {
      margin-top: 1rem;
      width: 80%;

      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2%;
      @media (min-width: 900px) {
        max-width: 800px;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 80%;
      border: solid 2px #ed4202;
      border-radius: 20px;
      background-color: #1a1a1b;
      color: white;
      margin-bottom: 0.5rem;
      @media (min-width: 900px) {
        max-width: 700px;
      }
    }
  }

  .info__item {
    padding: 0.5rem;
    margin-left: 2rem;
    font-weight: bold;
    @media (min-width: 900px) {
      margin-left: 1rem;
    }
  }
`;

export default DetailsStyled;
