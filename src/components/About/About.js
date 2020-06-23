import React, { useRef } from "react";
import "./About.scss";
import "../../sass/_typography.scss";
import me from "../../assets/images/ab.jpg";
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
      y: -30,
      ease: "power4.out",
      stagger: {
        amount: 0.2,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -10,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.6
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <section ref={sectionRef} className="about fade-in">
      <img src={me} alt="about" className="about__photo" />
      <h4 className="about__heading">about me</h4>
      <p className="about__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo
      </p>
    </section>
  );
};
export default React.memo(About);
