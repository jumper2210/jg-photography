import React from "react";
import "./About.scss";
const About = (props) => {
  return (
    <section className="about">
      <div className="box">
        <div className="box__of-picture">picture</div>
        <div className="box__of-text">text</div>
      </div>
    </section>
  );
};
export default React.memo(About);
