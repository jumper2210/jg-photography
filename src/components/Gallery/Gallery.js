import React, { useState } from "react"
import "./Gallery.scss"
import images from "../../assets/images/gallery/index"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import SliderImages from "./SliderImages/SliderImages"

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="gallery">
      <h2 className="heading-secondary">Portfolio</h2>
      <SliderImages setIsOpen={setIsOpen} images={images} />
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
      <div className="gallery__btn" onClick={() => setIsOpen(true)}>
        <span className="gallery__btn--text"></span>
        zobacz więcej
      </div>
    </section>
  )
}
export default Gallery
