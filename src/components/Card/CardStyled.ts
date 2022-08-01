import styled from "styled-components";

const CardStyled = styled.div`
  img {
    max-width: 100%;
    align-items: center;
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
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
    background-color: white;
  }

  .icon-eye {
    font-size: 2rem;
  }

  .star-favourites {
    position: relative;
    top: -18px;
    font-size: 2.5rem;
    color: #ed4202;
    padding-left: 10%;
  }

  @media (min-width: 900px) {
    .card-container {
      border: 2px solid #ed4202;
      border-radius: 20px;
      margin-right: 10%;
      margin-left: 10%;
      background: radial-gradient(
        circle,
        rgba(237, 66, 2, 0.5) 0%,
        rgba(0, 0, 0, 1) 100%
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
`;

export default CardStyled;
