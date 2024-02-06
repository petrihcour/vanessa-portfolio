import React from "react";
import "../styles/FeaturesAndTraits.css";

function FeaturesAndTraits() {
  return (
    <div id="features-traits" className="pt-5">
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
              I've found a home in the world of technology, where JavaScript,
              React, HTML, CSS, Bootstrap, Node.js, and Express are my comfort.
              I use these languages to create things that transcend the physical
              world, with equal focus on beauty and functionality. In my
              journey, there's a tale of perfect harmonies, blending my
              background in leadership, project management, and intricate
              problem solving with software development, resulting in a unique
              mixture of skills and perspective.
            </p>
          </div>
          <div id="downtime" className="dnd-section">
            <h3>Downtime 🌄</h3>
            <p>
              Beyond coding, I'm a traveler seeking adventure far
              and wide across the Earth. I love experiencing
              live music, eating delicious vegan food, and (if you can't tell)
              healthily obsessing over my favorite pastime—Dungeons &
              Dragons.
            </p>
          </div>
          <div id="future" className="dnd-section">
            <h3>Future 🔮</h3>
            <p>
              If you're looking for an adventurer with an admiration for technology, an excitement for building meaningful connections and collaboration, and a history of delivering impactful results, let's go on an adventure together! You can connect with me on LinkedIn, explore my coding quests on GitHub, or simply send me a message below. We'll weave the magic of technology together and create experiences that reverberate across the internet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesAndTraits;
