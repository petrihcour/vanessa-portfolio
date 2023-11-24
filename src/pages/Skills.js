import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Skills() {
  const tooltipStyle = {
    opacity: 0.5, // Adjust the opacity value as needed
  };

  return (
    <div className="p-3">
      <h2 className="text-center p-3">SKILLS</h2>

      <div className="card" style={{ maxWidth: "540px" }}>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip style={tooltipStyle}>
                        PROFICIENCY IS MARKED BY THE FILLED IN RADIO BUTTON
                      </Tooltip>
                    }
                  >
                    <span
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Tooltip on top"
                    >
                      PROF
                    </span>
                  </OverlayTrigger>
                </th>
                <th scope="col">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip style={tooltipStyle}>
                        PROFICIENCY IS MARKED BY THE FILLED IN RADIO BUTTON
                      </Tooltip>
                    }
                  >
                    <span
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Tooltip on top"
                    >
                      TYPE
                    </span>
                  </OverlayTrigger>
                </th>
                <th scope="col">TECH SKILL</th>
                <th scope="col">BONUS</th>
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
