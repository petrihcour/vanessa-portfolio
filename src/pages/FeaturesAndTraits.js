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
              In the enchanted landscape of technology, I've mastered the arcane
              languages of JavaScript, React, HTML, and CSS, crafting immersive
              virtual experiences that transcend the ordinary. My journey isn't
              just about writing code; it's a tale of leadership, problem-solving,
              and blending the art of frontend development with the wisdom gained
              from over five years in leadership roles.
            </p>
          </div>
          <div id="downtime" className="dnd-section">
            <h3>Downtime 🌄</h3>
            <p>
              In the realms beyond code, I'm Vanessa, a seeker of seamless
              experiences, a collaborator in the forge of innovation, and a
              traveler across the vast landscapes of the United States. My passion
              for enhancing technology to improve lives is matched only by my
              love for Dungeons & Dragons, live music, and the thrill of exploration.
            </p>
          </div>
          <div id="future" className="dnd-section">
            <h3>Future 🔮</h3>
            <p>
              Join me on this quest! If you're on a quest for a developer with
              technical prowess, a strong collaboration spirit, and a penchant for
              delivering impactful results, let's embark on this digital journey
              together. Connect with me on LinkedIn or explore my coding quests on
              GitHub. Together, we'll weave the magic of technology and create
              experiences that resonate across the digital realms!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesAndTraits;
