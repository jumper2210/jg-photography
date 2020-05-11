import React from "react";
import Header from "../Header/Header";
import Toolbar from "../../containers/Toolbar/Toolbar";
import Aux from "../../hoc/Auxiliary/Auxiliary";
const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <Header />
    </Aux>
  );
};
export default Layout;
