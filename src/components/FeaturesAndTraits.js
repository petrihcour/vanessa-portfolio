import React from "react";
import vanessa from "../images/self/vanessa.jpeg";
import vanessa2 from "../images/self/vanessa-2.JPG";
import "../styles/FeaturesAndTraits.css";

function FeaturesAndTraits() {
  return (
    <div id="features-traits" className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="d-flex flex-column align-items-md-start">
            <div className="d-flex flex-column align-items-end">
            <h2 className="features-traits-title component-title">
              FEATURES & TRAITS
            </h2>
            <p className="accent text-lowercase">Greetings Travelers,</p>
            </div>
          </div>

          <div className="text-uppercase body-text">
            <div className="text-end">Let's go on an adventure!</div>I create
            things with equal focus on beauty and functionality. I blend my
            background in leadership, project management, and intricate problem
            solving with software development, resulting in a unique mixture of
            skills and perspective. I've got an admiration for technology, an
            excitement for building meaningful connections, and a history of
            delivering impactful results. We'll weave the magic of technology
            and create experiences that reverberate across the internet.
          </div>
        </div>
        <div className="col-lg-5 d-flex flex-column justify-content-start align-items-start">
          <img
            src={vanessa2}
            alt="AI representation of Vanessa"
            className="vanessa-image img-fluid rounded mt-5 mt-md-4"
          />
          <img
            src={vanessa}
            alt="AI representation of Vanessa"
            className="vanessa-image img-fluid rounded mt-3 mt-md-4"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesAndTraits;
