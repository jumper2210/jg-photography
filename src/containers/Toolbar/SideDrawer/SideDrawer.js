import React from "react";
import { Link } from "react-scroll";
import "./SideDrawer.scss";

const SideDrawer = (props) => {
  let attachedClasses = ["sideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["sideDrawer", "Open"];
  }
  return (
    <div className={attachedClasses.join(" ")}>
      <ul className="sideDrawer__list">
        <Link
          to={"about"}
          smooth={true}
          duration={1500}
          className="sideDrawer__list--item"
        >
          O mnie
        </Link>
        <Link
          to={"opinions"}
          smooth={true}
          duration={1500}
          className="sideDrawer__list--item"
        >
          Opinie
        </Link>
        <Link
          to={"gallery"}
          smooth={true}
          duration={1500}
          className="sideDrawer__list--item"
        >
          Galeria
        </Link>
        <Link
          to={"footer"}
          smooth={true}
          duration={1500}
          className="sideDrawer__list--item"
        >
          Kontakt
        </Link>
      </ul>
    </div>
  );
};
export default React.memo(SideDrawer);
