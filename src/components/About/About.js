import React from "react";
import "./About.scss";
import "../../sass/_typography.scss";
import FadeInElement from "../../UI/FadeInElement/FadeInElement";
import me from "../../assets/images/ab_1.jpg";
const About = (props) => {
  return (
    <section className="about">
      <div className="box">
        <FadeInElement>
          <div className="box__of-picture">
            <img src={me} alt="abt" className="box__of-picture--1"></img>
          </div>
        </FadeInElement>
        <div className="box__of-text">
          <p className="paragraph-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. aliquip ex ea commodo consequat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </section>
  );
};
export default React.memo(About);
