import React from "react";
import "./Footer.scss";
import igPic from "../../assets/images/footer_ig.png";

const Footer = (props) => {
  return (
    <section className="footer">
      <div className="footer__p-social">Media społecznościowe</div>
      <div className="footer__p-ig">Instagram</div>
      <div className="footer__p-contact">Wystarczy napisać!</div>
      <div className="footer__ctn-social">
        <div className="footer__ctn-social--paragraph">Zaobserwuj mnie</div>
        <div className="footer__ctn-social--svgs">
          <a href="https://www.facebook.com/justyna.skoczek.l">
            <i className="footer__ctn-social--svgs--item fab fa-facebook-square fa-2x "></i>
          </a>
          <a href="https://www.instagram.com/iustqa/?hl=pl">
            <i className="footer__ctn-social--svgs--item fab fa-instagram fa-2x"></i>
          </a>
          <a href="/">
            <i className="footer__ctn-social--svgs--item far fa-envelope fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="footer__ctn-ig">
        <img className="footer__ctn-ig--pic" src={igPic} alt="igPic" />
        <p className="footer__ctn-ig--link">@iustqa</p>
      </div>
      <div className="footer__ctn-contact">
        <h3>Telefon</h3>
        <p>508938040</p>
        <h3>E-mail</h3>
        <p>justyna.garbal@wp.pl</p>
      </div>
      <div className="footer__ctn-end_info">
        <div className="footer__ctn-end_info--rights">
          ©2020 all rights reserved
        </div>

        <div className="footer__ctn-end_info--creator">
          Proudly created by skoczekk.pl
        </div>
      </div>
    </section>
  );
};
export default React.memo(Footer);
