import React from "react";
import QuestTemplate from "../quest-data/QuestTemplate";

// need to fix how quests page looks and determine how i want to display my projects. it does not look good now
// do i want cards with each project? do i want a slide? make it smaller?

function Quests() {
  return (
    <div id="quests" className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column align-items-end align-items-md-start">
            <h2 className="quests-title component-title">QUESTS</h2>
            <p className="accent text-lowercase">I built these projects,</p>
          </div>
        </div>
      </div>
      <div className="body-text text-uppercase">
        <div className="text-end">Quests are how I level up!</div>
        They're a big part of my adventures, showcasing tangible examples of my
        work and serving as a testament to my ability to confront intricate
        challenges, adapt to different technologies, and efficiently work these
        projects to completion.
      </div>
      <QuestTemplate />
    </div>
  );
}

export default Quests;