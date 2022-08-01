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
    flex-direction: column;
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
`;

export default CardStyled;
