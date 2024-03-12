import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostChangingCareer() {
  useEffect(() => {
    window.scrollTo(0, 0);
    let main = document.getElementById("main");
    if (main) {
      main.classList.remove("background");
    }
  }, []);

  return (
    <>
      <div className="code-chambers fade-in">
        <header>
          <h1 className="article-title">The Journey of Self-Discovery</h1>
          <p className="article-meta">
            Published on March 12, 2024 by John Doe
          </p>
        </header>
        <article>
          <p className="intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget ligula sit amet sapien vulputate eleifend. Sed viverra urna at
            sem malesuada, a vehicula sapien mollis.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lobortis odio ut justo convallis, ac sodales dolor convallis. Donec
            dapibus diam nec purus convallis, id feugiat nulla tempor.
          </p>

          <p>
            Nulla facilisi. Nulla facilisi. Nam varius semper lacus, vel
            ultricies tortor commodo vel. Nulla facilisi. Integer varius metus
            at purus congue commodo. Duis at diam sed ligula interdum bibendum
            vel sed ex. Aliquam erat volutpat.
          </p>

          <p>
            Phasellus rhoncus mauris vitae sapien posuere, sit amet ultricies
            sapien bibendum. Integer eget tortor id libero finibus consequat. Ut
            sed lobortis quam, eu aliquam quam.
          </p>

          <blockquote className="quote">
            "The journey of a thousand miles begins with one step." - Lao Tzu
          </blockquote>

          <p>
            Quisque auctor mauris quis urna consequat, nec pulvinar sem
            sagittis. In eget sapien vitae velit ultricies facilisis. Donec ut
            lacinia odio, id consequat ex. Aliquam vel velit bibendum, aliquet
            nulla at, molestie quam.
          </p>

          <p>
            Morbi sit amet lectus eu enim viverra congue. Donec fringilla diam
            vitae commodo cursus. Suspendisse commodo lorem nec mi efficitur, eu
            bibendum ligula dictum.
          </p>
        </article>
      </div>
    </>
  );
}

/**<div>
<iframe width="400" height="300" src="https://www.youtube.com/embed/m6Y_IrYo8BE" title="Web Development Foundations - Learn HTML, CSS &amp; JavaScript  - part 2. adding some basic HTML" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>**/
