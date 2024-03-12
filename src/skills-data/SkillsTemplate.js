import React from "react";
import skillsData from "./SkillsData";

function SkillsTemplate() {
    return (
        <div>
                {skillsData.map((skill, index) => (
                    <button key={index} type="button" className="btn btn-transparent text-light border rounded-pill text-uppercase">
                       {skill.skill} </button>
                ))}
            
        </div>
    )
}

export default SkillsTemplate;