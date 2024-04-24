import React from "react";
import QuestTemplate from "../quest-data/QuestTemplate";
import star from "../images/accents/star.png";

// adjust quest intro be be flish with the star and accent text on same line

function Quests() {
  return (
    <div id="quests" className="container">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-end">
          <h4 className="accent quest-accent text-lowercase">
            {" "}
            <img
              src={star}
              alt="13 pointed star"
              className="star-img me-3"
            />{" "}
            Projects I have created,
          </h4>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-end">
          <div className="text-end body-text text-uppercase">
            Quests are how I level up!
          </div>
        </div>
        <div className="body-text text-uppercase">
          They're a big part of my adventures, showcasing tangible examples of
          my work and serving as a testament to my ability to confront intricate
          challenges, adapt to different technologies, and efficiently work
          these projects to completion.
        </div>
      </div>
      <QuestTemplate />
    </div>
  );
}

export default Quests;
