import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AboutPageImg1 from "../images/about_pic.png";
import AboutPageImg2 from "../images/icon_sm1.png";
import AboutPageImg3 from "../images/icon_sm2.png";
import { Helmet } from "react-helmet";

export default function Home() {
  // ### RESET UI TO TOP OF PAGE
  useEffect(() => {
    window.scrollTo(0, 0);

    let main = document.getElementById("main");
    if (main) {
      main.classList.add("background");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Web Design Oxfordshire: Experienced Affordable Software Developer
        </title>
        <meta
          name="description"
          content="Small Business or Startup Website Design for 2024! Trust the expertise of an experienced freelance Software Developer, focused on crafting web solutions for every device, including Android and IOS. Designed for greate User Experience, Accessibility, and optimised for SEO."
        />
        <meta
          name="keywords"
          content="Web development Oxford, hybrid app, software developer oxford, HTML, react, CSS, JavaScript, responsive, SQL, free web design tutorial, how to code, easy to learn, learn coding, how do websites work, from scratch"
        />
      </Helmet>

      <div className="home fade-in">
        <div className="home-section-statement-1">
          <div>
            <div>
              <h1>
                Web {" "}
                <span className="font-marketing-colour">Design</span> services in Oxfordshire. Leave the
                <span className="font-marketing-colour"> Development</span> {" "} of your startup website or small application in the hands of an experienced Software Developer
              </h1>
            </div>
            <div>
              <Link to="/contact" className="btn font-marketing-fontlarge">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        <div className="home-section-statement home-section-statement-2">
          <div className="home-section-statement-wrapper">
            <div className="logo">
              <img src={AboutPageImg2} alt="Responsive web design - for every screen size" />
            </div>
            <div className="home-section-statement-txt">
              <p>
                <span className="font-marketing-colour">Design</span> for 
                great user experience, accessibility and responsiveness across
                all devices, and optimsed for search engines.
              </p>
            </div>
          </div>
        </div>
        <div className="home-section-image">
          <img src={AboutPageImg1} alt="JavaScript Developer for your website or small application" />
        </div>
        <div className="home-section-statement home-section-statement-3">
          <div className="home-section-statement-wrapper">
            <div className="logo">
              <img src={AboutPageImg3} alt="Web based apps for all devices including Android and IOS" />
            </div>
            <div className="home-section-statement-txt">
              <p>
                <span className="font-marketing-colour">Development</span> of
                web based apps using modern techniques. Turn an existing web application into an Android or an IOS app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
