import React, { useState } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.scss";
import Hamburger from "../Hamburger/Hamburger";
import Language from "../Language/Language";

const Toolbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toolbarStyle = ["toolbar"];
  if (props.isSticky) {
    toolbarStyle.push("toolbar--sticky");
  }

  return (
    <div className={toolbarStyle.join(" ")} ref={props.toolbarRef}>
      <Hamburger
        isOpen={isOpen}
        open={() => {
          setIsOpen((prevState) => !prevState);
        }}
      />
      <Language isSticky={props.isSticky} />
      <p className="toolbar__heading">JG - FOTOGRAFIA</p>
      <NavigationItems isSticky={props.isSticky} />
    </div>
  );
};
export default React.memo(Toolbar);
