import React from "react";
import "../styles/FeaturesAndTraits.css";

function FeaturesAndTraits() {
  return (
    <div id="features-traits">
      <div className="dnd-header">
        <h2 className="text-center">🌟 FEATURES & TRAITS 🌟</h2>
      </div>
      <div className="row features-traits-container dnd-content w-75 mx-auto">
        <div className="col-md-4 dnd-sidebar">
          <nav id="dnd-navbar">
            <ul>
              <li>
                <a href="#adventuring">Adventuring</a>
              </li>
              <li>
                <a href="#downtime">Downtime</a>
              </li>
              <li>
                <a href="#future">Future</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-md-8 dnd-text">
          <div id="adventuring" className="dnd-section">
            <h3>Adventuring 🗡️</h3>
            <p>
              In the enchanted matrix of technology, I've mastered the arcane
              languages of JavaScript, React, HTML, CSS, Node.js, and Express. I
              use these languages to help me create things that transcend the
              physical world. My journey isn't only about writing code; it's a
              tale of leadership, complex problem-solving, and blending the art
              of software development with wisdom gained from over five years in
              leadership roles.
            </p>
          </div>
          <div id="downtime" className="dnd-section">
            <h3>Downtime 🌄</h3>
            <p>
              Beyond the realms of code, I'm a traveler looking to adventure far
              and wide throughout the lands of our Earth. I love experiencing live music, eating delicious vegan food, and (if you can't tell) healthily obsessing over my favorite past time, Dungeons & Dragons.
            </p>
          </div>
          <div id="future" className="dnd-section">
            <h3>Future 🔮</h3>
            <p>
              Join me on this quest! If you're looking for an adventurer with a
              love for technolody, strong collaboration spirit, and a penchant
              for delivering impactful results, let's embark on an adventure
              together. Connect with me on LinkedIn, explore my coding quests on
              GitHub, or simply send me a message below. Together, we'll weave
              the magic of technology and create experiences that resonate
              across the digital realms!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesAndTraits;
