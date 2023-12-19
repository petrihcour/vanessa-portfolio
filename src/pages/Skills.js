import React, { useEffect } from "react";
import { createPopper } from "@popperjs/core";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Skills.css";

function Skills() {
  useEffect(() => {
    // Initialize tooltips after the component has mounted
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach((tooltip) => {
      createPopper(tooltip, null, {
        placement: "right",
      });
    });
  }, []);

  const dottedUnderlineStyle = {
    textDecoration: "underline dotted",
    textUnderlineOffset: "0.2em",
  };

  // bonuses 
  // might implement dice rolling for bonus 
  const proficiencyBonus = 3;
  const expertiseBonus = proficiencyBonus + proficiencyBonus;

  const skillsData = [
    {
      proficiency: "expertise",
      type: "Frontend",
      skill: "Bootstrap",
      bonus: expertiseBonus,
    },
    {
      proficiency: "proficient",
      type: "Personal",
      skill: "Cross-Functional Collaborations",
      bonus: proficiencyBonus,
    },
    {
      proficiency: "proficient",
      type: "Frontend",
      skill: "CSS",
      bonus: proficiencyBonus,
    },
    {
      proficiency: "proficient",
      type: "Backend",
      skill: "Express Js",
      bonus: proficiencyBonus,
    },
    {
      proficiency: "proficient",
      type: "Frontend",
      skill: "HTML5",
      bonus: proficiencyBonus,
    },
    {
      proficiency: "proficient",
      type: "Frontend",
      skill: "JavaScript",
      bonus: proficiencyBonus,
    },
    {
      proficiency: "proficient",
      type: "Backend",
      skill: "Node Js",
      bonus: proficiencyBonus,
    },
    {
      proficiency: "proficient",
      type: "Backend",
      skill: "PostgreSQL",
      bonus: proficiencyBonus,
    },
    {
      proficiency: "expertise",
      type: "Personal",
      skill: "Project Management",
      bonus: expertiseBonus,
    },
    {
      proficiency: "proficient",
      type: "Frontend",
      skill: "React",
      bonus: proficiencyBonus,
    },
    {
      proficiency: "expertise",
      type: "Personal",
      skill: "Root Cause Problem Solving",
      bonus: expertiseBonus,
    },
  ];

  return (
    <div className="p-3">
      <h2 className="text-center p-3">SKILLS</h2>

      <div
        className="card mx-auto bg-transparent border-dark"
        style={{ maxWidth: "650px" }}
      >
        <div className="card-body">
          <table className="table table-hover table-bordered border-dark">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="bg-transparent"
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
                  className="bg-transparent"
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
                  <th scope="row" className="bg-transparent">
                    {skill.proficiency === "expertise" ? (
                      <i
                        className="bi bi-circle-fill"
                        data-bs-toggle="tooltip"
                        title="Expertise"
                      ></i>
                    ) : skill.proficiency === "proficient" ? (
                      <i
                        className="bi bi-circle-half mx-auto"
                        data-bs-toggle="tooltip"
                        title="Proficient"
                      ></i>
                    ) : (
                      <i
                        className="bi bi-circle"
                        data-bs-toggle="tooltip"
                        title="Not Proficient"
                      ></i>
                    )}
                  </th>
                  <td className="bg-transparent">{skill.type}</td>
                  <td className="bg-transparent">{skill.skill}</td>
                  <td className="bg-transparent">{skill.bonus}</td>
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
