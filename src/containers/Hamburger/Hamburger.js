import React from "react";
import "./Hamburger.scss";

const Hamburger = (props) => {
  const hamburgerStyle = ["hamburger"];
  if (props.isOpen === true) {
    hamburgerStyle.push("hamburger--active");
  }

  return (
    <div className={hamburgerStyle.join(" ")}>
      <span className="hamburger__box" onClick={props.open}>
        <span className="hamburger__inner"></span>
      </span>
    </div>
  );
};
export default React.memo(Hamburger);
