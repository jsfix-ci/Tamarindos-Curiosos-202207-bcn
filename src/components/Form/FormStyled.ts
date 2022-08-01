import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormStyled = styled.form`
  @media screen and (min-width: 700px) {
    height: 700px;
    width: 700px;
    font-size: 20px;
  }

  background-color: black;
  background: radial-gradient(
    circle,
    rgba(237, 66, 2, 0.5) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  flex-direction: column;
  height: 330px;
  width: 320px;
  color: white;
  border: 2px solid rgba(237, 66, 2);
  border-radius: 20px;
  justify-content: space-around;
  font-size: 20px;

  .new-meme__control {
    height: 30px;
    border: 2px solid rgba(237, 66, 2);
    border-radius: 5px;
    margin-top: 10px;
  }
`;

const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 10px;
`;

export { FormStyled, LabelStyled, FormContainer };
