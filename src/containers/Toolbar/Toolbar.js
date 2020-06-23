import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "../Toolbar/Toolbar.scss";
const Toolbar = (props) => {
  const toolbarStyle = ["toolbar"];
  if (props.showToolbar && props.boundaryActive) {
    toolbarStyle.push("toolbar--show");
  }
  return (
    <div className={toolbarStyle.join(" ")} ref={props.toolbarRef}>
      <NavigationItems />
    </div>
  );
};
export default React.memo(Toolbar);
