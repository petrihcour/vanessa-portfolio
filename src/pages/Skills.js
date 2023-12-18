import React from "react";
import "../styles/Skills.css";

function Skills() {
  const dottedUnderlineStyle = {
    textDecoration: "underline dotted",
    textUnderlineOffset: "0.2em",
  };

  return (
    <div className="p-3">
      <h2 className="text-center p-3">SKILLS</h2>

      <div className="card mx-auto bg-transparent" style={{ maxWidth: "650px" }}>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="bg-transparent">
                  <abbr
                    style={dottedUnderlineStyle}
                    title="PROFICIENCY IS MARKED BY THE FILLED IN RADIO BUTTON"
                  >
                    PROF
                  </abbr>
                </th>
                <th scope="col" className="bg-transparent">TYPE</th>
                <th scope="col" className="bg-transparent">SKILL</th>
                <th scope="col" className="bg-transparent">
                  <abbr
                    style={dottedUnderlineStyle}
                    title="PROFICIENCY BONUS IN D&D MEASURES SKILL PROFICIENCY. THE MAX IS 11 ON MY CHARACTER SHEET"
                  >
                    BONUS
                  </abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="bg-transparent">1</th>
                <td className="bg-transparent">Frontend</td>
                <td className="bg-transparent">HTML5</td>
                <td className="bg-transparent">@mdo</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Frontend</td>
                <td className="bg-transparent">JavaScript</td>
                <td className="bg-transparent">@fat</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Frontend </td>
                <td className="bg-transparent">React</td>
                <td className="bg-transparent">@fat</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Frontend</td>
                <td className="bg-transparent">CSS</td>
                <td className="bg-transparent">@fat</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Frontend</td>
                <td className="bg-transparent">Bootstrap</td>
                <td className="bg-transparent">@fat</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Backend</td>
                <td className="bg-transparent">Node Js</td>
                <td className="bg-transparent">@fat</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Backend</td>
                <td className="bg-transparent">Express Js</td>
                <td className="bg-transparent">@fat</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Backend</td>
                <td className="bg-transparent">PostgreSQL</td>
                <td className="bg-transparent">@fat</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Backend</td>
                <td className="bg-transparent">Express Js</td>
                <td className="bg-transparent">@fat</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Personal</td>
                <td className="bg-transparent">Project Management</td>
                <td className="bg-transparent">@fat</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Personal</td>
                <td className="bg-transparent">Cross-Functional Collaborations</td>
                <td className="bg-transparent">@fat</td>
              </tr>
              <tr>
                <th scope="row" className="bg-transparent">2</th>
                <td className="bg-transparent">Personal</td>
                <td className="bg-transparent">Root Cause Problem Solving</td>
                <td className="bg-transparent">@fat</td>
              </tr>
            </tbody>
          </table>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Card subtitle
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
