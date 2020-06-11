import React, { useRef } from "react";
import "./About.scss";
import "../../sass/_typography.scss";
import me from "../../assets/images/ab_3.jpg";
import { useIntersection } from "react-use";
import gsap from "gsap";

const About = (props) => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <section className="about">
      <h2 className="heading-about">About me</h2>
      <div ref={sectionRef} className="about__box fadeIn">
        <div className="about__box__of-picture ">
          <img
            src={me}
            alt="abt"
            className="about__box__of-picture--1 fadeIn"
          />
        </div>
        <div className="about__box__of-text fadeIn ">
          <h3 className="heading-name">Justyna Garbal</h3>
          <p className="paragraph-about ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </p>
        </div>
      </div>
    </section>
  );
};
export default React.memo(About);
