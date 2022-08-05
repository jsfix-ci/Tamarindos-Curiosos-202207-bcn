import {
  ConfirmationButtonContainerStyled,
  ConfirmationButtonStyled,
  ConfirmationContainerStyled,
  ConfirmationTextStyled,
} from "./ConfirmationFeedbackStyled";

const confirmationFeedback = (): JSX.Element => {
  return (
    <ConfirmationContainerStyled>
      <ConfirmationTextStyled>
        Are you sure you want to delete this meme?
      </ConfirmationTextStyled>
      <ConfirmationButtonContainerStyled>
        <ConfirmationButtonStyled>Yes</ConfirmationButtonStyled>
        <ConfirmationButtonStyled>No</ConfirmationButtonStyled>
      </ConfirmationButtonContainerStyled>
    </ConfirmationContainerStyled>
  );
};
export default confirmationFeedback;
