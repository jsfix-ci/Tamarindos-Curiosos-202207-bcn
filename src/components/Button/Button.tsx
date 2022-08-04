import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  text: string;
  actionOnClick?: () => void;
}

const Button = ({ text, actionOnClick }: ButtonProps): JSX.Element => {
  return <ButtonStyled onClick={actionOnClick}>{text}</ButtonStyled>;
};
export default Button;
