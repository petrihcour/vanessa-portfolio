import React from "react";
import vanessa from "../images/vanessa.jpeg";
import "../styles/Home.css"; 

function Home() {
  return (
    <div id="home" className="container d-flex align-items-center justify-content-center">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 pt-3">
          <h5 className="text-center">GREETINGS, TRAVELERS</h5>
          <h1 className="text-center">I AM VANESSA</h1>
          <p className="list-unstyled text-center">
            a human, sorcerer, software engineer, chaotic creative
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
  );
}

export default Home;