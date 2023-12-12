import React from "react";
import featuresAndTraits from "../images/featuresAndTraits.jpeg";

function FeaturesAndTraits() {
  return (
    <div className="p-3">
      <h2 className="text-center p-3">FEATURES & TRAITS</h2>
      <div className="card mx-auto text-bg-dark" style={{ maxWidth: "650px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={featuresAndTraits}
              className="card-img-top w-100 rounded-circle float-start mx-auto p-3"
              alt="Whimsical AI generation of Vanessa"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Greetings, Adventurer! I'm Vanessa, a Frontend Developer on a
                quest for digital excellence and collaborative magic. 🧙‍♀️✨
              </h5>
             
            </div>
          </div>
        </div>

        <ul className="list-group list-group-flush ">
          <li className="list-group-item text-bg-dark">
            <p>
              Professional <br />
              In the enchanted landscape of technology, I've mastered the arcane
              languages of JavaScript, React, HTML, and CSS, crafting immersive
              virtual experiences that transcend the ordinary. My journey isn't
              just about writing code; it's a tale of leadership,
              problem-solving, and blending the art of frontend development with
              the wisdom gained from over five years in leadership roles.
            </p>
          </li>
          <li className="list-group-item text-bg-dark">
            <p>
              Personal <br />
              In the realms beyond code, I'm Vanessa, a seeker of seamless
              experiences, a collaborator in the forge of innovation, and a
              traveler across the vast landscapes of the United States. My
              passion for enhancing technology to improve lives is matched only
              by my love for Dungeons & Dragons, live music, and the thrill of
              exploration.
            </p>
          </li>
          <li className="list-group-item text-bg-dark">
            <p>
              Future <br />
              Join me on this quest! If you're on a quest for a developer with
              technical prowess, a strong collaboration spirit, and a penchant
              for delivering impactful results, let's embark on this digital
              journey together. Connect with me on LinkedIn or explore my coding
              quests on GitHub. Together, we'll weave the magic of technology
              and create experiences that resonate across the digital realms!
              🌐🔮✨
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeaturesAndTraits;
