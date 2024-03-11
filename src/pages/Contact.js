import React, { useEffect, useState, createRef, Component } from "react";

export default function Contact() {
  var email = React.createRef();
  var subject = React.createRef();
  var message = React.createRef();
  const [msg, setResponse] = useState(<p></p>);

  // ### RESET UI TO TOP OF PAGE
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://www.chamberscreative.co.uk/send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.current.value,
          subject: subject.current.value,
          message: message.current.value,
        }),
      });

      const data = await response.json();
      setResponse(<p className="success">{data.message}</p>);
    } catch (error) {
      console.log(error)
      setResponse(<p className="error">Sorry, there has been an issue</p>);
    }
  };

  return (
    <>
      <div className="contact fade-in">
      <div className="container">
          <h2>Contact Me</h2>
          <div>{msg}</div>
          <form onSubmit={handleSubmit}>  
            <label htmlFor="recipient">Your Email:</label>
            <input
              type="email"
              ref={email}
              required
            />
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              ref={subject}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              ref={message}
              required
            ></textarea>
            <div>
            <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

