import React from "react";
import MarqueeButton from "../animations/MarqueeButton";
import skillsData from "./SkillsData";

function SkillsTemplate() {
  return (
    <div>
      {skillsData.map((skill, index) => (
        <MarqueeButton key={index} type="button" label={skill.skill} hasMarquee />
      ))}
    </div>
  );
}

export default SkillsTemplate;