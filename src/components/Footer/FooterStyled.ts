import styled from "styled-components";

const FooterStyled = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ed4202;
  position: relative;
  bottom: 0;

  .footer {
    &__text {
      opacity: 80%;
    }
    &__image {
      width: 1rem;
      height: 1rem;
      opacity: 50%;
      margin-left: 5px;
    }
    &__text--especial {
      font-weight: lighter;
    }
  }
`;

export default FooterStyled;
