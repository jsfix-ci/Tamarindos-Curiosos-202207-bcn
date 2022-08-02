import styled from "styled-components";

const ModalErrorStyled = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .modal-container__popup {
    @media screen and (min-width: 700px) {
      width: 500px;
    }
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: white;
    border: 2px solid #ed4202;
    height: 300px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  img {
    border-radius: 20px;
    height: 200px;
    width: 200px;
  }

  span {
    color: #ed4202;
    text-align: center;
    font-size: 20px;
    margin: 20px 0;
  }
`;

export default ModalErrorStyled;
