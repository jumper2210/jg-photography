import React from "react";
import "./Header.scss";
import { Fade } from "react-slideshow-image";
import p1 from "../../assets/images/header2.jpg";
import p2 from "../../assets/images/header3.jpg";
import p3 from "../../assets/images/header.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = (props) => {
  const fadeImages = [
    { id: 1, src: p1 },
    { id: 2, src: p2 },
    { id: 3, src: p3 },
  ];
  const properties = {
    duration: 2300,
    infinite: true,
    indicators: false,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <Fade {...properties} className="slide-container" ref={props.headerRef}>
      {fadeImages.map(({ src, id }) => (
        <LazyLoadImage
          src={src}
          className="slide-container--item"
          effect="blur"
        />
      ))}
    </Fade>
  );
};
export default React.memo(Header);
