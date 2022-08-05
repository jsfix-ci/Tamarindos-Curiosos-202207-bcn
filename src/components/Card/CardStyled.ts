import styled from "styled-components";

const CardStyled = styled.div`
  img {
    max-height: 600px;
    max-width: 100%;
  }

  .card-container__meme-container {
    border-bottom: 2px solid #ed4202;
    display: flex;
    justify-content: center;
  }

  .card-container__card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3% 3%;
    position: relative;
    background-color: white;
    @media (min-width: 900px) {
      padding: 1.5% 3%;
    }
  }

  .icon-eye {
    font-size: 2rem;
    color: #ed4202;
    cursor: pointer;
    transition: 0.1s;

    @media (min-width: 900px) {
      font-size: 2.5rem;
    }
  }

  .star-favourites {
    font-size: 1.8rem;
    color: white;
    stroke: #ed4202;
    stroke-width: 50;
    transition: 0.1s;
    cursor: pointer;
    &:checked {
      color: #ed4202;
    }
    @media (min-width: 900px) {
      font-size: 2.5rem;
    }
  }

  .card-container {
    border: 2px solid #ed4202;
  }
  @media (min-width: 900px) {
    .card-container {
      border: 2px solid #ed4202;
      border-radius: 20px;
      margin: 0 30%;
      background: radial-gradient(
        circle,
        rgba(237, 66, 2, 0.5) 0%,
        rgba(0, 0, 0, 1) 85%
      );
    }

    img {
      max-width: 70%;
      align-self: center;
    }

    .card-container__card-footer {
      border-radius: 0 0 20px 20px;
    }
  }
  button {
    border: 0;
    background-color: transparent;
  }
`;

export default CardStyled;
