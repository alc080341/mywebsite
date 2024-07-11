import React, { useEffect } from 'react';
import ServicesComponent1 from "./ServicesComponent1";
import ServicesComponent2 from "./ServicesComponent2";
import ServicesComponent3 from "./ServicesComponent3";
import ServicesComponent4 from "./ServicesComponent4";
import { Helmet } from 'react-helmet';

export default function Projects() {

  useEffect(() => {
    window.scrollTo(0,0);
    let main = document.getElementById("main");
    if(main)
    {
      main.classList.remove("background");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
            Web Design Oxfordshire: Experienced Affordable Software Developer - web design
         </title>
        <meta
          name="description"
          content="Small Business or Startup Website Design for 2024! Trust the expertise of an experienced freelance Software Developer, focused on crafting web solutions for every device, including Android and IOS. Designed for greate User Experience, Accessibility, and optimised for SEO."
        />
        <meta
          name="keywords"
          content="Web development Oxford, hybrid app - apache cordova developer."
        />
      </Helmet>
      <div className="services fade-in">  
          <ServicesComponent1 />
          <ServicesComponent2 />
          <ServicesComponent3 />
          <ServicesComponent4 />
        </div>
    </>
  )
}


