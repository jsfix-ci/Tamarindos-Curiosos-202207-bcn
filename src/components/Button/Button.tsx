interface ButtonProps {
  text: string;
  actionOnClick: () => {};
}

const Button = ({ text, actionOnClick }: ButtonProps): JSX.Element => {
  return <button onClick={actionOnClick}>{text}</button>;
};
export default Button;
