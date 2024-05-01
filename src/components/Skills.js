import React from "react";
import SkillsTemplate from "../skills-data/SkillsTemplate";
import "../styles/Skills.css";

// add dice rolling for bonuses for fun after hitting button

function Skills() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column align-items-end align-items-md-start">
            <h2 className="skills-title component-title">SKILLS</h2>
            <h4 className="accent text-lowercase">Things I'm good at,</h4>
          </div>
        </div>
      </div>
      <SkillsTemplate />
    </div>
  );
}

export default Skills;
