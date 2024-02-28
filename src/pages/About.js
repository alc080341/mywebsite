import React, { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <div className="about fade-in">
        <div className="about-section">
          <div className="about-text-section">
            <h1>I have built many web based solutions</h1>
            <p>As a seasoned software developer, I offer a depth of experience in crafting innovative web-based solutions, harnessing a diverse array of cutting-edge technologies.</p>
            <p>Throughout my journey as a software developer, I've thrived within dynamic commercial environments, collaborating seamlessly within agile teams at multinational corporations. Yet, I've also taken the reins on independent projects, tailoring solutions to the unique needs of small institutions while nurturing personal growth and expertise.</p>
            <p>My contributions have spanned a wide spectrum of responsibilities, ranging from intricate user interface designs to the nuanced complexities of business logic and database architecture. Additionally, I've ventured into the realm of hybrid app development, crafting solutions for phones and tablets across both Android and iOS platforms.</p>
          </div>
          <div className="about-text-image">
            <div className="square square1">UX</div>
            <div className="square square2">JS</div>
            <div className="square square3">CSS</div>
          </div>
        </div>
        <div className="about-section">
          <div className="about-text-image">
            <div className="square square4">SQL</div>
            <div className="square square5">.net</div>
            <div className="square square6">C#</div>
          </div>
          <div className="about-text-section">
            <h3>Solutions to real-world business problems</h3>
            <p>Streamlined Payment System Integration:</p>
            <ul>
              <li><p>Engineered an automated XERO payment system integration, effectively eliminating manual invoice processing.</p></li>
              <li><p>Implemented requisite code and network API calls to facilitate automatic invoice generation upon customer request through the product's user interface.</p></li>
              <li><p>Ensured seamless creation of new invoices to replace expired ones, enhancing operational efficiency.</p></li>
            </ul>
            <p>Mobile App Development and Optimization:</p>
            <ul>
              <li><p>Developed Android and iOS versions of web-based software using the Apache Cordova environment.</p></li>
              <li><p>By leveraging Cordova, expanded the software's reach to a broader audience of mobile app users.</p></li>
              <li><p>Enhanced software responsiveness across various screen sizes, optimizing user experience for mobile and tablet users.</p></li>
            </ul>
          </div>
        </div>
        <div className="about-section">
          <div className="about-text-section">
            <h3>Solutions for small businesses</h3>
            <p>Optometrists' Questionnaire System:</p>
            <ul>
              <li><p>Created a streamlined questionnaire system tailored for a team of Optometrists.</p></li>
              <li><p>Facilitated the identification of 'red flag' patients, expediting their referral to appropriate treatment pathways.</p></li>
              <li><p>Significantly improved the efficiency of patient care by accelerating the transition from diagnosis to treatment.</p></li>
            </ul>
            <p>Bespoke portfolio and promotion websites</p>
            <ul>
              <li><p>Crafted a portfolio site for a decorator, a window cleaner, and a life coach, each tailored to their unique services and branding.</p></li>
              <li><p>Enabled these businesses to establish a professional online presence, expanding their reach and enhancing market visibility.</p></li>
            </ul>


          </div>
          <div className="about-text-image">
            <div className="square square7">Java</div>
            <div className="square square8">HTML</div>
            <div className="square square9">UI</div>
          </div>
        </div>
        <div className="about-section">
          <div className="about-text-image">
            <div className="square square10">Azure</div>
            <div className="square square11">Apps</div>
            <div className="square square12">Web</div>
          </div>
          <div className="about-text-section">
            <h3>My Approach</h3>
            <p>Software derives its essence from the individuals who engage with it—I prioritize user experience best practices throughout the design process. </p><p>This commitment encompasses designing with accessibility in mind, acknowledging the diverse needs of potential users across various devices and screen dimensions.</p><p> Additionally, it entails maintaining active stakeholder engagement at every stage of development.</p>
            <p><a href='mailto:chambersltony80@gmail.com'>Contact me</a> for more information on the projects I have been involved in, and how I could help you with your project(s).</p>
          </div>
        </div>
      </div>
    </>
  )
}
// shift alt f