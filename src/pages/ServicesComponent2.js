import React, { useRef, useEffect, useState } from "react";

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
        className={isVisible ? "services-section zoom-in" : "services-section"}
      >
        <div className="text-section">
          <h1>Put an amazing stand out website on the map!</h1>
          <h2>I follow several principles that help ensure an amazing, functional finished product:</h2>
          <h3>Websites are responsive for all devices</h3>
          <p>
              Your website will automatically adapt and change according to whether it is being viewed on a phone or larger screen, to provide an optimal user experience.
          </p>
          <h3>Websites are compatible with all major browsers.</h3>
          <p>
          All code is produced to current standards and best practices. This helps to ensure that the site will be readable across all major browers, helping you to reach as wide an audience as possible.
          </p>
          <h3>Websites are search engine optimised</h3>
          <p>
          I use techniques to make your site attractive to search engines based on website design on-site best practices, which helps to improve the chance of your site being found easily when a user is searching for the type of service that you are providing. For example, it is important that sites load quickly, are easy to navigate and provide the user with interesting content to keep them coming back for more, as these can be ways to improve search engine rankings. I can also provide further assistance with off-site search engine optimisation, to help draw users toward your site.
          </p>
          <h3>Websites are designed with the user in mind.</h3>
          <p>
          User experience is of upmost importance when creating a professional site - it helps not only to keep your visitors on the site but also keeps them coming back, and I design sites and applications that are easy to understand and navigate. For example, I ensure that we are using good contrasting colours, and clear and concise progression throughout a site. Therefore, it is important that designs are produced with function rather than style (or at least a good balance) - in other words it is better to have designs that perform well and that are easy to use, rather than designs that are full of special effects.
          </p>
          <h3>Websites are created with a spark of imagination!</h3>
          <p>If you do not have ideas about your own design, I am more than happy to use my imagination and come up with a layout and design for your approval.
          </p>

        </div>
      </div>
    </div>
  );
};

export default ServicesComponent1;
