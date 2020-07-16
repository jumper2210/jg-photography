import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.scss";
import Hamburger from "../Hamburger/Hamburger";

const Toolbar = (props) => {
  const toolbarStyle = ["toolbar"];
  if (props.isSticky) {
    toolbarStyle.push("toolbar--sticky");
  }

  return (
    <div className={toolbarStyle.join(" ")} ref={props.toolbarRef}>
      <Hamburger
        isSticky={props.isSticky}
        isOpen={props.isOpen}
        clicked={props.hamburgerClicked}
      />
      <p className="toolbar__heading">JG - FOTOGRAFIA</p>
      <NavigationItems isSticky={props.isSticky} />
    </div>
  );
};
export default React.memo(Toolbar);
