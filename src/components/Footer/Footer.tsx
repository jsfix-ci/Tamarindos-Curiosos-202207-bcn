import FooterStyled from "./FooterStyled";

const Footer = (): JSX.Element => {
  return (
    <FooterStyled className="footer-container">
      <span className="footer__text">
        <span className="footer__text--especial">&copy;</span>Tamarindos
        curiosos. inc
        <img
          className="footer__image"
          src="favicon.png"
          alt="imagen de la ranita"
        ></img>
      </span>
    </FooterStyled>
  );
};

export default Footer;
