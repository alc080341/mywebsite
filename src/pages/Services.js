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
          Experienced Oxford Developer - UX and SEO friendly web apps
        </title>
        <meta
          name="description"
          content="Experienced Oxford based Software Developer specialising in HTML, JavaScript (including Jquery and ReactJS), Wordpress, Apache Cordova, user experience, accessibility, SEO, and fixing website and issues."
        />
        <meta
          name="keywords"
          content="Web development Oxford, hybrid app, software developer oxford, HTML, react, CSS, JavaScript, responsive, SQL, free web design tutorial, how to code, easy to learn, learn coding, how do websites work, from scratch"
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


