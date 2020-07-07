import React from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Banner from "./components/Banner/Banner";
import Opinions from "./components/Opinions/Opinions";
import About from "./components/About/About";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  return (
    <React.Fragment>
      <Layout />
      <Banner>
        <Opinions />
      </Banner>
      <Gallery />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default App;
