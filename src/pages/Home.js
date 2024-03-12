import React from "react";
import "../styles/Home.css";
import Typewriter from "../animations/Typewriter";
// different animation styles for accent:
// typewriter effect, transition is deleting the word and retyping the new word. 
// 


function Home() {
  const accentTexts = ["software engineer", "sorcerer", "frontend developer", "chaotic creative", "full-stack developer", "cat mom", "web developer"];

  return (
    <div id="home" className="d-flex m-sm-4">
      <div className="d-flex flex-column flex-sm-row justify-content-between">
        <div className="col-sm-6">
          <div className="home-accent accent">
           {accentTexts}
          </div>
          <h1 className="home-title text-uppercase">
            <div className="home-i-am">I am</div>
            <div className="home-title-vanessa">Vanessa</div>
          </h1>
        </div>
        <div className="home-text d-flex text-uppercase row align-content-end mb-sm-4">
          <p className="mt-2">
            <span className="text-end">I've found a home in technology,</span>
            where JavaScript, Node.js, React, HTML, CSS, and Bootstrap are my
            comfort. I love all things beautiful and functional. I love Dungeons
            & Dragons, unbearably spicy food, and my cats - Salmon, Sharky, and
            Fishy.
          </p>
          <div className="d-flex justify-content-end">
        <button
            type="button"
            className="btn btn-transparent border rounded-pill text-uppercase"
          >
            Contact Me
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
