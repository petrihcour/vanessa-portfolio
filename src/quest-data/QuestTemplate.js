import React from "react";
import QuestData from "./QuestData";
import MarqueeButton from "../animations/MarqueeButton";
import "../styles/Quests.css";

// need to adjust button to be small for quests

function QuestTemplate() {
  const quests = QuestData.map((quest, index) => {
    let alignmentClass = "";
    let textPosition = "";

    // Alignment class based on position property of the quest
    switch (quest.position) {
      case "left":
        alignmentClass = "justify-content-lg-start";
        textPosition = "text-end";
        break;
      case "right":
        alignmentClass = "justify-content-lg-end";
        break;
      default:
        alignmentClass = "justify-content-lg-center";
        textPosition = quest.reversePosition ? "text-start" : "text-end";
    }

    let infoColumnOrderClass = "";
    let imageColumnOrderClass = "";


    if (quest.reversePosition) {
      infoColumnOrderClass = "order-lg-2";
      imageColumnOrderClass = "order-lg-1";
    } else {;
      infoColumnOrderClass = "order-lg-1";
      imageColumnOrderClass = "order-lg-2";
    
    }

    return (
      <div key={index} className="container mt-5 m-lg-4">
        <div className={`row ${alignmentClass} ${textPosition} align-items-center`}>
          <div className={`col-lg-4 quest-info ${infoColumnOrderClass}`}>
            <h4 className="component-title-sm text-uppercase">{quest.name}</h4>
            <p className="text-uppercase body-text quest-text fs-6">
              {quest.description}
            </p>
            <div className="">
            <MarqueeButton
              href={quest.webUrl}
              label="Live Demo"
              hasMarquee
              style={{ fontSize: "1.2rem"}}
            />
            <MarqueeButton
              href={quest.gitHubUrl}
              label="GitHub"
              hasMarquee
              style={{ fontSize: "1.2rem"}}
            />
            </div>
          </div>
          <div className={`col-lg-4 mt-2 mt-md-0 ${imageColumnOrderClass}`}>
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
