import React from "react"
import NavigationItems from "../NavigationItems/NavigationItems"
import "./Toolbar.scss"
import MenuIcon from "../MenuIcon/MenuIcon"

const Toolbar = (props) => {
  const toolbarStyle = ["toolbar"]
  if (props.isSticky) {
    toolbarStyle.push("toolbar--sticky")
  }

  return (
    <div className={toolbarStyle.join(" ")} ref={props.toolbarRef}>
      <MenuIcon
        isSticky={props.isSticky}
        isOpen={props.isOpen}
        clicked={props.hamburgerClicked}
      />
      <NavigationItems isSticky={props.isSticky} />
    </div>
  )
}
export default Toolbar
