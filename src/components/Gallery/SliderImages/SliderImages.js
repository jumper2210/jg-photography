import React from "react"
import "react-lazy-load-image-component/src/effects/blur.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import LazyLoad from "react-lazyload"
import { Carousel } from "react-responsive-carousel"

function SliderImages({ setIsOpen, images }) {
  return (
    <Carousel className="gallery__slider" autoPlay={true}>
      <div className="gallery__slider--box" onClick={() => setIsOpen(true)}>
        <LazyLoad height={200} offset={700} once>
          <img
            alt="img"
            src={images[0].src}
            className="gallery__slider--box--img"
          />
        </LazyLoad>
      </div>
      <div className="gallery__slider--box" onClick={() => setIsOpen(true)}>
        <LazyLoad height={200} offset={700} once>
          <img
            alt="img2"
            src={images[1].src}
            className="gallery__slider--box--img"
          />
        </LazyLoad>
      </div>
      <div className="gallery__slider--box" onClick={() => setIsOpen(true)}>
        <LazyLoad height={200} offset={700} once>
          <img
            alt="img2"
            src={images[2].src}
            className="gallery__slider--box--img"
          />
        </LazyLoad>
      </div>
    </Carousel>
  )
}

export default SliderImages
