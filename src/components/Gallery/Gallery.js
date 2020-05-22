import React, { useState } from "react";
import "./Gallery.scss";
import images from "../../assets/images/gallery/index";
import LazyLoad from "react-lazyload";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
const Gallery = (props) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="gallery">
      <div className="container">
        {images.map(({ id, src }) => (
          <LazyLoad throttle={200} height={200}>
            <img
              key={id}
              src={src}
              alt="pic"
              className="item"
              onClick={() => setIsOpen(true)}
            />
          </LazyLoad>
        ))}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </div>
    </section>
  );
};
export default React.memo(Gallery);
