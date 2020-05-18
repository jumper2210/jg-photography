import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "../Toolbar/Toolbar.scss";
const Toolbar = (props) => {
  const toolbarStyle = ["toolbar"];
  if (props.showToolbar && !props.hideToolbar) {
    toolbarStyle.push("toolbar--hide");
  }
  return (
    <div className={toolbarStyle.join(" ")} ref={props.toolbarRef}>
      <NavigationItems />
    </div>
  );
};
export default Toolbar;
