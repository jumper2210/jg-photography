import React from "react";
import "./BannerSec.scss";
import "../../sass/_typography.scss";
import { Parallax } from "react-parallax";
import picture from "../../assets/images/banner_large.jpg";
const BannerSec = (props) => {
  return (
    <section className="bannerSec" id="banner">
      <Parallax
        className="bannerSec__pic"
        bgImage={picture}
        strength={1000}
      ></Parallax>
    </section>
  );
};

export default React.memo(BannerSec);
