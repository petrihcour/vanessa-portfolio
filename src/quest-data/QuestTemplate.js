import React from "react";
import QuestData from "./QuestData";
import MarqueeButton from "../animations/MarqueeButton";
import "../styles/Quests.css";

// need to adjust button to be small for quests

function QuestTemplate() {
  const quests = QuestData.map((quest, index) => {
    let alignmentClass = "";

    // Alignment class based on position property of the quest
    switch (quest.position) {
      case "left":
        alignmentClass = "justify-content-lg-start";
        break;
      case "right":
        alignmentClass = "justify-content-lg-end";
        break;
      default:
        alignmentClass = "justify-content-lg-center";
    }

    return (
      <div key={index} className="container pt-3 m-lg-5">
        <div className={`row ${alignmentClass} align-items-center`}>
          <div className="col-lg-4 quest-info">
            <h4 className="component-title-sm text-uppercase">{quest.name}</h4>
            <p className="text-uppercase body-text quest-text fs-6">
              {quest.description}
            </p>
            <MarqueeButton
              href={quest.webUrl}
              label="Live Demo"
              hasMarquee
              className=""
            />
            <MarqueeButton
              href={quest.gitHubUrl}
              label="GitHub"
              hasMarquee
              className=""
            />
          </div>
          <div className="col-lg-4 mt-2 mt-md-0">
            <div className="img-hover-zoom">
              <div className="zoom-container">
                <img
                  src={quest.imageUrl}
                  className="img-fluid"
                  alt={`${quest.name} application project screenshot`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{quests}</div>;
}

export default QuestTemplate;
