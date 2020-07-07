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
    <Slider className="opinions" {...settings}>
      <div className="opinions__box">
        <h3 className="names"> Lorem ipsum </h3>
        <p className="paragraph-opinions">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="opinions__box">
        <h3 className="names"> Lorem ipsum </h3>
        <p className="paragraph-opinions">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="opinions__box">
        <h3 className="names"> Lorem ipsum </h3>
        <p className="paragraph-opinions">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="opinions__box">
        <h3 className="names"> Lorem ipsum </h3>
        <p className="paragraph-opinions">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </Slider>
  );
};
export default React.memo(Opinions);
