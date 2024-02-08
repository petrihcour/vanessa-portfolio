import React from "react";
import vanessa from "../images/vanessa.jpeg";
import "../styles/Home.css";

// add animation for the unstyled list. shift one word at a time

function Home() {
  return (
    <div id="home" className="">
      <div className="container home">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h5 className="text-center">GREETINGS, TRAVELERS</h5>
            <h1 className="text-center">I AM VANESSA</h1>
            <p className="list-unstyled text-center">
              human, sorcerer, software engineer, chaotic creative
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={vanessa}
              alt="AI representation of Vanessa"
              className="vanessa-image border border-5 rounded-circle rounded-bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
