import React, { useState } from "react";
import "./Gallery.scss";
import images from "../../assets/images/gallery/index";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
const Gallery = (props) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="container">
      {images.map(({ id, src }) =>
        id <= 12 ? (
          <div className="box" onClick={() => setIsOpen(true)}>
            <img key={id} src={src} alt="img-g" className="box__img" />
            <div className="con-text">
              <p>Justyna Garbal Photography</p>
            </div>
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
