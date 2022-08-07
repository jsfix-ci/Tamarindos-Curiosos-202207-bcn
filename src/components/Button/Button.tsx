import { SyntheticEvent } from "react";
import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  text: string;
  buttonType?: string;
  actionOnClick?: (event: SyntheticEvent) => Promise<void>;
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
