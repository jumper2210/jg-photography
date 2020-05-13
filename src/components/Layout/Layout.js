import React from "react";
import Header from "../Header/Header";
import Toolbar from "../../containers/Toolbar/Toolbar";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Banner from "../Banner/Banner";
import Opinions from "../Opinions/Opinions";
import Gallery from "../Gallery/Gallery";
const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <Header />
      <Opinions />
      <Banner />
      <Gallery />
    </Aux>
  );
};
export default Layout;
