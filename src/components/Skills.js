import React from "react";
import SkillsTemplate from "../skills-data/SkillsTemplate";
import "../styles/Skills.css";

// add dice rolling for bonuses for fun after hitting button

function Skills() {
  return (
    <div id="skills" className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column align-items-end align-items-md-start">
            <h2 className="skills-title component-title">SKILLS</h2>
            <p className="accent text-lowercase">Things I'm good at,</p>
          </div>
        </div>
      </div>
      <SkillsTemplate />
    </div>
  );
}

export default Skills;
