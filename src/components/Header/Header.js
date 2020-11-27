import React from "react"
import "./Header.scss"

const Header = (props) => {
  return (
    <section className="header" ref={props.headerRef}>
      <div className="header__text-box">
        <p className="heading-primary-main">Justyna Garbal</p>
        <span className="heading-primary-sub">Twój fotograf</span>
      </div>
    </section>
  )
}
export default Header
