import React from "react";
import "./NavigationItems.scss";
import { Link } from "react-scroll";
const NavigationItems = () => {
  return (
    <div className="navItems">
      <li className="navItems__items">about me</li>
      <li className="navItems__items">opinions</li>
      <li className="navItems__items">pictures</li>
      <li className="navItems__items">contact</li>
    </div>
  );
};
export default NavigationItems;
