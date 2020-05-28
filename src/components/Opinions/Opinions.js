import React from "react";
import "./Opinions.scss";
import Slider from "infinite-react-carousel";

const Opinions = (props) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    duration: 500,
  };
  return (
    <div>
      <h2 className="heading-secondary">Co o mnie mowia</h2>
      <Slider className="bx" {...settings}>
        <section className="bx__of-txt">
          <h3 className="heading-opinions">Adam Sandler</h3>
          <p className="paragraph-opinions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
        <section className="bx__of-txt">
          <h3 className="heading-opinions">Jessica Parker</h3>
          <p className="paragraph-opinions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
        <section className="bx__of-txt">
          <h3 className="heading-opinions">Ewa & Adam</h3>
          <p className="paragraph-opinions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
        <section className="bx__of-txt">
          <h3 className="heading-opinions">Szymon</h3>
          <p className="paragraph-opinions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
      </Slider>
    </div>
  );
};
export default React.memo(Opinions);
