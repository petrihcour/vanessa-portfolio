import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import QuestData from "./QuestData";
import "../styles/QuestTemplate.css"; // Import your CSS file


function QuestTemplate() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="m-3">
      {QuestData.map((quest, index) => (
        <div
          key={index}
          className={`quest-card ${expandedIndex === index ? "expanded" : ""} pe-3`}
          onClick={() => handleCardClick(index)}
        >
          <Card style={{ height: "" /* Set a fixed height for each card */ }}>
            <Card.Img variant="top" src={quest.imageUrl} />
            <Card.Body>
              <Card.Title>{quest.name}</Card.Title>
              <Card.Text>{quest.description}</Card.Text>
              <Button href={quest.webUrl} target="_blank" className="btn-sm m-1">Live Demo</Button>
              <Button href={quest.gitHubUrl} target="_blank" className="btn-sm m-1">Github</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default QuestTemplate;