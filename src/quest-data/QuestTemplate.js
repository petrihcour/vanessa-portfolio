import React from "react";
import QuestData from "./QuestData";
import "../styles/Quests.css";

function QuestTemplate() {
  const quests = QuestData.map((quest, index) => (
    <div key={index}>
      <h4 className="component-title-sm text-uppercase">{quest.name}</h4>
      <p className="text-uppercase body-text fs-6">{quest.description}</p>
      <button href={quest.webUrl} className="btn btn-sm">Live Demo</button>
      <button href={quest.gitHubUrl} className="btn btn-sm">Github</button>
      <img src={quest.imageUrl} className="w-50"  alt={`${quest.name} application project screenshot`} />
    </div>
  ));

  return (
    <div>
      {quests}
    </div>
  );
}

export default QuestTemplate;
