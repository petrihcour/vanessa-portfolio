import React from "react";
import {
  fadeVariant,
  fadeInFromLeft,
  fadeInFromBottom,
} from "../animations/animations";
import AnimatedComponent from "../animations/AnimatedComponent";
import SkillsTemplate from "../skills-data/SkillsTemplate";
import "../styles/Skills.css";

function Skills() {
  return (
    <AnimatedComponent variants={fadeVariant}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column align-items-end align-items-md-start">
              <AnimatedComponent variants={fadeInFromLeft}>
                <h2 className="skills-title component-title">SKILLS</h2>
              </AnimatedComponent>
              <AnimatedComponent variants={fadeInFromBottom}>
                <h4 className="accent text-lowercase">Things I'm good at,</h4>
              </AnimatedComponent>
            </div>
          </div>
        </div>

        <SkillsTemplate />
      </div>
    </AnimatedComponent>
  );
}

export default Skills;
