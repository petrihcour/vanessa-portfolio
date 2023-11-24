import React from "react";

function Skills() {
 

  return (
    <div className="p-3">
      <h2 className="text-center p-3">SKILLS</h2>

      <div className="card" style={{ maxWidth: "540px" }}>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <abbr title="PROFICIENCY IS MARKED BY THE FILLED IN RADIO BUTTON">
                    PROF
                  </abbr>
                </th>
                <th scope="col">TYPE</th>
                <th scope="col">TECH SKILL</th>
                <th scope="col">
                  <abbr title="PROFICIENCY BONUS IN D&D MEASURES SKILL PROFICIENCY. THE MAX IS 11 ON MY CHARACTER SHEET">
                    BONUS
                  </abbr>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
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
