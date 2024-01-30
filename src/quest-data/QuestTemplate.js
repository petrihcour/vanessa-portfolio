import React, { useState } from "react";
import { Card } from "react-bootstrap";
import QuestData from "./QuestData";
import "../styles/QuestTemplate.css"; // Import your CSS file


function QuestTemplate() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="quest-container m-3">
      {QuestData.map((quest, index) => (
        <div
          key={index}
          className={`quest-card ${expandedIndex === index ? "expanded" : ""} pe-3`}
          onClick={() => handleCardClick(index)}
        >
          <Card style={{ height: "300px" /* Set a fixed height for each card */ }}>
            <Card.Img variant="top" src={quest.imageUrl} />
            <Card.Body>
              <Card.Title>{quest.name}</Card.Title>
              <Card.Text>{quest.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default QuestTemplate;