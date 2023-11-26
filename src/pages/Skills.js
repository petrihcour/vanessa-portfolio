import React from "react";

function Skills() {
    const dottedUnderlineStyle = {
        textDecoration: "underline dotted",
        textUnderlineOffset: "0.2em"
      };

  return (
    <div className="p-3">
      <h2 className="text-center p-3">SKILLS</h2>

      <div className="card mx-auto" style={{ maxWidth: "650px" }}>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <abbr style={dottedUnderlineStyle} title="PROFICIENCY IS MARKED BY THE FILLED IN RADIO BUTTON">
                    PROF
                  </abbr>
                </th>
                <th scope="col">TYPE</th>
                <th scope="col">SKILL</th>
                <th scope="col">
                  <abbr style={dottedUnderlineStyle}title="PROFICIENCY BONUS IN D&D MEASURES SKILL PROFICIENCY. THE MAX IS 11 ON MY CHARACTER SHEET">
                    BONUS
                  </abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
             
                <th scope="row">1</th>
                <td>Frontend</td>
                <td>HTML5</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Frontend</td>
                <td>JavaScript</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Frontend </td>
                <td>React</td>
                <td>@fat</td>
              </tr> <tr>
                <th scope="row">2</th>
                <td>Frontend</td>
                <td>CSS</td>
                <td>@fat</td>
              </tr> <tr>
                <th scope="row">2</th>
                <td>Frontend</td>
                <td>Bootstrap</td>
                <td>@fat</td>
              </tr> <tr>
                <th scope="row">2</th>
                <td>Backend</td>
                <td>Node Js</td>
                <td>@fat</td>
              </tr> <tr>
                <th scope="row">2</th>
                <td>Backend</td>
                <td>Express Js</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Backend</td>
                <td>PostgreSQL</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Backend</td>
                <td>Express Js</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Personal</td>
                <td>Project Management</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Personal</td>
                <td>Cross-Functional Collaborations</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Personal</td>
                <td>Root Cause Problem Solving</td>
                <td>@fat</td>
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
