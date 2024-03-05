import React from "react";
import vanessa from "../images/vanessa.jpeg";
import "../styles/FeaturesAndTraits.css";

function FeaturesAndTraits() {
  return (
    <div
      id="features-traits"
      className="container"
    >
      <div className="d-flex row md-w-75">
        <div className="d-flex row">
        <h2 className="features-traits-title">FEATURES & TRAITS</h2>
        <p className="accent d-flex">greetings, travelers</p>
        </div>
        <div className="text-uppercase body-text col-md-6 w-50">
        <p>
        I create things that transcend the physical world, with
          equal focus on beauty and functionality. In my journey, there's a tale
          of perfect harmonies, blending my background in leadership, project
          management, and intricate problem solving with software development,
          resulting in a unique mixture of skills and perspective.
        </p>
        <p>
          Beyond coding, I'm a traveler seeking adventure far and wide across
          the Earth. I love experiencing live music, eating delicious vegan
          food, and (if you can't tell) healthily obsessing over my favorite
          pastime—Dungeons & Dragons.
        </p>
        <p>
          If you're looking for an adventurer with an admiration for technology,
          an excitement for building meaningful connections and collaboration,
          and a history of delivering impactful results, let's go on an
          adventure together! You can connect with me on LinkedIn, explore my
          coding quests on GitHub, or simply send me a message below. We'll
          weave the magic of technology together and create experiences that
          reverberate across the internet.
        </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={vanessa}
            alt="AI representation of Vanessa"
            className="vanessa-image border border-5 rounded-circle rounded-bottom-0 h-75"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesAndTraits;
