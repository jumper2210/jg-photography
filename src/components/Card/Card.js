import React from "react";
import "./Card.scss";
import "../../sass/_typography.scss";
const Card = (props) => {
  return (
    <div className="card">
      <span className="heading-primary-main">
        <span>Justyna Garbal</span>
      </span>
      <span className="heading-primary-sub">Professional Photographer</span>
      <span>LOGO</span>
    </div>
  );
};
export default Card;
