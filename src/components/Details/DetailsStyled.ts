import styled from "styled-components";

const DetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1b;

  .meme-img {
    max-height: 400px;
    max-width: 100%;
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
      padding: 1.5rem 0.5rem;
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
    font-weight: normal;
    text-decoration: none;
    @media (min-width: 900px) {
      margin-left: 1rem;
    }
    a {
      color: white;
      text-decoration: inherit;
      transition: 0.2s;
      &:hover {
        color: #ed4202;
      }
    }
    strong {
      font-size: larger;
      padding-right: 10px;
    }
  }
`;

export default DetailsStyled;
