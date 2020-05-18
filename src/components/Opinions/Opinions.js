import React from "react";
import "./Opinions.scss";
import Slider from "infinite-react-carousel";

const Opinions = React.memo((props) => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    duration: 500,
  };
  return (
    <section className="opinions" id="opinions">
      <h2 className="heading-secondary">Co o mnie mówią</h2>
      <Slider className="box" {...settings}>
        <section className="box__of-text">
          <h3 className="heading-opinions">Adam Sandler</h3>
          <p className="paragraph-opinions">to bylo dobre</p>
        </section>
        <section className="box__of-text">
          <h3 className="heading-opinions">Jessica Parker</h3>
          <p className="paragraph-opinions">a to jeszcze lepsze</p>
        </section>
        <section className="box__of-text">
          <h3 className="heading-opinions">Ewa & Adam</h3>
          <p className="paragraph-opinions">a to juz wgl </p>
        </section>
        <section className="box__of-text">
          <h3 className="heading-opinions">Szrek</h3>
          <p className="paragraph-opinions">super super</p>
        </section>
      </Slider>
    </section>
  );
});
export default Opinions;
