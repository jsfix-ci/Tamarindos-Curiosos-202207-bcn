import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  text: string;
  actionOnClick: () => void;
  buttonType?: string;
}

const Button = ({
  buttonType,
  text,
  actionOnClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={buttonType} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  );
};
export default Button;
