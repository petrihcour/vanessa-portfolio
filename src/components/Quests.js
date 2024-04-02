import React from "react";
import QuestTemplate from "../quest-data/QuestTemplate";

// need to fix how quests page looks and determine how i want to display my projects. it does not look good now
// do i want cards with each project? do i want a slide? make it smaller? 

function Quests() {

    return (
        <div id="quests" className="container">
            <h2 className="component-title text-uppercase p-3">QUESTS</h2>
            <p className="text-center pb-3 body-text text-uppercase">These quests are a large part of my adventures, showcasing my expertise through tangible examples of my work, each offering short narratives and links to code repositories and live demos. They serve as a testament to my ability to confront intricate challenges, adapt to different technologies, and efficiently guide these projects to completion.</p>
            <QuestTemplate />
        </div>
    )
}

export default Quests;