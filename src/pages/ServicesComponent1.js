import React, { useRef, useEffect, useState } from "react";
import ServicesPageImg1 from "../images/web-design.jpg";

const ServicesComponent1 = (props) => {
  const intersectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if(entry.isIntersecting)
        {
          observer.disconnect();
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0, // 0: element enters viewport, 1: element fully in viewport
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
        <div className="text-section">
          <h1>A basic website? Full application?</h1>
          <p>
            Web design services in Oxfordshire. I specialize in web design and development, offering bespoke solutions tailored to your needs. Whether you're looking for a freelance web designer, I'm here to create visually stunning and functional websites that meet your specifications.
          </p>
          <p>
            My approach combines web design expertise to ensure your website not only looks great but also performs well in search engines. Whether you're a startup seeking website design or need a small application developed, I can assist you with custom solutions.          
          </p>
          <p>
            I develop websites from scratch or customize existing WordPress templates based on your preferences. From layout and color schemes to special effects, I work closely with you to bring your vision to life. Let's collaborate to create a standout product that aligns perfectly with your goals.
          </p>
        </div>
        <div className="img-section">
          <img src={ServicesPageImg1} alt="Oxford Web Design for a great user experience"/>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent1;
