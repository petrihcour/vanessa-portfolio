import React, { useState } from "react";
import QuestTemplate from "../quest-data/QuestTemplate";

function Quests() {
    const [projects, setProjects] = useState([]);

    return (
        <div>
            <h2 className="p-3 text-center">Quests</h2>
            <QuestTemplate />
        </div>
    )
}

export default Quests;