import React from "react";
import QuestTemplate from "../quest-data/QuestTemplate";
import star from "../images/accents/star.png";

// need to fix how quests page looks and determine how i want to display my projects. it does not look good now
// do i want cards with each project? do i want a slide? make it smaller?

function Quests() {
  return (
    <div id="quests" className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column align-items-end align-items-md-start">
            <p className="accent text-lowercase">
              {" "}
              <img
                src={star}
                alt="13 pointed star"
                className="star-img me-3"
              />{" "}
              Projects I have created,
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="body-text text-uppercase col-md-7">
          <div className="d-flex flex-column">
            <div className="text-end">Quests are how I level up!</div>
            They're a big part of my adventures, showcasing examples of
            my work and my ability to confront challenges, adapt to different
            technologies, and efficiently complete projects.
          </div>
        </div>
      </div>
      <QuestTemplate />
    </div>
  );
}

export default Quests;
