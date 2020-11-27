import React from "react"
import "./NavigationItems.scss"
import { Link } from "react-scroll"
const NavigationItems = (props) => {
  const navItemStyle = ["navItems__item"]
  if (props.isSticky) {
    navItemStyle.push("navItems__sticky")
  }
  return (
    <ul className="navItems">
      <Link
        to={"header"}
        smooth={true}
        duration={1500}
        className={navItemStyle.join(" ")}
      >
        start
      </Link>

      <Link
        to={"gallery"}
        smooth={true}
        duration={1500}
        className={navItemStyle.join(" ")}
      >
        portfolio
      </Link>
      <Link
        to={"about"}
        smooth={true}
        duration={1500}
        className={navItemStyle.join(" ")}
      >
        o mnie
      </Link>
      <Link
        to={"contact"}
        smooth={true}
        duration={1500}
        className={navItemStyle.join(" ")}
      >
        kontakt
      </Link>
    </ul>
  )
}
export default NavigationItems
