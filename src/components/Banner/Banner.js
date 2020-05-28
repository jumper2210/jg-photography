import React from "react";
import "./Banner.scss";
import "../../sass/_typography.scss";
import { Parallax } from "react-parallax";
import picture from "../../assets/images/banner_small.jpg";
const Banner = (props) => {
  return (
    <section className="banner" id="banner">
      <Parallax className="banner__pic" bgImage={picture} strength={600} />
      <span className="banner__pic--overlay" />
      {props.children}
    </section>
  );
};

export default React.memo(Banner);
