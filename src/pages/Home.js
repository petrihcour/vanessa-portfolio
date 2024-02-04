import React from "react";
import featuresAndTraits from "../images/featuresAndTraits.jpeg";

//  small photo, name, class, level, subclass (software developer), brief introduction
// possible stats str, dex, wis, cha, int, con as buttons to click to read details below. (unsure about this part)

function Home() {
  return (
    <div id="home" className="p-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={featuresAndTraits}
              alt="AI representation of Vanessa"
              className="w-100 rounded-circle border border-secondary-subtle p-2"
            />
          </div>
          <div className="col-md-6">
            <h1 className="mb-4 display-1">I'm Vanessa.</h1>
            <ul className="list-unstyled">
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
