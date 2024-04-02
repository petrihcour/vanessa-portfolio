import React from "react";
// import vanessa from "../images/self/vanessa.png";
import "../styles/FeaturesAndTraits.css";

function FeaturesAndTraits() {
  return (
    <div id="features-traits" className="container">
      <div className="d-flex row md-w-75">
        <div className="d-flex row">
          <h2 className="features-traits-title component-title">
            FEATURES & TRAITS
          </h2>
          <p className="accent d-flex text-lowercase">Greetings Travelers,</p>
        </div>
        <div className="text-uppercase body-text col-md-6">
          <p>
            Let's go on an adventure! I create things with equal focus
            on beauty and functionality. I blend my background in leadership,
            project management, and intricate problem solving with software
            development, resulting in a unique mixture of skills and
            perspective. I've got an admiration for technology, an excitement
            for building meaningful connections, and a history of delivering
            impactful results. We'll weave the magic of technology and create
            experiences that reverberate across the internet.
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          {/* <img
            src={vanessa}
            alt="AI representation of Vanessa"
            className="vanessa-image img-fluid"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default FeaturesAndTraits;
