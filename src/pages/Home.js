import React from "react";
import featuresAndTraits from "../images/featuresAndTraits.jpeg";

// add animation for the unstyled list. shift one word at a time

function Home() {
  return (
    <div id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mt-5">
            <img
              src={featuresAndTraits}
              alt="AI representation of Vanessa"
              className="img-fluid rounded-circle border border-secondary-subtle"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-1 text-center">I'm Vanessa.</h1>
            <ul className="list-unstyled text-center">
              <li>
               Human.
              </li>
              <li>
                Sorcerer.
              </li>
              <li>
               Software Engineer.
              </li>
              <li>
                Chaotic Creative.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
