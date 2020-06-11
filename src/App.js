import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Banner from "./components/Banner/Banner";
import Opinions from "./components/Opinions/Opinions";
import BannerSec from "./components/BannerSec/BannerSec";
import About from "./components/About/About";
import Spinner from "./UI/Spinner/Spinner";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";

const Gallery = lazy(() => {
  return import("./components/Gallery/Gallery");
});

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Layout />
        <About />
        <Banner>
          <Opinions />
        </Banner>
        <Route
          path="/"
          render={() => (
            <Suspense fallback={<Spinner />}>
              <Gallery />
            </Suspense>
          )}
        />
        <BannerSec />
        <Offer />
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
