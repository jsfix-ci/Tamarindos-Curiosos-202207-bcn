import styled from "styled-components";

const FormStyled = styled.form`
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

  .new-meme__control {
    height: 80px;
  }
`;

const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 10px;
`;

export { FormStyled, LabelStyled };
