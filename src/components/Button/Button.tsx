import { ButtonStyle } from "./ButtonStyled";

interface ButtonProps {
  text: string;
  actionOnClick: () => void;
}

const Button = ({ text, actionOnClick }: ButtonProps): JSX.Element => {
  return <ButtonStyle onClick={actionOnClick}>{text}</ButtonStyle>;
};
export default Button;
