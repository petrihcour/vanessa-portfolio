import React from "react";
import {
  slideInFromBottomVariant,
  fadeInFromBottom,
  fadeVariant,
} from "../animations/animations";
import AnimatedComponent from "../animations/AnimatedComponent";
import QuestData from "./QuestData";
import MarqueeButton from "../animations/MarqueeButton";
import "../styles/Quests.css";

function QuestTemplate() {
  const quests = QuestData.map((quest, index) => {
    let alignmentClass = "";
    let textPosition = "";

    // Alignment class based on position property of the quest
    switch (quest.position) {
      case "left":
        alignmentClass = "justify-content-xl-start";
        textPosition = quest.reversePosition
          ? "text-end text-xl-start"
          : "text-end text-xl-end";
        break;
      case "right":
        alignmentClass = "justify-content-xl-end";
        textPosition = quest.reversePosition
          ? "text-end text-xl-start"
          : "text-end text-xl-end";
        break;
      default:
        alignmentClass = "justify-content-xl-center";
        textPosition = quest.reversePosition
          ? "text-end text-xl-start"
          : "text-end text-xl-end";
    }

    let infoColumnOrderClass = "";
    let imageColumnOrderClass = "";

    if (quest.reversePosition) {
      infoColumnOrderClass = "order-xl-2";
      imageColumnOrderClass = "order-xl-1";
    } else {
      infoColumnOrderClass = "order-xl-1";
      imageColumnOrderClass = "order-xl-2";
    }

    return (
      <div key={index} className="container mt-5 m-xl-4">
        <div
          className={`row ${alignmentClass} ${textPosition} align-items-center`}
        >
          <div className={`col-xl-4 quest-info ${infoColumnOrderClass}`}>
            <AnimatedComponent variants={fadeInFromBottom}>
              <h4 className="component-title-sm text-uppercase">
                {quest.name}
              </h4>
            </AnimatedComponent>
            <AnimatedComponent variants={fadeVariant}>
              <p
                className="text-uppercase body-text quest-text d-none d-sm-block"
                style={{ fontSize: "0.9rem" }}
              >
                {quest.description}
              </p>
            </AnimatedComponent>
            <MarqueeButton
              href={quest.webUrl}
              type="button"
              label="Live Demo"
              aria-hidden="true"
              hasMarquee
              style={{
                fontSize: "1.1rem",
                backgroundColor: "#F2F2F5",
                color: "#191e24",
                fontWeight: "600",
              }}
              textColor="#191e24"
            />
            <MarqueeButton
              href={quest.gitHubUrl}
              type="button"
              label="GitHub"
              aria-hidden="true"
              hasMarquee
              style={{ fontSize: "1.1rem", fontWeight: "600" }}
            />
          </div>
          <div className={`col-xl-4 mt-2 mt-md-0 ${imageColumnOrderClass}`}>
            <div className="img-hover-zoom">
              <div className="zoom-container">
                <AnimatedComponent variants={slideInFromBottomVariant}>
                  <img
                    src={quest.imageUrl}
                    className="img-fluid"
                    alt={`${quest.name} application project screenshot`}
                  />
                </AnimatedComponent>
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
