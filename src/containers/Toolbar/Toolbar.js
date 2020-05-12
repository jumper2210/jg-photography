import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "../Toolbar/Toolbar.scss";
const Toolbar = (props) => {
  return (
    <div className="toolbar">
      <NavigationItems />
    </div>
  );
};
export default Toolbar;
