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
            <p>I am a software developer with a number of years of experience in building web based solutions using a variety of modern tech.</p>
            <p>I currently work in a commercial setting, with an agile team in a multinational company, where I have been involved in everything from user interface design to business logic and database table design. However, I have also built small independent projects, both for the benefit of small institutions, and for my own self improvement.</p>
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
            <h3>Valuable Commercial Solutions Examples</h3>
            <p>Integrated an automated XERO payment system, that eliminated the need for sending out invoices manually. Implemented the required code, and various network API calls, to create invoices automatically on customer request (from the current user interface of the product), or create new invoices when current ones expired.</p>
            <p>Developed app versions of web-based software, for both Android and IOS, using the Apache Cordova environment, which exposed software that was just web-based, to a far larger customer base of app users.
            Improved responsiveness of the software to cater for all screen sizes, further exposing the product to mobile and tablet users.</p>
          </div>
        </div>
        <div className="about-section">
          <div className="about-text-section">
            <h3>Independent Solutions Examples</h3>
            <p>Developed small questionnaire system for a team of Optometrists, which has helped them find 'red flag' patients faster, improving the efficiency of condition to treatment by putting patients on the correct referral pathway.</p>
            <p>Developed a Wordpress website, along with custom plugins, which helped to promote the Headington Hill park, it's events and wildlife.</p>
            <p>Developed a number of 'from scratch' custom websites to help promote a number of small businesses, including a portfolio site for a decorator, a window cleaner, and a life coach.</p>
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
            <h3>User-first design</h3>
            <p>Software is nothing without the people who use it - I consider user experience best practices throughout the design process.</p>
            <p>This includes designing for accessibility - considering the needs of potential users, and for a variety of different devices and screen sizes.</p>
            <p><a href='mailto:chambersltony80@gmail.com'>Contact me</a> for more information on the projects I have been involved in, and how I could help you with your project(s).</p>
          </div>
        </div>
      </div>
    </>
  )
}
// shift alt f