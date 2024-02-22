import React from "react";
import skillsData from "./SkillsData";

function SkillsTemplate() {
    return (
        <div>
                {skillsData.map((skill, index) => (
                    <button key={index} type="button" className="btn btn-transparent text-light border rounded-pill text-uppercase fs-4">
                       {skill.skill} </button>
                ))}
            
        </div>
    )
}

export default SkillsTemplate;