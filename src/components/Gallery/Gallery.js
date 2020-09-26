import React, { useState } from "react";
import "./Gallery.scss";
import images from "../../assets/images/gallery/index";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import LazyLoad from "react-lazyload";
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="gallery">
      {images.map(({ id, src }) =>
        id <= 12 ? (
          <div className="box" onClick={() => setIsOpen(true)}>
            <LazyLoad height={200} offset={700} once>
              <img alt={src} src={src} className="box__img" />
            </LazyLoad>
          </div>
        ) : null
      )}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  );
};
export default React.memo(Gallery);
