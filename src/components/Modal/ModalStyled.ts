import styled from "styled-components";

const ModalStyled = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  .modal-container__popup--error {
    @media screen and (min-width: 700px) {
      width: 500px;
    }
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: #36393f;
    border: 3px solid #ed4202;
    width: 80%;
    height: 280px;
    padding-top: 30px;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    span {
      color: #ed4202;
      text-align: center;
      font-size: 25px;
      margin: 20px 0;
    }
  }

  .modal-container__popup--success {
    @media screen and (min-width: 700px) {
      width: 500px;
    }
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: #36393f;
    border: 3px solid #46db00;
    height: 280px;
    padding-top: 40px;
    margin: auto;

    span {
      color: #46db00;
      text-align: center;
      font-size: 25px;
      margin: 20px 0;
    }
  }

  img {
    border-radius: 20px;
    height: 200px;
    width: 200px;
  }
`;

export default ModalStyled;
