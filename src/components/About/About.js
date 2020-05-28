import React from "react";
import "./About.scss";
import "../../sass/_typography.scss";
import FadeInElement from "../../UI/FadeInElement/FadeInElement";
const About = (props) => {
  return (
    <section className="about">
      <FadeInElement>
        <div className="box">
          <div className="box__of-picture">
            <p className="paragraph-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="box__of-text">
            <p className="paragraph-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </FadeInElement>
    </section>
  );
};
export default React.memo(About);
