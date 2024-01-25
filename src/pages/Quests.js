import React from "react";
import QuestTemplate from "../quest-data/QuestTemplate";

// need to fix how quests page looks and determine how i want to display my projects. it does not look good now
// do i want cards with each project? do i want a slide? make it smaller? 

function Quests() {

    return (
        <div id="quests">
            <h2 className="p-3 text-center">Quests</h2>
            <QuestTemplate />
        </div>
    )
}

export default Quests;