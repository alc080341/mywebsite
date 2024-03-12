import React, { useRef, useEffect, useState } from "react";

const ServicesComponent1 = (props) => {
  const intersectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.2, // 0: element enters viewport, 1: element fully in viewport
      }
    );

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => {
      if (intersectionRef.current) {
        observer.unobserve(intersectionRef.current);
      }
    };
  }, []); // Run once when the component mounts

  return (
    <div>
      <div
        ref={intersectionRef}
        className={isVisible ? "services-section dark zoom-in" : "services-section dark"}
      >
        <div className="image-section"></div>
        <div className="text-section">
          <h1>A basic website? Full application?</h1>
          <p>
            I would love to develop your bespoke website, small application, or get involved in your project
            using my knowledge of software development for the web. I want to
            ensure that your product not only looks great, but also functions well.
            Basically, I want to ensure that we have a great product
            that suits your initial specifications.
          </p>
          <p>
            I code websites from scratch or, depending on your requirements,
            using an existing template in Wordpress. Either way, I work to make
            your website look exactly how you would like it, from layout to
            colour schemes and special effects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent1;
