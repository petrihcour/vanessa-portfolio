import React from "react";
import vanessa from "../images/vanessa.jpeg";
import "../styles/Home.css";

// add animation for the unstyled list. shift one word at a time

function Home() {
  return (
    <div id="home">
      <div className="container home">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-1 text-center">I AM VANESSA</h1>
            <ul className="list-unstyled text-center">
              <li>
               HUMAN
              </li>
              <li>
                SORCERER
              </li>
              <li>
               SOFTWARE ENGINEER
              </li>
              <li>
                CHAOTIC CREATIVE
              </li>
            </ul>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={vanessa}
              alt="AI representation of Vanessa"
              className="w-75 border border-5 rounded-circle rounded-bottom-0 mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
