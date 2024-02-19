import React from "react";
import skillsData from "../skills-data/SkillsData";
import "../styles/Skills.css";

// maybe frame the card for added design 
// add dice rolling for bonuses for fun 

function Skills() {
  const dottedUnderlineStyle = {
    textDecoration: "underline dotted",
    textUnderlineOffset: "0.2em",
  };

  return (
    <div className="p-3" id="skills">
      <h2 className="text-center p-3">SKILLS</h2>

      <div
        className="card mx-auto"
        style={{ maxWidth: "650px" }}
      >
        <div className="card-body">
          <table className="table table-hover table-bordered border-dark">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="bg-transparent pe-0"
                  style={dottedUnderlineStyle}
                  data-bs-toggle="tooltip"
                  title="PROFICIENCY IS MARKED BY THE FILLED IN RADIO BUTTON"
                >
                  PROF
                </th>
                <th scope="col" className="bg-transparent">
                  TYPE
                </th>
                <th scope="col" className="bg-transparent">
                  SKILL
                </th>
                <th
                  scope="col"
                  className="bg-transparent pe-0"
                  style={dottedUnderlineStyle}
                  title="PROFICIENCY BONUS IN D&D MEASURES SKILL PROFICIENCY. THE MAX IS 11 ON MY CHARACTER SHEET"
                >
                  BONUS
                </th>
              </tr>
            </thead>
            <tbody>
              {skillsData.map((skill, index) => (
                <tr key={index}>
                  <th scope="row" className="bg-transparent text-center">
                    {skill.proficiency === "expertise" ? (
                      <i
                        className="bi bi-circle-fill"
                        title="Expertise"
                      ></i>
                    ) : skill.proficiency === "proficient" ? (
                      <i
                        className="bi bi-circle-half mx-auto"
                        title="Proficient"
                      ></i>
                    ) : (
                      <i className="bi bi-circle" title="Not Proficient"></i>
                    )}
                  </th>
                  <td className="bg-transparent">{skill.type}</td>
                  <td className="bg-transparent" title={skill.skill}>
                    {skill.skill}
                  </td>
                  <td className="bg-transparent text-center">{skill.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Skills;
