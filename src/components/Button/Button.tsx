import { SyntheticEvent } from "react";
import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  text: string;
  actionOnClick?: (event: SyntheticEvent) => Promise<void>;
}

const Button = ({ text, actionOnClick }: ButtonProps): JSX.Element => {
  return <ButtonStyled onClick={actionOnClick}>{text}</ButtonStyled>;
};
export default Button;
