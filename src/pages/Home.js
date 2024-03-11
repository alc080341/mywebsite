import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import AboutPageImg1 from "../images/about_pic.png";
import AboutPageImg2 from "../images/icon_sm1.png";
import AboutPageImg3 from "../images/icon_sm2.png";

export default function Home() {

  // ### RESET UI TO TOP OF PAGE 
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <div className="home fade-in">
        <div className="home-section-statement-1"><div><div><h1>Experienced Software Developer specialising in the <span className="font-marketing-colour">design</span> and <span className="font-marketing-colour">development</span> of valuable web-based solutions, both independently and in a commercial environment.</h1></div><div><Link to="/contact" className='btn font-marketing-fontlarge'>Contact Me</Link></div></div></div>
        <div className="home-section-statement home-section-statement-2"><div className="home-section-statement-wrapper"><div className="logo"><img src={AboutPageImg2} alt="icon 1 - phone"/></div><div className="home-section-statement-txt"><p><span className="font-marketing-colour">Design</span> for optimal user experience, accessibility and responsiveness across all devices.</p></div></div></div>
        <div className="home-section-image"><img src={AboutPageImg1} alt="Laptop, tablet and phone image"/></div>
        <div className="home-section-statement home-section-statement-3"><div className="home-section-statement-wrapper"><div className="logo"><img src={AboutPageImg3} alt="icon 2 - tablet"/></div><div className="home-section-statement-txt"><p><span className="font-marketing-colour">Development</span> of web-based apps using modern techniques for optimal performance.</p></div></div></div>        
      </div>
    </>
  )
}
