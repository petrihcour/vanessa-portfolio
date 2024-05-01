import React from "react";
import MarqueeButton from "../animations/MarqueeButton";
import skillsData from "./SkillsData";

function SkillsTemplate() {
  return (
    <ul className="skills-list d-flex flex-wrap">
      {skillsData.map((skill, index) => (
        <li key={index}>
        <MarqueeButton type="button" label={skill.skill} hasMarquee />
        </li>
      ))}
    </ul>
  );
}

export default SkillsTemplate;