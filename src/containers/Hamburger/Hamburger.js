import React from "react";
import "./Hamburger.scss";

const Hamburger = (props) => {
  const hamburgerStyle = ["hamburger"];
  const hamburgerInnerStyle = ["hamburger__box"];

  if (props.isSticky) {
    hamburgerInnerStyle.push("hamburger__box--sticky");
  }
  if (props.isOpen === true) {
    hamburgerStyle.push("hamburger--active");
  }

  return (
    <div className={hamburgerStyle.join(" ")}>
      <span className={hamburgerInnerStyle.join(" ")} onClick={props.clicked}>
        <span className="hamburger__inner"></span>
      </span>
    </div>
  );
};
export default React.memo(Hamburger);
