import React, { useState } from "react";
import QuestData from "./QuestData";

function QuestTemplate() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {QuestData.map((quest, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleSlideChange(index)}
            >
              <img
                src={quest.imageUrl}
                className="d-block w-100"
                alt={quest.name}
              />
            </div>
          ))}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
            onClick={() =>
              handleSlideChange(
                (activeIndex - 1 + QuestData.length) % QuestData.length
              )
            }
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
            onClick={() =>
              handleSlideChange((activeIndex + 1) % QuestData.length)
            }
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br />
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{QuestData[activeIndex].name}</h5>
          <p className="card-text">{QuestData[activeIndex].description}</p>
          <a
            href={QuestData[activeIndex].webUrl}
            className="btn btn-dark"
            target="_blank"
            rel="noreferrer"
          >
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuestTemplate;
