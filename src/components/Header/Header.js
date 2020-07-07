import React from "react";
import "./Header.scss";
import { Fade } from "react-slideshow-image";
import p1 from "../../assets/images/header.jpg";
import p2 from "../../assets/images/header2.jpg";
import p3 from "../../assets/images/header3.jpg";

const Header = (props) => {
  const fadeImages = [
    { id: 1, src: p1 },
    { id: 2, src: p2 },
    { id: 3, src: p3 },
  ];
  const properties = {
    duration: 2300,
    transitionDuration: 900,
    infinite: true,
    indicators: false,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="slide-container" ref={props.headerRef}>
      <Fade {...properties}>
        {fadeImages.map(({ src, id }) => (
          <img key={id} src={src} alt="alt" className="slide-container--item" />
        ))}
      </Fade>
      <h1 className="heading-primary-main">
        NATURE ･ EVENTS ･ WEDDINGS ･ PHOTOGRAPHY
      </h1>
    </div>
  );
};
export default React.memo(Header);
