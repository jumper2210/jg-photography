import React from "react";
import "./Gallery.scss";
// import Picture from "../UI/Picture/Picture";
import images from "../../assets/images/gallery/index";
import LazyLoad from "react-lazyload";
const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        {images.map(({ id, src }) => (
          <LazyLoad throttle={200} height={200}>
            <img key={id} src={src} alt="pic" className="item" />
          </LazyLoad>
        ))}
      </div>
    </section>
  );
};
export default React.memo(Gallery);
