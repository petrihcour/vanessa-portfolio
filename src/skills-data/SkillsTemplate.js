import React from "react";
import MarqueeButton from "../animations/MarqueeButton";
import skillsData from "./SkillsData";

function SkillsTemplate() {
    return (
        <div>
                {skillsData.map((skill, index) => (
                    <MarqueeButton label={skill.skill} hasMarquee />
                    //    <button
                    //    key={index}
                    //    type="button"
                    //    className="btn btn-transparent border rounded-pill text-uppercase text-light"
                    //  >
                    //    <span className="default-text">{skill.skill}</span>
                    //    <div className="marquee-btn" aria-hidden="true">
                    //      <div className="marquee-btn-inner">
                    //        <span>{skill.skill}</span>
                    //        <span>{skill.skill}</span>
                    //        <span>{skill.skill}</span>
                    //        <span>{skill.skill}</span>
                    //        <span>{skill.skill}</span>
                    //        <span>{skill.skill}</span>
                    //      </div>
                    //    </div>
                    //  </button>
                ))}
            
        </div>
    )
}

export default SkillsTemplate;