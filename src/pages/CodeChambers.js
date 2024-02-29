
import React, { useEffect } from 'react';

export default function CodeChambers() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>    
      <div className="code-chambers fade-in">
        <div className="code-chambers-sub-title">
          <h1>Code Chambers</h1>
        </div>
        <div>
          <p>(Started February 2024)</p>
          <p>Code Chambers is a 'knowledge base' where I will be sharing my current knowledge and experiences in Software Development, creative pursuits within the field including design and UX.</p>
        </div>
        <div class="code-chambers-section">
          <h3>Web Development Foundations</h3>
          <p>This playlist contains an ongoing set of tutorial videos where I teach the basics of coding a website</p>
          <iframe class="code-chambers-video"  src="https://www.youtube.com/embed/videoseries?list=PLt1HN0-7gs71wCjbI2RQYeV0QCwlM4P2V" title="Web Development Foundations - Learn practical HTML, CSS &amp; JavaScript  - part 1. getting started" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
    )
}



/**<div>
<iframe width="400" height="300" src="https://www.youtube.com/embed/m6Y_IrYo8BE" title="Web Development Foundations - Learn HTML, CSS &amp; JavaScript  - part 2. adding some basic HTML" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>**/
