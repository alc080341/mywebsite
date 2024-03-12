import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesComponent3 = (props) => {
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
          <h1>What type of design do you need? Here are a few examples of the types of design services that I typically provide:</h1>
          <h3>Portfolio website</h3>
          <p>
              A portfolio website is my basic service. This would include, for example, 4 or 5 pages, 1 or 2 special effects (for example, a slider or carousel - as per specification), a form or a blog (possibly both). Such simple sites can be coded from scratch and have the advantage of being fully unique (being coded from scratch gives you control over the design that you would struggle to achieve with a website creator or a site from a website designer who does not code!). As they are so simple, they are also extremely affordable, and I offer them from as little as £80. Such clients that benefit from these small sites include those that are self-employed such as those in the trades, coaches, or therapists.
          </p>
          <h3>Small shop/business site</h3>
          <p>
            These sites tend to require more work, multiple pages and facets, and would normally require a larger pre-design process. Do <Link to="/contact">Contact Me</Link> to find out more.          
          </p>
          <h3>Editing existing site</h3>
          <p>
            Maybe you have an existing Wordpress site running and you want things styled a certain way but have never worked with code and are not sure how to change things without ruining the site. Or, maybe you want a flash landing page that you have put on paper and want me to create.          
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent3;
