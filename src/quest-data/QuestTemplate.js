import React from "react";
import QuestData from "./QuestData";


function QuestTemplate() {
    const quest = QuestData.map((quest, index) => (
      <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}> 
      <img src={quest.imageUrl} className="d-block w-100" alt={quest.name} />
      </div>
    ));

    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {quest}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default QuestTemplate;