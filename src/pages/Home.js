import React from "react";
import vanessa from "../images/vanessa.jpeg"

//  small photo, name, class, level, subclass (software developer), brief introduction
// possible stats str, dex, wis, cha, int, con as buttons to click to read details below. (unsure about this part)

function Home() {
    return (
        <div>
            <img src={vanessa} alt="AI representation of Vanessa" className="w-75 p-4 rounded float-start" />
            <h1>Character Info:</h1>
            <h3>Name: Vanessa</h3>
            <h3>Class: Frontend Developer</h3>
            <h3>Background: Digital Artisan</h3>
            <h3>Alignment: Chaotic Creative</h3>

        </div>
    )
}

export default Home;