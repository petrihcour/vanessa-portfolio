import React from "react";
import QuestData from "./QuestData";
import MarqueeButton from "../animations/MarqueeButton";
import "../styles/Quests.css";

// need to adjust button to be small for quests

function QuestTemplate() {
  const quests = QuestData.map((quest, index) => (
    <div key={index}>
      <h4 className="component-title-sm text-uppercase">{quest.name}</h4>
      <p className="text-uppercase body-text fs-6">{quest.description}</p>
      <MarqueeButton
        href={quest.webUrl}
        label="Live Demo"
        hasMarquee
        className="btn-sm"
      />
      <MarqueeButton
        href={quest.gitHubUrl}
        label="GitHub"
        hasMarquee
        className="btn-sm"
      />
      <br />
      <div className="img-hover-zoom">
        <div className="zoom-container">
          <img
            src={quest.imageUrl}
            className="w-50"
            alt={`${quest.name} application project screenshot`}
          />
        </div>
      </div>
    </div>
  ));

  return <div>{quests}</div>;
}

export default QuestTemplate;
