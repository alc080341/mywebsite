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
          Experienced Oxford based web designer and developer. Design for user experience considerations, and Apache Cordova development.
         </title>
        <meta
          name="description"
          content="Seasoned Software Developer in Oxford, Focused on HTML, JavaScript (including jQuery and ReactJS), Wordpress, and Apache Cordova Development. Dedicated to Crafting Solutions for Optimal User Experience, Accessibility, as well as offering SEO services to help rank pages higher."
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


