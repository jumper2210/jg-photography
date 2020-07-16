import React from "react";
import "./NavigationItems.scss";
import { Link } from "react-scroll";
const NavigationItems = (props) => {
  const navItemStyle = ["navItems__item"];
  if (props.isSticky) {
    navItemStyle.push("navItems__sticky");
  }
  return (
    <div className="navItems">
      <Link
        to={"about"}
        smooth={true}
        duration={1500}
        className={navItemStyle.join(" ")}
      >
        o mnie
      </Link>
      <Link
        to={"opinions"}
        smooth={true}
        duration={1500}
        className={navItemStyle.join(" ")}
      >
        opinie
      </Link>
      <Link
        to={"gallery"}
        smooth={true}
        duration={1500}
        className={navItemStyle.join(" ")}
      >
        galeria
      </Link>
      <Link
        to={"footer"}
        smooth={true}
        duration={1500}
        className={navItemStyle.join(" ")}
      >
        kontakt
      </Link>
    </div>
  );
};
export default NavigationItems;
