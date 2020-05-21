import React from "react";
import "./Header.scss";
import "../../sass/_typography.scss";
import { Link } from "react-scroll";
const Header = (props) => {
  return (
    <section className="header" ref={props.headerRef}>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Justyna Garbal</span>
          <span className="heading-primary--sub">
            Professional Photographer
          </span>
        </h1>
      </div>
      <Link
        to={"opinions"}
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={1500}
        isDynamic={true}
        offset={-30}
        ignoreCancelEvents={false}
      >
        <span className="button-scroll"> meet me</span>
      </Link>
      {props.children}
    </section>
  );
};
export default React.memo(Header);
