import React from "react";
import "./About.scss";
import "../../sass/_typography.scss";
import me from "../../assets/images/ab.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const About = (props) => {
  AOS.init();

  return (
    <React.Fragment>
      <h3 className="heading-about">cos ciekawego o mnie</h3>
      <section className="about">
        <span
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <img src={me} alt="about" className="about__photo " />
        </span>

        <span
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <p className="about__paragraph ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </p>
        </span>
      </section>
    </React.Fragment>
  );
};
export default React.memo(About);
