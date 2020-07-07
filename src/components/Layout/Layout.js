import React, { useState, useEffect, useRef } from "react";
import Header from "../Header/Header";
import Toolbar from "../../containers/Toolbar/Toolbar";

const Layout = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const toolbarRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  const yOffset = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    if (scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, [setSticky, scrollY]);

  const headerRef = useRef(null);
  useEffect(() => {
    const observeScroll = () => {
      window.addEventListener("scroll", yOffset);
    };
    observeScroll();
    return () => {
      window.removeEventListener("scroll", yOffset);
    };
  });

  return (
    <React.Fragment>
      <Toolbar toolbarRef={toolbarRef} isSticky={sticky} />
      <Header headerRef={headerRef}></Header>
      {props.children}
    </React.Fragment>
  );
};
export default Layout;
