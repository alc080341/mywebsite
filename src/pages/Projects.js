import React, { useEffect } from 'react';
import PortfolioPageImg1 from "../images/kevs_pic.jpg";
import PortfolioPageImg2 from "../images/recipeboxangular_pic.jpg";
import PortfolioPageImg3 from "../images/pyl_pic.jpg";
import PortfolioPageImg4 from "../images/gallery_pic.jpg";
import PortfolioPageImg5 from "../images/fohhp_pic.jpg";
import PortfolioPageImg6 from "../images/mecs_checks.png";
import PortfolioPageImg7 from "../images/questioncare_pic.jpg";
import PortfolioPageImg8 from "../images/weatherapp_pic.jpg";
//import PortfolioPageImg9 from "../images/moviesearch_pic.jpg";
import PortfolioPageImg10 from "../images/tictactoe_pic.jpg";
import PortfolioPageImg11 from "../images/wiki_search.jpg";
import PortfolioPageImg12 from "../images/pomodoro_pic.jpg";
import PortfolioPageImg13 from "../images/townsendwindows_pic.jpg";


export default function Projects() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
        <div className="portfolio fade-in">        
          <div className="portfolio-sub-title"><h1>In my free time, I create anything and everything - for the benefit of others, or just for fun! Check out a few of my projects</h1></div>
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg1} alt='Decorator website'/></div><p className='portfolio-section-title'>PORTFOLIO WEBSITE FOR DECORATOR</p><p>Using Jquery and foundation.css, I developed this simple website for a local decorating company. I also came up with the idea for the site theme, and developed the logo and the other blue icons used throughout the site. Finally, I coded the admin system used on the site, allowing for the decorator to write and edit blogs via a password encrypted interface.</p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg13} alt='Some alt'/></div><p className='portfolio-section-title'>WEBSITE FOR WINDOW CLEANER</p><p>Small website developed for window cleaner in JavaScript, CSS, HTML and PHP to help him promote his business.</p></div>
          </div>          
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg3} alt='Push Your Limits website'/></div><p className='portfolio-section-title'>PUSH YOUR LIMITS</p><p>I developed the Push Your Limits UK website for a Life Coaching business. Later coverted to Wordpress by developing custom Push Your Limits theme. I also developed site features including sliders and blog functionality.</p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg4} alt='Some alt'/></div><p className='portfolio-section-title'>IMAGE GALLERY</p><p>A nice looking image gallery that I also programmed as a widget for Wordpress, with the ability to add custom images and text, as well as other options. Do get in touch if you are interested in custom widgets being designed for your site. I can develop widgets that offer many features that are very easy for you to customise on the Wordpress admin back-end.</p></div>
          </div>          
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg5} alt='Friends of Headington Hill Park'/></div><p className='portfolio-section-title'>FRIENDS OF HEADINGTON HILL PARK</p><p>Developed Wordpress website for the friends of Headington Hill Park - intended to help promote the local wildlife and plantation within the park, as well as news updates and events.</p></div>
            <div className="portfolio-section-text portfolio-section-text-margin"><div className="portfolio-section-image"><img src={PortfolioPageImg6} alt='Some alt'/></div><p className='portfolio-section-title'>MECS CHECKS</p><p>This small interface was developed in my spare time to help a team of Optometrists cope with the issue of having a clear way of communicating red flag symptoms to clients before booking an appointment.</p></div>
          </div>          
          <div className="portfolio-section">
            <div className="portfolio-section-text"><div className="portfolio-section-image"><img src={PortfolioPageImg7} alt='Some alt'/></div><p className='portfolio-section-title'>QUESTION CARE</p><p>Developed this system in ReactJS and NodeJS using an SQL database, for a team of Optometrists to give them the means to add and maintain screening questionnaires</p></div>
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


