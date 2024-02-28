import React, { useEffect } from 'react';
import PortfolioPageImg1 from "../images/kevs_pic.jpg";
import PortfolioPageImg2 from "../images/recipeboxangular_pic.jpg";
import PortfolioPageImg3 from "../images/pyl_pic.jpg";
import PortfolioPageImg4 from "../images/gallery_pic.jpg";
import PortfolioPageImg5 from "../images/fohhp_pic.jpg";
import PortfolioPageImg6 from "../images/mecs_checks.png";
import PortfolioPageImg7 from "../images/questioncare_pic.jpg";
import PortfolioPageImg8 from "../images/weatherapp_pic.jpg";
import PortfolioPageImg10 from "../images/tictactoe_pic.jpg";
import PortfolioPageImg11 from "../images/wiki_search.jpg";
import PortfolioPageImg12 from "../images/pomodoro_pic.jpg";
import PortfolioPageImg13 from "../images/townsendwindows_pic.jpg";
import PortfolioPageImg14 from "../images/vespula_pic.png";
import PortfolioPageImg15 from "../images/certsuite_pic.png";
import PortfolioPageImg16 from "../images/fitcore_pic.jpg";


export default function Projects() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
        <div className="portfolio fade-in">        
          <div className="portfolio-sub-title">
            <h1>Project Highlights</h1>
            <p>This page represents a small sample of the projects I have been involved in as a software developer since starting my journey back in 2016. From my early university projects, during my time in the larger corporate world, working with small businesses, and for fun!</p>
          </div>
          <div className="portfolio-section-divider">RECENT</div>
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg15} alt='Megger CertSuite website'/></div><p className='portfolio-section-title'>ADDED DLRO2X TESTER SUPPORT IN CERTSUITE</p><p>Implemented functionality to convert byte data sent from the device, from the TCP stream and its payload, into a readable format. Subsequently, integrated these results into an existing user interface to display them as graphs and tables to users.</p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg16} alt='Megger CertSuite website'/></div><p className='portfolio-section-title'>FIT-IN</p><p>Currently working on a concept fitness app to help people to fit exercise within a busy lifestyle. This is prototype only at the moment.</p></div>
          </div>          
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg15} alt='Megger CertSuite website'/></div><p className='portfolio-section-title'>UX IMPROVEMENTS IN CERTSUITE</p><p>Implemented a bunch of user experience improvements to target 'pain points' experienced by users when using CertSuite user interface for the first time, based on complaints and feedback. This included making the flow of creating a first job easier. This resulted in a substantial reduction in complaints.</p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg15} alt='Megger CertSuite website'/></div><p className='portfolio-section-title'>ADDED MIT TESTER SUPPORT TO CERTSUITE</p><p>Translated Byte data from the MIT tester into CertSuite. Achieved this by reading device documentation to determine how to interpret the data, then 'mimicking' the same functionality in the CertSuite JavaScript code.</p></div>
          </div>          
          <div className="portfolio-section-divider">2022</div>
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg6} alt='Some alt'/></div><p className='portfolio-section-title'>MECS CHECKS</p><p>This small interface was developed in my spare time to help a team of Optometrists cope with the issue of having a clear way of communicating red flag symptoms to clients before booking an appointment.</p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg15} alt='Megger CertSuite website'/></div><p className='portfolio-section-title'>MFT X1 TESTER AND CERTSUITE DATA TRANSFER</p><p>Implemented a solution that allows byte data sent across BLE from the MFT X1 tester to be interpreted as results in CertSuite, and displayed on the user interface.</p></div>
          </div>          
          <div className="portfolio-section-divider">2021</div>
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg15} alt='Megger CertSuite website'/></div><p className='portfolio-section-title'>WORK WITH MEGGER LTD - CERTSUITE REBRANDING</p><p>Reworked Vespula user interface to adhere to Megger branding guidelines, following the aquisition of the Vespula software by Megger in 2020. Vespula then became CertSuite</p><p> <a href="certsuite.app">Click here</a> to go to CertSuite website </p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg15} alt='Megger CertSuite website'/></div><p className='portfolio-section-title'>INTEGRATED AUTOMATED PAYMENT SYSTEM IN CERTSUITE SOFTWARE</p><p>Engineered an automated payment system to streamline invoice management, eliminating manual invoicing processes. Collaborated with stakeholders to understand existing invoicing workflows and implemented automatic invoice creation and expiration renewal functionalities.</p></div>
          </div>          
          <div className="portfolio-section-divider">2019</div>
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg7} alt='Some alt'/></div><p className='portfolio-section-title'>QUESTION CARE</p><p>Developed this system in ReactJS and NodeJS using an SQL database, for a team of Optometrists to give them the means to add and maintain screening questionnaires</p><p> <a href="https://www.chamberscreative.co.uk/question_care/">Click here</a> to view initial prototype.</p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg14} alt='Some alt'/></div><p className='portfolio-section-title'>WORK ON VESPULA ELECTRICAL SOFTWARE</p><p>Spent much of the year in 2019 working on adding certificates to the Vespula Electrical Certification Software, as well as working on various user interface improvements. Vespula was aquired by Megger Ltd in 2020 and became CertSuite - so this site no longer exists.</p></div>
          </div>             
          <div className="portfolio-section-divider">2018</div>
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg5} alt='Friends of Headington Hill Park'/></div><p className='portfolio-section-title'>FRIENDS OF HEADINGTON HILL PARK</p><p>Developed Wordpress website for the friends of Headington Hill Park - intended to help promote the local wildlife and plantation within the park, as well as news updates and events.</p><p> <a href="https://friendsofheadingtonhillpark.org.uk/">Click here</a> to go to Headington Hill Park site </p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg6} alt='Some alt'/></div><p className='portfolio-section-title'>MECS CHECKS</p><p>This small interface was developed in my spare time to help a team of Optometrists cope with the issue of having a clear way of communicating red flag symptoms to clients before booking an appointment.</p></div>
          </div>          
          <div className="portfolio-section-divider">2017</div>
          <div className="portfolio-section">
            <div className="portfolio-section-text">
              <div className="portfolio-section-image"><img src={PortfolioPageImg1} alt='Decorator website'/></div><p className='portfolio-section-title'>PORTFOLIO WEBSITE FOR DECORATOR</p><p>Employing Jquery and Foundation.css, I crafted a sleek website for a local decorating enterprise. I conceptualized the site theme, meticulously designing the logo and distinctive blue icons that grace every page. Additionally, I engineered an intuitive admin system, secured with password encryption, empowering the decorator to effortlessly compose and modify blogs.</p><p> <a href="https://www.chamberscreative.co.uk/kevs/">Click here</a> to go to Kevs Decorators </p></div>
              <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg3} alt='Push Your Limits website'/></div><p className='portfolio-section-title'>PUSH YOUR LIMITS</p><p>I crafted the Push Your Limits UK website for a Life Coaching enterprise, tailoring it to have a pretty unique look. Subsequently, I seamlessly transitioned it to WordPress, fashioning a bespoke Push Your Limits theme. Additionally, I integrated dynamic features such as sliders and robust blog functionality to enhance user experience.</p><p> Official site no longer up and running, but go here to see original BETA version - <a href="https://www.chamberscreative.co.uk/push_your_limits/">Click here</a></p></div>
          </div>          
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg13} alt='Some alt'/></div><p className='portfolio-section-title'>WEBSITE FOR WINDOW CLEANER</p><p>I designed and developed a compact website tailored for a window cleaning service, leveraging a blend of JavaScript, CSS, HTML, and PHP technologies. This site served as a tool to enhance the visibility and promotion of the window cleaner's business.</p><p> Official site no longer up and running, but go here to see original BETA version - <a href="https://www.chamberscreative.co.uk/townsend_windows/">Click here</a></p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg4} alt='Some alt'/></div><p className='portfolio-section-title'>IMAGE GALLERY</p><p>I've crafted a visually stunning image gallery, meticulously designed and programmed as a widget for WordPress. It boasts customizable options for adding text, images, and more, ensuring a personalized touch for your website. If you're keen on enhancing your site with custom widgets, feel free to reach out. I specialize in developing widgets that offer a myriad of features, effortlessly customizable through the WordPress admin back-end.</p></div>
          </div>          
          <div className="portfolio-section-divider">2016</div>
          <div className="portfolio-section">
          <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg7} alt='Some alt'/></div><p className='portfolio-section-title'>QUESTION CARE</p><p>Developed this system in ReactJS and NodeJS using an SQL database, for a team of Optometrists to give them the means to add and maintain screening questionnaires</p><p> <a href="https://www.chamberscreative.co.uk/question_care/">Click here</a> to view initial prototype.</p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg8} alt='Some alt'/></div><p className='portfolio-section-title'>SIMPLE WEATHER</p><p>Simple weather was developed using the Open Weather API and pure Javascript. An application that provides immediate, up-to-date weather data in one place.</p></div>
          </div>          
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg11} alt='Some alt'/></div><p className='portfolio-section-title'>WIKI VIEWER</p><p>An application that allows you to search wiki files in one place very quickly. Built using MediaWiki API, and JavaScript.</p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg10} alt='Some alt'/></div><p className='portfolio-section-title'>TICTACTOE</p><p>Simple game of Tictactoe developed just for fun - in HTML, JavaScript and CSS.</p></div>
          </div>                
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg2} alt='Recipe box website'/></div><p className='portfolio-section-title'>RECIPE BOX</p><p>Developed using react.js framework and react-bootstrap, this front-end interface allows for adding a recipe, editing/deleting a recipe and searching for a recipe. As an added bonus, it also has a feature called 'shopping list' which allows a user to add the ingredients of a recipe to a shopping list for easy reference when in the supermarket!</p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg12} alt='Some alt'/></div><p className='portfolio-section-title'>POMODORO CLOCK</p><p>Clock for keeping track of study vs rest intervals. Made using JavaScript and CSS.</p></div>
          </div>            
       </div>
    </>
  )
}


