import React from "react";
import home from "../images/home.jpeg"

//  small photo, name, class, level, subclass (software developer), brief introduction
// possible stats str, dex, wis, cha, int, con as buttons to click to read details below. (unsure about this part)

function Home() {
    return (
        <div className="p-3">
            <img src={home} alt="AI representation of Vanessa" className="w-50 rounded-circle float-start border border-secondary-subtle p-2" />
            <div className="">
            <h1>Character Info:</h1>
            <p>Name: Vanessa</p>
            <p>Class: Frontend Developer</p>
            <p>Background: Digital Artisan</p>
            <p>Alignment: Chaotic Creative</p>
            <p>Introduction: Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction Introduction  </p>
            </div>
        </div>
    )
}

export default Home;