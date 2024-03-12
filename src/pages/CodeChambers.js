import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CodeChambers() {

  useEffect(() => {
    window.scrollTo(0, 0);
    let main = document.getElementById("main");
    if(main)
    {
      main.classList.remove("background");
    }
  }, []);

  return (
    <>
      <div className="code-chambers fade-in">
        <div className="code-chambers-sub-title">
          <h1>Code Chambers</h1>
        </div>
        <div>
          <div>
            <p>(Started February 2024)</p>
            <p>
              Code Chambers is a 'knowledge base' where I will be sharing my
              current knowledge and experiences in Software Development,
              creative pursuits within the field including design and UX.
            </p>
          </div>
          <div class="code-chambers-section">
            <h3>Web Development Foundations</h3>
            <p>
              This playlist features a continuous series of tutorial videos
              where I guide you through the fundamentals of coding a website
              from scratch.
            </p>
            <p>
              I go through how HTML works on a website and, by following the
              videos, I hope to teach those new to web development the basics of
              coding, as well as the basics of software development, in an easy
              to follow manner.
            </p>
            <iframe
              class="code-chambers-video"
              allowFullScreen
              src="https://www.youtube.com/embed/videoseries?list=PLt1HN0-7gs71wCjbI2RQYeV0QCwlM4P2V"
              title="Web Development Foundations - Learn practical HTML, CSS &amp; JavaScript  - part 1. getting started"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}

/**<div>
<iframe width="400" height="300" src="https://www.youtube.com/embed/m6Y_IrYo8BE" title="Web Development Foundations - Learn HTML, CSS &amp; JavaScript  - part 2. adding some basic HTML" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>**/
/**
 *           <div className="blog-list">
            <div>
            <h1>Articles</h1>
            </div>
            <div className="blog-item">
              <h3 className="blog-title">Becoming a Software Developer after 35</h3>
              <p className="blog-date">March 10, 2024</p>
              <p className="blog-summary">
                In this article, I delve into my journey of transitioning into a developer role later in life, shedding light on the challenges and triumphs along the way. Yes, it is indeed possible to embark on this path, but it's crucial to brace yourself for the realities that lie ahead.
              </p>
              <Link to="/postchangingcareer">READ MORE</Link>
            </div>
          </div>

 * 
 */