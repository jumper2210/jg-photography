import React, { useState, useEffect, useRef } from "react";
import Header from "../Header/Header";
import Toolbar from "../../containers/Toolbar/Toolbar";
import Card from "../Card/Card";
const Layout = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const [boundary, setBoundary] = useState(false);
  const [showToolbar, setShowToolbar] = useState(true);
  const headerRef = useRef(null);
  const toolbarRef = useRef(null);
  const yOffset = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setShowToolbar(false);
      } else {
        setShowToolbar(true);
      }
      lastScrollTop = scrollTop;
    });
    console.log(boundary);
  }, [setBoundary]);

  useEffect(() => {
    const observeScroll = () => {
      window.addEventListener("scroll", yOffset);
    };
    observeScroll();
    return () => {
      window.removeEventListener("scroll", yOffset);
    };
  });

  useEffect(() => {
    const toolbarHeight = toolbarRef.current
      ? toolbarRef.current.offsetHeight
      : 0;
    const distance = headerRef.current
      ? headerRef.current.offsetHeight - toolbarHeight
      : 0;
    if (scrollY > distance) {
      setBoundary(true);
    } else {
      setBoundary(false);
    }
  }, [setBoundary, scrollY]);

  return (
    <React.Fragment>
      <Card />
      <Toolbar
        toolbarRef={toolbarRef}
        boundaryActive={boundary}
        showToolbar={showToolbar}
      />
      <Header headerRef={headerRef}></Header>
    </React.Fragment>
  );
};
export default Layout;
