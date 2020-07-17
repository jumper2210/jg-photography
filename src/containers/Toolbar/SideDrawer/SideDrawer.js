import React from "react";
import { Link } from "react-scroll";
import "./SideDrawer.scss";
import BackDrop from "../../BackDrop/BackDrop";
const SideDrawer = (props) => {
  let attachedClasses = ["sideDrawer", "sideDrawer__Close"];
  if (props.open) {
    attachedClasses = ["sideDrawer", "sideDrawer__Open"];
  }
  return (
    <React.Fragment>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
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
    </React.Fragment>
  );
};
export default React.memo(SideDrawer);
