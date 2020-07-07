import React from "react";
import "./Banner.scss";
import "../../sass/_typography.scss";
import { Parallax } from "react-parallax";
import picture from "../../assets/images/bb.jpg";
const Banner = (props) => {
  return (
    <section className="banner" id="banner">
      <Parallax className="banner__pic" bgImage={picture} strength={400}>
        <div className="banner__pic--overlay">
          <h2 className="heading-opinions">Co o mnie mowia</h2>
        </div>
      </Parallax>
      {props.children}
    </section>
  );
};

export default React.memo(Banner);
