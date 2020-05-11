import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "../Toolbar/Toolbar.scss";
const Toolbar = (props) => {
  return (
    <span className="toolbar">
      <NavigationItems />
    </span>
  );
};
export default Toolbar;
