import React, { useRef, useEffect, useState } from "react";

const ServicesComponent4 = (props) => {
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
        className={isVisible ? "services-section zoom-in" : "services-section"}
      >
        <div className="text-section">
          <h1>Let's make your product even greater together!</h1>
          <p>How else can I help?</p>
          <h3>Text editing</h3>
          <p>
            I am most happy to write and edit content text for your website. Having a well-written website will give your business a more professional image on the web.
          </p>
          <h3>SEO services</h3>
          <p>
            I can work on targeting and creating inbound links to your site, researching keywords/competitor keywords, and improving presence on social media platforms.
          </p>
          <h3>User Experience considerations</h3>
          <p>
            Are users complaining about your site? Perhaps too slow or hard to navigate? I can perform site evaluations to test for site speed/accessibility and find ways to improve the user experience.
          </p>
          <h3>Wordpress optimisation</h3>
          <p>
            Need a plugin that you can't find? Wordpress site just stopped working? Get in touch!
          </p>
          <h3>Advanced issues</h3>
          <p>
            I can help fix HTML, CSS or JavaScript (including ReactJS and Jquery) issues.
          </p>
          <h3>Turn website into an app!</h3>
          <p>
            I have experience in creating hybrid apps using Apache Cordova and Capacitor - these both allow web based code to be packaged as Android or IOS apps.
          </p>
          <p>
            If you already have a browser based application, this would allow quick development of apps
          </p>
          <p>
            I also have experience in fixing issues related to commericial Apache Cordova apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent4;
