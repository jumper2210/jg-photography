import React from "react";
import "./Footer.scss";
import Fade from "react-reveal";

const Footer = (props) => {
  return (
    <React.Fragment>
      <Fade bottom>
        <footer className="footer-ctn"></footer>
      </Fade>
    </React.Fragment>
  );
};
export default React.memo(Footer);
