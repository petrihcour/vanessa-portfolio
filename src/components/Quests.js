import React from "react";
import {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInFromBottom,
  slideInFromRightVariant,
} from "../animations/animations";
import AnimatedComponent from "../animations/AnimatedComponent";
import QuestTemplate from "../quest-data/QuestTemplate";
import star from "../images/accents/star.png";

function Quests() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-end">
          <AnimatedComponent variants={fadeInFromLeft}>
            <h4 className="accent quest-accent text-lowercase">
              <img src={star} alt="13 pointed star" className="star-img me-3" />
              Projects I have created,
            </h4>
          </AnimatedComponent>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-end">
          <AnimatedComponent variants={fadeInFromRight}>
            <div className="text-end body-text text-uppercase">
              Quests are how I level up!
            </div>
          </AnimatedComponent>
        </div>
        <AnimatedComponent variants={fadeInFromBottom}>
          <div className="body-text text-uppercase">
            They're a big part of my adventures, showcasing tangible examples of
            my work and serving as a testament to my ability to confront
            intricate challenges, adapt to different technologies, and
            efficiently work these projects to completion.
          </div>
        </AnimatedComponent>
      </div>

      <QuestTemplate />
    </div>
  );
}

export default Quests;
