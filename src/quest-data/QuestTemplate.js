import React from "react";
import QuestData from "./QuestData";

function QuestTemplate() {
  // const quest =
  //   <hr />
  //   <div className="card-body">
  //     <h5 className="card-title text-center">{quest.name}</h5>
  //     <p className="card-text text-center">{quest.description}</p>
  //     <a href={quest.webUrl} className="btn btn-dark active" role="button" aria-pressed="true" >Link</a>

  //   </div>
  //   </div>
  // ));

  return (
    <div>
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {QuestData.map((quest, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
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
        {QuestData.map((quest, index) => (
          <div key={index} className="card-body">
            <h5 className="card-title">{quest.name}</h5>
            <p className="card-text">{quest.description}</p>
            <a href={quest.webUrl} className="btn btn-dark" target="_blank" rel="noreferrer">Button</a>
             </div>
        ))}
    </div>
    </div>
  );
}

export default QuestTemplate;
