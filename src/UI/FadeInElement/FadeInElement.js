import React, { useEffect, useRef, useState } from "react";
import "./FadeInElement.scss";

const FadeInElement = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${
        isVisible ? "fade-in-section__is-visible" : ""
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};
export default FadeInElement;
