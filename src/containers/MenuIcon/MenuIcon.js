import React from "react"
import "./MenuIcon.scss"

const MenuIcon = (props) => {
  const menuIconStyle = ["menuIcon"]
  const menuIconInnerStyle = ["menuIcon__box"]

  if (props.isOpen === true) {
    menuIconStyle.push("menuIcon--active")
  }

  return (
    <div className={menuIconStyle.join(" ")}>
      <span className={menuIconInnerStyle.join(" ")} onClick={props.clicked}>
        <span className="menuIcon__inner"></span>
      </span>
    </div>
  )
}
export default MenuIcon
