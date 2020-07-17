import React from "react";
import "./BackDrop.scss";
const backdrop = (props) =>
  props.show ? <div className="backDrop" onClick={props.clicked}></div> : null;

export default backdrop;
