import React from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Opinions from "./components/Opinions/Opinions";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  return (
    <React.Fragment>
      <Layout />
      <Opinions />
      <About />
      <Gallery />
      <Footer />
    </React.Fragment>
  );
};

export default App;
